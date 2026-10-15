import { useState, useEffect } from 'react';
import { GraphifyInstance, LifecycleEvent, BackupEntry } from '../types';

export default function NestedGraphifyView() {
  const [instances, setInstances] = useState<GraphifyInstance[]>([]);
  const [backups, setBackups] = useState<BackupEntry[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [scenario, setScenario] = useState<'coding' | 'trading' | 'question'>('coding');
  const [simStep, setSimStep] = useState(0);

  const scenarios = {
    coding: {
      title: 'Coding Agent Scenario',
      description: 'Agent is building a React app. A bug appears. Rubbi-X 2 spawns to fix it, learns, backs up to R1, then deletes.',
      steps: [
        { event: 'R1 spawned', detail: 'Persistent Graphify for React project architecture', type: 'persistent' },
        { event: 'R1 mapping', detail: '6 dimensions mapped: component tree, state flow, API calls, dependencies, build constraints, emergent patterns', type: 'persistent' },
        { event: 'Bug detected', detail: 'State management loop detected in useEffect — component re-renders infinitely', type: 'problem' },
        { event: 'R2 spawned', detail: 'Ephemeral Graphify spawned to resolve the useEffect loop', type: 'ephemeral' },
        { event: 'R2 solving', detail: 'R2 maps the bug across 6 dimensions, takes resolution steps, writes atomic notes', type: 'ephemeral' },
        { event: 'R2 loop caught', detail: 'R2 tried adding deps to useEffect — same loop! Atomic note: BLOCKED. Injecting Inversion Attack.', type: 'loop' },
        { event: 'R2 resolved', detail: 'R2 found solution: extract state to useRef. Atomic notes confirm fix. Confidence: 97%', type: 'resolved' },
        { event: 'R2 → R1 backup', detail: 'R2 atomic notes + solution backed up to R1 persistent memory', type: 'backup' },
        { event: 'R2 deleted', detail: 'R2 ephemeral instance deleted to save context window space', type: 'delete' },
        { event: 'R1 updated', detail: 'R1 now contains the fix + atomic notes. Future useEffect bugs will reference this memory.', type: 'persistent' },
      ]
    },
    trading: {
      title: 'Stock Trading Agent Scenario',
      description: 'AI trading agent is uncertain about a buy/sell decision. Rubbi-X 2 spawns to resolve uncertainty.',
      steps: [
        { event: 'R1 spawned', detail: 'Persistent Graphify for trading strategy architecture', type: 'persistent' },
        { event: 'R1 mapping', detail: 'Dimensions: market structure, timing, causal indicators, correlations, risk constraints, emergent patterns', type: 'persistent' },
        { event: 'Uncertainty detected', detail: 'Conflicting signals: bullish pattern but bearish volume. AI unsure whether to buy or sell.', type: 'problem' },
        { event: 'R2 spawned', detail: 'Ephemeral Graphify spawned to resolve the buy/sell decision', type: 'ephemeral' },
        { event: 'R2 analyzing', detail: 'R2 maps the conflict. Tries momentum analysis → atomic note: inconclusive. Tries mean reversion → loop detected!', type: 'ephemeral' },
        { event: 'R2 loop caught', detail: 'R2 circled back to same momentum check. BLOCKED. Injecting Dimensional Escape — analyze from volatility perspective.', type: 'loop' },
        { event: 'R2 resolved', detail: 'Resolution: HOLD. Volatility regime suggests neither buy nor sell. Atomic notes encode the decision tree.', type: 'resolved' },
        { event: 'R2 → R1 backup', detail: 'Decision tree + atomic notes backed up to R1. Future similar patterns will reference this.', type: 'backup' },
        { event: 'R2 deleted', detail: 'R2 ephemeral instance deleted. Context window freed.', type: 'delete' },
        { event: 'R1 enriched', detail: 'R1 now has this decision pattern. Next time similar signals appear, R1 recalls instantly.', type: 'persistent' },
      ]
    },
    question: {
      title: 'Difficult Question Scenario',
      description: 'AI receives a question it cannot answer confidently. Rubbi-X 2 spawns to reason through it.',
      steps: [
        { event: 'R1 spawned', detail: 'Persistent Graphify for the conversation/project context', type: 'persistent' },
        { event: 'R1 active', detail: 'R1 maintaining context of ongoing work, codebase understanding, user preferences', type: 'persistent' },
        { event: 'Hard question', detail: 'User asks: "What\'s the optimal cache invalidation strategy for our specific architecture?"', type: 'problem' },
        { event: 'R2 spawned', detail: 'Ephemeral Graphify spawned to deeply reason about cache strategies', type: 'ephemeral' },
        { event: 'R2 exploring', detail: 'R2 tries TTL-based → atomic note: doesn\'t fit event-driven arch. Tries event-based → partial match.', type: 'ephemeral' },
        { event: 'R2 loop caught', detail: 'R2 re-evaluates TTL approach (already failed). BLOCKED by path hash. Injects Constraint Removal.', type: 'loop' },
        { event: 'R2 resolved', detail: 'Hybrid solution: event-driven invalidation with TTL fallback. Confidence: 94%. Atomic notes encode trade-offs.', type: 'resolved' },
        { event: 'R2 → R1 backup', detail: 'Cache strategy decision backed up to R1. Architecture knowledge enriched.', type: 'backup' },
        { event: 'R2 deleted', detail: 'R2 ephemeral instance cleaned up.', type: 'delete' },
        { event: 'R1 informed', detail: 'R1 now "knows" the cache strategy. Follow-up questions answered instantly from R1 memory.', type: 'persistent' },
      ]
    }
  };

  const currentScenario = scenarios[scenario];

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(0);
    setInstances([]);
    setBackups([]);
  };

  useEffect(() => {
    if (!isSimulating) return;
    if (simStep >= currentScenario.steps.length) {
      setIsSimulating(false);
      return;
    }

    const timer = setTimeout(() => {
      const step = currentScenario.steps[simStep];
      
      if (step.type === 'persistent' && simStep < 2) {
        setInstances(prev => {
          if (prev.find(i => i.id === 'r1')) return prev;
          return [...prev, {
            id: 'r1',
            label: 'Rubbi-X 1 (Persistent)',
            type: 'persistent' as const,
            purpose: scenario === 'coding' ? 'React project architecture' : scenario === 'trading' ? 'Trading strategy' : 'Conversation context',
            status: 'active' as const,
            nodeCount: 6,
            atomicNoteCount: simStep * 3,
            backupCount: 0,
            createdAt: Date.now(),
            lifecycle: [{ timestamp: Date.now(), event: 'spawned', detail: step.detail }]
          }];
        });
      } else if (step.type === 'ephemeral' && step.event.includes('spawned')) {
        setInstances(prev => [...prev, {
          id: 'r2',
          label: 'Rubbi-X 2 (Ephemeral)',
          type: 'ephemeral' as const,
          purpose: 'Resolve: ' + (scenario === 'coding' ? 'useEffect loop' : scenario === 'trading' ? 'buy/sell uncertainty' : 'cache strategy'),
          status: 'active' as const,
          nodeCount: 6,
          atomicNoteCount: 0,
          backupCount: 0,
          createdAt: Date.now(),
          lifecycle: [{ timestamp: Date.now(), event: 'spawned', detail: step.detail }]
        }]);
      } else if (step.type === 'ephemeral') {
        setInstances(prev => prev.map(i => {
          if (i.id === 'r2') {
            const noteCount = i.atomicNoteCount + (step.event.includes('loop') ? 1 : 2);
            return {
              ...i,
              atomicNoteCount: noteCount,
              lifecycle: [...i.lifecycle, { timestamp: Date.now(), event: 'solving' as const, detail: step.detail }]
            };
          }
          return i;
        }));
      } else if (step.type === 'loop') {
        setInstances(prev => prev.map(i => {
          if (i.id === 'r2') {
            return {
              ...i,
              lifecycle: [...i.lifecycle, { timestamp: Date.now(), event: 'loop_detected' as const, detail: step.detail }]
            };
          }
          return i;
        }));
      } else if (step.type === 'resolved') {
        setInstances(prev => prev.map(i => {
          if (i.id === 'r2') {
            return {
              ...i,
              status: 'backed_up' as const,
              lifecycle: [...i.lifecycle, { timestamp: Date.now(), event: 'resolved' as const, detail: step.detail }]
            };
          }
          return i;
        }));
      } else if (step.type === 'backup') {
        setBackups(prev => [...prev, {
          id: `backup-${Date.now()}`,
          sourceInstanceId: 'r2',
          sourceLabel: 'Rubbi-X 2',
          timestamp: Date.now(),
          snapshotSize: `${Math.floor(Math.random() * 50) + 20}KB`,
          nodeCount: 6,
          noteCount: 8,
          reason: step.detail,
          restorable: true
        }]);
        setInstances(prev => prev.map(i => {
          if (i.id === 'r1') {
            return {
              ...i,
              backupCount: i.backupCount + 1,
              atomicNoteCount: i.atomicNoteCount + 8,
              lifecycle: [...i.lifecycle, { timestamp: Date.now(), event: 'backed_up' as const, detail: step.detail, source: 'R2' }]
            };
          }
          if (i.id === 'r2') {
            return {
              ...i,
              lifecycle: [...i.lifecycle, { timestamp: Date.now(), event: 'merged_to_parent' as const, detail: step.detail, target: 'R1' }]
            };
          }
          return i;
        }));
      } else if (step.type === 'delete') {
        setInstances(prev => prev.map(i => {
          if (i.id === 'r2') {
            return {
              ...i,
              status: 'deleted' as const,
              lifecycle: [...i.lifecycle, { timestamp: Date.now(), event: 'deleted' as const, detail: step.detail }]
            };
          }
          return i;
        }));
      } else if (step.type === 'persistent' && simStep >= currentScenario.steps.length - 1) {
        setInstances(prev => prev.map(i => {
          if (i.id === 'r1') {
            return {
              ...i,
              lifecycle: [...i.lifecycle, { timestamp: Date.now(), event: 'restored' as const, detail: step.detail }]
            };
          }
          return i;
        }));
      }

      setSimStep(prev => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isSimulating, simStep, scenario]);

  const getStepColor = (type: string) => {
    switch (type) {
      case 'persistent': return 'border-purple-500/30 bg-purple-500/5 text-purple-300';
      case 'ephemeral': return 'border-cyan-500/30 bg-cyan-500/5 text-cyan-300';
      case 'problem': return 'border-yellow-500/30 bg-yellow-500/5 text-yellow-300';
      case 'loop': return 'border-red-500/30 bg-red-500/5 text-red-300';
      case 'resolved': return 'border-green-500/30 bg-green-500/5 text-green-300';
      case 'backup': return 'border-orange-500/30 bg-orange-500/5 text-orange-300';
      case 'delete': return 'border-gray-500/30 bg-gray-500/5 text-gray-300';
      default: return 'border-gray-500/30 bg-gray-500/5 text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Explanation */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">🧊</span> Nested Graphify Architecture
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Rubbi-X uses <span className="text-purple-300 font-medium">nested instances</span>. R1 is persistent (stays alive for the project). 
          R2 is ephemeral (spawns for problems, resolves, backs up to R1, then deletes itself). This means the AI always has its project knowledge 
          while temporarily spawning dedicated solvers for specific issues.
        </p>

        {/* Architecture Diagram */}
        <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* R1 */}
            <div className="p-4 rounded-xl border-2 border-purple-500/50 bg-purple-500/5 w-64">
              <div className="text-center">
                <div className="text-3xl mb-2">🎲</div>
                <h3 className="text-sm font-bold text-purple-300">Rubbi-X 1</h3>
                <p className="text-[10px] text-gray-400 mt-1">PERSISTENT</p>
                <div className="mt-2 text-[10px] text-gray-500 space-y-0.5">
                  <p>• Project architecture map</p>
                  <p>• Accumulated atomic notes</p>
                  <p>• Auto-backup target</p>
                  <p>• Survives across sessions</p>
                </div>
                <div className="mt-2 px-2 py-1 rounded bg-purple-500/10 text-[10px] text-purple-300">
                  🔄 Auto-backups enabled
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <div className="text-xs text-orange-400">backup</div>
              <div className="text-orange-400">←———</div>
              <div className="text-xs text-cyan-400">spawn</div>
              <div className="text-cyan-400">———→</div>
            </div>

            {/* R2 */}
            <div className="p-4 rounded-xl border-2 border-cyan-500/50 bg-cyan-500/5 w-64">
              <div className="text-center">
                <div className="text-3xl mb-2">🎲</div>
                <h3 className="text-sm font-bold text-cyan-300">Rubbi-X 2</h3>
                <p className="text-[10px] text-gray-400 mt-1">EPHEMERAL</p>
                <div className="mt-2 text-[10px] text-gray-500 space-y-0.5">
                  <p>• Spawns for specific problem</p>
                  <p>• Solves with anti-loop engine</p>
                  <p>• Writes atomic notes</p>
                  <p>• Backs up → deletes self</p>
                </div>
                <div className="mt-2 px-2 py-1 rounded bg-cyan-500/10 text-[10px] text-cyan-300">
                  ⏱️ Lifecycle: spawn → solve → backup → delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulation */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Live Simulation</h3>
          <div className="flex gap-2">
            <select
              value={scenario}
              onChange={(e) => { setScenario(e.target.value as 'coding' | 'trading' | 'question'); setIsSimulating(false); setSimStep(0); setInstances([]); setBackups([]); }}
              className="text-xs bg-gray-800 border border-gray-700 rounded-lg px-2 py-1.5 text-gray-300"
            >
              <option value="coding">💻 Coding Agent</option>
              <option value="trading">📈 Trading Agent</option>
              <option value="question">❓ Hard Question</option>
            </select>
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`text-xs px-4 py-1.5 rounded-lg font-medium ${
                isSimulating ? 'bg-gray-700 text-gray-400 cursor-wait' : 'bg-purple-600 text-white hover:bg-purple-500'
              }`}
            >
              {isSimulating ? 'Running...' : '▶ Simulate'}
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">{currentScenario.description}</p>

        {/* Instance Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {instances.map(instance => (
            <div
              key={instance.id}
              className={`p-3 rounded-xl border ${
                instance.status === 'deleted' ? 'border-gray-600/30 bg-gray-800/20 opacity-50' :
                instance.type === 'persistent' ? 'border-purple-500/30 bg-purple-500/5' :
                'border-cyan-500/30 bg-cyan-500/5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">{instance.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  instance.status === 'active' ? 'bg-green-500/20 text-green-300' :
                  instance.status === 'deleted' ? 'bg-gray-500/20 text-gray-400' :
                  'bg-orange-500/20 text-orange-300'
                }`}>
                  {instance.status}
                </span>
              </div>
              <div className="text-[10px] text-gray-400 space-y-0.5">
                <p>Purpose: {instance.purpose}</p>
                <p>Nodes: {instance.nodeCount} | Notes: {instance.atomicNoteCount} | Backups: {instance.backupCount}</p>
              </div>
              {/* Lifecycle events */}
              <div className="mt-2 space-y-0.5 max-h-24 overflow-y-auto">
                {instance.lifecycle.slice(-4).map((evt, i) => (
                  <div key={i} className="text-[9px] text-gray-500 flex items-start gap-1">
                    <span className="text-gray-600">•</span>
                    <span>{evt.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {instances.length === 0 && (
            <div className="col-span-2 text-center py-6 text-gray-600 text-xs">
              Click "Simulate" to see the nested Graphify lifecycle in action
            </div>
          )}
        </div>

        {/* Step Timeline */}
        <div className="bg-gray-950 rounded-xl p-3 max-h-48 overflow-y-auto">
          <div className="text-[10px] text-gray-500 font-medium mb-2 uppercase tracking-wider">Lifecycle Timeline</div>
          {currentScenario.steps.slice(0, simStep).map((step, i) => (
            <div key={i} className={`text-[10px] py-1 px-2 rounded mb-1 ${getStepColor(step.type)}`}>
              <span className="font-medium">{step.event}</span>
              <span className="text-gray-500 ml-2">{step.detail}</span>
            </div>
          ))}
        </div>

        {/* Backup Log */}
        {backups.length > 0 && (
          <div className="mt-4 p-3 rounded-xl bg-orange-500/5 border border-orange-500/20">
            <div className="text-[10px] text-orange-400 font-bold mb-2">📦 AUTO-BACKUP LOG</div>
            {backups.map(backup => (
              <div key={backup.id} className="text-[10px] text-gray-400 mb-1">
                <span className="text-orange-300">{backup.sourceLabel}</span> → R1 | 
                Size: {backup.snapshotSize} | {backup.nodeCount} nodes, {backup.noteCount} notes | 
                <span className="text-green-300"> Restorable: {backup.restorable ? 'Yes' : 'No'}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* End-of-session prompt */}
      <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-2xl border border-purple-500/30 p-6">
        <h3 className="text-sm font-bold text-purple-300 mb-2">🏁 END-OF-SESSION BEHAVIOR</h3>
        <p className="text-sm text-gray-300 mb-3">
          When the coding session ends, Rubbi-X automatically prompts the user:
        </p>
        <div className="bg-gray-950 rounded-xl p-4 border border-gray-800 font-mono text-xs text-gray-300">
          <p className="text-purple-300 mb-2">🎲 Rubbi-X Status Report:</p>
          <p className="text-gray-400">• <span className="text-purple-300">Rubbi-X 1</span> (Persistent) is still active with 14 nodes and 23 atomic notes.</p>
          <p className="text-gray-400">• It contains your project's architecture map, all resolved issues, and learned patterns.</p>
          <p className="text-gray-400">• If kept, it serves as a backup for future edits — the AI will "remember" this project.</p>
          <p className="text-gray-400">• If deleted, the AI starts fresh next session (no memory of this project's patterns).</p>
          <p className="text-yellow-300 mt-3">→ Keep Rubbi-X 1? [Y/n]</p>
        </div>
      </div>
    </div>
  );
}
