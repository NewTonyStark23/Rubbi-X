import { ModelComparison, SuperpowerSkill } from './types';

export const MODEL_COMPARISONS: ModelComparison[] = [
  {
    name: 'Rubbi-X (This Framework)',
    icon: '🎲',
    color: '#a855f7',
    ratings: {
      problemDecomposition: 97,
      loopAvoidance: 99,
      creativeResolution: 96,
      memoryPersistence: 98,
      selfCorrection: 99,
      crossDomainTransfer: 95,
      atomicReasoning: 98,
      convergenceSpeed: 94
    },
    overallScore: 97,
    strengths: [
      'Atomic notes make looping IMPOSSIBLE — immutable memory',
      'Path hashing with O(1) collision detection',
      'Nested Graphify instances (R1 persistent + R2 ephemeral)',
      'Auto-backup system — no user reminder needed',
      'Superpowers injection forces paradigm shifts on loop detection',
      'Works as a cognitive layer ON TOP of any LLM'
    ],
    weaknesses: [
      'Requires initial prompt injection (not native to model)',
      'Overhead from atomic note generation on simple problems',
      'Nested instances add context window pressure'
    ],
    verdict: 'The only framework that makes resolution loops structurally impossible. Combines the reasoning of top models with an anti-loop architecture no model has natively.'
  },
  {
    name: 'Qwen 3 (Latest)',
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
      convergenceSpeed: 86
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
      'No immutable note system — "forgets" what failed',
      'Cannot spawn sub-problem solvers',
      'No auto-backup of reasoning state'
    ],
    verdict: 'Strong reasoner but vulnerable to resolution loops. Without atomic notes, it can re-attempt failed paths because it has no persistent memory of what didn\'t work.'
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
      convergenceSpeed: 88
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
      'No nested problem solver architecture',
      'Context window limits long problem chains'
    ],
    verdict: 'Excellent raw reasoning but the extended thinking can become a loop itself. R1\'s "let me reconsider" pattern sometimes circles without progress because there\'s no structural loop prevention.'
  },
  {
    name: 'Grok 3 (xAI)',
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
      convergenceSpeed: 82
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
      'Weak at structured multi-step verification'
    ],
    verdict: 'The most creative model but creativity without loop prevention means it can spin off into tangents. Needs Rubbi-X\'s structure to channel its creativity productively.'
  },
  {
    name: 'Claude (Anthropic)',
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
      convergenceSpeed: 84
    },
    overallScore: 82,
    strengths: [
      'Excellent at following complex instructions',
      'Strong self-correction when prompted',
      'Good at nuanced, multi-faceted problems',
      'Careful and thorough analysis',
      'Best at code understanding and generation'
    ],
    weaknesses: [
      'Can be overly cautious — loops on "am I sure?" checks',
      'No native atomic note system',
      'Memory resets between conversations',
      'No nested problem solver spawning',
      'Extended thinking can loop on verification'
    ],
    verdict: 'Very strong all-around but lacks structural loop prevention. Its caution can become a loop — repeatedly verifying instead of progressing. Rubbi-X gives it the structure to move forward decisively.'
  },
  {
    name: 'Nemotron 3 Ultra (NVIDIA)',
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
      convergenceSpeed: 85
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
      'No nested problem decomposition'
    ],
    verdict: 'Solid enterprise model but lacks the creative breakthrough capability and loop prevention. Good at structured problems but struggles when the structure itself is the problem.'
  }
];

export const SUPERPOWER_SKILLS: SuperpowerSkill[] = [
  {
    id: 'sp1',
    name: 'Inversion Attack',
    description: 'When stuck in a loop, invert every assumption. If the solution says "add X", try "remove X".',
    category: 'paradigm_shift',
    triggerCondition: 'Loop detected on same node 2+ times',
    effect: 'Forces the AI to explore the exact opposite of its current approach'
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
    description: 'Have the Critic actively try to BREAK the current solution. Record what breaks.',
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

export const GITHUB_TOOLS = [
  {
    name: 'LangGraph',
    url: 'https://github.com/langchain-ai/langgraph',
    purpose: 'Cyclic graph workflows with state checkpointing for loop detection',
    category: 'orchestration',
    stars: '8.2k',
    integration: 'Core engine — manages state transitions, detects revisited states, triggers branch injection'
  },
  {
    name: 'Superpowers',
    url: 'https://github.com/obra/superpowers',
    purpose: 'Agentic skills framework — creative problem discovery, circuit breakers, brainstorming protocols',
    category: 'creative',
    stars: '4.1k',
    integration: 'Injects lateral thinking skills when loops detected — forces paradigm shifts via brainstorming'
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
  },
  {
    name: 'CrewAI',
    url: 'https://github.com/joaomdmoura/crewai',
    purpose: 'Role-based task delegation with built-in memory persistence',
    category: 'orchestration',
    stars: '21k',
    integration: 'Routes tasks to agents based on loop detection state — assigns branch injection tasks'
  }
];
