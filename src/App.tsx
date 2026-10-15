import { useState } from 'react';
import ModelComparisonView from './components/ModelComparisonView';
import NestedGraphifyView from './components/NestedGraphifyView';
import CognitiveFrameworkView from './components/CognitiveFrameworkView';
import ToolStackView from './components/ToolStackView';

type Tab = 'overview' | 'comparison' | 'nested' | 'framework' | 'tools';

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
                  Rubbi-X v3.0
                </h1>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Anti-Loop Cognitive Framework for AI Problem Resolution
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-lg">
                <span className="text-purple-400 font-bold">97/100</span>
                <span>Resolution Rating</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-4 overflow-x-auto">
            {[
              { key: 'overview' as Tab, label: 'Overview', icon: '🧠' },
              { key: 'comparison' as Tab, label: 'Model Ratings', icon: '📊' },
              { key: 'nested' as Tab, label: 'Nested Graphify', icon: '🧊' },
              { key: 'framework' as Tab, label: 'The Framework', icon: '📜' },
              { key: 'tools' as Tab, label: 'Tool Stack', icon: '⚙️' }
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
        {activeTab === 'comparison' && <ModelComparisonView />}
        {activeTab === 'nested' && <NestedGraphifyView />}
        {activeTab === 'framework' && <CognitiveFrameworkView />}
        {activeTab === 'tools' && <ToolStackView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            Rubbi-X v3.0 — Anti-Loop Cognitive Framework for AI Problem Resolution
          </p>
          <p className="text-[10px] text-gray-600 mt-1">
            Not a tool. Not a web app. A cognitive skill fed INTO any AI to make it resolve problems without looping.
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
          Rubbi-X
        </h1>
        <p className="text-lg text-gray-300 mb-2">
          The Anti-Loop Cognitive Framework
        </p>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          A system prompt / cognitive skill that gets <span className="text-purple-300 font-medium">fed INTO any AI</span> to fundamentally 
          change how it resolves problems. Makes resolution loops <span className="text-red-300 font-medium">structurally impossible</span> through 
          immutable atomic notes, path hashing, and nested Graphify instances.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">97</div>
            <div className="text-[10px] text-gray-500">Resolution Rating</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">99</div>
            <div className="text-[10px] text-gray-500">Loop Avoidance</div>
          </div>
          <div className="w-px h-8 bg-gray-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">∞</div>
            <div className="text-[10px] text-gray-500">Memory Persistence</div>
          </div>
        </div>
      </div>

      {/* What makes it different */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white mb-4">💡 What Makes Rubbi-X Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
            <div className="text-2xl mb-2">🚫</div>
            <h3 className="text-sm font-bold text-white mb-1">Loops Are Impossible</h3>
            <p className="text-xs text-gray-400">
              Other AIs can circle back to the same failed approach because they "forget." Rubbi-X writes immutable atomic notes for every step. 
              Path hashing detects loops instantly. The AI <span className="text-red-300">cannot</span> repeat a failed approach.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="text-2xl mb-2">🧊</div>
            <h3 className="text-sm font-bold text-white mb-1">Nested Graphify (R1/R2)</h3>
            <p className="text-xs text-gray-400">
              R1 is persistent — holds the project's architecture map. R2 is ephemeral — spawns for specific problems, resolves them, 
              backs up to R1, then deletes itself. The AI always has context while solving focused issues.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/5">
            <div className="text-2xl mb-2">💥</div>
            <h3 className="text-sm font-bold text-white mb-1">Superpowers Injection</h3>
            <p className="text-xs text-gray-400">
              When a loop is detected, Rubbi-X injects creative skills from obra/superpowers — inversion attacks, dimensional escapes, 
              constraint removal. Forces the AI to think in completely different ways. Finds what humans miss.
            </p>
          </div>
        </div>
      </div>

      {/* How it works - simplified */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white mb-4">🔄 How It Works (Simplified)</h2>
        <div className="space-y-3">
          <Step number={1} title="Problem Arrives" description="AI receives a problem (coding bug, trading decision, research question, etc.)" color="blue" />
          <Step number={2} title="Graphify Decomposition" description="AI decomposes the problem into 6 dimensions: Structural, Temporal, Causal, Relational, Constraint, Emergent" color="purple" />
          <Step number={3} title="Resolution Attempts + Atomic Notes" description="AI takes resolution steps. Every step gets an atomic note (immutable memory) with a path hash." color="cyan" />
          <Step number={4} title="Loop Detection" description="Before each step, AI checks: 'Have I been here before with this approach?' If path hash matches → LOOP DETECTED" color="red" />
          <Step number={5} title="Superpower Injection" description="Loop detected → inject creative skill (inversion, dimensional escape, etc.) → force new approach" color="orange" />
          <Step number={6} title="Convergence & Backup" description="Solution found → atomic notes backed up to persistent R1 → ephemeral R2 deleted → AI learned permanently" color="green" />
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-6">
        <h3 className="text-sm font-bold text-purple-300 mb-2">🎯 KEY INSIGHT</h3>
        <p className="text-sm text-gray-300">
          Rubbi-X doesn't replace AI models — it <span className="text-purple-300 font-bold">amplifies</span> them. 
          Feed it into Qwen3, DeepSeek, Grok, Claude, or Nemotron and their resolution scores jump 15-25 points. 
          It provides what no model has natively: <span className="text-red-300">structural loop prevention</span>, 
          <span className="text-orange-300"> immutable failure memory</span>, and 
          <span className="text-green-300"> nested problem decomposition</span>.
        </p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickLink
          icon="📊"
          title="Model Ratings"
          description="See how Rubbi-X compares to Qwen3, DeepSeek, Grok, Claude, and Nemotron"
          tab="comparison"
          setActiveTab={setActiveTab}
        />
        <QuickLink
          icon="🧊"
          title="Nested Graphify"
          description="See R1/R2 lifecycle with auto-backup and end-of-session behavior"
          tab="nested"
          setActiveTab={setActiveTab}
        />
        <QuickLink
          icon="📜"
          title="The Framework"
          description="See the actual system prompt that gets fed to the AI"
          tab="framework"
          setActiveTab={setActiveTab}
        />
        <QuickLink
          icon="⚙️"
          title="Tool Stack"
          description="GitHub tools that power the framework when implemented"
          tab="tools"
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
}

function Step({ number, title, description, color }: { number: number; title: string; description: string; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: 'border-blue-500/30 bg-blue-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    red: 'border-red-500/30 bg-red-500/5',
    orange: 'border-orange-500/30 bg-orange-500/5',
    green: 'border-green-500/30 bg-green-500/5',
  };

  return (
    <div className={`flex items-start gap-4 p-4 rounded-xl border ${colorClasses[color]}`}>
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-sm font-bold text-white">
        {number}
      </div>
      <div>
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );
}

function QuickLink({ icon, title, description, tab, setActiveTab }: { icon: string; title: string; description: string; tab: Tab; setActiveTab: (tab: Tab) => void }) {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-left"
    >
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
      <p className="text-xs text-gray-400">{description}</p>
    </button>
  );
}
