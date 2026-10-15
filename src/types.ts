export interface AtomicNote {
  id: string;
  timestamp: number;
  nodeId: string;
  action: string;
  result: 'success' | 'failure' | 'partial' | 'loop_detected';
  observation: string;
  lesson: string;
  pathHash: string;
  dimension: string;
  agents: string[];
  tools: string[];
  blocked: boolean;
}

export interface LoopEvent {
  id: string;
  timestamp: number;
  currentNodeId: string;
  matchedPathHash: string;
  visitCount: number;
  branchReason: string;
  newPathInjected: string;
}

export interface GraphifyNode {
  id: string;
  dimension: string;
  label: string;
  atomicNotes: AtomicNote[];
  visitedPaths: string[];
  loopCount: number;
  isBlocked: boolean;
  confidence: number;
}

export interface ResolutionPath {
  id: string;
  name: string;
  hash: string;
  nodes: string[];
  status: 'exploring' | 'converged' | 'dead_end' | 'loop_detected';
  iteration: number;
  probability: number;
  confidence: number;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  icon: string;
  status: 'idle' | 'active' | 'vetting' | 'complete';
  expertise: string[];
  resolutionCount: number;
  accuracyScore: number;
}

export interface GitHubTool {
  name: string;
  url: string;
  purpose: string;
  category: string;
  stars: string;
  integration: string;
}

export interface DeterministicFactor {
  name: string;
  abbr: string;
  score: number;
  maxScore: number;
  description: string;
  trend: 'up' | 'down' | 'stable';
}

export interface SuperpowerSkill {
  id: string;
  name: string;
  description: string;
  category: 'creative' | 'analytical' | 'lateral' | 'paradigm_shift';
  triggerCondition: string;
  effect: string;
}
