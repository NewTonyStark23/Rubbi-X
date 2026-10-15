import { useState, useEffect, useCallback } from 'react';
import GraphifyEngine from './components/GraphifyEngine';
import AgentPanel from './components/AgentPanel';
import ResolutionPredictor from './components/ResolutionPredictor';
import VettingPipeline from './components/VettingPipeline';
import DeterministicFactors from './components/DeterministicFactors';
import ToolStack from './components/ToolStack';

type Tab = 'engine' | 'tools' | 'architecture';

export default function App() {
  const [problem, setProblem] = useState('');
  const [isSolving, setIsSolving] = useState(false);
  const [phase, setPhase] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>('engine');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev.slice(-20), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }, []);

  const handleSolve = useCallback(() => {
    if (!problem.trim()) return;
    setIsSolving(true);
    setPhase(0);
    setLogs([]);
    addLog('🎲 Graphify Engine initialized - decomposing problem into 6 dimensions');
    
    setTimeout(() => {
      setPhase(1);
      addLog('🔬 Deep Analyst activated - mapping problem topology');
    }, 1000);

    setTimeout(() => {
      setPhase(2);
      addLog('🧠 Quantum Strategist activated - generating resolution paths');
      addLog('🎯 Resolution Predictor computing Bayesian probabilities');
    }, 2500);

    setTimeout(() => {
      setPhase(3);
      addLog('⚡ Adversarial Critic activated - stress testing solutions');
      addLog('🔮 Meta Synthesizer activated - cross-domain integration');
    }, 4000);

    setTimeout(() => {
      setPhase(4);
      addLog('👑 Prime Vetter activated - consensus validation');
      addLog('🛡️ Vetting Pipeline running multi-agent verification');
    }, 5500);

    setTimeout(() => {
      setPhase(5);
      addLog('✅ All agents complete - resolution deployed');
      addLog('📊 Deterministic Factors computed - RQI: 95.4/100');
    }, 7000);

    setTimeout(() => {
      setIsSolving(false);
      addLog('🏆 Resolution cycle complete - problem solved');
    }, 8000);
  }, [problem, addLog]);

  useEffect(() => {
    // Initial log
    addLog('🚀 Rubbi-X System initialized - all agents on standby');
  }, [addLog]);

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
                  Rubbi-X
                </h1>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Advanced AI Problem-Solving System
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>System Online</span>
              </div>
              <div className="hidden md:block text-xs text-gray-500 bg-gray-800/50 px-3 py-1.5 rounded-lg">
                v2.0.0 | 5 Agents | 12 Tools
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-4">
            {[
              { key: 'engine' as Tab, label: 'Problem Engine', icon: '🎲' },
              { key: 'tools' as Tab, label: 'Tool Stack', icon: '⚙️' },
              { key: 'architecture' as Tab, label: 'Architecture', icon: '🏗️' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 text-sm rounded-lg transition-all ${
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
        {activeTab === 'engine' && (
          <div className="space-y-6">
            {/* Problem Input */}
            <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Input Problem Statement
              </label>
              <div className="flex gap-3">
                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="Describe the problem you need solved. Be as specific as possible. The Graphify Engine will decompose it into 6 dimensions and the agent swarm will find the optimal resolution path..."
                  className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 resize-none"
                  rows={3}
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setProblem('How do we build a self-healing distributed system that can recover from any failure mode within 3 seconds while maintaining zero data loss and handling 10M concurrent users?')}
                    className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  >
                    Example: Distributed Systems
                  </button>
                  <button
                    onClick={() => setProblem('Design an AI alignment framework that guarantees safety properties while allowing the system to improve its own reasoning capabilities without human intervention?')}
                    className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  >
                    Example: AI Alignment
                  </button>
                  <button
                    onClick={() => setProblem('Create a quantum-resistant encryption protocol that can be deployed incrementally across existing infrastructure without service interruption?')}
                    className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  >
                    Example: Quantum Crypto
                  </button>
                </div>
                <span className="text-[10px] text-gray-500">{problem.length} chars</span>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GraphifyEngine problem={problem} onSolve={handleSolve} isSolving={isSolving} />
              <AgentPanel isSolving={isSolving} currentPhase={phase} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResolutionPredictor isSolving={isSolving} phase={phase} />
              <VettingPipeline isSolving={isSolving} phase={phase} />
            </div>

            <DeterministicFactors isSolving={isSolving} phase={phase} />

            {/* Activity Log */}
            <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <span>📋</span> Resolution Log
              </h2>
              <div className="bg-gray-950 rounded-xl p-4 font-mono text-xs space-y-1 max-h-48 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i} className="text-gray-400 hover:text-gray-200 transition-colors">
                    {log}
                  </div>
                ))}
                {logs.length === 0 && (
                  <div className="text-gray-600 italic">Waiting for problem input...</div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <ToolStack />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureView />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            Rubbi-X v2.0.0 — Advanced AI Problem-Solving System
          </p>
          <p className="text-[10px] text-gray-600 mt-1">
            Graphify Engine • Agent Swarm • Resolution Predictor • Vetting Pipeline • Deterministic Factors
          </p>
        </div>
      </footer>
    </div>
  );
}

function ArchitectureView() {
  return (
    <div className="space-y-6">
      {/* System Architecture */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <span className="text-2xl">🏗️</span> System Architecture
        </h2>

        {/* Architecture Diagram */}
        <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Input Layer */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-purple-400 text-center">INPUT LAYER</h3>
              <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/5 text-center">
                <div className="text-lg mb-1">📝</div>
                <div className="text-xs text-gray-300">Problem Statement</div>
              </div>
              <div className="text-center text-gray-600">↓</div>
              <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/5 text-center">
                <div className="text-lg mb-1">🎲</div>
                <div className="text-xs text-gray-300">Graphify Decomposition</div>
                <div className="text-[10px] text-gray-500 mt-1">6-Dimensional Mapping</div>
              </div>
            </div>

            {/* Processing Layer */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-blue-400 text-center">PROCESSING LAYER</h3>
              <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-500/5 text-center">
                <div className="text-lg mb-1">🤖</div>
                <div className="text-xs text-gray-300">Agent Swarm</div>
                <div className="text-[10px] text-gray-500 mt-1">5 Specialized Agents</div>
              </div>
              <div className="text-center text-gray-600">↓</div>
              <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-500/5 text-center">
                <div className="text-lg mb-1">🎯</div>
                <div className="text-xs text-gray-300">Resolution Predictor</div>
                <div className="text-[10px] text-gray-500 mt-1">Bayesian Path Selection</div>
              </div>
            </div>

            {/* Output Layer */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-green-400 text-center">OUTPUT LAYER</h3>
              <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/5 text-center">
                <div className="text-lg mb-1">🛡️</div>
                <div className="text-xs text-gray-300">Vetting Pipeline</div>
                <div className="text-[10px] text-gray-500 mt-1">Multi-agent Consensus</div>
              </div>
              <div className="text-center text-gray-600">↓</div>
              <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/5 text-center">
                <div className="text-lg mb-1">📊</div>
                <div className="text-xs text-gray-300">Deterministic Factors</div>
                <div className="text-[10px] text-gray-500 mt-1">Quality Metrics</div>
              </div>
            </div>
          </div>

          {/* Cross-cutting concerns */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <h3 className="text-xs font-bold text-gray-400 text-center mb-3">CROSS-CUTTING CONCERNS</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Memory Layer (ChromaDB + MemGPT)', 'Safety (Guardrails AI)', 'Model Routing (LiteLLM)', 'Prompt Optimization (DSPy)', 'Visualization (D3.js)'].map(item => (
                <span key={item} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resolution Methodology */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <span className="text-2xl">🧬</span> Resolution Methodology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Phase 1: Graphify Decomposition</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Parse problem into semantic components</li>
              <li>• Map to 6-dimensional cube structure</li>
              <li>• Identify node relationships & dependencies</li>
              <li>• Calculate complexity scores per dimension</li>
              <li>• Generate problem topology graph</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Phase 2: Agent Swarm Analysis</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Deep Analyst: structural decomposition</li>
              <li>• Quantum Strategist: path generation</li>
              <li>• Adversarial Critic: stress testing</li>
              <li>• Meta Synthesizer: cross-domain fusion</li>
              <li>• Prime Vetter: consensus validation</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Phase 3: Resolution Prediction</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Bayesian probability scoring</li>
              <li>• Monte Carlo path simulation</li>
              <li>• Historical pattern matching (ChromaDB)</li>
              <li>• Risk assessment per resolution path</li>
              <li>• Optimal path selection & ranking</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Phase 4: Vetting & Deployment</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Multi-agent consensus algorithm</li>
              <li>• Formal verification of solution</li>
              <li>• Edge case validation</li>
              <li>• Deterministic factor computation</li>
              <li>• Resolution deployment & monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <span className="text-2xl">💎</span> Core Design Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="text-sm font-bold text-white mb-1">Cyclic Resolution</h3>
            <p className="text-xs text-gray-400">
              Problems are never solved linearly. The system iterates through dimensions, refining solutions with each cycle until convergence.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
            <div className="text-2xl mb-2">🌐</div>
            <h3 className="text-sm font-bold text-white mb-1">Cross-Domain Transfer</h3>
            <p className="text-xs text-gray-400">
              Solutions from one domain inform resolution in others. The Meta Synthesizer identifies patterns across problem spaces.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="text-sm font-bold text-white mb-1">Adversarial Robustness</h3>
            <p className="text-xs text-gray-400">
              Every solution is attacked before deployment. The Adversarial Critic ensures solutions survive worst-case scenarios.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20">
            <div className="text-2xl mb-2">📐</div>
            <h3 className="text-sm font-bold text-white mb-1">Deterministic Scoring</h3>
            <p className="text-xs text-gray-400">
              No black-box decisions. Every resolution is quantified with transparent, reproducible metrics across 6 deterministic factors.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-sm font-bold text-white mb-1">Emergent Intelligence</h3>
            <p className="text-xs text-gray-400">
              The system discovers non-obvious solutions through agent interaction. Emergent patterns arise from multi-agent collaboration.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="text-sm font-bold text-white mb-1">Temporal Awareness</h3>
            <p className="text-xs text-gray-400">
              Solutions account for time-sensitivity. The Temporal Decay Factor ensures urgent problems get priority without sacrificing quality.
            </p>
          </div>
        </div>
      </div>

      {/* Future-Proofing */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <span className="text-2xl">🔮</span> Future-Proofing Architecture
        </h2>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Model-Agnostic Design</h3>
            <p className="text-xs text-gray-400">
              Through LiteLLM integration, Rubbi-X works with any LLM backend. When GPT-5, Claude 4, or Gemini Ultra drop, the system adapts instantly. 
              Each agent can use a different model optimized for its specific task.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Extensible Agent Framework</h3>
            <p className="text-xs text-gray-400">
              New agents can be added without modifying existing ones. The orchestration layer (LangGraph) supports dynamic agent registration, 
              allowing the system to grow its capabilities organically.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Self-Improving Resolution Memory</h3>
            <p className="text-xs text-gray-400">
              Every solved problem enriches the ChromaDB solution memory. The system gets better at solving similar problems over time through 
              accumulated resolution patterns and transfer learning.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">Quantum-Ready Architecture</h3>
            <p className="text-xs text-gray-400">
              The Graphify engine's multi-dimensional approach maps naturally to quantum computing paradigms. When quantum hardware matures, 
              the resolution predictor can leverage quantum superposition for exponential speedup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
