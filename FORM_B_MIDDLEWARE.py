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


# === PATH HASHING FOR LOOP DETECTION ===

class EnhancedPathHasher:
    """SHA-256 fingerprints of problem+approach combinations prevent repeated failed attempts."""
    
    def __init__(self, db_connection):
        self.db = db_connection
        self._init_db()
    
    def _init_db(self):
        self.db.execute("""
            CREATE TABLE IF NOT EXISTS path_hashes (
                hash TEXT PRIMARY KEY,
                problem_text TEXT,
                approach_text TEXT,
                result TEXT,
                timestamp REAL,
                negative_weight REAL
            )
        """)
        self.db.commit()
    
    def compute_hash(self, problem: str, approach: str, context: str = "") -> str:
        """Compute SHA-256 hash of problem+approach+context."""
        raw = f"{problem}:{approach}:{context}"
        return hashlib.sha256(raw.encode()).hexdigest()
    
    def check_and_block(self, problem: str, approach: str, context: str = "") -> Dict:
        """Check if this path has failed before. Return block status."""
        path_hash = self.compute_hash(problem, approach, context)
        
        cursor = self.db.execute(
            "SELECT result, negative_weight FROM path_hashes WHERE hash = ?",
            (path_hash,)
        )
        row = cursor.fetchone()
        
        if row:
            result, weight = row
            if result == 'failure':
                return {
                    'blocked': True,
                    'hash': path_hash,
                    'reason': f'Path previously failed with negative weight {weight}',
                    'action': 'INJECT_SUPERPOWER'
                }
        
        return {
            'blocked': False,
            'hash': path_hash,
            'reason': 'Path not in failed_paths',
            'action': 'PROCEED'
        }
    
    def record_attempt(self, problem: str, approach: str, result: str, context: str = ""):
        """Record a path attempt with its result."""
        path_hash = self.compute_hash(problem, approach, context)
        negative_weight = 1.0 if result == 'failure' else 0.0
        
        self.db.execute(
            "INSERT OR REPLACE INTO path_hashes (hash, problem_text, approach_text, result, timestamp, negative_weight) VALUES (?, ?, ?, ?, ?, ?)",
            (path_hash, problem, approach, result, time.time(), negative_weight)
        )
        self.db.commit()


# === TEST GENERATION & EXECUTION LOOP ===

class TestGenerationLoop:
    """Automated test-driven development with Maker-Tester-Debugger trinity."""
    
    def __init__(self, max_iterations: int = 5):
        self.max_iterations = max_iterations
        self.current_iteration = 0
        self.test_results = []
    
    def run_loop(self, initial_code: str) -> Dict:
        """Run the Maker-Tester-Debugger loop."""
        code = initial_code
        iteration = 0
        
        while iteration < self.max_iterations:
            iteration += 1
            
            # Maker generates code (already provided)
            maker_output = code
            
            # Tester writes and runs tests
            tester_output = self._run_tests(maker_output)
            
            if tester_output['all_passed']:
                return {
                    'success': True,
                    'iterations': iteration,
                    'final_code': maker_output,
                    'test_results': tester_output
                }
            
            # Debugger analyzes failures
            debugger_output = self._analyze_failures(tester_output)
            
            # Maker applies fixes
            code = self._apply_fixes(maker_output, debugger_output)
            
            self.test_results.append({
                'iteration': iteration,
                'tests_passed': tester_output['passed'],
                'tests_failed': tester_output['failed'],
                'fixes_applied': len(debugger_output['fixes'])
            })
        
        return {
            'success': False,
            'iterations': iteration,
            'final_code': code,
            'test_results': self.test_results
        }
    
    def _run_tests(self, code: str) -> Dict:
        """Simulate test execution (placeholder for actual test runner)."""
        # In production, this would actually run pytest/unittest/jest
        return {
            'all_passed': False,
            'passed': 7,
            'failed': 3,
            'failures': [
                {'test': 'test_edge_case_1', 'error': 'AssertionError: expected 5, got 4'},
                {'test': 'test_edge_case_2', 'error': 'TypeError: NoneType'},
                {'test': 'test_edge_case_3', 'error': 'IndexError: list index out of range'}
            ]
        }
    
    def _analyze_failures(self, test_output: Dict) -> Dict:
        """Analyze test failures and propose fixes."""
        fixes = []
        for failure in test_output['failures']:
            if 'AssertionError' in failure['error']:
                fixes.append({'type': 'logic_fix', 'description': 'Fix off-by-one error'})
            elif 'TypeError' in failure['error']:
                fixes.append({'type': 'null_check', 'description': 'Add null check'})
            elif 'IndexError' in failure['error']:
                fixes.append({'type': 'bounds_check', 'description': 'Add bounds checking'})
        
        return {'fixes': fixes}
    
    def _apply_fixes(self, code: str, debugger_output: Dict) -> str:
        """Apply fixes to code (placeholder for actual code modification)."""
        # In production, this would actually modify the code
        return code + "\n# Fixes applied"


# === WEIGHTED 3-MIND COUNCIL VOTING ===

class ThreeMindCouncil:
    """Three specialized minds vote on resolution paths with weighted voting."""
    
    def __init__(self):
        self.minds = {
            'analytical': {'weight': 0.40, 'expertise': 'Logic, data analysis'},
            'creative': {'weight': 0.35, 'expertise': 'Lateral thinking, innovation'},
            'critical': {'weight': 0.25, 'expertise': 'Risk assessment, edge cases'}
        }
        self.consensus_threshold = 0.75
    
    def vote(self, paths: List[Dict]) -> Dict:
        """Each mind votes on paths, return weighted winner."""
        if not paths:
            return {'winner': None, 'score': 0}
        
        # Simulate voting (in production, each mind would be a separate AI agent)
        votes = {}
        for path in paths:
            path_id = path['id']
            votes[path_id] = {
                'analytical': self._analytical_vote(path),
                'creative': self._creative_vote(path),
                'critical': self._critical_vote(path)
            }
        
        # Calculate weighted scores
        scores = {}
        for path_id, mind_votes in votes.items():
            score = (
                mind_votes['analytical'] * self.minds['analytical']['weight'] +
                mind_votes['creative'] * self.minds['creative']['weight'] +
                mind_votes['critical'] * self.minds['critical']['weight']
            )
            scores[path_id] = score
        
        # Find winner
        winner_id = max(scores, key=scores.get)
        winner_score = scores[winner_id]
        
        # Check consensus
        consensus = winner_score / max(scores.values()) if max(scores.values()) > 0 else 0
        
        return {
            'winner': winner_id,
            'score': winner_score,
            'consensus': consensus,
            'all_scores': scores
        }
    
    def _analytical_vote(self, path: Dict) -> float:
        """Analytical mind votes based on logic and data."""
        return path.get('logic_score', 0.7)
    
    def _creative_vote(self, path: Dict) -> float:
        """Creative mind votes based on novelty and innovation."""
        return path.get('creativity_score', 0.6)
    
    def _critical_vote(self, path: Dict) -> float:
        """Critical mind votes based on risk assessment."""
        return path.get('safety_score', 0.8)


# === HARDWARE-AWARE RESOURCE ORCHESTRATION ===

class HardwareOrchestrator:
    """Water-flow balancer manages 4 memory tiers with predictive offload."""
    
    def __init__(self, vram_budget: float = 3.6):
        self.vram_budget = vram_budget  # GB
        self.current_vram_usage = 0.0
        self.tiers = {
            'vram': {'capacity': vram_budget, 'speed': 900},  # GB/s
            'ram': {'capacity': 32.0, 'speed': 50},
            'nvme': {'capacity': 1000.0, 'speed': 3.5},
            'cpu': {'capacity': float('inf'), 'speed': 10}
        }
    
    def allocate(self, data_size: float, priority: str = 'normal') -> str:
        """Allocate data to appropriate memory tier."""
        # Check if VRAM has space
        if self.current_vram_usage + data_size <= self.vram_budget:
            self.current_vram_usage += data_size
            return 'vram'
        
        # Predictive offload: move cold data to RAM
        if self._predict_offload_needed():
            self._offload_to_ram(data_size * 0.5)
        
        # Fall back to RAM
        return 'ram'
    
    def _predict_offload_needed(self) -> bool:
        """Predict if offload is needed in next 500ms."""
        # Placeholder for LSTM prediction model
        return self.current_vram_usage > (self.vram_budget * 0.9)
    
    def _offload_to_ram(self, size: float):
        """Offload data from VRAM to RAM."""
        self.current_vram_usage -= size
        # In production, this would actually move data
    
    def cold_boot_from_nvme(self, file_path: str) -> any:
        """Memory-map file from NVMe for zero-copy access."""
        import mmap
        # In production, this would mmap the file
        return f"mmap({file_path})"


# === COMPILER-IN-THE-LOOP VALIDATION ===

class CompilerInLoop:
    """Runs actual build/test commands, parses errors, applies fixes."""
    
    def __init__(self, max_fixes: int = 3):
        self.max_fixes = max_fixes
        self.attempts = []
    
    def validate_and_fix(self, code: str, language: str = 'python') -> Dict:
        """Run build/test, parse errors, apply fixes."""
        attempt = 0
        
        while attempt < self.max_fixes:
            attempt += 1
            
            # Run build/test command
            result = self._run_command(code, language)
            
            if result['success']:
                return {
                    'success': True,
                    'attempts': attempt,
                    'final_code': code,
                    'history': self.attempts
                }
            
            # Parse errors
            errors = self._parse_errors(result['output'], language)
            
            # Analyze and propose fixes
            fixes = self._propose_fixes(errors)
            
            # Apply fixes
            code = self._apply_fixes(code, fixes)
            
            self.attempts.append({
                'attempt': attempt,
                'errors': errors,
                'fixes': fixes
            })
        
        return {
            'success': False,
            'attempts': attempt,
            'final_code': code,
            'history': self.attempts
        }
    
    def _run_command(self, code: str, language: str) -> Dict:
        """Run build/test command (placeholder)."""
        # In production, this would actually run subprocess
        commands = {
            'python': 'pytest',
            'rust': 'cargo build',
            'javascript': 'npm test',
            'go': 'go test',
            'java': 'mvn test'
        }
        
        # Simulate failure on first attempt
        if len(self.attempts) == 0:
            return {
                'success': False,
                'output': f"Error: test failed at line 42\nAssertionError: expected 5, got 4"
            }
        
        return {'success': True, 'output': 'All tests passed'}
    
    def _parse_errors(self, output: str, language: str) -> List[Dict]:
        """Parse error output (placeholder for regex parsers)."""
        errors = []
        if 'AssertionError' in output:
            errors.append({'type': 'assertion', 'line': 42, 'message': 'expected 5, got 4'})
        return errors
    
    def _propose_fixes(self, errors: List[Dict]) -> List[Dict]:
        """Propose fixes for errors."""
        fixes = []
        for error in errors:
            if error['type'] == 'assertion':
                fixes.append({'type': 'logic_fix', 'description': 'Fix off-by-one error'})
        return fixes
    
    def _apply_fixes(self, code: str, fixes: List[Dict]) -> str:
        """Apply fixes to code (placeholder)."""
        return code + "\n# Applied fixes"


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
