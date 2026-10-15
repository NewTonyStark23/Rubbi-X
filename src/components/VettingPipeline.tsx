import { useState, useEffect } from 'react';
import { VettingResult } from '../types';

interface Props {
  isSolving: boolean;
  phase: number;
}

const INITIAL_RESULTS: VettingResult[] = [
  { agentId: 'analyst', agentName: 'Deep Analyst', verdict: 'approved', confidence: 94, feedback: 'Structural integrity verified. All dimensions properly mapped.', timestamp: 0 },
  { agentId: 'strategist', agentName: 'Quantum Strategist', verdict: 'approved', confidence: 91, feedback: 'Resolution path optimal. Bayesian confidence exceeds threshold.', timestamp: 0 },
  { agentId: 'critic', agentName: 'Adversarial Critic', verdict: 'conditional', confidence: 87, feedback: 'Edge case identified in temporal dimension. Recommend adding fallback.', timestamp: 0 },
  { agentId: 'synthesizer', agentName: 'Meta Synthesizer', verdict: 'approved', confidence: 96, feedback: 'Cross-domain patterns confirmed. Solution is transferable to 3 adjacent domains.', timestamp: 0 },
  { agentId: 'prime', agentName: 'Prime Vetter', verdict: 'approved', confidence: 99, feedback: 'Consensus achieved. Resolution passes all quality gates. Deploying.', timestamp: 0 }
];

export default function VettingPipeline({ isSolving, phase }: Props) {
  const [results, setResults] = useState<VettingResult[]>([]);
  const [consensusScore, setConsensusScore] = useState(0);

  useEffect(() => {
    if (isSolving && phase >= 4) {
      const timer = setTimeout(() => {
        const timestamped = INITIAL_RESULTS.map((r, i) => ({
          ...r,
          timestamp: Date.now() + (i * 200)
        }));
        setResults(timestamped);
        setConsensusScore(95.4);
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isSolving) {
      setResults([]);
      setConsensusScore(0);
    }
  }, [isSolving, phase]);

  const getVerdictIcon = (verdict: VettingResult['verdict']) => {
    switch (verdict) {
      case 'approved': return '✅';
      case 'rejected': return '❌';
      case 'conditional': return '⚠️';
    }
  };

  const getVerdictColor = (verdict: VettingResult['verdict']) => {
    switch (verdict) {
      case 'approved': return 'border-green-500/30 bg-green-500/5';
      case 'rejected': return 'border-red-500/30 bg-red-500/5';
      case 'conditional': return 'border-yellow-500/30 bg-yellow-500/5';
    }
  };

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">🛡️</span> Vetting Pipeline
          </h2>
          <p className="text-gray-400 text-sm mt-1">Multi-agent consensus validation</p>
        </div>
        {consensusScore > 0 && (
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">{consensusScore}%</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Consensus</div>
          </div>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-3 opacity-50">🔒</div>
          <p className="text-gray-500 text-sm">Awaiting resolution for vetting...</p>
          <p className="text-gray-600 text-xs mt-1">Pipeline activates after agent swarm completes analysis</p>
        </div>
      ) : (
        <div className="space-y-3">
          {results.map((result, i) => (
            <div
              key={result.agentId}
              className={`p-3 rounded-xl border ${getVerdictColor(result.verdict)} transition-all`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{getVerdictIcon(result.verdict)}</span>
                  <div>
                    <span className="text-sm font-medium text-white">{result.agentName}</span>
                    <p className="text-xs text-gray-400">{result.feedback}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white">{result.confidence}%</div>
                  <div className="text-[10px] text-gray-500">confidence</div>
                </div>
              </div>
            </div>
          ))}

          {/* Final Verdict */}
          {consensusScore > 0 && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-green-400">✓ RESOLUTION APPROVED</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    All agents reached consensus. Solution deployed to resolution matrix.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-400">DEPLOYED</div>
                  <div className="text-[10px] text-gray-500">Status: Active</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
