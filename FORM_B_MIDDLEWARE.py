#!/usr/bin/env python3
"""
Rubbi-X v4.0 — Middleware Architecture
Local daemon that intercepts prompts, manages R1/R2 databases, enforces path hashing.

Usage:
    python FORM_B_MIDDLEWARE.py

This middleware sits between you and your AI, automatically managing the Graphify cube.
"""

import hashlib
import sqlite3
import json
import time
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Tuple
from datetime import datetime
from enum import Enum
import numpy as np


# === DATA STRUCTURES ===

class NoteResult(Enum):
    SUCCESS = "success"
    FAILURE = "failure"
    PARTIAL = "partial"
    LOOP_DETECTED = "loop_detected"


@dataclass
class AtomicNote:
    id: str
    timestamp: float
    node_id: str
    action: str
    result: NoteResult
    observation: str
    lesson: str
    path_hash: str
    dimension: str
    blocked: bool
    lateral_bridge: Optional[str] = None
    confidence_score: float = 0.0
    version: int = 1
    fingerprint: str = ""


@dataclass
class GraphifyNode:
    id: str
    dimension: str
    label: str
    atomic_notes: List[AtomicNote] = field(default_factory=list)
    visited_paths: List[str] = field(default_factory=list)
    loop_count: int = 0
    is_blocked: bool = False
    confidence: float = 0.0
    predicted_loop_risk: float = 0.0
    negative_weights: Dict[str, float] = field(default_factory=dict)


@dataclass
class GraphifyInstance:
    id: str
    label: str
    instance_type: str  # "persistent" (R1) or "ephemeral" (R2)
    nodes: Dict[str, GraphifyNode] = field(default_factory=dict)
    status: str = "active"
    created_at: float = 0.0
    backup_count: int = 0


# === PATH HASHER ===

class PathHasher:
    """Generates unique fingerprints for resolution paths."""
    
    @staticmethod
    def hash_path(node_id: str, action: str, context: str) -> str:
        raw = f"{node_id}:{action}:{context}"
        return hashlib.sha256(raw.encode()).hexdigest()[:16]
    
    @staticmethod
    def predict_loop_risk(current_hash: str, visited_hashes: List[str]) -> float:
        """Predicts loop risk BEFORE the step happens."""
        if not visited_hashes:
            return 0.0
        
        similarity_scores = []
        for visited in visited_hashes:
            distance = sum(c1 != c2 for c1, c2 in zip(current_hash, visited))
            similarity = 1.0 - (distance / len(current_hash))
            similarity_scores.append(similarity)
        
        max_similarity = max(similarity_scores) if similarity_scores else 0.0
        return min(100.0, max_similarity * 100)


# === PATTERN RECOGNITION ENGINE ===

class PatternRecognitionEngine:
    """GPU-accelerated pattern detection across atomic notes."""
    
    def __init__(self, db_connection):
        self.db = db_connection
        self.gpu_available = self._check_gpu()
    
    def _check_gpu(self) -> bool:
        try:
            import cupy as cp
            return True
        except ImportError:
            return False
    
    def detect_patterns(self, atomic_notes: List[Dict]) -> List[Dict]:
        """Detect patterns using GPU-accelerated similarity matching."""
        if not atomic_notes:
            return []
        
        features = self._extract_features(atomic_notes)
        similarity_matrix = self._compute_similarity_gpu(features)
        patterns = self._cluster_patterns(similarity_matrix, atomic_notes)
        
        return patterns
    
    def _extract_features(self, notes: List[Dict]) -> np.ndarray:
        features = []
        for note in notes:
            node_hash = int(hashlib.md5(note['node_id'].encode()).hexdigest()[:8], 16)
            action_hash = int(hashlib.md5(note['action'].encode()).hexdigest()[:8], 16)
            confidence = note.get('confidence_score', 0.0)
            result_code = {'success': 1.0, 'failure': 0.0, 'partial': 0.5, 'loop_detected': -1.0}.get(note['result'], 0.0)
            features.append([node_hash, action_hash, confidence, result_code])
        
        return np.array(features, dtype=np.float32)
    
    def _compute_similarity_gpu(self, features: np.ndarray) -> np.ndarray:
        if self.gpu_available:
            import cupy as cp
            features_gpu = cp.array(features)
            norms = cp.linalg.norm(features_gpu, axis=1, keepdims=True)
            features_normalized = features_gpu / (norms + 1e-8)
            similarity = cp.dot(features_normalized, features_normalized.T)
            return cp.asnumpy(similarity)
        else:
            norms = np.linalg.norm(features, axis=1, keepdims=True)
            features_normalized = features / (norms + 1e-8)
            return np.dot(features_normalized, features_normalized.T)
    
    def _cluster_patterns(self, similarity_matrix: np.ndarray, notes: List[Dict], threshold: float = 0.85) -> List[Dict]:
        n = len(notes)
        visited = set()
        patterns = []
        
        for i in range(n):
            if i in visited:
                continue
            
            cluster = [i]
            visited.add(i)
            
            for j in range(i + 1, n):
                if j not in visited and similarity_matrix[i, j] > threshold:
                    cluster.append(j)
                    visited.add(j)
            
            if len(cluster) >= 2:
                pattern_notes = [notes[idx] for idx in cluster]
                pattern = {
                    'pattern_id': f"pattern_{len(patterns)}",
                    'notes': pattern_notes,
                    'confidence': float(np.mean([similarity_matrix[i, j] for i in cluster for j in cluster if i != j])),
                    'type': self._classify_pattern(pattern_notes),
                    'frequency': len(cluster)
                }
                patterns.append(pattern)
        
        return patterns
    
    def _classify_pattern(self, notes: List[Dict]) -> str:
        success_count = sum(1 for n in notes if n['result'] == 'success')
        failure_count = sum(1 for n in notes if n['result'] in ['failure', 'loop_detected'])
        
        if success_count > failure_count * 2:
            return 'success_pattern'
        elif failure_count > success_count * 2:
            return 'failure_pattern'
        else:
            return 'neutral_pattern'


# === DETERMINISTIC SCORER ===

class DeterministicScorer:
    """Computes deterministic scores for resolution quality."""
    
    def __init__(self, db_connection):
        self.db = db_connection
    
    def compute_resolution_confidence(self, path: List[Dict], atomic_notes: List[Dict]) -> float:
        """RCI = (success_rate × 0.4) + (pattern_match × 0.3) + (agent_consensus × 0.3)"""
        success_count = sum(1 for n in atomic_notes if n['result'] == 'success')
        success_rate = success_count / len(atomic_notes) if atomic_notes else 0.0
        pattern_match = 0.75  # Placeholder
        agent_consensus = 0.85  # Placeholder
        
        rci = (success_rate * 0.4) + (pattern_match * 0.3) + (agent_consensus * 0.3)
        return min(100.0, rci * 100)
    
    def compute_complexity_score(self, problem_text: str) -> float:
        """Compute complexity score (0-100) using 6 deterministic metrics."""
        tokens = problem_text.split()
        token_count = len(tokens)
        
        # Token Complexity (TC)
        tc = min(100, (token_count / 1000) * 100)
        
        # Entity Density (ED) - simplified
        entity_count = len(set(tokens))
        ed = min(100, (entity_count / 20) * 100)
        
        # Dependency Depth (DD) - placeholder
        dd = 30.0
        
        # Ambiguity Score (AS) - placeholder
        as_score = 20.0
        
        # Domain Specificity (DS) - placeholder
        ds = 40.0
        
        # Historical Resolution Time (HRT) - placeholder
        hrt = 50.0
        
        # Final Complexity Score
        cs = (tc * 0.15) + (ed * 0.20) + (dd * 0.25) + (as_score * 0.10) + (ds * 0.15) + (hrt * 0.15)
        
        return min(100.0, cs)


# === RUBBI-X MIDDLEWARE ===

class RubbiXMiddleware:
    """Local daemon that intercepts prompts, manages R1/R2, enforces path hashing."""
    
    def __init__(self, project_id: str):
        self.project_id = project_id
        self.db = sqlite3.connect(f"rubbix_{project_id}.db")
        self._init_db()
        self.r1: Optional[GraphifyInstance] = self._load_or_create_r1()
        self.active_r2s: Dict[str, GraphifyInstance] = {}
        self.hasher = PathHasher()
        self.pattern_engine = PatternRecognitionEngine(self.db)
        self.scorer = DeterministicScorer(self.db)
    
    def _init_db(self):
        self.db.execute("""
            CREATE TABLE IF NOT EXISTS atomic_notes (
                id TEXT PRIMARY KEY,
                instance_id TEXT,
                node_id TEXT,
                action TEXT,
                result TEXT,
                path_hash TEXT,
                fingerprint TEXT,
                confidence REAL,
                blocked INTEGER,
                timestamp REAL,
                lesson TEXT
            )
        """)
        self.db.execute("""
            CREATE TABLE IF NOT EXISTS path_hashes (
                hash TEXT PRIMARY KEY,
                instance_id TEXT,
                node_id TEXT,
                timestamp REAL
            )
        """)
        self.db.execute("""
            CREATE TABLE IF NOT EXISTS graphify_instances (
                id TEXT PRIMARY KEY,
                instance_type TEXT,
                status TEXT,
                created_at REAL,
                backup_count INTEGER,
                state_json TEXT
            )
        """)
        self.db.commit()
    
    def _load_or_create_r1(self) -> GraphifyInstance:
        cursor = self.db.execute(
            "SELECT id, state_json FROM graphify_instances WHERE instance_type = 'persistent' AND status = 'active' LIMIT 1"
        )
        row = cursor.fetchone()
        if row:
            return GraphifyInstance(
                id=row[0],
                label="Rubbi-X R1 (Persistent)",
                instance_type="persistent",
                status="active"
            )
        
        r1 = GraphifyInstance(
            id=f"r1_{self.project_id}",
            label="Rubbi-X R1 (Persistent)",
            instance_type="persistent",
            created_at=datetime.now().timestamp()
        )
        self._save_instance(r1)
        return r1
    
    def spawn_r2(self, problem_description: str) -> GraphifyInstance:
        r2_id = f"r2_{datetime.now().timestamp()}"
        r2 = GraphifyInstance(
            id=r2_id,
            label=f"Rubbi-X R2 (Ephemeral) — {problem_description[:50]}",
            instance_type="ephemeral",
            created_at=datetime.now().timestamp()
        )
        self.active_r2s[r2_id] = r2
        self._save_instance(r2)
        return r2
    
    def write_atomic_note(self, instance: GraphifyInstance, note: AtomicNote):
        note.fingerprint = hashlib.md5(
            f"{note.node_id}:{note.action}:{note.result.value}".encode()
        ).hexdigest()
        
        self.db.execute(
            "INSERT INTO atomic_notes (id, instance_id, node_id, action, result, path_hash, fingerprint, confidence, blocked, timestamp, lesson) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (note.id, instance.id, note.node_id, note.action, note.result.value, note.path_hash, note.fingerprint, note.confidence_score, int(note.blocked), note.timestamp, note.lesson)
        )
        self.db.execute(
            "INSERT OR IGNORE INTO path_hashes (hash, instance_id, node_id, timestamp) VALUES (?, ?, ?, ?)",
            (note.path_hash, instance.id, note.node_id, note.timestamp)
        )
        self.db.commit()
        
        if note.node_id in instance.nodes:
            node = instance.nodes[note.node_id]
            node.atomic_notes.append(note)
            node.visited_paths.append(note.path_hash)
            if note.result == NoteResult.LOOP_DETECTED:
                node.loop_count += 1
                node.is_blocked = True
    
    def check_loop(self, instance: GraphifyInstance, node_id: str, action: str, context: str) -> Dict:
        path_hash = self.hasher.hash_path(node_id, action, context)
        
        cursor = self.db.execute(
            "SELECT hash FROM path_hashes WHERE node_id = ? AND instance_id = ?",
            (node_id, instance.id)
        )
        visited = [row[0] for row in cursor.fetchall()]
        
        risk = self.hasher.predict_loop_risk(path_hash, visited)
        
        if path_hash in visited:
            return {
                "loop_detected": True,
                "risk_score": 100.0,
                "action": "BLOCK_AND_INJECT_SUPERPOWER",
                "path_hash": path_hash,
                "visit_count": visited.count(path_hash)
            }
        
        if risk > 70:
            return {
                "loop_detected": False,
                "risk_score": risk,
                "action": "PREDICTIVE_BLOCK",
                "path_hash": path_hash,
                "recommendation": "Consider alternative approach — high similarity to failed paths"
            }
        
        return {
            "loop_detected": False,
            "risk_score": risk,
            "action": "PROCEED",
            "path_hash": path_hash
        }
    
    def backup_r1(self):
        self.r1.backup_count += 1
        self._save_instance(self.r1)
    
    def merge_r2_to_r1(self, r2_id: str):
        if r2_id not in self.active_r2s:
            return
        
        r2 = self.active_r2s[r2_id]
        
        cursor = self.db.execute(
            "SELECT * FROM atomic_notes WHERE instance_id = ? AND result = 'success'",
            (r2_id,)
        )
        for row in cursor.fetchall():
            self.db.execute(
                "INSERT INTO atomic_notes (id, instance_id, node_id, action, result, path_hash, fingerprint, confidence, blocked, timestamp, lesson) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (f"{row[0]}_merged", self.r1.id, row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10])
            )
        
        r2.status = "deleted"
        self._save_instance(r2)
        del self.active_r2s[r2_id]
        
        self.backup_r1()
    
    def _save_instance(self, instance: GraphifyInstance):
        state_json = json.dumps({
            "label": instance.label,
            "nodes": {k: {"dimension": v.dimension, "confidence": v.confidence, "loop_count": v.loop_count} for k, v in instance.nodes.items()},
            "backup_count": instance.backup_count
        })
        self.db.execute(
            "INSERT OR REPLACE INTO graphify_instances (id, instance_type, status, created_at, backup_count, state_json) VALUES (?, ?, ?, ?, ?, ?)",
            (instance.id, instance.instance_type, instance.status, instance.created_at, instance.backup_count, state_json)
        )
        self.db.commit()
    
    def get_end_of_session_prompt(self) -> str:
        node_count = len(self.r1.nodes)
        cursor = self.db.execute(
            "SELECT COUNT(*) FROM atomic_notes WHERE instance_id = ?",
            (self.r1.id,)
        )
        note_count = cursor.fetchone()[0]
        return f"🎲 Rubbi-X R1 Status: Active. Contains {node_count} nodes, {note_count} atomic notes. This is your project's memory map — it remembers every resolution. Keep it for future sessions? [Y/n]"


# === PROMPT INTERCEPTOR ===

class PromptInterceptor:
    """Intercepts user prompts, injects Rubbi-X state, enforces protocols."""
    
    def __init__(self, middleware: RubbiXMiddleware):
        self.middleware = middleware
    
    def intercept(self, user_prompt: str) -> str:
        r1_state = self.middleware.r1
        problem_type = self._classify_problem(user_prompt)
        complexity_score = self.middleware.scorer.compute_complexity_score(user_prompt)
        
        enhanced = f"""
# RUBBI-X v4.0 COGNITIVE FRAMEWORK

You are now operating under the Rubbi-X v4.0 framework. Apply all protocols.

## CURRENT CONTEXT
- Project: {self.middleware.project_id}
- R1 Status: Active ({len(r1_state.nodes)} nodes, {r1_state.backup_count} backups)
- Problem Type: {problem_type}
- Complexity Score: {complexity_score:.1f}/100
- Complexity Tier: {'Tier 1 (Simple)' if complexity_score < 25 else 'Tier 2 (Medium)' if complexity_score < 50 else 'Tier 3 (Complex)' if complexity_score < 75 else 'Tier 4 (Ultra-Complex)'}

## USER REQUEST
{user_prompt}

## INSTRUCTIONS
Apply Rubbi-X v4.0 framework. Decompose into Graphify cube. Write atomic notes. Detect loops. Resolve with surgical precision.
"""
        return enhanced
    
    def _classify_problem(self, prompt: str) -> str:
        if any(word in prompt.lower() for word in ["code", "bug", "function", "error", "implement"]):
            return "coding"
        if any(word in prompt.lower() for word in ["trade", "stock", "buy", "sell", "market"]):
            return "trading"
        return "general"


# === MAIN ===

if __name__ == "__main__":
    print("🎲 Rubbi-X v4.0 Middleware — Starting...")
    
    middleware = RubbiXMiddleware("demo_project")
    interceptor = PromptInterceptor(middleware)
    
    print("✅ Middleware initialized")
    print(f"✅ R1 loaded: {middleware.r1.label}")
    print(f"✅ Pattern Engine: {'GPU-accelerated' if middleware.pattern_engine.gpu_available else 'CPU fallback'}")
    
    print("\n📝 Example usage:")
    print("   middleware.spawn_r2('Fix React useEffect loop')")
    print("   middleware.write_atomic_note(r2, note)")
    print("   middleware.check_loop(r2, 'node-0', 'try approach A', 'context')")
    print("   middleware.merge_r2_to_r1(r2_id)")
    
    print("\n🏁 End-of-session prompt:")
    print(f"   {middleware.get_end_of_session_prompt()}")
    
    print("\n✅ Rubbi-X v4.0 Middleware ready")
