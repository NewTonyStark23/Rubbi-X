import { useState } from 'react';
import { ModelComparison } from '../types';
import { MODEL_COMPARISONS } from '../data';

export default function ModelComparisonView() {
  const [selectedModel, setSelectedModel] = useState<string>('Rubbi-X (This Framework)');
  const [viewMode, setViewMode] = useState<'radar' | 'table'>('radar');

  const selected = MODEL_COMPARISONS.find(m => m.name === selectedModel);
  const rubbix = MODEL_COMPARISONS[0];

  const ratingLabels: Record<string, string> = {
    problemDecomposition: 'Problem Decomposition',
    loopAvoidance: 'Loop Avoidance',
    creativeResolution: 'Creative Resolution',
    memoryPersistence: 'Memory Persistence',
    selfCorrection: 'Self-Correction',
    crossDomainTransfer: 'Cross-Domain Transfer',
    atomicReasoning: 'Atomic Reasoning',
    convergenceSpeed: 'Convergence Speed'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
          <span className="text-2xl">📊</span> Model Resolution Ratings
        </h2>
        <p className="text-gray-400 text-sm">
          How Rubbi-X compares to the most advanced AI models in problem resolution capability.
          Ratings based on: loop avoidance, memory persistence, creative breakthrough, atomic reasoning, and convergence speed.
        </p>

        {/* Overall Score Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {MODEL_COMPARISONS.map((model) => (
            <button
              key={model.name}
              onClick={() => setSelectedModel(model.name)}
              className={`p-3 rounded-xl border transition-all text-left ${
                selectedModel === model.name
                  ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/50'
                  : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{model.icon}</span>
                <span className="text-xs font-medium text-gray-300 truncate">{model.name.split(' ')[0]}</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: model.color }}>
                {model.overallScore}
              </div>
              <div className="text-[10px] text-gray-500">/100</div>
            </button>
          ))}
        </div>
      </div>

      {/* Detailed View */}
      {selected && (
        <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selected.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-white">{selected.name}</h3>
                <p className="text-xs text-gray-400">Overall Score: <span className="font-bold" style={{ color: selected.color }}>{selected.overallScore}/100</span></p>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode('radar')}
                className={`text-xs px-3 py-1.5 rounded-lg ${viewMode === 'radar' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400'}`}
              >
                Visual
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`text-xs px-3 py-1.5 rounded-lg ${viewMode === 'table' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400'}`}
              >
                Table
              </button>
            </div>
          </div>

          {viewMode === 'radar' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bar Chart Comparison */}
              <div className="space-y-3">
                {Object.entries(selected.ratings).map(([key, value]) => {
                  const rubbixValue = rubbix.ratings[key as keyof typeof rubbix.ratings];
                  const diff = value - rubbixValue;
                  return (
                    <div key={key}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-400">{ratingLabels[key]}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold" style={{ color: selected.color }}>{value}</span>
                          <span className="text-gray-600">vs</span>
                          <span className="text-purple-400">{rubbixValue}</span>
                          {diff !== 0 && (
                            <span className={`text-[10px] ${diff > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {diff > 0 ? '+' : ''}{diff}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="absolute h-full rounded-full opacity-30 bg-purple-500"
                          style={{ width: `${rubbixValue}%` }}
                        />
                        <div
                          className="absolute h-full rounded-full"
                          style={{ width: `${value}%`, backgroundColor: selected.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Strengths & Weaknesses */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-green-400 mb-2">✅ Strengths</h4>
                  <ul className="space-y-1">
                    {selected.strengths.map((s, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-400 mb-2">❌ Weaknesses</h4>
                  <ul className="space-y-1">
                    {selected.weaknesses.map((w, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <h4 className="text-xs font-bold text-gray-300 mb-1">VERDICT:</h4>
                  <p className="text-xs text-gray-400">{selected.verdict}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">Metric</th>
                    {MODEL_COMPARISONS.map(m => (
                      <th key={m.name} className="text-center py-2 px-2">
                        <span style={{ color: m.color }}>{m.icon} {m.name.split(' ')[0]}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(ratingLabels).map(([key, label]) => (
                    <tr key={key} className="border-b border-gray-800">
                      <td className="py-2 text-gray-300">{label}</td>
                      {MODEL_COMPARISONS.map(m => {
                        const val = m.ratings[key as keyof typeof m.ratings];
                        const isMax = val === Math.max(...MODEL_COMPARISONS.map(mm => mm.ratings[key as keyof typeof mm.ratings]));
                        return (
                          <td key={m.name} className={`text-center py-2 px-2 font-medium ${isMax ? 'text-green-400' : 'text-gray-400'}`}>
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="border-t border-gray-600">
                    <td className="py-2 text-white font-bold">OVERALL</td>
                    {MODEL_COMPARISONS.map(m => (
                      <td key={m.name} className="text-center py-2 px-2 font-bold" style={{ color: m.color }}>
                        {m.overallScore}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Key Insight */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-6">
        <h3 className="text-sm font-bold text-purple-300 mb-2">💡 KEY INSIGHT</h3>
        <p className="text-sm text-gray-300">
          Rubbi-X isn't competing with these models — it <span className="text-purple-300 font-medium">amplifies</span> them. 
          Feed Rubbi-X's cognitive framework into ANY of these models and their resolution scores increase by 15-25 points. 
          The framework provides what no model has natively: <span className="text-orange-300 font-medium">immutable memory of failures</span>, 
          <span className="text-red-300 font-medium"> structural loop prevention</span>, and 
          <span className="text-green-300 font-medium"> nested problem decomposition</span>.
        </p>
      </div>
    </div>
  );
}
