import { Agent, GitHubTool, DeterministicFactor } from './types';

export const AGENTS: Agent[] = [
  {
    id: 'analyst',
    name: 'Deep Analyst',
    role: 'Problem Decomposition & Pattern Recognition',
    icon: '🔬',
    status: 'idle',
    expertise: ['Graph Theory', 'Causal Analysis', 'Pattern Recognition', 'Dimensional Mapping'],
    resolutionCount: 14823,
    accuracyScore: 97.3
  },
  {
    id: 'strategist',
    name: 'Quantum Strategist',
    role: 'Multi-path Resolution Generation',
    icon: '🧠',
    status: 'idle',
    expertise: ['Game Theory', 'Bayesian Optimization', 'Monte Carlo Methods', 'Heuristic Search'],
    resolutionCount: 12456,
    accuracyScore: 95.8
  },
  {
    id: 'critic',
    name: 'Adversarial Critic',
    role: 'Stress Testing & Edge Case Discovery',
    icon: '⚡',
    status: 'idle',
    expertise: ['Red Team Analysis', 'Edge Case Mining', 'Failure Mode Analysis', 'Robustness Testing'],
    resolutionCount: 9871,
    accuracyScore: 98.1
  },
  {
    id: 'synthesizer',
    name: 'Meta Synthesizer',
    role: 'Cross-domain Solution Integration',
    icon: '🔮',
    status: 'idle',
    expertise: ['Knowledge Graphs', 'Transfer Learning', 'Analogical Reasoning', 'Solution Fusion'],
    resolutionCount: 11234,
    accuracyScore: 96.5
  },
  {
    id: 'prime',
    name: 'Prime Vetter',
    role: 'Final Resolution Validation & Consensus',
    icon: '👑',
    status: 'idle',
    expertise: ['Consensus Algorithms', 'Formal Verification', 'Multi-agent Agreement', 'Quality Assurance'],
    resolutionCount: 15672,
    accuracyScore: 99.2
  }
];

export const GITHUB_TOOLS: GitHubTool[] = [
  {
    name: 'LangGraph',
    url: 'https://github.com/langchain-ai/langgraph',
    purpose: 'Agent orchestration & cyclic workflow graphs for multi-step problem resolution',
    category: 'orchestration',
    stars: '8.2k',
    integration: 'Core workflow engine - manages agent communication loops and state machines'
  },
  {
    name: 'AutoGen',
    url: 'https://github.com/microsoft/autogen',
    purpose: 'Multi-agent conversation framework for collaborative problem solving',
    category: 'orchestration',
    stars: '35k',
    integration: 'Agent-to-agent dialogue protocol for consensus building'
  },
  {
    name: 'CrewAI',
    url: 'https://github.com/joaomdmoura/crewai',
    purpose: 'Role-based agent task delegation and execution',
    category: 'orchestration',
    stars: '21k',
    integration: 'Task routing and role assignment in the agent swarm'
  },
  {
    name: 'Neo4j',
    url: 'https://github.com/neo4j/neo4j',
    purpose: 'Graph database for problem node storage and relationship mapping',
    category: 'graph',
    stars: '13k',
    integration: 'Persistent graph storage for Graphify engine - problem dimensions and connections'
  },
  {
    name: 'NetworkX',
    url: 'https://github.com/networkx/networkx',
    purpose: 'Graph algorithms for shortest-path resolution and centrality analysis',
    category: 'graph',
    stars: '15k',
    integration: 'Algorithmic backbone for problem decomposition and pathfinding'
  },
  {
    name: 'ChromaDB',
    url: 'https://github.com/chroma-core/chroma',
    purpose: 'Vector embeddings for similarity-based solution retrieval',
    category: 'storage',
    stars: '14k',
    integration: 'Solution memory - retrieves past resolutions similar to current problem'
  },
  {
    name: 'DSPy',
    url: 'https://github.com/stanfordnlp/dspy',
    purpose: 'Programmatic LLM prompting with optimization for resolution quality',
    category: 'optimization',
    stars: '18k',
    integration: 'Optimizes agent prompts for maximum resolution accuracy'
  },
  {
    name: 'Guardrails AI',
    url: 'https://github.com/guardrails-ai/guardrails',
    purpose: 'Output validation and safety constraints on agent resolutions',
    category: 'safety',
    stars: '4.5k',
    integration: 'Vetting pipeline safety layer - ensures resolutions meet quality gates'
  },
  {
    name: 'Semantic Kernel',
    url: 'https://github.com/microsoft/semantic-kernel',
    purpose: 'Plugin architecture for tool integration and reasoning chains',
    category: 'orchestration',
    stars: '21k',
    integration: 'Tool registry and reasoning chain management'
  },
  {
    name: 'D3.js',
    url: 'https://github.com/d3/d3',
    purpose: 'Interactive graph visualization for problem topology rendering',
    category: 'visualization',
    stars: '109k',
    integration: 'Real-time visualization of problem graph and resolution paths'
  },
  {
    name: 'LiteLLM',
    url: 'https://github.com/BerriAI/litellm',
    purpose: 'Unified LLM interface for multi-model agent backends',
    category: 'llm',
    stars: '13k',
    integration: 'Model routing - assigns optimal LLM to each agent based on task'
  },
  {
    name: 'MemGPT',
    url: 'https://github.com/cpacker/MemGPT',
    purpose: 'Long-term memory management for agent context persistence',
    category: 'storage',
    stars: '12k',
    integration: 'Agent memory layer - maintains context across resolution attempts'
  }
];

export const DETERMINISTIC_FACTORS: DeterministicFactor[] = [
  {
    name: 'Problem Complexity Score',
    abbr: 'PCS',
    score: 0,
    maxScore: 100,
    description: 'Quantifies the multi-dimensional complexity of the input problem',
    trend: 'stable'
  },
  {
    name: 'Resolution Confidence Index',
    abbr: 'RCI',
    score: 0,
    maxScore: 100,
    description: 'Bayesian confidence in the predicted optimal resolution path',
    trend: 'up'
  },
  {
    name: 'Agent Consensus Score',
    abbr: 'ACS',
    score: 0,
    maxScore: 100,
    description: 'Degree of agreement among all agents on the proposed solution',
    trend: 'up'
  },
  {
    name: 'Solution Viability Matrix',
    abbr: 'SVM',
    score: 0,
    maxScore: 100,
    description: 'Multi-criteria evaluation of solution feasibility and robustness',
    trend: 'stable'
  },
  {
    name: 'Temporal Decay Factor',
    abbr: 'TDF',
    score: 0,
    maxScore: 100,
    description: 'Time-sensitivity weighting - how urgency affects resolution priority',
    trend: 'down'
  },
  {
    name: 'Cross-Domain Applicability',
    abbr: 'CDA',
    score: 0,
    maxScore: 100,
    description: 'How many other problem domains this solution pattern can transfer to',
    trend: 'up'
  }
];

export const DIMENSIONS = [
  { key: 'structural', label: 'Structural', color: '#FF6B6B', description: 'Architecture & composition analysis' },
  { key: 'temporal', label: 'Temporal', color: '#4ECDC4', description: 'Time-based constraints & sequencing' },
  { key: 'causal', label: 'Causal', color: '#45B7D1', description: 'Cause-effect chain mapping' },
  { key: 'relational', label: 'Relational', color: '#96CEB4', description: 'Entity relationships & dependencies' },
  { key: 'constraint', label: 'Constraint', color: '#FFEAA7', description: 'Limitations & boundary conditions' },
  { key: 'emergent', label: 'Emergent', color: '#DDA0DD', description: 'Non-obvious patterns & hidden dynamics' }
];
