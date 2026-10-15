import { useState } from 'react';
import { COCOINDEX_INTEGRATIONS, SUPERPOWER_SKILLS } from '../data';

export default function V4FeaturesView() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Incremental Processing',
      icon: '⚡',
      description: 'Only the Δ (delta) gets reprocessed. CocoIndex identifies what changed and skips unchanged atomic notes.',
      speedup: '10x faster',
      details: [
        'When a problem evolves, CocoIndex fingerprints each atomic note',
        'Only notes with changed content get reprocessed',
        'Unchanged notes hit the cache instantly (80-90% hit rate)',
        'Memory updates are sub-second instead of full reprocessing'
      ]
    },
    {
      title: 'Predictive Loop Prevention',
      icon: '🔮',
      description: 'Detects loops BEFORE they happen by analyzing path similarity patterns.',
      speedup: '98% prediction accuracy',
      details: [
        'Analyzes path hash similarity before each step',
        'Predicts loop risk score (0-100) for each potential action',
        'Blocks high-risk paths proactively',
        'Injects Superpowers when predicted risk > 70%'
      ]
    },
    {
      title: 'AST-Aware Code Resolution',
      icon: '🧬',
      description: 'CocoIndex-Code integration gives coding agents superhuman code understanding.',
      speedup: '70% fewer tokens',
      details: [
        'AST-based semantic search finds similar resolved issues',
        'Instantly retrieves how similar bugs were fixed',
        '80-90% cache hits on re-index',
        'Works with Python, TypeScript, Rust, Go, and 20+ languages'
      ]
    },
    {
      title: 'Self-Evolving Superpowers',
      icon: '🧠',
      description: 'Superpowers learn from usage patterns and adapt success rates.',
      speedup: 'Continuous improvement',
      details: [
        'Each Superpower tracks success rate and usage count',
        'High-success skills get prioritized',
        'Low-success skills get refined or replaced',
        'System gets smarter with every resolution'
      ]
    },
    {
      title: 'Multi-Graphify Parallelism',
      icon: '🔄',
      description: 'Multiple R2 instances run in parallel on different dimensions.',
      speedup: '3-5x faster convergence',
      details: [
        'R2 instances work on different dimensions simultaneously',
        'Results merge into R1 when all complete',
        'Parallel processing reduces wall-clock time',
        'Each R2 has independent atomic note stream'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">🚀</span> Rubbi-X v4.0 — What's New
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          v4.0 introduces 5 major improvements that make the system 10x faster and smarter.
        </p>

        {/* Feature Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, i) => (
            <button
              key={i}
              onClick={() => setActiveFeature(i)}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                activeFeature === i
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-gray-400 hover:text-gray-300 border border-transparent'
              }`}
            >
              {feature.icon} {feature.title}
            </button>
          ))}
        </div>

        {/* Active Feature */}
        <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">{features[activeFeature].icon}</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">{features[activeFeature].title}</h3>
              <p className="text-sm text-gray-300 mb-4">{features[activeFeature].description}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-bold mb-4">
                {features[activeFeature].speedup}
              </div>
              <ul className="space-y-2">
                {features[activeFeature].details.map((detail, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CocoIndex Integrations */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">🥥</span> CocoIndex Integration
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          v4.0 integrates CocoIndex's incremental engine for delta-only processing and CocoIndex-Code for AST-aware code resolution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COCOINDEX_INTEGRATIONS.map((integration, i) => (
            <div key={i} className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
              <h3 className="text-sm font-bold text-white mb-2">{integration.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{integration.purpose}</p>
              <div className="inline-block px-2 py-0.5 rounded bg-green-500/20 text-green-300 text-[10px] font-bold mb-2">
                {integration.speedup}
              </div>
              <p className="text-[10px] text-gray-500">{integration.integration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Self-Evolving Superpowers */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">💥</span> Self-Evolving Superpowers
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Superpowers now track success rates and usage counts. The system learns which skills work best in which contexts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SUPERPOWER_SKILLS.slice(0, 8).map((skill) => (
            <div key={skill.id} className="p-3 rounded-xl border border-gray-700/50 bg-gray-800/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">{skill.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                  {skill.successRate}% success
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{skill.description}</p>
              <div className="flex items-center gap-3 text-[10px] text-gray-500">
                <span>Used {skill.usageCount}x</span>
                <span className="capitalize">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
