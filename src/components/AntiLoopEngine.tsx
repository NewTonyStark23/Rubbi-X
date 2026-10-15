import { useState, useEffect, useRef } from 'react';
import { AtomicNote, LoopEvent, GraphifyNode } from '../types';
import { DIMENSIONS } from '../data';

interface Props {
  problem: string;
  isSolving: boolean;
  phase: number;
  onLoopDetected: (event: LoopEvent) => void;
  onAtomicNote: (note: AtomicNote) => void;
}

function generatePathHash(nodes: string[], action: string): string {
  const str = nodes.join('-') + ':' + action;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

export default function AntiLoopEngine({ problem, isSolving, phase, onLoopDetected, onAtomicNote }: Props) {
  const [nodes, setNodes] = useState<GraphifyNode[]>([]);
  const [loopEvents, setLoopEvents] = useState<LoopEvent[]>([]);
  const [atomicNotes, setAtomicNotes] = useState<AtomicNote[]>([]);
  const [currentIteration, setCurrentIteration] = useState(0);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const iterationRef = useRef(0);

  // Initialize nodes from problem
  useEffect(() => {
    if (problem) {
      const initialNodes: GraphifyNode[] = DIMENSIONS.map((dim, i) => ({
        id: `node-${i}`,
        dimension: dim.key,
        label: dim.label,
        atomicNotes: [],
        visitedPaths: [],
        loopCount: 0,
        isBlocked: false,
        confidence: 0
      }));
      setNodes(initialNodes);
      setLoopEvents([]);
      setAtomicNotes([]);
      setCurrentIteration(0);
      iterationRef.current = 0;
    }
  }, [problem]);

  // Simulate resolution iterations with loop detection
  useEffect(() => {
    if (!isSolving || phase < 2) return;

    const simulateIteration = () => {
      iterationRef.current += 1;
      const iter = iterationRef.current;
      setCurrentIteration(iter);

      // Pick a node to process
      const nodeIdx = (iter - 1) % 6;
      const nodeId = `node-${nodeIdx}`;
      setActiveNodeId(nodeId);

      // Generate path hash for this attempt
      const action = iter <= 6 ? 'initial_explore' : iter <= 10 ? 'refine' : 'converge';
      const pathHash = generatePathHash([nodeId, `iter-${iter}`], action);

      // Check if this is a loop (simulated: after iteration 6, some nodes get revisited)
      const isLoop = iter > 6 && Math.random() > 0.5;

      if (isLoop) {
        // LOOP DETECTED - create atomic note marking failure
        const note: AtomicNote = {
          id: `note-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          timestamp: Date.now(),
          nodeId,
          action: `Attempted ${action} on ${DIMENSIONS[nodeIdx].label}`,
          result: 'loop_detected',
          observation: `Path hash ${pathHash} matches previous visit. This node has been explored ${nodes[nodeIdx]?.loopCount || 0} times before.`,
          lesson: `BLOCKED: ${DIMENSIONS[nodeIdx].label} dimension via ${action} approach. Need lateral shift.`,
          pathHash,
          dimension: DIMENSIONS[nodeIdx].key,
          agents: ['critic', 'synthesizer'],
          tools: ['Guardrails AI', 'LangGraph'],
          blocked: true
        };

        const loopEvent: LoopEvent = {
          id: `loop-${Date.now()}`,
          timestamp: Date.now(),
          currentNodeId: nodeId,
          matchedPathHash: pathHash,
          visitCount: (nodes[nodeIdx]?.loopCount || 0) + 1,
          branchReason: `Hash collision on ${DIMENSIONS[nodeIdx].label} — injecting Superpower skill`,
          newPathInjected: `Dimensional Escape → ${DIMENSIONS[(nodeIdx + 3) % 6].label}`
        };

        setLoopEvents(prev => [...prev, loopEvent]);
        setAtomicNotes(prev => [...prev, note]);
        onLoopDetected(loopEvent);
        onAtomicNote(note);

        // Update node to mark loop
        setNodes(prev => prev.map((n, i) => {
          if (i === nodeIdx) {
            return {
              ...n,
              loopCount: n.loopCount + 1,
              atomicNotes: [...n.atomicNotes, note],
              visitedPaths: [...n.visitedPaths, pathHash],
              isBlocked: n.loopCount >= 1
            };
          }
          return n;
        }));
      } else {
        // Normal progression - create success/partial note
        const result: AtomicNote['result'] = iter > 10 ? 'success' : iter > 6 ? 'partial' : 'success';
        const note: AtomicNote = {
          id: `note-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          timestamp: Date.now(),
          nodeId,
          action: `${action} on ${DIMENSIONS[nodeIdx].label}`,
          result,
          observation: result === 'success' 
            ? `Progress made on ${DIMENSIONS[nodeIdx].label}. Confidence increasing.`
            : `Partial progress. Some sub-problems resolved, others remain.`,
          lesson: result === 'success'
            ? `${DIMENSIONS[nodeIdx].label} dimension converging via ${action}.`
            : `Need additional iteration on ${DIMENSIONS[nodeIdx].label} sub-components.`,
          pathHash,
          dimension: DIMENSIONS[nodeIdx].key,
          agents: ['analyst', 'strategist'],
          tools: ['LangGraph', 'ChromaDB'],
          blocked: false
        };

        setAtomicNotes(prev => [...prev, note]);
        onAtomicNote(note);

        setNodes(prev => prev.map((n, i) => {
          if (i === nodeIdx) {
            return {
              ...n,
              visitedPaths: [...n.visitedPaths, pathHash],
              atomicNotes: [...n.atomicNotes, note],
              confidence: Math.min(99, n.confidence + 15 + Math.floor(Math.random() * 10))
            };
          }
          return n;
        }));
      }
    };

    const interval = setInterval(simulateIteration, 1200);
    return () => clearInterval(interval);
  }, [isSolving, phase]);

  const getDimensionColor = (dim: string) => {
    return DIMENSIONS.find(d => d.key === dim)?.color || '#fff';
  };

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-xl">🔄</span> Anti-Loop Engine
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
              INTERNAL — AI USE ONLY
            </span>
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Atomic notes • Path hashing • Loop detection • Branch injection
          </p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white">Iter #{currentIteration}</div>
          <div className="text-[10px] text-gray-500">{atomicNotes.length} notes • {loopEvents.length} loops caught</div>
        </div>
      </div>

      {/* Graphify Cube - Internal View */}
      <div className="grid grid-cols-6 gap-2 mb-4">
        {nodes.map((node, i) => (
          <div
            key={node.id}
            className={`relative p-2 rounded-lg border transition-all ${
              activeNodeId === node.id ? 'ring-2 ring-purple-500' : ''
            } ${node.isBlocked ? 'border-red-500/50 bg-red-500/10' : 'border-gray-700/50 bg-gray-800/30'}`}
          >
            <div className="flex items-center gap-1 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getDimensionColor(node.dimension) }} />
              <span className="text-[9px] font-medium text-gray-300 truncate">{node.label}</span>
            </div>
            
            {/* Atomic note count */}
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-gray-500">📝{node.atomicNotes.length}</span>
              {node.loopCount > 0 && (
                <span className="text-[8px] text-red-400">🔄{node.loopCount}</span>
              )}
              {node.isBlocked && (
                <span className="text-[8px] text-red-400">🚫</span>
              )}
            </div>

            {/* Confidence bar */}
            <div className="mt-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${node.confidence}%`,
                  backgroundColor: getDimensionColor(node.dimension)
                }}
              />
            </div>

            {/* Active indicator */}
            {activeNodeId === node.id && (
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Recent Atomic Notes Feed */}
      <div className="bg-gray-950 rounded-xl p-3 max-h-40 overflow-y-auto">
        <div className="text-[10px] text-gray-500 font-medium mb-2 uppercase tracking-wider">
          Atomic Note Stream (Internal Memory)
        </div>
        {atomicNotes.slice(-6).reverse().map((note) => (
          <div
            key={note.id}
            className={`text-[10px] py-1 px-2 rounded mb-1 flex items-start gap-2 ${
              note.result === 'loop_detected'
                ? 'bg-red-500/10 border border-red-500/20 text-red-300'
                : note.result === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-300'
                : 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-300'
            }`}
          >
            <span>{note.result === 'loop_detected' ? '🚫' : note.result === 'success' ? '✅' : '⚠️'}</span>
            <div className="flex-1">
              <span className="font-medium">{note.action}</span>
              <span className="text-gray-500 ml-1">[{note.pathHash.slice(0, 6)}]</span>
              {note.blocked && <span className="ml-1 text-red-400 font-bold">BLOCKED</span>}
            </div>
          </div>
        ))}
        {atomicNotes.length === 0 && (
          <div className="text-[10px] text-gray-600 italic">Awaiting resolution attempts...</div>
        )}
      </div>

      {/* Loop Events */}
      {loopEvents.length > 0 && (
        <div className="mt-3 p-3 rounded-xl bg-red-500/5 border border-red-500/20">
          <div className="text-[10px] text-red-400 font-bold mb-2">
            ⚠️ LOOP DETECTIONS — Branch Injection Active
          </div>
          {loopEvents.slice(-3).map((event) => (
            <div key={event.id} className="text-[10px] text-gray-400 mb-1">
              <span className="text-red-300">Visit #{event.visitCount}</span> on node{' '}
              <span className="text-white">{event.currentNodeId}</span> →{' '}
              <span className="text-purple-300">{event.newPathInjected}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
