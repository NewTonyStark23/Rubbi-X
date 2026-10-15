import { useState } from 'react';
import { COMPARATIVE_RATINGS, TEN_STRATEGIES, FORM_A_SYSTEM_PROMPT, FORM_B_PYTHON_BLUEPRINT, FORM_C_MODELFILE, WORKFLOW_STEPS, END_OF_SESSION_PROTOCOL, PATTERN_ENGINE, DETERMINISTIC_FACTORS, GPU_ACCELERATION, PATH_HASHING, TEST_GENERATION_LOOP, THREE_MIND_COUNCIL, HARDWARE_ORCHESTRATION, COMPILER_IN_LOOP } from './data';

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'strategies' | 'advanced' | 'ratings' | 'deployment' | 'workflow'>('overview');
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
              { id: 'advanced', label: 'Advanced Features', icon: '🎮' },
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
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="text-4xl mb-2">🧩</div>
                  <h3 className="text-lg font-bold mb-2">Pattern Recognition Engine</h3>
                  <p className="text-sm text-gray-400">GPU-accelerated pattern detection across atomic notes. Identifies success patterns, anti-patterns, and emergent structures.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="text-4xl mb-2">🎮</div>
                  <h3 className="text-lg font-bold mb-2">GPU Acceleration Layer</h3>
                  <p className="text-sm text-gray-400">Leverages CUDA/OpenCL for parallel hash computation and similarity matching. 10-100x speedup.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="text-4xl mb-2">📐</div>
                  <h3 className="text-lg font-bold mb-2">Deterministic Scoring</h3>
                  <p className="text-sm text-gray-400">Reproducible quality metrics: RCI, PMC, DPS, GAF, LPA, ANI. All scores deterministic given same inputs.</p>
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-4xl font-bold text-pink-400">0.3ms</div>
                <div className="text-sm text-gray-400 mt-2">Pattern Match (GPU)</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advanced' && (
          <div className="space-y-8">
            {/* Pattern Recognition Engine */}
            <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-orange-900/30 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{PATTERN_ENGINE.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{PATTERN_ENGINE.name}</h2>
                  <p className="text-sm text-purple-400 font-mono mb-3">Codename: {PATTERN_ENGINE.codename}</p>
                  <p className="text-gray-300">{PATTERN_ENGINE.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-purple-400">Capabilities</h3>
                  <ul className="space-y-2">
                    {PATTERN_ENGINE.capabilities.map((cap, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-green-400">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">GPU Acceleration</div>
                      <div className="text-sm text-gray-300">{PATTERN_ENGINE.gpuAcceleration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Deterministic Score</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${PATTERN_ENGINE.deterministicScore}%` }}></div>
                        </div>
                        <span className="text-sm font-bold text-green-400">{PATTERN_ENGINE.deterministicScore}/100</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Pattern Match Speed</div>
                      <div className="text-sm text-green-400 font-mono">{PATTERN_ENGINE.patternMatchSpeed}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GPU Acceleration Layer */}
            <div className="bg-gradient-to-br from-green-900/30 via-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{GPU_ACCELERATION.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{GPU_ACCELERATION.name}</h2>
                  <p className="text-sm text-green-400 font-mono mb-3">Codename: {GPU_ACCELERATION.codename}</p>
                  <p className="text-gray-300">{GPU_ACCELERATION.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-green-400">Use Cases</h3>
                  <ul className="space-y-2">
                    {GPU_ACCELERATION.useCases.map((useCase, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-1">▸</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-blue-400">Hardware Support</h3>
                  <div className="text-sm text-gray-300 mb-4">{GPU_ACCELERATION.hardware}</div>
                  <div className="text-xs text-gray-400">
                    Seamless integration with automatic CPU fallback if GPU unavailable
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-yellow-400">Performance Gain</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{GPU_ACCELERATION.performanceGain}</div>
                  <div className="text-xs text-gray-400">
                    Depending on workload size and GPU capabilities
                  </div>
                </div>
              </div>
            </div>

            {/* Deterministic Scoring System */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-2">📐 Deterministic Scoring System</h2>
              <p className="text-gray-400 mb-6">Reproducible, quantifiable resolution quality metrics. All scores are deterministic given the same inputs.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DETERMINISTIC_FACTORS.map((factor, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold">{factor.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 font-mono">{factor.abbr}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{factor.description}</p>
                    <div className="bg-gray-900/50 rounded-lg p-3 mb-3">
                      <div className="text-xs text-gray-500 mb-1">Formula:</div>
                      <div className="text-xs text-green-400 font-mono">{factor.formula}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">Deterministic:</div>
                      <div className={`text-xs font-bold ${factor.deterministic ? 'text-green-400' : 'text-yellow-400'}`}>
                        {factor.deterministic ? '✓ Yes' : '✗ No (Hardware-dependent)'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Path Hashing for Loop Detection */}
            <div className="bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{PATH_HASHING.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{PATH_HASHING.name}</h2>
                  <p className="text-sm text-blue-400 font-mono mb-3">Codename: {PATH_HASHING.codename}</p>
                  <p className="text-gray-300">{PATH_HASHING.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-blue-400">Capabilities</h3>
                  <ul className="space-y-2">
                    {PATH_HASHING.capabilities.map((cap, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-green-400">Technical Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Algorithm</div>
                      <div className="text-sm text-gray-300 font-mono">{PATH_HASHING.algorithm}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Performance</div>
                      <div className="text-sm text-green-400">{PATH_HASHING.performance}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Example</div>
                      <div className="text-xs text-gray-300">{PATH_HASHING.example}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Generation & Execution Loop */}
            <div className="bg-gradient-to-br from-green-900/30 via-emerald-900/30 to-teal-900/30 rounded-2xl p-8 border border-green-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{TEST_GENERATION_LOOP.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{TEST_GENERATION_LOOP.name}</h2>
                  <p className="text-sm text-green-400 font-mono mb-3">Codename: {TEST_GENERATION_LOOP.codename}</p>
                  <p className="text-gray-300">{TEST_GENERATION_LOOP.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-green-400">Roles</h3>
                  <div className="space-y-3">
                    {TEST_GENERATION_LOOP.roles.map((role, i) => (
                      <div key={i} className="bg-gray-900/50 rounded-lg p-3">
                        <div className="text-sm font-bold text-green-300 mb-1">{role.role}</div>
                        <div className="text-xs text-gray-400 mb-1">{role.responsibility}</div>
                        <div className="text-xs text-gray-500">Output: {role.output}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-blue-400">Workflow</h3>
                  <div className="space-y-1">
                    {TEST_GENERATION_LOOP.workflow.map((step, i) => (
                      <div key={i} className="text-xs text-gray-300">{step}</div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400 mb-1">Max Iterations: <span className="text-green-400 font-bold">{TEST_GENERATION_LOOP.maxIterations}</span></div>
                    <div className="text-sm text-gray-400 mb-1">Success Rate: <span className="text-green-400 font-bold">{TEST_GENERATION_LOOP.successRate}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weighted 3-Mind Council Voting */}
            <div className="bg-gradient-to-br from-purple-900/30 via-violet-900/30 to-fuchsia-900/30 rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{THREE_MIND_COUNCIL.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{THREE_MIND_COUNCIL.name}</h2>
                  <p className="text-sm text-purple-400 font-mono mb-3">Codename: {THREE_MIND_COUNCIL.codename}</p>
                  <p className="text-gray-300">{THREE_MIND_COUNCIL.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {THREE_MIND_COUNCIL.minds.map((mind, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-purple-300">{mind.mind}</h3>
                      <span className="text-2xl font-bold text-purple-400">{(mind.weight * 100).toFixed(0)}%</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-gray-500">Expertise:</span>
                        <div className="text-gray-300">{mind.expertise}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Bias:</span>
                        <div className="text-gray-300">{mind.bias}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold mb-3 text-purple-400">Voting Mechanism</h3>
                <div className="space-y-3">
                  <div className="text-sm text-gray-300">{THREE_MIND_COUNCIL.votingMechanism}</div>
                  <div className="text-sm text-gray-400">Consensus Threshold: <span className="text-purple-400 font-bold">{(THREE_MIND_COUNCIL.consensusThreshold * 100).toFixed(0)}%</span></div>
                  <div className="text-sm text-gray-400">Adaptive Weights: <span className="text-gray-300">{THREE_MIND_COUNCIL.adaptiveWeights}</span></div>
                  <div className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-700">
                    <span className="text-gray-400">Example:</span> {THREE_MIND_COUNCIL.example}
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware-Aware Resource Orchestration */}
            <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-cyan-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{HARDWARE_ORCHESTRATION.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{HARDWARE_ORCHESTRATION.name}</h2>
                  <p className="text-sm text-cyan-400 font-mono mb-3">Codename: {HARDWARE_ORCHESTRATION.codename}</p>
                  <p className="text-gray-300">{HARDWARE_ORCHESTRATION.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-cyan-400">Memory Tiers</h3>
                  <div className="space-y-3">
                    {HARDWARE_ORCHESTRATION.memoryTiers.map((tier, i) => (
                      <div key={i} className="bg-gray-900/50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-cyan-300">{tier.tier}</span>
                          <span className="text-xs text-gray-400">{tier.capacity}</span>
                        </div>
                        <div className="text-xs text-gray-400 mb-1">Speed: {tier.speed}</div>
                        <div className="text-xs text-gray-500">{tier.usage}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-blue-400">Orchestration Strategy</h3>
                  <div className="space-y-1 mb-4">
                    {HARDWARE_ORCHESTRATION.orchestrationStrategy.map((step, i) => (
                      <div key={i} className="text-xs text-gray-300">{step}</div>
                    ))}
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-gray-500">Predictive Offload:</span>
                      <div className="text-gray-300">{HARDWARE_ORCHESTRATION.predictiveOffload}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">mmap Strategy:</span>
                      <div className="text-gray-300">{HARDWARE_ORCHESTRATION.mmapStrategy}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Performance Gain:</span>
                      <span className="text-green-400 font-bold">{HARDWARE_ORCHESTRATION.performanceGain}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compiler-in-the-Loop Validation */}
            <div className="bg-gradient-to-br from-orange-900/30 via-red-900/30 to-pink-900/30 rounded-2xl p-8 border border-orange-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-6xl">{COMPILER_IN_LOOP.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{COMPILER_IN_LOOP.name}</h2>
                  <p className="text-sm text-orange-400 font-mono mb-3">Codename: {COMPILER_IN_LOOP.codename}</p>
                  <p className="text-gray-300">{COMPILER_IN_LOOP.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-orange-400">Supported Commands</h3>
                  <div className="space-y-2">
                    {COMPILER_IN_LOOP.supportedCommands.map((cmd, i) => (
                      <div key={i} className="bg-gray-900/50 rounded-lg p-2 flex items-center justify-between">
                        <span className="text-sm font-mono text-orange-300">{cmd.command}</span>
                        <span className="text-xs text-gray-400">{cmd.language}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-3 text-blue-400">Workflow</h3>
                  <div className="space-y-1 mb-4">
                    {COMPILER_IN_LOOP.workflow.map((step, i) => (
                      <div key={i} className="text-xs text-gray-300">{step}</div>
                    ))}
                  </div>
                  <div className="space-y-2 text-xs pt-3 border-t border-gray-700">
                    <div>Max Fixes: <span className="text-orange-400 font-bold">{COMPILER_IN_LOOP.maxFixes}</span></div>
                    <div>Success Rate: <span className="text-green-400 font-bold">{COMPILER_IN_LOOP.successRate}</span></div>
                    <div>Error Parsing: <span className="text-gray-300">{COMPILER_IN_LOOP.errorParsing}</span></div>
                  </div>
                </div>
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
