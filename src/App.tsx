import { useState } from 'react';
import ModelComparisonView from './components/ModelComparisonView';
import V4FeaturesView from './components/V4FeaturesView';
import FrameworkAndToolsView from './components/FrameworkAndToolsView';

type Tab = 'overview' | 'features' | 'comparison' | 'framework';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-xl shadow-lg shadow-purple-500/25">
                🎲
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Rubbi-X v4.0
                </h1>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  10x Faster • Predictive • AST-Aware • Self-Evolving
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-lg">
                <span className="text-purple-400 font-bold">98/100</span>
                <span>Resolution Rating</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-4 overflow-x-auto">
            {[
              { key: 'overview' as Tab, label: 'Overview', icon: '🧠' },
              { key: 'features' as Tab, label: "What's New", icon: '🚀' },
              { key: 'comparison' as Tab, label: 'Model Ratings', icon: '📊' },
              { key: 'framework' as Tab, label: 'Framework & Tools', icon: '📜' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && <OverviewView setActiveTab={setActiveTab} />}
        {activeTab === 'features' && <V4FeaturesView />}
        {activeTab === 'comparison' && <ModelComparisonView />}
        {activeTab === 'framework' && <FrameworkAndToolsView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            Rubbi-X v4.0 — 10x Faster Anti-Loop Cognitive Framework with Incremental Processing & AST-Aware Resolution
          </p>
          <p className="text-[10px] text-gray-600 mt-1">
            Powered by CocoIndex • Predictive Loop Prevention • Self-Evolving Superpowers • Multi-Graphify Parallelism
          </p>
        </div>
      </footer>
    </div>
  );
}

function OverviewView({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-orange-500/10 rounded-2xl border border-purple-500/30 p-8 text-center">
        <div className="text-5xl mb-4">🎲</div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-3">
          Rubbi-X v4.0
        </h1>
        <p className="text-lg text-gray-300 mb-2">
          The 10x Faster Anti-Loop Cognitive Framework
        </p>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          v4.0 introduces <span className="text-purple-300 font-medium">incremental processing</span> (only the Δ gets reprocessed), 
          <span className="text-green-300 font-medium"> predictive loop prevention</span> (stops loops before they happen), 
          and <span className="text-orange-300 font-medium">AST-aware code resolution</span> (superhuman code understanding via CocoIndex-Code).
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">98</div>
            <div className="text-[10px] text-gray-500">Resolution Rating</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">10x</div>
            <div className="text-[10px] text-gray-500">Faster</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">98%</div>
            <div className="text-[10px] text-gray-500">Loop Prediction</div>
          </div>
        </div>
      </div>

      {/* v4.0 Key Improvements */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white mb-4">🚀 What's New in v4.0</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-sm font-bold text-white mb-1">Incremental Processing</h3>
            <p className="text-xs text-gray-400">
              Only the Δ (delta) gets reprocessed via CocoIndex. Unchanged atomic notes hit cache instantly. <span className="text-green-300 font-bold">10x faster</span> memory updates.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <div className="text-2xl mb-2">🔮</div>
            <h3 className="text-sm font-bold text-white mb-1">Predictive Loop Prevention</h3>
            <p className="text-xs text-gray-400">
              Detects loops <span className="text-blue-300 font-bold">BEFORE</span> they happen by analyzing path similarity. <span className="text-blue-300 font-bold">98% prediction accuracy</span>.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/5">
            <div className="text-2xl mb-2">🧬</div>
            <h3 className="text-sm font-bold text-white mb-1">AST-Aware Code Resolution</h3>
            <p className="text-xs text-gray-400">
              CocoIndex-Code integration gives coding agents superhuman code understanding. <span className="text-orange-300 font-bold">70% fewer tokens</span>, 80-90% cache hits.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-pink-500/30 bg-pink-500/5">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-sm font-bold text-white mb-1">Self-Evolving Superpowers</h3>
            <p className="text-xs text-gray-400">
              Superpowers track success rates and learn from usage. High-success skills get prioritized. System gets smarter continuously.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="text-sm font-bold text-white mb-1">Multi-Graphify Parallelism</h3>
            <p className="text-xs text-gray-400">
              Multiple R2 instances run in parallel on different dimensions. <span className="text-cyan-300 font-bold">3-5x faster</span> convergence.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
            <div className="text-2xl mb-2">🥥</div>
            <h3 className="text-sm font-bold text-white mb-1">CocoIndex Integration</h3>
            <p className="text-xs text-gray-400">
              Full integration with CocoIndex incremental engine and CocoIndex-Code AST-aware search. Production-grade infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 text-center">
          <div className="text-3xl font-bold text-purple-400">98</div>
          <div className="text-xs text-gray-400 mt-1">Overall Score</div>
          <div className="text-[10px] text-gray-500">vs v3.0's 97</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 text-center">
          <div className="text-3xl font-bold text-green-400">10x</div>
          <div className="text-xs text-gray-400 mt-1">Faster Processing</div>
          <div className="text-[10px] text-gray-500">via incremental Δ</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 text-center">
          <div className="text-3xl font-bold text-blue-400">98%</div>
          <div className="text-xs text-gray-400 mt-1">Loop Prediction</div>
          <div className="text-[10px] text-gray-500">before they happen</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 text-center">
          <div className="text-3xl font-bold text-orange-400">70%</div>
          <div className="text-xs text-gray-400 mt-1">Fewer Tokens</div>
          <div className="text-[10px] text-gray-500">AST-aware code search</div>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setActiveTab('features')}
          className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-left"
        >
          <div className="text-2xl mb-2">🚀</div>
          <h3 className="text-sm font-bold text-white mb-1">What's New in v4.0</h3>
          <p className="text-xs text-gray-400">Deep dive into incremental processing, predictive prevention, and AST-aware resolution</p>
        </button>
        <button
          onClick={() => setActiveTab('comparison')}
          className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-left"
        >
          <div className="text-2xl mb-2">📊</div>
          <h3 className="text-sm font-bold text-white mb-1">Model Ratings</h3>
          <p className="text-xs text-gray-400">Compare v4.0 against v3.0, Claude, DeepSeek, Qwen 3, Nemotron, and Grok</p>
        </button>
        <button
          onClick={() => setActiveTab('framework')}
          className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-left"
        >
          <div className="text-2xl mb-2">📜</div>
          <h3 className="text-sm font-bold text-white mb-1">Framework & Tools</h3>
          <p className="text-xs text-gray-400">See the full v4.0 system prompt and GitHub tool stack with CocoIndex integration</p>
        </button>
      </div>
    </div>
  );
}
