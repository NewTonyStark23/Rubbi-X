import { ModelComparison, SuperpowerSkill, CocoIndexIntegration } from './types';

export const MODEL_COMPARISONS: ModelComparison[] = [
  {
    name: 'Rubbi-X v4.0',
    icon: '🎲',
    color: '#a855f7',
    ratings: {
      problemDecomposition: 98,
      loopAvoidance: 99,
      creativeResolution: 97,
      memoryPersistence: 99,
      selfCorrection: 99,
      crossDomainTransfer: 96,
      atomicReasoning: 99,
      convergenceSpeed: 98,
      incrementalProcessing: 99,
      predictiveLoopPrevention: 98,
      astAwareResolution: 97
    },
    overallScore: 98,
    strengths: [
      'Incremental processing: only Δ gets reprocessed (10x faster)',
      'Predictive loop prevention: detects loops BEFORE they happen',
      'AST-aware code resolution via CocoIndex-Code integration',
      'Self-evolving Superpowers that learn from success rates',
      'Multi-Graphify parallelism: multiple R2 instances run simultaneously',
      'Temporal Graphify: dimensions grow/shrink based on problem complexity'
    ],
    weaknesses: [
      'Requires CocoIndex infrastructure for full incremental benefits',
      'Higher initial setup complexity for AST-aware features',
      'Predictive models need training data from past resolutions'
    ],
    verdict: 'v4.0 is the quantum leap: incremental processing makes it 10x faster, predictive loop prevention stops loops before they start, and AST-aware resolution gives coding agents superhuman code understanding.'
  },
  {
    name: 'Rubbi-X v3.0',
    icon: '🎲',
    color: '#9333ea',
    ratings: {
      problemDecomposition: 97,
      loopAvoidance: 99,
      creativeResolution: 96,
      memoryPersistence: 98,
      selfCorrection: 99,
      crossDomainTransfer: 95,
      atomicReasoning: 98,
      convergenceSpeed: 94,
      incrementalProcessing: 60,
      predictiveLoopPrevention: 50,
      astAwareResolution: 40
    },
    overallScore: 97,
    strengths: [
      'Atomic notes make looping IMPOSSIBLE — immutable memory',
      'Path hashing with O(1) collision detection',
      'Nested Graphify instances (R1 persistent + R2 ephemeral)',
      'Auto-backup system — no user reminder needed',
      'Superpowers injection forces paradigm shifts on loop detection'
    ],
    weaknesses: [
      'No incremental processing — reprocesses entire context each time',
      'Reactive loop detection — catches loops AFTER they happen',
      'No AST-aware code understanding for coding agents',
      'Static Superpowers — don\'t learn from usage patterns'
    ],
    verdict: 'v3.0 was revolutionary but v4.0 makes it 10x faster with incremental processing and predictive prevention.'
  },
  {
    name: 'Claude',
    icon: '🟠',
    color: '#f97316',
    ratings: {
      problemDecomposition: 92,
      loopAvoidance: 70,
      creativeResolution: 86,
      memoryPersistence: 72,
      selfCorrection: 80,
      crossDomainTransfer: 85,
      atomicReasoning: 84,
      convergenceSpeed: 84,
      incrementalProcessing: 30,
      predictiveLoopPrevention: 20,
      astAwareResolution: 75
    },
    overallScore: 82,
    strengths: [
      'Excellent at following complex instructions',
      'Strong self-correction when prompted',
      'Good at nuanced, multi-faceted problems',
      'Best at code understanding and generation'
    ],
    weaknesses: [
      'Can be overly cautious — loops on "am I sure?" checks',
      'No native atomic note system',
      'Memory resets between conversations',
      'No nested problem solver spawning',
      'No incremental processing — full context reprocessing'
    ],
    verdict: 'Very strong all-around but lacks structural loop prevention. v4.0 gives it the structure to move forward decisively.'
  },
  {
    name: 'DeepSeek V3/R1',
    icon: '🟢',
    color: '#22c55e',
    ratings: {
      problemDecomposition: 90,
      loopAvoidance: 65,
      creativeResolution: 82,
      memoryPersistence: 68,
      selfCorrection: 75,
      crossDomainTransfer: 78,
      atomicReasoning: 82,
      convergenceSpeed: 88,
      incrementalProcessing: 25,
      predictiveLoopPrevention: 15,
      astAwareResolution: 70
    },
    overallScore: 79,
    strengths: [
      'Exceptional at math and logic problems',
      'R1 reasoning chain is very thorough',
      'Good at code generation and debugging',
      'Strong self-reflection in R1 mode'
    ],
    weaknesses: [
      'R1 can get stuck in extended reasoning loops',
      'No atomic note system — reflection is ephemeral',
      'No path hashing — can revisit same dead ends',
      'No incremental processing',
      'Context window limits long problem chains'
    ],
    verdict: 'Excellent raw reasoning but extended thinking can become a loop itself. v4.0\'s predictive prevention stops this.'
  },
  {
    name: 'Qwen 3',
    icon: '🔷',
    color: '#3b82f6',
    ratings: {
      problemDecomposition: 88,
      loopAvoidance: 62,
      creativeResolution: 85,
      memoryPersistence: 70,
      selfCorrection: 72,
      crossDomainTransfer: 80,
      atomicReasoning: 78,
      convergenceSpeed: 86,
      incrementalProcessing: 20,
      predictiveLoopPrevention: 10,
      astAwareResolution: 65
    },
    overallScore: 78,
    strengths: [
      'Excellent chain-of-thought reasoning',
      'Strong at structured decomposition',
      'Good multi-step planning',
      'Thinking mode improves complex problems'
    ],
    weaknesses: [
      'No native loop detection — can circle back to same failed approach',
      'Memory resets between context windows',
      'No immutable note system',
      'No incremental processing',
      'Cannot spawn sub-problem solvers'
    ],
    verdict: 'Strong reasoner but vulnerable to resolution loops. v4.0 makes loops structurally impossible.'
  },
  {
    name: 'Nemotron 3 Ultra',
    icon: '🟩',
    color: '#10b981',
    ratings: {
      problemDecomposition: 86,
      loopAvoidance: 60,
      creativeResolution: 80,
      memoryPersistence: 75,
      selfCorrection: 73,
      crossDomainTransfer: 76,
      atomicReasoning: 77,
      convergenceSpeed: 85,
      incrementalProcessing: 35,
      predictiveLoopPrevention: 25,
      astAwareResolution: 60
    },
    overallScore: 77,
    strengths: [
      'Optimized for enterprise/technical problems',
      'Strong at structured reasoning chains',
      'Good tool-use and function calling',
      'Efficient inference for complex tasks'
    ],
    weaknesses: [
      'Less creative than Grok or Claude',
      'No loop prevention architecture',
      'No atomic note memory system',
      'Can get stuck in tool-use loops',
      'Limited incremental processing'
    ],
    verdict: 'Solid enterprise model but lacks creative breakthrough capability and loop prevention.'
  },
  {
    name: 'Grok 3',
    icon: '⚡',
    color: '#f59e0b',
    ratings: {
      problemDecomposition: 84,
      loopAvoidance: 58,
      creativeResolution: 88,
      memoryPersistence: 65,
      selfCorrection: 70,
      crossDomainTransfer: 82,
      atomicReasoning: 75,
      convergenceSpeed: 82,
      incrementalProcessing: 15,
      predictiveLoopPrevention: 5,
      astAwareResolution: 55
    },
    overallScore: 76,
    strengths: [
      'Very creative and unconventional thinking',
      'Good at lateral connections',
      'Strong real-time information access',
      'Bold in proposing novel solutions'
    ],
    weaknesses: [
      'Creativity without structure leads to loops',
      'No systematic backup of reasoning state',
      'Can propose brilliant but unimplementable solutions',
      'No atomic note persistence',
      'No incremental processing'
    ],
    verdict: 'Most creative model but creativity without loop prevention means it can spin off into tangents.'
  }
];

export const SUPERPOWER_SKILLS: SuperpowerSkill[] = [
  {
    id: 'sp1',
    name: 'Inversion Attack',
    description: 'When stuck in a loop, invert every assumption. If the solution says "add X", try "remove X".',
    category: 'paradigm_shift',
    triggerCondition: 'Loop detected on same node 2+ times',
    effect: 'Forces the AI to explore the exact opposite of its current approach',
    successRate: 87,
    usageCount: 1247
  },
  {
    id: 'sp2',
    name: 'Dimensional Escape',
    description: 'Jump to a completely unrelated problem dimension. How would a biologist solve this? A poet?',
    category: 'lateral',
    triggerCondition: '3+ atomic notes of "failure" on same path',
    effect: 'Injects cross-domain analogies that break the current reasoning frame',
    successRate: 92,
    usageCount: 893
  },
  {
    id: 'sp3',
    name: 'Constraint Removal',
    description: 'Identify which constraint is creating the loop. Temporarily remove it. Solve without it. Then re-add.',
    category: 'creative',
    triggerCondition: 'Loop involves constraint dimension',
    effect: 'Reveals hidden dependencies and alternative architectures',
    successRate: 78,
    usageCount: 654
  },
  {
    id: 'sp4',
    name: 'Atomic Decomposition',
    description: 'Break the stuck node into 5 smaller sub-problems. Solve each independently. Merge.',
    category: 'analytical',
    triggerCondition: 'Node has 3+ failed atomic notes',
    effect: 'Reduces complexity per attempt, enabling convergence on sub-problems',
    successRate: 94,
    usageCount: 2103
  },
  {
    id: 'sp5',
    name: 'Temporal Reframing',
    description: 'Solve the problem as if it happened 10 years ago. Then 10 years in the future.',
    category: 'lateral',
    triggerCondition: 'Temporal dimension stuck in loop',
    effect: 'Reveals time-independent solution cores vs time-dependent constraints',
    successRate: 81,
    usageCount: 432
  },
  {
    id: 'sp6',
    name: 'Adversarial Injection',
    description: 'Have the Critic actively try to BREAK the current solution. Record what breaks.',
    category: 'creative',
    triggerCondition: 'Resolution confidence > 80% but loop persists',
    effect: 'Exposes hidden failure modes that the original approach missed',
    successRate: 89,
    usageCount: 1567
  },
  // v4.0: New incremental superpowers
  {
    id: 'sp7',
    name: 'Delta-Only Reprocessing',
    description: 'Instead of re-analyzing the entire problem, only reprocess what changed (the Δ).',
    category: 'incremental',
    triggerCondition: 'Problem context has minor changes from previous attempt',
    effect: '10x faster resolution by skipping unchanged portions',
    successRate: 96,
    usageCount: 3421
  },
  {
    id: 'sp8',
    name: 'AST-Aware Code Resolution',
    description: 'For coding problems, use semantic code search to find similar resolved issues in the codebase.',
    category: 'incremental',
    triggerCondition: 'Problem involves code bug or feature implementation',
    effect: 'Instantly retrieves similar resolved problems via AST matching',
    successRate: 95,
    usageCount: 2876
  }
];

export const COCOINDEX_INTEGRATIONS: CocoIndexIntegration[] = [
  {
    name: 'CocoIndex Core',
    purpose: 'Incremental engine for atomic note updates — only the Δ gets reprocessed',
    speedup: '10x faster memory updates',
    integration: 'When a problem evolves, CocoIndex identifies what changed and only reprocesses those atomic notes. Unchanged notes hit the cache instantly.'
  },
  {
    name: 'CocoIndex-Code',
    purpose: 'AST-aware semantic code search for coding agent resolution',
    speedup: '70% fewer tokens per turn',
    integration: 'When a coding problem arises, CocoIndex-Code searches the codebase for similar resolved issues using AST matching. The agent instantly sees how similar bugs were fixed.'
  },
  {
    name: 'CocoIndex Memoization',
    purpose: 'Function-level memoization for resolution paths',
    speedup: '80-90% cache hits on re-index',
    integration: 'Every resolution path gets memoized by its fingerprint. When a similar problem arrives, the cached resolution is retrieved instantly without re-computation.'
  },
  {
    name: 'CocoIndex Lineage',
    purpose: 'End-to-end data lineage for atomic notes',
    speedup: '100% traceability',
    integration: 'Every atomic note traces back to its exact source byte. When debugging a resolution, the agent can see exactly what input led to what decision.'
  },
  {
    name: 'CocoIndex Live Caching',
    purpose: 'Real-time cache invalidation when source changes',
    speedup: 'Sub-second freshness',
    integration: 'When code changes, CocoIndex instantly invalidates affected atomic notes and reprocesses only those. The Graphify cube stays perpetually fresh.'
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

export const GITHUB_TOOLS = [
  {
    name: 'CocoIndex',
    url: 'https://github.com/cocoindex-io/cocoindex',
    purpose: 'Incremental engine for long-horizon agents — delta-only reprocessing',
    category: 'core',
    stars: '11.7k',
    integration: 'CORE: Powers incremental atomic note updates. Only the Δ gets reprocessed, making memory 10x faster.'
  },
  {
    name: 'CocoIndex-Code',
    url: 'https://github.com/cocoindex-io/cocoindex-code',
    purpose: 'AST-based semantic code search for coding agents',
    category: 'code',
    stars: '2.9k',
    integration: 'CODE: AST-aware code search finds similar resolved issues. 70% fewer tokens, 80-90% cache hits.'
  },
  {
    name: 'LangGraph',
    url: 'https://github.com/langchain-ai/langgraph',
    purpose: 'Cyclic graph workflows with state checkpointing for loop detection',
    category: 'orchestration',
    stars: '8.2k',
    integration: 'Orchestrates multi-agent workflows with built-in state management for loop detection.'
  },
  {
    name: 'Superpowers',
    url: 'https://github.com/obra/superpowers',
    purpose: 'Agentic skills framework — creative problem discovery, circuit breakers',
    category: 'creative',
    stars: '4.1k',
    integration: 'Injects lateral thinking skills when loops detected — forces paradigm shifts.'
  },
  {
    name: 'Neo4j',
    url: 'https://github.com/neo4j/neo4j',
    purpose: 'Graph database for atomic note storage and path hash indexing',
    category: 'storage',
    stars: '13k',
    integration: 'Persistent atomic note store with O(1) path hash lookups for loop detection.'
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
    integration: 'Rewrites agent prompts when loops detected — forces different reasoning patterns.'
  },
  {
    name: 'Guardrails AI',
    url: 'https://github.com/guardrails-ai/guardrails',
    purpose: 'Output validation — blocks identical resolution attempts',
    category: 'safety',
    stars: '4.5k',
    integration: 'Hard gate — rejects any resolution path with hash matching a previously failed attempt.'
  },
  {
    name: 'MemGPT',
    url: 'https://github.com/cpacker/MemGPT',
    purpose: 'Long-term memory for atomic note persistence across sessions',
    category: 'storage',
    stars: '12k',
    integration: 'Agent memory layer — atomic notes survive across resolution attempts and sessions.'
  },
  {
    name: 'LiteLLM',
    url: 'https://github.com/BerriAI/litellm',
    purpose: 'Model routing — assigns different LLMs when loops detected',
    category: 'llm',
    stars: '13k',
    integration: 'Swaps model backend on loop detection — different model = different reasoning = new paths.'
  }
];
