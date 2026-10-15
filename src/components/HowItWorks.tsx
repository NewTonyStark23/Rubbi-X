import { useState } from 'react';

type ViewMode = 'flow' | 'loop' | 'atomic';

export default function HowItWorks() {
  const [view, setView] = useState<ViewMode>('flow');

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">📖</span> How Rubbi-X Works
          </h2>
          <p className="text-gray-400 text-sm mt-1">Visual explanation of the anti-loop resolution system</p>
        </div>
        <div className="flex gap-1">
          {[
            { key: 'flow' as ViewMode, label: 'Full Flow' },
            { key: 'loop' as ViewMode, label: 'Loop Detection' },
            { key: 'atomic' as ViewMode, label: 'Atomic Notes' }
          ].map(v => (
            <button
              key={v.key}
              onClick={() => setView(v.key)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                view === v.key
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-gray-400 hover:text-gray-300 border border-transparent'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {view === 'flow' && <FullFlowDiagram />}
      {view === 'loop' && <LoopDetectionDiagram />}
      {view === 'atomic' && <AtomicNotesDiagram />}
    </div>
  );
}

function FullFlowDiagram() {
  return (
    <div className="space-y-6">
      {/* Main Flow */}
      <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
        <h3 className="text-sm font-bold text-center text-gray-300 mb-6">COMPLETE RESOLUTION FLOW</h3>
        
        <div className="flex flex-col items-center gap-2">
          {/* Step 1 */}
          <FlowStep
            number={1}
            title="Problem Input"
            description="AI receives a problem statement"
            color="blue"
            icon="📝"
          />
          <FlowArrow />
          
          {/* Step 2 */}
          <FlowStep
            number={2}
            title="Graphify Decomposition"
            description="Problem split into 6 dimensions: Structural, Temporal, Causal, Relational, Constraint, Emergent"
            color="purple"
            icon="🎲"
          />
          <FlowArrow />
          
          {/* Step 3 */}
          <FlowStep
            number={3}
            title="Agent Swarm Activation"
            description="5 specialized agents begin parallel analysis: Analyst → Strategist → Critic → Scribe → Prime Vetter"
            color="cyan"
            icon="🤖"
          />
          <FlowArrow />
          
          {/* Step 4 - THE KEY INNOVATION */}
          <div className="w-full max-w-2xl p-4 rounded-xl border-2 border-orange-500/50 bg-orange-500/5 relative">
            <div className="absolute -top-3 left-4 px-2 py-0.5 bg-orange-500 text-white text-[10px] font-bold rounded">
              KEY INNOVATION
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              <div>
                <h4 className="text-sm font-bold text-orange-300">Anti-Loop Engine + Atomic Notes</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Every step taken is recorded as an <span className="text-orange-300 font-medium">Atomic Note</span> (immutable memory). 
                  Every path gets a <span className="text-orange-300 font-medium">hash signature</span>. When the system circles back to a node 
                  it's already visited, the Critic agent detects the hash collision and <span className="text-orange-300 font-medium">blocks that path</span>.
                </p>
              </div>
            </div>
          </div>
          <FlowArrow />
          
          {/* Step 5 */}
          <FlowStep
            number={5}
            title="Loop Detection → Branch Injection"
            description="When loop detected: read atomic notes → identify what failed → inject Superpower skill → force new dimension"
            color="red"
            icon="💥"
          />
          <FlowArrow />
          
          {/* Step 6 */}
          <FlowStep
            number={6}
            title="Convergence & Vetting"
            description="Prime Vetter runs consensus. All atomic notes validated. Resolution locked when confidence > 95%."
            color="green"
            icon="✅"
          />
        </div>
      </div>

      {/* What each component does */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ComponentCard
          icon="🎲"
          title="Graphify Engine"
          description="Decomposes any problem into a 6-dimensional cube. Each dimension is a node. Connections between nodes represent dependencies. This is the AI's internal map — not visible to users."
          color="purple"
        />
        <ComponentCard
          icon="📝"
          title="Atomic Notes"
          description="Immutable memory units. Every action the AI takes gets recorded: what it tried, what happened, what it learned. These notes are PERMANENT — the AI can never forget what didn't work."
          color="orange"
        />
        <ComponentCard
          icon="🔄"
          title="Loop Detection"
          description="Path hashing compares current attempt against all previous attempts. If hash matches a visited path, the system KNOWS it's looping. It reads the atomic notes from that path to understand WHY it failed."
          color="red"
        />
        <ComponentCard
          icon="💥"
          title="Superpowers Integration"
          description="When a loop is detected, a creative skill from obra/superpowers is injected. This forces the AI to think laterally — inversion, dimensional escape, constraint removal. It CANNOT take the same path twice."
          color="pink"
        />
      </div>
    </div>
  );
}

function LoopDetectionDiagram() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
        <h3 className="text-sm font-bold text-center text-red-300 mb-6">LOOP DETECTION MECHANISM</h3>
        
        {/* Visual Loop Diagram */}
        <div className="relative w-full max-w-xl mx-auto h-80">
          {/* Circular path showing the loop */}
          <svg viewBox="0 0 400 300" className="w-full h-full">
            {/* The loop path */}
            <circle cx="200" cy="150" r="100" fill="none" stroke="#374151" strokeWidth="2" strokeDasharray="8 4" />
            
            {/* Nodes on the circle */}
            {[0, 1, 2, 3, 4, 5].map(i => {
              const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
              const x = 200 + 100 * Math.cos(angle);
              const y = 150 + 100 * Math.sin(angle);
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r={15} fill={i === 3 ? '#ef4444' : '#1f2937'} stroke={i === 3 ? '#ef4444' : '#4b5563'} strokeWidth="2" />
                  <text x={x} y={y + 4} textAnchor="middle" className="text-[8px] fill-white font-bold">
                    {i === 3 ? '🚫' : `N${i}`}
                  </text>
                  <text x={x} y={y + 28} textAnchor="middle" className="text-[7px] fill-gray-500">
                    {i === 3 ? 'LOOP!' : `Visit ${i + 1}`}
                  </text>
                </g>
              );
            })}

            {/* Path hash labels */}
            <text x="200" y="30" textAnchor="middle" className="text-[9px] fill-gray-400">
              Path Hash: a3f7b2c1 → MATCH FOUND
            </text>
            
            {/* Branch injection arrow */}
            <line x1="300" y1="150" x2="370" y2="150" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="340" y="140" textAnchor="middle" className="text-[8px] fill-orange-400">BRANCH</text>
            <text x="340" y="170" textAnchor="middle" className="text-[8px] fill-orange-400">INJECT</text>
            
            {/* New path */}
            <circle cx="370" cy="150" r="15" fill="#1f2937" stroke="#f97316" strokeWidth="2" />
            <text x="370" y="154" textAnchor="middle" className="text-[8px] fill-orange-300 font-bold">NEW</text>
            
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Step by step explanation */}
        <div className="mt-6 space-y-3">
          <LoopStep
            step={1}
            title="AI takes a resolution step"
            description="Agent processes a dimension node, generates a path hash from the action + node + context"
          />
          <LoopStep
            step={2}
            title="Hash checked against visited paths"
            description="Neo4j index lookup: has this exact hash been seen before? O(1) comparison against all stored path hashes"
          />
          <LoopStep
            step={3}
            title="If match found → LOOP DETECTED"
            description="The Critic agent reads atomic notes from the previous visit. Understands WHY that path failed."
          />
          <LoopStep
            step={4}
            title="Path BLOCKED + Superpower injected"
            description="The failed path is permanently blocked. A creative skill (inversion, dimensional escape, etc.) is forced into the reasoning chain."
          />
          <LoopStep
            step={5}
            title="New branch explored"
            description="AI must now take a completely different approach. New atomic notes are generated. The cycle continues until convergence."
          />
        </div>
      </div>
    </div>
  );
}

function AtomicNotesDiagram() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
        <h3 className="text-sm font-bold text-center text-orange-300 mb-6">ATOMIC NOTES — THE AI'S IMMUTABLE MEMORY</h3>
        
        {/* Note Structure */}
        <div className="max-w-2xl mx-auto">
          <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/5 mb-6">
            <h4 className="text-xs font-bold text-orange-300 mb-3">ANATOMY OF AN ATOMIC NOTE:</h4>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">id:</span> <span className="text-green-300">"note-a7f3..."</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">timestamp:</span> <span className="text-blue-300">1699234567890</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">nodeId:</span> <span className="text-purple-300">"node-2" (Causal)</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">pathHash:</span> <span className="text-yellow-300">"a3f7b2c1"</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">action:</span> <span className="text-white">"Applied recursive decomposition"</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">result:</span> <span className="text-red-300">"loop_detected"</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50 col-span-2">
                <span className="text-gray-500">lesson:</span> <span className="text-orange-300">"BLOCKED: Recursive approach on Causal dimension creates infinite regression. Must use iterative instead."</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">blocked:</span> <span className="text-red-400 font-bold">true</span>
              </div>
              <div className="p-2 rounded bg-gray-800/50">
                <span className="text-gray-500">agents:</span> <span className="text-cyan-300">["critic", "synthesizer"]</span>
              </div>
            </div>
          </div>

          {/* Why they matter */}
          <div className="space-y-3">
            <div className="p-3 rounded-lg border border-gray-700/50 bg-gray-800/30">
              <h4 className="text-xs font-bold text-white mb-1">🔒 IMMUTABLE</h4>
              <p className="text-[10px] text-gray-400">
                Once written, an atomic note can NEVER be modified or deleted. The AI cannot "forget" what it tried. 
                This prevents the exact failure mode of other systems where the AI loops because it "forgot" its previous attempts.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-gray-700/50 bg-gray-800/30">
              <h4 className="text-xs font-bold text-white mb-1">🔗 HASH-LINKED</h4>
              <p className="text-[10px] text-gray-400">
                Every note contains a path hash — a unique fingerprint of the exact resolution path taken. 
                When the system encounters the same hash again, it INSTANTLY knows it's looping.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-gray-700/50 bg-gray-800/30">
              <h4 className="text-xs font-bold text-white mb-1">📚 LESSON-EXTRACTING</h4>
              <p className="text-[10px] text-gray-400">
                Each note contains a "lesson" field — a compressed insight about WHY the approach failed. 
                When a loop is detected, the system reads these lessons to understand what NOT to do, then injects a Superpower skill to force a different approach.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-gray-700/50 bg-gray-800/30">
              <h4 className="text-xs font-bold text-white mb-1">🚫 PATH-BLOCKING</h4>
              <p className="text-[10px] text-gray-400">
                When a note has <code className="text-red-300">blocked: true</code>, Guardrails AI enforces a hard gate — 
                no agent can propose a resolution path with a matching hash. The system is FORCED to find a new way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components
function FlowStep({ number, title, description, color, icon }: { number: number; title: string; description: string; color: string; icon: string }) {
  const colorClasses: Record<string, string> = {
    blue: 'border-blue-500/30 bg-blue-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    red: 'border-red-500/30 bg-red-500/5',
    green: 'border-green-500/30 bg-green-500/5',
  };
  
  return (
    <div className={`w-full max-w-2xl p-4 rounded-xl border ${colorClasses[color] || colorClasses.blue}`}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-sm font-bold text-white">
          {number}
        </div>
        <span className="text-2xl">{icon}</span>
        <div>
          <h4 className="text-sm font-bold text-white">{title}</h4>
          <p className="text-xs text-gray-400 mt-0.5">{description}</p>
        </div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center">
      <div className="w-0.5 h-6 bg-gradient-to-b from-gray-600 to-gray-700" />
    </div>
  );
}

function LoopStep({ step, title, description }: { step: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-[10px] font-bold text-red-300">
        {step}
      </div>
      <div>
        <h4 className="text-xs font-bold text-white">{title}</h4>
        <p className="text-[10px] text-gray-400 mt-0.5">{description}</p>
      </div>
    </div>
  );
}

function ComponentCard({ icon, title, description, color }: { icon: string; title: string; description: string; color: string }) {
  const borderColors: Record<string, string> = {
    purple: 'border-purple-500/30',
    orange: 'border-orange-500/30',
    red: 'border-red-500/30',
    pink: 'border-pink-500/30',
  };
  
  return (
    <div className={`p-4 rounded-xl border ${borderColors[color] || 'border-gray-700/50'} bg-gray-800/30`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{icon}</span>
        <h3 className="text-sm font-bold text-white">{title}</h3>
      </div>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
}
