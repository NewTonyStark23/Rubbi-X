// Rubbi-X v4.0 Types - Enhanced with Incremental Processing & AST-Aware Resolution

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
  blocked: boolean;
  // v4.0: Incremental processing
  delta?: string; // Only the change from previous state
  fingerprint?: string; // Hash of note content for dedup
  version: number; // Note version for incremental updates
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
  // v4.0: Predictive loop prevention
  predictedLoopRisk: number; // 0-100, predicts likelihood of loop before it happens
  lastAccessed: number;
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
  // v4.0: Incremental optimization
  deltaOnly: boolean; // true if only reprocessing changed parts
  estimatedSpeedup: number; // e.g., 10x faster
}

export interface SuperpowerSkill {
  id: string;
  name: string;
  description: string;
  category: 'creative' | 'analytical' | 'lateral' | 'paradigm_shift' | 'incremental';
  triggerCondition: string;
  effect: string;
  // v4.0: Self-evolving
  successRate: number; // Learns from usage
  usageCount: number;
}

export interface CocoIndexIntegration {
  name: string;
  purpose: string;
  speedup: string;
  integration: string;
}

export interface ModelComparison {
  name: string;
  icon: string;
  color: string;
  ratings: {
    problemDecomposition: number;
    loopAvoidance: number;
    creativeResolution: number;
    memoryPersistence: number;
    selfCorrection: number;
    crossDomainTransfer: number;
    atomicReasoning: number;
    convergenceSpeed: number;
    // v4.0: New metrics
    incrementalProcessing: number;
    predictiveLoopPrevention: number;
    astAwareResolution: number;
  };
  overallScore: number;
  strengths: string[];
  weaknesses: string[];
  verdict: string;
}
