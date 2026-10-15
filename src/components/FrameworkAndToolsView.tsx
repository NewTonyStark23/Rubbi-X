import { useState } from 'react';
import { GITHUB_TOOLS } from '../data';

export default function FrameworkAndToolsView() {
  const [tab, setTab] = useState<'framework' | 'tools'>('framework');
  const [showPrompt, setShowPrompt] = useState(false);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'core', 'code', 'orchestration', 'creative', 'storage', 'optimization', 'safety', 'llm'];
  const filteredTools = filter === 'all' ? GITHUB_TOOLS : GITHUB_TOOLS.filter(t => t.category === filter);

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab('framework')}
          className={`px-4 py-2 text-sm rounded-lg ${tab === 'framework' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-gray-400 border border-transparent'}`}
        >
          📜 The Framework
        </button>
        <button
          onClick={() => setTab('tools')}
          className={`px-4 py-2 text-sm rounded-lg ${tab === 'tools' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-gray-400 border border-transparent'}`}
        >
          ⚙️ Tool Stack
        </button>
      </div>

      {tab === 'framework' && (
        <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <span className="text-2xl">📜</span> Rubbi-X v4.0 System Prompt
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            This is the cognitive framework that gets fed to the AI. v4.0 adds incremental processing, predictive loop prevention, and AST-aware resolution.
          </p>
          <button
            onClick={() => setShowPrompt(!showPrompt)}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4"
          >
            {showPrompt ? 'Hide' : 'Show'} Full v4.0 Prompt
          </button>
          {showPrompt && (
            <div className="bg-gray-950 rounded-xl p-4 border border-gray-800 font-mono text-xs text-gray-300 max-h-[500px] overflow-y-auto space-y-3">
              <div className="text-purple-300 font-bold"># RUBBI-X v4.0 COGNITIVE FRAMEWORK</div>
              <div className="text-gray-500">## You are now operating with the Rubbi-X v4.0 problem resolution methodology.</div>
              <div className="text-gray-500">## v4.0 adds: Incremental Processing, Predictive Loop Prevention, AST-Aware Resolution</div>
              <br/>
              <div className="text-orange-300">## CORE PRINCIPLE: You CANNOT loop. v4.0 predicts loops BEFORE they happen.</div>
              <div>Before each step: calculate predicted_loop_risk (0-100) for each potential action.</div>
              <div>If predicted_loop_risk {'>'} 70 → BLOCK proactively → inject Superpower.</div>
              <div>If loop still occurs → read atomic notes → understand WHY → inject Superpower → new path.</div>
              <br/>
              <div className="text-cyan-300">## INCREMENTAL PROCESSING (v4.0 NEW):</div>
              <div>When a problem evolves, DO NOT reprocess everything.</div>
              <div>1. Fingerprint each atomic note (hash of content)</div>
              <div>2. Compare new problem state against previous state</div>
              <div>3. Identify the Δ (what changed)</div>
              <div>4. ONLY reprocess atomic notes affected by the Δ</div>
              <div>5. Unchanged notes hit cache instantly (80-90% hit rate)</div>
              <div>This makes memory updates 10x faster.</div>
              <br/>
              <div className="text-green-300">## AST-AWARE CODE RESOLUTION (v4.0 NEW):</div>
              <div>When solving coding problems:</div>
              <div>1. Use CocoIndex-Code to search codebase for similar resolved issues</div>
              <div>2. AST-based semantic matching finds structurally similar code</div>
              <div>3. Retrieve how similar bugs were fixed</div>
              <div>4. Apply proven patterns to current problem</div>
              <div>This gives coding agents superhuman code understanding.</div>
              <br/>
              <div className="text-pink-300">## SELF-EVOLVING SUPERPOWERS (v4.0 NEW):</div>
              <div>Each Superpower tracks success_rate and usage_count.</div>
              <div>When choosing which Superpower to inject:</div>
              <div>1. Filter to skills matching trigger condition</div>
              <div>2. Sort by success_rate (highest first)</div>
              <div>3. Inject highest-success skill</div>
              <div>4. After resolution, update success_rate based on outcome</div>
              <div>The system gets smarter with every resolution.</div>
              <br/>
              <div className="text-yellow-300">## MULTI-GRAPHIFY PARALLELISM (v4.0 NEW):</div>
              <div>When problem has multiple independent dimensions:</div>
              <div>1. Spawn multiple R2 instances (one per dimension)</div>
              <div>2. Each R2 works in parallel on its dimension</div>
              <div>3. Merge results into R1 when all complete</div>
              <div>4. Each R2 has independent atomic note stream</div>
              <div>This reduces wall-clock time by 3-5x.</div>
              <br/>
              <div className="text-gray-500">## You are now Rubbi-X v4.0. Solve 10x faster.</div>
            </div>
          )}

          {/* v3.0 vs v4.0 comparison */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
              <h3 className="text-sm font-bold text-gray-400 mb-2">v3.0 Approach</h3>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Reactive loop detection (catches after)</li>
                <li>• Full context reprocessing each time</li>
                <li>• Static Superpowers</li>
                <li>• Single R2 instance</li>
                <li>• No code-specific optimizations</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5">
              <h3 className="text-sm font-bold text-purple-300 mb-2">v4.0 Approach</h3>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• <span className="text-green-300">Predictive</span> loop prevention (stops before)</li>
                <li>• <span className="text-green-300">Incremental</span> processing (Δ only)</li>
                <li>• <span className="text-green-300">Self-evolving</span> Superpowers</li>
                <li>• <span className="text-green-300">Multi-R2</span> parallelism</li>
                <li>• <span className="text-green-300">AST-aware</span> code resolution</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {tab === 'tools' && (
        <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <span className="text-2xl">⚙️</span> GitHub Tool Stack — v4.0
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            v4.0 adds CocoIndex and CocoIndex-Code as core infrastructure for incremental processing and AST-aware resolution.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all capitalize ${
                  filter === cat
                    ? 'border-purple-500 bg-purple-500/10 text-purple-300'
                    : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredTools.map((tool) => (
              <div key={tool.name} className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-purple-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{tool.name}</span>
                    <span className="text-[10px] text-yellow-400">⭐ {tool.stars}</span>
                  </div>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-400 hover:text-blue-300">
                    GitHub →
                  </a>
                </div>
                <p className="text-xs text-gray-400 mb-2">{tool.purpose}</p>
                <p className="text-[10px] text-gray-500">{tool.integration}</p>
                <div className="mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-300 capitalize">{tool.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
