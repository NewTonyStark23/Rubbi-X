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
  };
  overallScore: number;
  strengths: string[];
  weaknesses: string[];
  verdict: string;
}

export interface GraphifyInstance {
  id: string;
  label: string;
  type: 'persistent' | 'ephemeral';
  purpose: string;
  status: 'active' | 'backed_up' | 'archived' | 'deleted';
  nodeCount: number;
  atomicNoteCount: number;
  backupCount: number;
  createdAt: number;
  lifecycle: LifecycleEvent[];
}

export interface LifecycleEvent {
  timestamp: number;
  event: 'spawned' | 'solving' | 'loop_detected' | 'resolved' | 'backed_up' | 'merged_to_parent' | 'deleted' | 'restored';
  detail: string;
  source?: string;
  target?: string;
}

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

export interface BackupEntry {
  id: string;
  sourceInstanceId: string;
  sourceLabel: string;
  timestamp: number;
  snapshotSize: string;
  nodeCount: number;
  noteCount: number;
  reason: string;
  restorable: boolean;
}

export interface SuperpowerSkill {
  id: string;
  name: string;
  description: string;
  category: 'creative' | 'analytical' | 'lateral' | 'paradigm_shift';
  triggerCondition: string;
  effect: string;
}
