import { useState, useEffect } from 'react';
import { ProblemNode, ProblemDimension } from '../types';
import { DIMENSIONS } from '../data';

interface Props {
  problem: string;
  onSolve: () => void;
  isSolving: boolean;
}

function generateNodes(problem: string): ProblemNode[] {
  const words = problem.split(/\s+/).filter(w => w.length > 3);
  const nodes: ProblemNode[] = [];
  const dimensions: ProblemDimension[] = ['structural', 'temporal', 'causal', 'relational', 'constraint', 'emergent'];
  
  dimensions.forEach((dim, i) => {
    const label = words[i % words.length] || `Node ${i + 1}`;
    nodes.push({
      id: `node-${i}`,
      label: `${DIMENSIONS[i].label}: ${label.substring(0, 12)}`,
      dimension: dim,
      complexity: Math.floor(Math.random() * 40) + 60,
      connections: dimensions.filter((_, j) => j !== i).map((_, j) => `node-${(i + j + 1) % 6}`),
      status: 'unsolved',
      confidence: 0
    });
  });
  
  return nodes;
}

export default function GraphifyEngine({ problem, onSolve, isSolving }: Props) {
  const [nodes, setNodes] = useState<ProblemNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (problem) {
      setNodes(generateNodes(problem));
    }
  }, [problem]);

  useEffect(() => {
    if (isSolving) {
      const interval = setInterval(() => {
        setAnimationPhase(prev => {
          if (prev >= 6) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isSolving]);

  useEffect(() => {
    if (isSolving && animationPhase > 0) {
      setNodes(prev => prev.map((node, i) => {
        if (i < animationPhase) {
          return { ...node, status: 'resolved' as const, confidence: Math.floor(Math.random() * 20) + 80 };
        }
        if (i === animationPhase) {
          return { ...node, status: 'analyzing' as const };
        }
        return node;
      }));
    }
  }, [animationPhase, isSolving]);

  const getNodePosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    const radius = 120;
    return {
      x: 180 + radius * Math.cos(angle),
      y: 180 + radius * Math.sin(angle)
    };
  };

  const getDimensionColor = (dim: ProblemDimension) => {
    return DIMENSIONS.find(d => d.key === dim)?.color || '#fff';
  };

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">🎲</span> Graphify Engine
          </h2>
          <p className="text-gray-400 text-sm mt-1">Problem → Rubik's Cube → Resolution</p>
        </div>
        <button
          onClick={onSolve}
          disabled={isSolving || !problem}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
            isSolving
              ? 'bg-purple-600/50 text-purple-200 cursor-wait'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 hover:scale-105 shadow-lg shadow-purple-500/25'
          }`}
        >
          {isSolving ? 'Solving...' : 'Graphify & Solve'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cube Visualization */}
        <div className="relative">
          <svg viewBox="0 0 360 360" className="w-full h-72">
            {/* Connection lines */}
            {nodes.map((node, i) => {
              if (i >= animationPhase && isSolving) return null;
              const pos = getNodePosition(i, nodes.length);
              return node.connections.map((connId, j) => {
                const connIdx = parseInt(connId.split('-')[1]);
                if (connIdx <= i) return null;
                const connPos = getNodePosition(connIdx, nodes.length);
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={pos.x}
                    y1={pos.y}
                    x2={connPos.x}
                    y2={connPos.y}
                    stroke={node.status === 'resolved' ? getDimensionColor(node.dimension) : '#374151'}
                    strokeWidth={node.status === 'resolved' ? 2 : 1}
                    strokeDasharray={node.status === 'analyzing' ? '4 4' : 'none'}
                    className="transition-all duration-500"
                    opacity={0.6}
                  />
                );
              });
            })}
            
            {/* Nodes */}
            {nodes.map((node, i) => {
              const pos = getNodePosition(i, nodes.length);
              const color = getDimensionColor(node.dimension);
              const isResolved = node.status === 'resolved';
              const isAnalyzing = node.status === 'analyzing';
              
              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isResolved ? 22 : isAnalyzing ? 20 : 18}
                    fill={isResolved ? color : isAnalyzing ? `${color}80` : '#1f2937'}
                    stroke={color}
                    strokeWidth={isResolved ? 3 : 2}
                    className="transition-all duration-500"
                  />
                  {isResolved && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={26}
                      fill="none"
                      stroke={color}
                      strokeWidth={1}
                      opacity={0.4}
                      className="animate-ping"
                    />
                  )}
                  <text
                    x={pos.x}
                    y={pos.y + 4}
                    textAnchor="middle"
                    className="text-[8px] fill-white font-bold"
                  >
                    {isResolved ? '✓' : isAnalyzing ? '...' : (i + 1).toString()}
                  </text>
                  <text
                    x={pos.x}
                    y={pos.y + 35}
                    textAnchor="middle"
                    className="text-[9px] fill-gray-400"
                  >
                    {DIMENSIONS[i]?.label}
                  </text>
                </g>
              );
            })}
            
            {/* Center label */}
            <text x={180} y={175} textAnchor="middle" className="text-[10px] fill-gray-500 font-medium">
              PROBLEM
            </text>
            <text x={180} y={190} textAnchor="middle" className="text-[10px] fill-gray-500 font-medium">
              CORE
            </text>
          </svg>
        </div>

        {/* Node Details */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Dimension Nodes</h3>
          {nodes.map((node, i) => (
            <div
              key={node.id}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${
                selectedNode === node.id
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getDimensionColor(node.dimension) }}
                  />
                  <span className="text-sm text-white font-medium">{DIMENSIONS[i]?.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {node.status === 'resolved' && (
                    <span className="text-xs text-green-400">✓ Resolved</span>
                  )}
                  {node.status === 'analyzing' && (
                    <span className="text-xs text-yellow-400 animate-pulse">Analyzing...</span>
                  )}
                  <span className="text-xs text-gray-500">{node.complexity}%</span>
                </div>
              </div>
              {selectedNode === node.id && (
                <div className="mt-2 pt-2 border-t border-gray-700/50">
                  <p className="text-xs text-gray-400">{DIMENSIONS[i]?.description}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                      Complexity: {node.complexity}%
                    </span>
                    {node.confidence > 0 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-900/50 text-green-300">
                        Confidence: {node.confidence}%
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
