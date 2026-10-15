export interface ProblemNode {
  id: string;
  label: string;
  dimension: ProblemDimension;
  complexity: number;
  connections: string[];
  status: 'unsolved' | 'analyzing' | 'resolved' | 'vetted';
  resolution?: string;
  confidence: number;
}

export type ProblemDimension = 'structural' | 'temporal' | 'causal' | 'relational' | 'constraint' | 'emergent';

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

export interface ResolutionPath {
  id: string;
  name: string;
  probability: number;
  steps: string[];
  tools: string[];
  estimatedTime: string;
  confidence: number;
  risk: 'low' | 'medium' | 'high';
}

export interface DeterministicFactor {
  name: string;
  abbr: string;
  score: number;
  maxScore: number;
  description: string;
  trend: 'up' | 'down' | 'stable';
}

export interface VettingResult {
  agentId: string;
  agentName: string;
  verdict: 'approved' | 'rejected' | 'conditional';
  confidence: number;
  feedback: string;
  timestamp: number;
}

export interface GitHubTool {
  name: string;
  url: string;
  purpose: string;
  category: 'orchestration' | 'graph' | 'llm' | 'storage' | 'visualization' | 'safety' | 'optimization';
  stars: string;
  integration: string;
}

export interface WorkflowStep {
  id: number;
  name: string;
  description: string;
  status: 'pending' | 'active' | 'complete';
  duration: string;
}
