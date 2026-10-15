import { Agent, GitHubTool, SuperpowerSkill } from './types';

export const AGENTS: Agent[] = [
  {
    id: 'analyst',
    name: 'Deep Analyst',
    role: 'Problem Decomposition & Pattern Recognition',
    icon: '🔬',
    status: 'idle',
    expertise: ['Graph Theory', 'Causal Analysis', 'Dimensional Mapping', 'Loop Detection'],
    resolutionCount: 14823,
    accuracyScore: 97.3
  },
  {
    id: 'strategist',
    name: 'Quantum Strategist',
    role: 'Multi-path Resolution & Branch Injection',
    icon: '🧠',
    status: 'idle',
    expertise: ['Bayesian Optimization', 'Path Hashing', 'Branch Generation', 'Convergence Analysis'],
    resolutionCount: 12456,
    accuracyScore: 95.8
  },
  {
    id: 'critic',
    name: 'Adversarial Critic',
    role: 'Loop Detection & Path Blocking',
    icon: '⚡',
    status: 'idle',
    expertise: ['Cycle Detection', 'Path Hashing', 'State Comparison', 'Branch Forcing'],
    resolutionCount: 9871,
    accuracyScore: 98.1
  },
  {
    id: 'synthesizer',
    name: 'Atomic Scribe',
    role: 'Atomic Note Generation & Memory Encoding',
    icon: '📝',
    status: 'idle',
    expertise: ['Immutable Logging', 'Lesson Extraction', 'Memory Encoding', 'Note Compression'],
    resolutionCount: 11234,
    accuracyScore: 96.5
  },
  {
    id: 'prime',
    name: 'Prime Vetter',
    role: 'Final Consensus & Resolution Lock',
    icon: '👑',
    status: 'idle',
    expertise: ['Consensus Algorithms', 'Convergence Detection', 'Quality Gates', 'Resolution Lock'],
    resolutionCount: 15672,
    accuracyScore: 99.2
  }
];

export const GITHUB_TOOLS: GitHubTool[] = [
  {
    name: 'LangGraph',
    url: 'https://github.com/langchain-ai/langgraph',
    purpose: 'Cyclic graph workflows with built-in state checkpointing for loop detection',
    category: 'orchestration',
    stars: '8.2k',
    integration: 'Core engine — manages state transitions, detects revisited states, triggers branch injection'
  },
  {
    name: 'Superpowers',
    url: 'https://github.com/obra/superpowers',
    purpose: 'Agentic skills framework — creative problem discovery, circuit breakers, ledger tracking',
    category: 'creative',
    stars: '4.1k',
    integration: 'Injects lateral thinking skills when loops detected — forces paradigm shifts via brainstorming skill'
  },
  {
    name: 'AutoGen',
    url: 'https://github.com/microsoft/autogen',
    purpose: 'Multi-agent conversation for consensus building and atomic note validation',
    category: 'orchestration',
    stars: '35k',
    integration: 'Agent-to-agent protocol — validates atomic notes through adversarial cross-checking'
  },
  {
    name: 'CrewAI',
    url: 'https://github.com/joaomdmoura/crewai',
    purpose: 'Role-based task delegation with built-in memory persistence',
    category: 'orchestration',
    stars: '21k',
    integration: 'Routes tasks to agents based on loop detection state — assigns branch injection tasks'
  },
  {
    name: 'Neo4j',
    url: 'https://github.com/neo4j/neo4j',
    purpose: 'Graph database for atomic note storage and path hash indexing',
    category: 'graph',
    stars: '13k',
    integration: 'Persistent atomic note store — indexes path hashes for O(1) loop detection lookups'
  },
  {
    name: 'ChromaDB',
    url: 'https://github.com/chroma-core/chroma',
    purpose: 'Vector embeddings for similarity-based atomic note retrieval',
    category: 'storage',
    stars: '14k',
    integration: 'Finds semantically similar past failures — "have we tried something like this before?"'
  },
  {
    name: 'DSPy',
    url: 'https://github.com/stanfordnlp/dspy',
    purpose: 'Optimized prompting that adapts when loops are detected',
    category: 'optimization',
    stars: '18k',
    integration: 'Rewrites agent prompts when loops detected — forces different reasoning patterns'
  },
  {
    name: 'Guardrails AI',
    url: 'https://github.com/guardrails-ai/guardrails',
    purpose: 'Output validation — blocks identical resolution attempts',
    category: 'safety',
    stars: '4.5k',
    integration: 'Hard gate — rejects any resolution path with hash matching a previously failed attempt'
  },
  {
    name: 'MemGPT',
    url: 'https://github.com/cpacker/MemGPT',
    purpose: 'Long-term memory for atomic note persistence across sessions',
    category: 'storage',
    stars: '12k',
    integration: 'Agent memory layer — atomic notes survive across resolution attempts and sessions'
  },
  {
    name: 'LiteLLM',
    url: 'https://github.com/BerriAI/litellm',
    purpose: 'Model routing — assigns different LLMs when loops detected',
    category: 'llm',
    stars: '13k',
    integration: 'Swaps model backend on loop detection — different model = different reasoning = new paths'
  }
];

export const SUPERPOWER_SKILLS: SuperpowerSkill[] = [
  {
    id: 'sp1',
    name: 'Inversion Attack',
    description: 'When stuck in a loop, invert every assumption. If the solution says "add X", try "remove X".',
    category: 'paradigm_shift',
    triggerCondition: 'Loop detected on same node 2+ times',
    effect: 'Forces the system to explore the exact opposite of its current approach'
  },
  {
    id: 'sp2',
    name: 'Dimensional Escape',
    description: 'Jump to a completely unrelated problem dimension. How would a biologist solve this? A poet?',
    category: 'lateral',
    triggerCondition: '3+ atomic notes of "failure" on same path',
    effect: 'Injects cross-domain analogies that break the current reasoning frame'
  },
  {
    id: 'sp3',
    name: 'Constraint Removal',
    description: 'Identify which constraint is creating the loop. Temporarily remove it. Solve without it. Then re-add.',
    category: 'creative',
    triggerCondition: 'Loop involves constraint dimension',
    effect: 'Reveals hidden dependencies and alternative architectures'
  },
  {
    id: 'sp4',
    name: 'Atomic Decomposition',
    description: 'Break the stuck node into 5 smaller sub-problems. Solve each independently. Merge.',
    category: 'analytical',
    triggerCondition: 'Node has 3+ failed atomic notes',
    effect: 'Reduces complexity per attempt, enabling convergence on sub-problems'
  },
  {
    id: 'sp5',
    name: 'Temporal Reframing',
    description: 'Solve the problem as if it happened 10 years ago. Then 10 years in the future.',
    category: 'lateral',
    triggerCondition: 'Temporal dimension stuck in loop',
    effect: 'Reveals time-independent solution cores vs time-dependent constraints'
  },
  {
    id: 'sp6',
    name: 'Adversarial Injection',
    description: 'Have the Critic agent actively try to BREAK the current solution. Record what breaks.',
    category: 'creative',
    triggerCondition: 'Resolution confidence > 80% but loop persists',
    effect: 'Exposes hidden failure modes that the original approach missed'
  }
];

export const DIMENSIONS = [
  { key: 'structural', label: 'Structural', color: '#FF6B6B', description: 'Architecture & composition' },
  { key: 'temporal', label: 'Temporal', color: '#4ECDC4', description: 'Time constraints & sequencing' },
  { key: 'causal', label: 'Causal', color: '#45B7D1', description: 'Cause-effect chains' },
  { key: 'relational', label: 'Relational', color: '#96CEB4', description: 'Dependencies & connections' },
  { key: 'constraint', label: 'Constraint', color: '#FFEAA7', description: 'Boundaries & limits' },
  { key: 'emergent', label: 'Emergent', color: '#DDA0DD', description: 'Hidden dynamics & patterns' }
];
