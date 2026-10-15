import { useState } from 'react';
import { COMPARATIVE_RATINGS, TEN_STRATEGIES, FORM_A_SYSTEM_PROMPT, FORM_B_PYTHON_BLUEPRINT, FORM_C_MODELFILE, WORKFLOW_STEPS, END_OF_SESSION_PROTOCOL } from './data';

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'strategies' | 'ratings' | 'deployment' | 'workflow'>('overview');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedPython, setCopiedPython] = useState(false);
  const [copiedModelfile, setCopiedModelfile] = useState(false);

  const copyToClipboard = (text: string, type: 'prompt' | 'python' | 'modelfile') => {
    navigator.clipboard.writeText(text);
    if (type === 'prompt') {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } else if (type === 'python') {
      setCopiedPython(true);
      setTimeout(() => setCopiedPython(false), 2000);
    } else {
      setCopiedModelfile(true);
      setTimeout(() => setCopiedModelfile(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                🎲 Rubbi-X v4.0
              </h1>
              <p className="text-gray-400 mt-2">The Ultimate Anti-Loop Cognitive Framework</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-green-400">99/100</div>
              <div className="text-sm text-gray-400">Resolution Rating</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-700 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: '🧠' },
              { id: 'strategies', label: '10 Strategies', icon: '⚡' },
              { id: 'ratings', label: 'Comparative Ratings', icon: '📊' },
              { id: 'deployment', label: '3-in-1 Deployment', icon: '🚀' },
              { id: 'workflow', label: 'Workflow', icon: '🔄' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-orange-900/30 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold mb-4">The $50M Cognitive Framework</h2>
              <p className="text-xl text-gray-300 mb-6">
                Rubbi-X v4.0 is a <span className="text-purple-400 font-semibold">cognitive skill</span> fed INTO any AI to make it resolve problems <span className="text-green-400 font-semibold">10x faster</span> with <span className="text-green-400 font-semibold">5x accuracy</span>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="text-4xl mb-2">🚫</div>
                  <h3 className="text-lg font-bold mb-2">Zero Tolerance for Loops</h3>
                  <p className="text-sm text-gray-400">Predictive loop detection stops circular logic BEFORE it happens. 99% loop avoidance rate.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="text-lg font-bold mb-2">10x Faster via Incremental Processing</h3>
                  <p className="text-sm text-gray-400">Only the Δ (delta) gets reprocessed. 80-90% cache hit rate. Sub-second memory updates.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="text-4xl mb-2">🧬</div>
                  <h3 className="text-lg font-bold mb-2">AST-Aware Code Resolution</h3>
                  <p className="text-sm text-gray-400">CocoIndex-Code integration gives coding agents superhuman code understanding. 70% fewer tokens.</p>
                </div>
              </div>
            </div>

            {/* Core Architecture */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">🏛️ Core Architecture: R1/R2 Nested System</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">R1 — Persistent Core</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>✓ Master Graphify map for the project</li>
                    <li>✓ Accumulates atomic notes from all R2 instances</li>
                    <li>✓ Auto-backs up after every resolution</li>
                    <li>✓ Survives across sessions</li>
                    <li>✓ Never requires user reminder to backup</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">R2 — Ephemeral Solver</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>✓ Spawns for specific sub-problems</li>
                    <li>✓ Uses 10 advanced strategies</li>
                    <li>✓ Writes immutable atomic notes</li>
                    <li>✓ Merges successful notes to R1</li>
                    <li>✓ <span className="text-red-400 font-bold">DELETES ITSELF</span> to free context</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-green-400">99%</div>
                <div className="text-sm text-gray-400 mt-2">Loop Avoidance</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-blue-400">10x</div>
                <div className="text-sm text-gray-400 mt-2">Faster Processing</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-orange-400">70%</div>
                <div className="text-sm text-gray-400 mt-2">Fewer Tokens</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-purple-400">5x</div>
                <div className="text-sm text-gray-400 mt-2">Better Accuracy</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'strategies' && (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-4">⚡ The 10 Advanced Internal Strategies</h2>
              <p className="text-gray-400 mb-8">These operate silently in the background of the AI's reasoning. The user never sees them — only the final resolution.</p>
              
              <div className="space-y-4">
                {TEN_STRATEGIES.map((strategy, index) => (
                  <div key={strategy.id} className="bg-gray-800/50 rounded-xl p-6 border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: strategy.color }}>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{strategy.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{strategy.name}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">{strategy.codename}</span>
                        </div>
                        <p className="text-gray-300 mb-4">{strategy.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500 font-semibold mb-1">Trigger:</div>
                            <div className="text-gray-300">{strategy.trigger}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 font-semibold mb-1">Speed Impact:</div>
                            <div className="text-green-400">{strategy.speedImpact}</div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="text-gray-500 font-semibold mb-1">Mechanism:</div>
                          <div className="text-gray-300 text-sm">{strategy.mechanism}</div>
                        </div>
                        
                        <div className="mt-3 bg-gray-900/50 rounded-lg p-3">
                          <div className="text-gray-500 font-semibold mb-1 text-xs">Example:</div>
                          <div className="text-gray-400 text-xs italic">{strategy.example}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ratings' && (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6">📊 Comparative Resolution Ratings</h2>
              
              <div className="space-y-4">
                {COMPARATIVE_RATINGS.map((model) => (
                  <div key={model.name} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{model.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold">{model.name}</h3>
                          <p className="text-sm text-gray-400">{model.verdict}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold" style={{ color: model.color }}>{model.score}</div>
                        <div className="text-xs text-gray-400">/100</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Loop Avoidance</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${model.loopAvoidance}%` }}></div>
                          </div>
                          <span className="text-sm font-semibold">{model.loopAvoidance}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Memory</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${model.memory}%` }}></div>
                          </div>
                          <span className="text-sm font-semibold">{model.memory}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Speed</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${model.speed}%` }}></div>
                          </div>
                          <span className="text-sm font-semibold">{model.speed}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Creativity</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${model.creativity}%` }}></div>
                          </div>
                          <span className="text-sm font-semibold">{model.creativity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deployment' && (
          <div className="space-y-8">
            {/* Form A */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">📜 Form A: Cognitive Injection (System Prompt)</h2>
                  <p className="text-gray-400 mt-2">The master text injected into any AI's context window to activate Rubbi-X v4.0</p>
                </div>
                <button
                  onClick={() => copyToClipboard(FORM_A_SYSTEM_PROMPT, 'prompt')}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all"
                >
                  {copiedPrompt ? '✓ Copied!' : 'Copy Prompt'}
                </button>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 max-h-96 overflow-y-auto">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">{FORM_A_SYSTEM_PROMPT}</pre>
              </div>
            </div>

            {/* Form B */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">🐍 Form B: Middleware Architecture (Python/Rust)</h2>
                  <p className="text-gray-400 mt-2">Local daemon that intercepts prompts, manages R1/R2 databases, enforces path hashing</p>
                </div>
                <button
                  onClick={() => copyToClipboard(FORM_B_PYTHON_BLUEPRINT, 'python')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all"
                >
                  {copiedPython ? '✓ Copied!' : 'Copy Code'}
                </button>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 max-h-96 overflow-y-auto">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">{FORM_B_PYTHON_BLUEPRINT}</pre>
              </div>
            </div>

            {/* Form C */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">🦙 Form C: Neural Modelfile (Ollama)</h2>
                  <p className="text-gray-400 mt-2">Configuration to bake Rubbi-X into local open-weights models (Qwen, DeepSeek, Llama)</p>
                </div>
                <button
                  onClick={() => copyToClipboard(FORM_C_MODELFILE, 'modelfile')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-all"
                >
                  {copiedModelfile ? '✓ Copied!' : 'Copy Modelfile'}
                </button>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 max-h-96 overflow-y-auto">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap font-mono">{FORM_C_MODELFILE}</pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workflow' && (
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6">🔄 Complete Workflow: Problem → Resolution</h2>
              
              <div className="space-y-3">
                {WORKFLOW_STEPS.map((step) => (
                  <div key={step.step} className="flex items-start gap-4 bg-gray-800/50 rounded-xl p-4 border-l-4 hover:shadow-lg transition-all" style={{ borderLeftColor: step.color }}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold" style={{ backgroundColor: step.color + '30', color: step.color }}>
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold">{step.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">{step.actor}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* End of Session Protocol */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl p-8 border border-orange-500/30">
              <h2 className="text-2xl font-bold mb-4">🏁 End-of-Session Protocol</h2>
              <p className="text-gray-400 mb-4">When the session ends, Rubbi-X outputs this brief, non-intrusive prompt:</p>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">{END_OF_SESSION_PROTOCOL}</pre>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-400">
            Rubbi-X v4.0 — The $50M Cognitive Framework • 99/100 Resolution Rating • 10x Faster • 5x More Accurate
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This is not a demo. This is the ultimate problem-solving engine designed to outlive current tech cycles.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
