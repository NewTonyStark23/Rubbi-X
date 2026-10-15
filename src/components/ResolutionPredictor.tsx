import { useState, useEffect } from 'react';
import { ResolutionPath } from '../types';

interface Props {
  isSolving: boolean;
  phase: number;
}

const RESOLUTION_PATHS: ResolutionPath[] = [
  {
    id: 'rp1',
    name: 'Decomposition-First',
    probability: 0,
    steps: ['Parse problem topology', 'Identify core constraints', 'Apply divide-and-conquer', 'Merge sub-solutions', 'Validate completeness'],
    tools: ['LangGraph', 'NetworkX', 'DSPy'],
    estimatedTime: '2.3s',
    confidence: 0,
    risk: 'low'
  },
  {
    id: 'rp2',
    name: 'Analogical Transfer',
    probability: 0,
    steps: ['Search solution memory', 'Map structural similarity', 'Transfer resolution pattern', 'Adapt to context', 'Verify applicability'],
    tools: ['ChromaDB', 'MemGPT', 'Semantic Kernel'],
    estimatedTime: '1.8s',
    confidence: 0,
    risk: 'medium'
  },
  {
    id: 'rp3',
    name: 'Adversarial Refinement',
    probability: 0,
    steps: ['Generate initial solution', 'Attack with edge cases', 'Identify failure modes', 'Harden solution', 'Final consensus check'],
    tools: ['AutoGen', 'Guardrails AI', 'LiteLLM'],
    estimatedTime: '4.1s',
    confidence: 0,
    risk: 'low'
  },
  {
    id: 'rp4',
    name: 'Quantum Superposition',
    probability: 0,
    steps: ['Generate all possible paths', 'Evaluate in parallel', 'Collapse to optimal', 'Cross-validate', 'Execute resolution'],
    tools: ['CrewAI', 'LangGraph', 'DSPy'],
    estimatedTime: '3.5s',
    confidence: 0,
    risk: 'high'
  }
];

export default function ResolutionPredictor({ isSolving, phase }: Props) {
  const [paths, setPaths] = useState<ResolutionPath[]>(RESOLUTION_PATHS);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  useEffect(() => {
    if (isSolving && phase >= 2) {
      setPaths(prev => prev.map((path, i) => ({
        ...path,
        probability: Math.max(0.1, 0.95 - (i * 0.15) + (Math.random() * 0.1)),
        confidence: Math.floor(70 + Math.random() * 25)
      })));
    } else if (!isSolving) {
      setPaths(RESOLUTION_PATHS);
    }
  }, [isSolving, phase]);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400 bg-green-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'high': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const sortedPaths = [...paths].sort((a, b) => b.probability - a.probability);

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">🎯</span> Resolution Predictor
          </h2>
          <p className="text-gray-400 text-sm mt-1">Bayesian path probability analysis</p>
        </div>
        {isSolving && phase >= 2 && (
          <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/30">
            Paths Computed
          </span>
        )}
      </div>

      <div className="space-y-3">
        {sortedPaths.map((path, index) => (
          <div
            key={path.id}
            onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              index === 0 && path.probability > 0
                ? 'border-purple-500/50 bg-purple-500/5'
                : selectedPath === path.id
                ? 'border-blue-500/50 bg-blue-500/5'
                : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {index === 0 && path.probability > 0 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                    BEST
                  </span>
                )}
                <span className="text-sm font-medium text-white">{path.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${getRiskColor(path.risk)}`}>
                  {path.risk} risk
                </span>
                <span className="text-xs text-gray-400">{path.estimatedTime}</span>
              </div>
            </div>

            {/* Probability Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Probability</span>
                <span className="text-white font-medium">{(path.probability * 100).toFixed(1)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                  style={{ width: `${path.probability * 100}%` }}
                />
              </div>
            </div>

            {/* Confidence */}
            {path.confidence > 0 && (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Confidence:</span>
                <span className="text-green-400 font-medium">{path.confidence}%</span>
              </div>
            )}

            {/* Expanded Details */}
            {selectedPath === path.id && (
              <div className="mt-3 pt-3 border-t border-gray-700/50 space-y-3">
                <div>
                  <span className="text-xs text-gray-400 font-medium">Steps:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {path.steps.map((step, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-gray-700/50 text-gray-300">
                        {i + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium">Tools:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {path.tools.map(tool => (
                      <span key={tool} className="text-[10px] px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-500/20">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
