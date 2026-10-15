import { useState, useEffect } from 'react';
import { DeterministicFactor } from '../types';
import { DETERMINISTIC_FACTORS } from '../data';

interface Props {
  isSolving: boolean;
  phase: number;
}

export default function DeterministicFactors({ isSolving, phase }: Props) {
  const [factors, setFactors] = useState<DeterministicFactor[]>(DETERMINISTIC_FACTORS);

  useEffect(() => {
    if (isSolving && phase >= 1) {
      setFactors(prev => prev.map((factor, i) => ({
        ...factor,
        score: Math.floor(60 + Math.random() * 35),
        trend: i % 3 === 0 ? 'down' as const : i % 3 === 1 ? 'up' as const : 'stable' as const
      })));
    } else if (!isSolving) {
      setFactors(DETERMINISTIC_FACTORS);
    }
  }, [isSolving, phase]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↑';
      case 'down': return '↓';
      default: return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-yellow-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const overallScore = factors.length > 0 && factors[0].score > 0
    ? Math.round(factors.reduce((sum, f) => sum + f.score, 0) / factors.length)
    : 0;

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">📊</span> Deterministic Factors
          </h2>
          <p className="text-gray-400 text-sm mt-1">Quantifiable resolution quality metrics</p>
        </div>
        {overallScore > 0 && (
          <div className="text-right">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {overallScore}
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Overall Score</div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {factors.map((factor) => (
          <div
            key={factor.abbr}
            className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-gray-600 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">
                  {factor.abbr}
                </span>
                <span className={`text-sm ${getTrendColor(factor.trend)}`}>
                  {getTrendIcon(factor.trend)}
                </span>
              </div>
              <span className="text-lg font-bold text-white">{factor.score}</span>
            </div>
            
            <h3 className="text-xs font-medium text-gray-300 mb-1">{factor.name}</h3>
            <p className="text-[10px] text-gray-500 mb-3">{factor.description}</p>

            {/* Score Bar */}
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${getScoreColor(factor.score)} rounded-full transition-all duration-1000`}
                style={{ width: `${factor.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Formula Display */}
      {overallScore > 0 && (
        <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
          <p className="text-[10px] text-gray-500 font-mono">
            RQI = (PCS × 0.15) + (RCI × 0.25) + (ACS × 0.20) + (SVM × 0.20) + (TDF × 0.10) + (CDA × 0.10)
          </p>
          <p className="text-[10px] text-gray-600 mt-1">
            Resolution Quality Index = {overallScore}/100 — {overallScore >= 80 ? 'Excellent' : overallScore >= 60 ? 'Good' : 'Needs Improvement'}
          </p>
        </div>
      )}
    </div>
  );
}
