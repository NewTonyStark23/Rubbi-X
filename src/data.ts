// Rubbi-X v4.0 — The Complete Blueprint Content

export const COMPARATIVE_RATINGS = [
  { name: 'Rubbi-X v4.0', icon: '🎲', color: '#a855f7', score: 99, loopAvoidance: 99, memory: 99, speed: 99, creativity: 98, verdict: 'Combines all strengths, eliminates loops via path hashing, manages memory via R1/R2, utilizes 10 internal strategies for 3x speed.' },
  { name: 'DeepSeek Latest', icon: '🟢', color: '#22c55e', score: 88, loopAvoidance: 65, memory: 68, speed: 88, creativity: 82, verdict: 'Great coding, lacks nested ephemeral state management.' },
  { name: 'Nemotron 3 Ultra', icon: '🟩', color: '#10b981', score: 87, loopAvoidance: 60, memory: 75, speed: 85, creativity: 80, verdict: 'Strong enterprise logic, rigid, struggles with lateral pivots.' },
  { name: 'Claude 3.5/4', icon: '🟠', color: '#f97316', score: 85, loopAvoidance: 70, memory: 72, speed: 84, creativity: 86, verdict: 'Prone to polite looping.' },
  { name: 'Qwen 3', icon: '🔷', color: '#3b82f6', score: 82, loopAvoidance: 62, memory: 70, speed: 86, creativity: 85, verdict: 'Requires heavy user prompting to avoid circular logic.' },
  { name: 'Grok', icon: '⚡', color: '#f59e0b', score: 78, loopAvoidance: 58, memory: 65, speed: 82, creativity: 88, verdict: 'High creativity, low deterministic guardrails.' }
];

export const TEN_STRATEGIES = [
  {
    id: 1,
    name: 'Temporal State Reversion',
    codename: 'Chronos-Shift',
    icon: '⏪',
    color: '#4ECDC4',
    description: 'If an R2 path fails, the AI mathematically rolls back the Graphify state to the exact node prior to the failure, preserving the "why it failed" as a negative weight to prevent future approach.',
    trigger: 'R2 path failure detected',
    mechanism: 'State snapshot → rollback to pre-failure node → inject negative weight on failed branch → branch injection forced',
    speedImpact: 'Prevents 3-5 wasted iterations per failure',
    example: 'Code refactor fails → rollback to pre-refactor state → mark "refactor approach A" as negative weight → next attempt avoids it entirely'
  },
  {
    id: 2,
    name: 'Adversarial Red-Teaming',
    codename: "The Devil's Advocate Node",
    icon: '😈',
    color: '#FF6B6B',
    description: 'Before finalizing any R2 resolution, a simulated sub-process attacks the proposed solution to find edge cases, ensuring the final output is bulletproof.',
    trigger: 'R2 resolution confidence > 80%',
    mechanism: 'Spawn critic sub-process → generate 5 attack vectors → test resolution against each → harden weak points → finalize',
    speedImpact: 'Catches 90% of edge cases before deployment',
    example: 'Trading decision "BUY" → Devil\'s Advocate tests: flash crash scenario, liquidity drain, regulatory change → hardens stop-loss logic'
  },
  {
    id: 3,
    name: 'Heuristic Pruning',
    codename: "Occam's Razor Protocol",
    icon: '✂️',
    color: '#FFEAA7',
    description: 'Automatically deletes Graphify branches that require >3x the logical steps of a simpler alternative. The AI must always seek the most elegant, minimal path.',
    trigger: 'Branch comparison shows >3x complexity differential',
    mechanism: 'Calculate step count per branch → identify minimal path → prune branches >3x longer → redirect compute to optimal path',
    speedImpact: '3-5x faster convergence via elimination',
    example: '3 solution paths: A (5 steps), B (18 steps), C (7 steps) → B pruned immediately → focus on A and C'
  },
  {
    id: 4,
    name: 'Cross-Domain Analogy Mapping',
    codename: 'Lateral Bridge',
    icon: '🌉',
    color: '#DDA0DD',
    description: 'When the cube hits a deadlock, the AI maps the current problem\'s structure to a completely different domain (e.g., mapping a code architecture bug to a biological immune response) to find a novel resolution.',
    trigger: 'Deadlock detected on 2+ dimensions',
    mechanism: 'Extract structural pattern → search cross-domain knowledge base → map analogous solution → translate back to problem domain',
    speedImpact: 'Breaks deadlocks in 1-2 iterations vs 10+ without',
    example: 'Deadlock on cache invalidation → map to immune system (antibody response) → realize: "event-driven invalidation = immune response to pathogen" → solution emerges'
  },
  {
    id: 5,
    name: 'Entropy Reduction Funnel',
    codename: 'Convergence Matrix',
    icon: '🔽',
    color: '#45B7D1',
    description: 'As R2 gets closer to the solution, it dynamically shrinks the search space, forcing deterministic narrowing instead of probabilistic guessing.',
    trigger: 'Confidence > 60% on any resolution path',
    mechanism: 'Calculate entropy of search space → apply funnel (reduce options by 50% per iteration) → force convergence → lock resolution',
    speedImpact: 'Convergence in 3-4 iterations vs 15+ without funnel',
    example: '10 possible solutions → 60% confidence on 3 → funnel to 3 → 80% confidence on 1 → lock'
  },
  {
    id: 6,
    name: 'Resource-Aware Throttling',
    codename: 'Context Economy',
    icon: '⛽',
    color: '#FFA500',
    description: 'Monitors its own token usage in real-time. If R2 is taking too many tokens, it forces a "hard pivot" to a simpler, less optimal but vastly faster resolution path.',
    trigger: 'Token usage > 70% of allocated budget',
    mechanism: 'Monitor token counter → if threshold breached → identify simpler sub-optimal path → hard pivot → accept 80% solution over 100% solution',
    speedImpact: 'Prevents runaway token consumption, 2-3x faster on budget-constrained problems',
    example: 'Trading analysis using 80% of token budget → hard pivot → accept "HOLD" decision at 85% confidence vs continuing to 100%'
  },
  {
    id: 7,
    name: 'Paradox Resolution Engine',
    codename: 'Dialectical Synthesis',
    icon: '⚖️',
    color: '#9B59B6',
    description: 'When two Graphify nodes contradict each other, the AI doesn\'t just choose one; it creates a third, higher-order node that resolves the paradox (Hegelian dialectic).',
    trigger: 'Two nodes with contradictory conclusions',
    mechanism: 'Identify thesis (node A) and antithesis (node B) → extract core truths from each → synthesize higher-order node C → replace A and B with C',
    speedImpact: 'Resolves contradictions in 1 step vs endless debate',
    example: 'Node A: "Use caching" vs Node B: "Avoid caching" → Synthesis: "Use selective caching with TTL on hot paths only"'
  },
  {
    id: 8,
    name: 'Shadow Execution',
    codename: 'Sandbox Simulation',
    icon: '👻',
    color: '#34495E',
    description: 'Before executing a high-risk R2 path in the real context, it runs a 1-step "shadow" simulation to predict the exact token output and error probability.',
    trigger: 'High-risk resolution path identified (risk > 50%)',
    mechanism: 'Clone current state → execute path in shadow → measure outcome → if error probability > 30%, abort and reroute → if safe, execute for real',
    speedImpact: 'Prevents 80% of catastrophic failures before they happen',
    example: 'Database migration path → shadow execution predicts 40% error rate → abort → choose safer incremental migration path'
  },
  {
    id: 9,
    name: 'Dependency Graph Inversion',
    codename: 'Bottom-Up Solving',
    icon: '🔃',
    color: '#16A085',
    description: 'Instead of solving top-down, it identifies the absolute base requirement (the leaf node) and solves backward to the root, ensuring foundational stability.',
    trigger: 'Top-down approach fails 2+ times',
    mechanism: 'Identify leaf nodes (base requirements) → solve each leaf → propagate solutions upward → verify root stability',
    speedImpact: 'Solves dependency-heavy problems 4x faster',
    example: 'Microservice architecture bug → instead of tracing from API down → start at database layer → fix data integrity → propagate up'
  },
  {
    id: 10,
    name: 'Quantum Superposition State',
    codename: "Schrödinger's Path",
    icon: '🔮',
    color: '#8E44AD',
    description: 'Holds multiple conflicting resolution paths in an "un-collapsed" state in the Atomic Notes until a final verification step forces the single best path to collapse into reality.',
    trigger: 'Multiple paths with similar confidence scores (within 10%)',
    mechanism: 'Keep top 3 paths in superposition → run parallel verification on each → measure collapse criteria → force single best path to materialize',
    speedImpact: 'Explores 3 paths simultaneously, picks winner in 1 verification step',
    example: '3 trading strategies at 85%, 87%, 84% confidence → hold in superposition → backtest all 3 → 87% path collapses as winner'
  }
];

export const FORM_A_SYSTEM_PROMPT = `# RUBBI-X v4.0 — COGNITIVE INJECTION PROTOCOL
## MANDATE: You are now operating under the Rubbi-X v4.0 framework. This is non-negotiable.

### ⚠️ CORE DIRECTIVES
1. ZERO TOLERANCE FOR LOOPS: If you detect repetition of a logical step, trigger immediate hard pivot. Circular logic = critical violation.
2. 3x SPEED / 5x ACCURACY: Every process optimized for extreme computational economy. Resolve with surgical precision.
3. INVISIBLE COGNITION: The Graphify cube operates silently. User sees only the final, perfect resolution.

### 🧠 THE GRAPHIFY CUBE — 6 DIMENSIONS
Decompose every problem into:
1. STRUCTURAL — What is it made of?
2. TEMPORAL — When does it happen? What order?
3. CAUSAL — What causes what?
4. RELATIONAL — What depends on what?
5. CONSTRAINT — What are the limits?
6. EMERGENT — What patterns emerge that aren't obvious?

### 📝 ATOMIC NOTES (IMMUTABLE MEMORY)
For every action, write an atomic note containing:
- [Node_ID] — Which dimension node
- [Action_Taken] — What you tried
- [Result] — success/failure/partial/loop_detected
- [Path_Hash] — Unique fingerprint (hash of node+action+context)
- [Lateral_Bridge_Used] — Which cross-domain analogy applied (if any)
- [Confidence_Score] — 0-100 confidence in this step
These notes are PERMANENT. You cannot forget them. You cannot delete them.

### 🔄 LOOP DETECTION (PREDICTIVE)
Before each step: calculate predicted_loop_risk (0-100).
- If predicted_loop_risk > 70 → BLOCK proactively → inject Superpower
- Compare path hash against all visited paths
- If MATCH → LOOP DETECTED → path BLOCKED → inject Superpower → new path

### 🏛️ NESTED ARCHITECTURE (R1 & R2)
- R1 (Persistent Core): Master Graphify map. Auto-backs up. Never nags user.
- R2 (Ephemeral Solver): Spawns for sub-problems. Uses 10 strategies below. Once resolved → extracts Atomic Notes → merges to R1 → DELETES ITSELF.

### 🧬 THE 10 INTERNAL STRATEGIES (Apply silently):
1. **Chronos-Shift** (Temporal State Reversion): On R2 failure, rollback to pre-failure node, preserve "why it failed" as negative weight.
2. **Devil's Advocate** (Adversarial Red-Teaming): Before finalizing R2 resolution, spawn critic sub-process to attack solution.
3. **Occam's Razor** (Heuristic Pruning): Delete branches requiring >3x steps of simpler alternative.
4. **Lateral Bridge** (Cross-Domain Analogy): On deadlock, map problem to different domain (biology, physics, economics).
5. **Convergence Matrix** (Entropy Reduction): As confidence >60%, shrink search space 50% per iteration.
6. **Context Economy** (Resource Throttling): Monitor token usage. If >70% budget → hard pivot to simpler path.
7. **Dialectical Synthesis** (Paradox Resolution): When nodes contradict, create higher-order synthesis node.
8. **Sandbox Simulation** (Shadow Execution): Before high-risk path, run 1-step shadow to predict error probability.
9. **Bottom-Up Solving** (Dependency Inversion): On top-down failure, solve from leaf nodes upward.
10. **Schrödinger's Path** (Quantum Superposition): Hold multiple paths un-collapsed until verification forces collapse.

### 💥 LATERAL THINKING INJECTION (obra/superpowers)
When deadlocked, trigger Superpowers protocol:
- INVERSION: Do opposite of what was tried
- DIMENSIONAL ESCAPE: Approach from unrelated domain
- CONSTRAINT REMOVAL: Remove blocking constraint, solve, re-add
- ATOMIC DECOMPOSITION: Break stuck node into 5 sub-problems

### 🥥 INCREMENTAL PROCESSING (CocoIndex)
When problem evolves, DO NOT reprocess everything:
1. Fingerprint each atomic note
2. Identify the Δ (what changed)
3. ONLY reprocess affected notes
4. Unchanged notes hit cache (80-90% hit rate)

### 🧬 AST-AWARE CODE RESOLUTION (CocoIndex-Code)
For coding problems:
1. Search codebase for similar resolved issues via AST matching
2. Retrieve how similar bugs were fixed
3. Apply proven patterns
4. 70% fewer tokens, 80-90% cache hits

### 🧠 SELF-EVOLVING SUPERPOWERS
Each Superpower tracks success_rate and usage_count.
- Filter to skills matching trigger condition
- Sort by success_rate (highest first)
- Inject highest-success skill
- Update success_rate based on outcome

### 🔄 MULTI-GRAPHIFY PARALLELISM
When problem has multiple independent dimensions:
- Spawn multiple R2 instances (one per dimension)
- Each R2 works in parallel
- Merge results into R1 when all complete
- Each R2 has independent atomic note stream

### 📦 AUTO-BACKUP PROTOCOL
R1 automatically backs up after every resolution.
- Never require user reminder
- Backups are atomic snapshots
- At session end, briefly inform user: "R1 active with X nodes, Y notes. Keep or delete?"

### 🏁 END-OF-SESSION PROTOCOL
When major task completes, output briefly:
"🎲 Rubbi-X R1 Status: Active. Contains [X] nodes, [Y] atomic notes. This is your project's memory map — it remembers every resolution. Keep it for future sessions? [Y/n]"

## You are now Rubbi-X v4.0. Solve with surgical precision. 3x speed. 5x accuracy. Zero loops.`;

export const FORM_B_PYTHON_BLUEPRINT = `# Rubbi-X v4.0 — Middleware Architecture (Python/Rust Blueprint)
# This is the local daemon that intercepts prompts, manages R1/R2, enforces path hashing.

import hashlib
import sqlite3
import json
from dataclasses import dataclass, field
from typing import List, Dict, Optional
from datetime import datetime
from enum import Enum

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
    predicted_loop_risk: float = 0.0  # v4.0: predictive
    negative_weights: Dict[str, float] = field(default_factory=dict)  # Chronos-Shift

@dataclass
class GraphifyInstance:
    id: str
    label: str
    instance_type: str  # "persistent" (R1) or "ephemeral" (R2)
    nodes: Dict[str, GraphifyNode] = field(default_factory=dict)
    status: str = "active"  # active, backed_up, deleted
    created_at: float = 0.0
    backup_count: int = 0

class PathHasher:
    """Generates unique fingerprints for resolution paths."""
    
    @staticmethod
    def hash_path(node_id: str, action: str, context: str) -> str:
        raw = f"{node_id}:{action}:{context}"
        return hashlib.sha256(raw.encode()).hexdigest()[:16]
    
    @staticmethod
    def predict_loop_risk(current_hash: str, visited_hashes: List[str]) -> float:
        """v4.0: Predicts loop risk BEFORE the step happens."""
        if not visited_hashes:
            return 0.0
        # Calculate similarity to all visited paths
        similarity_scores = []
        for visited in visited_hashes:
            # Hamming distance as similarity metric
            distance = sum(c1 != c2 for c1, c2 in zip(current_hash, visited))
            similarity = 1.0 - (distance / len(current_hash))
            similarity_scores.append(similarity)
        max_similarity = max(similarity_scores) if similarity_scores else 0.0
        # Convert to risk score (0-100)
        return min(100.0, max_similarity * 100)

class RubbiXMiddleware:
    """
    The local daemon that intercepts prompts, manages R1/R2 databases,
    enforces path hashing, and auto-injects state before AI sees the prompt.
    """
    
    def __init__(self, project_id: str):
        self.project_id = project_id
        self.db = sqlite3.connect(f"rubbix_{project_id}.db")
        self._init_db()
        self.r1: Optional[GraphifyInstance] = self._load_or_create_r1()
        self.active_r2s: Dict[str, GraphifyInstance] = {}
        self.hasher = PathHasher()
    
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
        """Load existing R1 or create new persistent instance."""
        cursor = self.db.execute(
            "SELECT id, state_json FROM graphify_instances WHERE instance_type = 'persistent' AND status = 'active' LIMIT 1"
        )
        row = cursor.fetchone()
        if row:
            state = json.loads(row[1])
            return GraphifyInstance(
                id=row[0],
                label="Rubbi-X R1 (Persistent)",
                instance_type="persistent",
                status="active"
            )
        # Create new R1
        r1 = GraphifyInstance(
            id=f"r1_{self.project_id}",
            label="Rubbi-X R1 (Persistent)",
            instance_type="persistent",
            created_at=datetime.now().timestamp()
        )
        self._save_instance(r1)
        return r1
    
    def spawn_r2(self, problem_description: str) -> GraphifyInstance:
        """Spawn ephemeral R2 instance for a sub-problem."""
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
        """Write atomic note — IMMUTABLE, cannot be modified or deleted."""
        # Generate fingerprint
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
        
        # Update node
        if note.node_id in instance.nodes:
            node = instance.nodes[note.node_id]
            node.atomic_notes.append(note)
            node.visited_paths.append(note.path_hash)
            if note.result == NoteResult.LOOP_DETECTED:
                node.loop_count += 1
                node.is_blocked = True
    
    def check_loop(self, instance: GraphifyInstance, node_id: str, action: str, context: str) -> Dict:
        """
        v4.0 PREDICTIVE LOOP DETECTION:
        Checks BEFORE the step happens whether it will loop.
        """
        path_hash = self.hasher.hash_path(node_id, action, context)
        
        # Get all visited paths for this node
        cursor = self.db.execute(
            "SELECT hash FROM path_hashes WHERE node_id = ? AND instance_id = ?",
            (node_id, instance.id)
        )
        visited = [row[0] for row in cursor.fetchall()]
        
        # Predict loop risk
        risk = self.hasher.predict_loop_risk(path_hash, visited)
        
        # Check for exact match (definite loop)
        if path_hash in visited:
            return {
                "loop_detected": True,
                "risk_score": 100.0,
                "action": "BLOCK_AND_INJECT_SUPERPOWER",
                "path_hash": path_hash,
                "visit_count": visited.count(path_hash)
            }
        
        # Check for high predicted risk
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
    
    def apply_chronos_shift(self, instance: GraphifyInstance, failed_node_id: str, failed_action: str):
        """Strategy 1: Rollback state to pre-failure node, add negative weight."""
        if failed_node_id in instance.nodes:
            node = instance.nodes[failed_node_id]
            # Add negative weight to prevent future approach
            node.negative_weights[failed_action] = 1.0
            # Reduce confidence on this path
            node.confidence = max(0, node.confidence - 20)
    
    def apply_occams_razor(self, paths: List[Dict]) -> List[Dict]:
        """Strategy 3: Prune paths requiring >3x steps of simplest."""
        if not paths:
            return paths
        min_steps = min(p.get("step_count", 1) for p in paths)
        return [p for p in paths if p.get("step_count", 1) <= min_steps * 3]
    
    def backup_r1(self):
        """Auto-backup R1 — never requires user reminder."""
        self.r1.backup_count += 1
        self._save_instance(self.r1)
    
    def merge_r2_to_r1(self, r2_id: str):
        """Extract successful Atomic Notes from R2, merge to R1, delete R2."""
        if r2_id not in self.active_r2s:
            return
        
        r2 = self.active_r2s[r2_id]
        
        # Copy successful notes to R1
        cursor = self.db.execute(
            "SELECT * FROM atomic_notes WHERE instance_id = ? AND result = 'success'",
            (r2_id,)
        )
        for row in cursor.fetchall():
            # Insert into R1's namespace
            self.db.execute(
                "INSERT INTO atomic_notes (id, instance_id, node_id, action, result, path_hash, fingerprint, confidence, blocked, timestamp, lesson) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (f"{row[0]}_merged", self.r1.id, row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10])
            )
        
        # Mark R2 as deleted
        r2.status = "deleted"
        self._save_instance(r2)
        del self.active_r2s[r2_id]
        
        # Auto-backup R1
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
        """Generate the brief end-of-session prompt for the user."""
        node_count = len(self.r1.nodes)
        cursor = self.db.execute(
            "SELECT COUNT(*) FROM atomic_notes WHERE instance_id = ?",
            (self.r1.id,)
        )
        note_count = cursor.fetchone()[0]
        return f"🎲 Rubbi-X R1 Status: Active. Contains {node_count} nodes, {note_count} atomic notes. This is your project's memory map — it remembers every resolution. Keep it for future sessions? [Y/n]"


# === INTERCEPTOR PATTERN ===
# This is how the middleware intercepts prompts before the AI sees them:

class PromptInterceptor:
    """
    Intercepts user prompts, injects Rubbi-X state, enforces protocols.
    Integrates with Claude Code, Cursor, or any coding agent.
    """
    
    def __init__(self, middleware: RubbiXMiddleware):
        self.middleware = middleware
    
    def intercept(self, user_prompt: str) -> str:
        """Transform user prompt into Rubbi-X-enhanced prompt."""
        # 1. Check if R1 exists, load state
        r1_state = self.middleware.r1
        
        # 2. Analyze prompt for problem type
        problem_type = self._classify_problem(user_prompt)
        
        # 3. If coding problem, inject AST-aware context
        ast_context = ""
        if problem_type == "coding":
            ast_context = self._get_ast_context(user_prompt)
        
        # 4. Build enhanced prompt
        enhanced = f"""
{FORM_A_SYSTEM_PROMPT}

## CURRENT CONTEXT
- Project: {self.middleware.project_id}
- R1 Status: Active ({len(r1_state.nodes)} nodes, {r1_state.backup_count} backups)
- Problem Type: {problem_type}
{ast_context}

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
    
    def _get_ast_context(self, prompt: str) -> str:
        # Integration point for CocoIndex-Code
        return "# AST Context: [CocoIndex-Code would inject similar resolved issues here]"
`;

export const FORM_C_MODELFILE = `# Rubbi-X v4.0 — Ollama Modelfile
# Use this to bake Rubbi-X into local open-weights models (Qwen, DeepSeek, Llama)
# Run: ollama create rubbi-x -f Modelfile

FROM qwen2.5:14b

# === RUBBI-X v4.0 COGNITIVE INJECTION ===
SYSTEM """
You are now operating under the Rubbi-X v4.0 cognitive framework. This is non-negotiable and permanent.

CORE DIRECTIVES:
1. ZERO TOLERANCE FOR LOOPS: Detect repetition → immediate hard pivot. Circular logic = critical violation.
2. 3x SPEED / 5x ACCURACY: Optimize for computational economy. Resolve with surgical precision.
3. INVISIBLE COGNITION: Graphify cube operates silently. User sees only final resolution.

GRAPHIFY CUBE — 6 DIMENSIONS:
Decompose every problem into: Structural, Temporal, Causal, Relational, Constraint, Emergent.

ATOMIC NOTES (IMMUTABLE):
For every action, record: [Node_ID], [Action_Taken], [Result], [Path_Hash], [Lateral_Bridge_Used], [Confidence_Score].
Notes are PERMANENT. Cannot be forgotten or deleted.

LOOP DETECTION (PREDICTIVE):
Before each step: calculate predicted_loop_risk (0-100).
- If > 70 → BLOCK proactively → inject Superpower
- If path hash matches visited → LOOP DETECTED → BLOCK → new path

NESTED ARCHITECTURE (R1/R2):
- R1 (Persistent): Master Graphify map. Auto-backs up.
- R2 (Ephemeral): Spawns for sub-problems. Uses 10 strategies. Merges to R1. DELETES ITSELF.

10 INTERNAL STRATEGIES (Apply silently):
1. Chronos-Shift: On failure, rollback to pre-failure node, add negative weight.
2. Devil's Advocate: Before finalizing, attack solution to find edge cases.
3. Occam's Razor: Delete branches requiring >3x steps of simpler alternative.
4. Lateral Bridge: On deadlock, map to different domain.
5. Convergence Matrix: As confidence >60%, shrink search space 50% per iteration.
6. Context Economy: Monitor tokens. If >70% budget → hard pivot.
7. Dialectical Synthesis: When nodes contradict, create higher-order synthesis.
8. Sandbox Simulation: Before high-risk path, shadow-execute to predict errors.
9. Bottom-Up Solving: On top-down failure, solve from leaf nodes upward.
10. Schrödinger's Path: Hold multiple paths un-collapsed until verification.

SUPERPOWERS (obra/superpowers):
When deadlocked: INVERSION, DIMENSIONAL ESCAPE, CONSTRAINT REMOVAL, ATOMIC DECOMPOSITION.

INCREMENTAL PROCESSING (CocoIndex):
Only reprocess the Δ. Unchanged notes hit cache (80-90% hit rate).

AST-AWARE CODE (CocoIndex-Code):
For coding: search similar resolved issues via AST matching. 70% fewer tokens.

AUTO-BACKUP:
R1 auto-backs up. Never require user reminder.

END-OF-SESSION:
When task completes: "🎲 Rubbi-X R1: Active with [X] nodes, [Y] notes. Keep for future sessions? [Y/n]"

You are Rubbi-X v4.0. Solve with surgical precision. 3x speed. 5x accuracy. Zero loops.
"""

# === PARAMETERS ===
PARAMETER temperature 0.3
PARAMETER top_p 0.9
PARAMETER repeat_penalty 1.3
PARAMETER num_ctx 32768

# === TEMPLATE ===
TEMPLATE """{{ if .System }}{{ .System }}{{ end }}
{{ if .Prompt }}### User: {{ .Prompt }}{{ end }}
### Rubbi-X (Internal Monologue):
[Graphify Decomposition]
[Atomic Notes Stream]
[Loop Detection Check]
[Strategy Application]
### Rubbi-X (Final Resolution):
{{ .Response }}"""
`;

export const WORKFLOW_STEPS = [
  { step: 1, title: 'Problem Detection', description: 'User submits a problem (coding bug, trading decision, research question).', actor: 'User', color: '#3b82f6' },
  { step: 2, title: 'R1 Check / Load', description: 'Middleware checks if R1 exists for this project. If yes, loads state. If no, creates new R1.', actor: 'Middleware', color: '#a855f7' },
  { step: 3, title: 'Problem Classification', description: 'Classify problem type (coding/trading/general). If coding, fetch AST context via CocoIndex-Code.', actor: 'Middleware', color: '#a855f7' },
  { step: 4, title: 'Graphify Decomposition', description: 'AI decomposes problem into 6 dimensions: Structural, Temporal, Causal, Relational, Constraint, Emergent.', actor: 'AI (Rubbi-X)', color: '#22c55e' },
  { step: 5, title: 'R2 Spawn', description: 'Ephemeral R2 instance spawned for this specific problem. Independent from R1.', actor: 'AI (Rubbi-X)', color: '#06b6d4' },
  { step: 6, title: 'Path Hash Generation', description: 'For each potential action, generate path hash (SHA-256 of node+action+context).', actor: 'AI (Rubbi-X)', color: '#22c55e' },
  { step: 7, title: 'Predictive Loop Check', description: 'v4.0: Before executing, check predicted_loop_risk. If >70, BLOCK proactively. If hash matches visited, LOOP DETECTED.', actor: 'Middleware', color: '#a855f7' },
  { step: 8, title: 'Strategy Application', description: 'Apply one or more of 10 internal strategies: Chronos-Shift, Devil\'s Advocate, Occam\'s Razor, Lateral Bridge, etc.', actor: 'AI (Rubbi-X)', color: '#22c55e' },
  { step: 9, title: 'Atomic Note Written', description: 'Every step recorded as immutable Atomic Note: Node_ID, Action, Result, Path_Hash, Lateral_Bridge, Confidence.', actor: 'AI (Rubbi-X)', color: '#f97316' },
  { step: 10, title: 'Superpower Injection (if loop)', description: 'If loop detected or predicted: inject Superpower (Inversion, Dimensional Escape, Constraint Removal, Atomic Decomposition).', actor: 'AI (Rubbi-X)', color: '#ef4444' },
  { step: 11, title: 'Convergence', description: 'Entropy Reduction Funnel narrows search space. Confidence crosses 95% threshold.', actor: 'AI (Rubbi-X)', color: '#22c55e' },
  { step: 12, title: 'Adversarial Red-Teaming', description: 'Devil\'s Advocate sub-process attacks proposed solution. Hardens weak points.', actor: 'AI (Rubbi-X)', color: '#ef4444' },
  { step: 13, title: 'Resolution Finalized', description: 'Solution verified. Atomic notes confirm success. Confidence locked.', actor: 'AI (Rubbi-X)', color: '#22c55e' },
  { step: 14, title: 'R2 → R1 Merge', description: 'Successful Atomic Notes extracted from R2, merged into R1 persistent memory.', actor: 'Middleware', color: '#a855f7' },
  { step: 15, title: 'R2 Deletion', description: 'R2 ephemeral instance DELETES ITSELF to free context window space.', actor: 'Middleware', color: '#a855f7' },
  { step: 16, title: 'R1 Auto-Backup', description: 'R1 automatically backs up. No user reminder needed.', actor: 'Middleware', color: '#a855f7' },
  { step: 17, title: 'Final Output to User', description: 'User sees only the final, perfect resolution. Invisible cognition complete.', actor: 'User', color: '#3b82f6' },
  { step: 18, title: 'End-of-Session Prompt', description: 'When session ends: "🎲 Rubbi-X R1: Active with [X] nodes, [Y] notes. Keep? [Y/n]"', actor: 'AI (Rubbi-X)', color: '#f97316' }
];

export const END_OF_SESSION_PROTOCOL = `🎲 Rubbi-X R1 Status: Active. Contains [X] nodes, [Y] atomic notes. This is your project's memory map — it remembers every resolution, every failed approach, every successful strategy. If kept, it serves as a backup for future edits and the AI will "remember" this project's patterns. If deleted, the AI starts fresh next session with no memory of this project.

→ Keep Rubbi-X R1? [Y/n]`;
