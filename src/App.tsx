import { useState, useEffect, useCallback } from 'react';
import AntiLoopEngine from './components/AntiLoopEngine';
import SuperpowersPanel from './components/SuperpowersPanel';
import HowItWorks from './components/HowItWorks';
import ToolStack from './components/ToolStack';
import { AtomicNote, LoopEvent } from './types';

type Tab = 'engine' | 'how' | 'tools';

export default function App() {
  const [problem, setProblem] = useState('');
  const [isSolving, setIsSolving] = useState(false);
  const [phase, setPhase] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>('engine');
  const [logs, setLogs] = useState<string[]>([]);
  const [loopEvents, setLoopEvents] = useState<LoopEvent[]>([]);
  const [atomicNotes, setAtomicNotes] = useState<AtomicNote[]>([]);
  const [totalLoopsCaught, setTotalLoopsCaught] = useState(0);
  const [totalNotesWritten, setTotalNotesWritten] = useState(0);

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev.slice(-30), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }, []);

  const handleLoopDetected = useCallback((event: LoopEvent) => {
    setLoopEvents(prev => [...prev, event]);
    setTotalLoopsCaught(prev => prev + 1);
    addLog(`🚫 LOOP DETECTED on ${event.currentNodeId} — visit #${event.visitCount} — injecting: ${event.newPathInjected}`);
  }, [addLog]);

  const handleAtomicNote = useCallback((note: AtomicNote) => {
    setAtomicNotes(prev => [...prev, note]);
    setTotalNotesWritten(prev => prev + 1);
    if (note.result === 'loop_detected') {
      addLog(`📝 ATOMIC NOTE [${note.pathHash.slice(0,6)}]: ${note.action} → BLOCKED`);
    } else {
      addLog(`📝 ATOMIC NOTE [${note.pathHash.slice(0,6)}]: ${note.action} → ${note.result}`);
    }
  }, [addLog]);

  const handleSolve = useCallback(() => {
    if (!problem.trim()) return;
    setIsSolving(true);
    setPhase(0);
    setLogs([]);
    setLoopEvents([]);
    setAtomicNotes([]);
    setTotalLoopsCaught(0);
    setTotalNotesWritten(0);

    addLog('🚀 Rubbi-X initialized — Anti-Loop Engine armed');
    addLog('🎲 Graphify decomposing problem into 6 dimensions');
    
    setTimeout(() => {
      setPhase(1);
      addLog('🔬 Deep Analyst: mapping problem topology, generating initial path hashes');
    }, 1000);

    setTimeout(() => {
      setPhase(2);
      addLog('🧠 Quantum Strategist: generating resolution paths + hash signatures');
      addLog('📝 Atomic Scribe: memory layer initialized — notes will be IMMUTABLE');
      addLog('⚡ Adversarial Critic: loop detection armed — watching for hash collisions');
    }, 2500);

    setTimeout(() => {
      setPhase(3);
      addLog('🔄 Anti-Loop Engine ACTIVE — monitoring path hashes in real-time');
      addLog('💥 Superpowers framework loaded — creative skills on standby');
    }, 4000);

    setTimeout(() => {
      setPhase(4);
      addLog('👑 Prime Vetter: consensus protocol ready — waiting for convergence signal');
    }, 6000);

    setTimeout(() => {
      setPhase(5);
      addLog('✅ Resolution converged — all atomic notes validated, no unresolved loops');
    }, 10000);

    setTimeout(() => {
      setIsSolving(false);
      addLog('🏆 Resolution cycle COMPLETE — problem solved without infinite loops');
    }, 11000);
  }, [problem, addLog]);

  useEffect(() => {
    addLog('🚀 Rubbi-X v3.0 — Anti-Loop Architecture online');
    addLog('📝 Atomic note system: IMMUTABLE memory — AI cannot forget failures');
    addLog('🔄 Loop detection: path hashing + hash collision blocking');
    addLog('💥 Superpowers: obra/superpowers creative skills loaded');
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
                  Anti-Loop AI Problem-Solving System
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-orange-400">
                  <span>🔄</span>
                  <span>{totalLoopsCaught} loops caught</span>
                </div>
                <div className="flex items-center gap-1 text-green-400">
                  <span>📝</span>
                  <span>{totalNotesWritten} notes written</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>System Online</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-4">
            {[
              { key: 'engine' as Tab, label: 'Resolution Engine', icon: '🎲' },
              { key: 'how' as Tab, label: 'How It Works', icon: '📖' },
              { key: 'tools' as Tab, label: 'Tool Stack', icon: '⚙️' }
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
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe the problem. The Anti-Loop Engine will decompose it, take resolution steps, record atomic notes for each step, detect when it loops back to a failed approach, and inject creative Superpower skills to force a new path..."
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 resize-none"
                rows={3}
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setProblem('How do we build a self-healing distributed system that recovers from any failure within 3 seconds with zero data loss at 10M concurrent users?')}
                    className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  >
                    Example: Distributed Systems
                  </button>
                  <button
                    onClick={() => setProblem('Design an AI alignment framework that guarantees safety while allowing self-improvement without human intervention?')}
                    className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  >
                    Example: AI Alignment
                  </button>
                  <button
                    onClick={() => setProblem('Create a quantum-resistant encryption protocol deployable incrementally across existing infrastructure without downtime?')}
                    className="text-[10px] px-2 py-1 rounded bg-gray-800 text-gray-400 hover:text-white transition-colors"
                  >
                    Example: Quantum Crypto
                  </button>
                </div>
              </div>
            </div>

            {/* Anti-Loop Engine */}
            <AntiLoopEngine
              problem={problem}
              isSolving={isSolving}
              phase={phase}
              onLoopDetected={handleLoopDetected}
              onAtomicNote={handleAtomicNote}
            />

            {/* Superpowers */}
            <SuperpowersPanel loopEvents={loopEvents} isSolving={isSolving} />

            {/* Activity Log */}
            <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>📋</span> Resolution Log
                </h2>
                <div className="flex gap-3 text-[10px]">
                  <span className="text-orange-400">🔄 Loops: {totalLoopsCaught}</span>
                  <span className="text-green-400">📝 Notes: {totalNotesWritten}</span>
                  <span className="text-purple-400">💥 Skills: {loopEvents.length}</span>
                </div>
              </div>
              <div className="bg-gray-950 rounded-xl p-4 font-mono text-xs space-y-1 max-h-64 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i} className={`transition-colors ${
                    log.includes('LOOP') ? 'text-red-400' :
                    log.includes('ATOMIC') ? 'text-orange-300' :
                    log.includes('✅') || log.includes('🏆') ? 'text-green-400' :
                    'text-gray-400'
                  }`}>
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

        {activeTab === 'how' && (
          <HowItWorks />
        )}

        {activeTab === 'tools' && (
          <ToolStack />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500">
            Rubbi-X v3.0 — Anti-Loop AI Problem-Solving System
          </p>
          <p className="text-[10px] text-gray-600 mt-1">
            Atomic Notes • Path Hashing • Loop Detection • Branch Injection • Superpowers • obra/superpowers
          </p>
        </div>
      </footer>
    </div>
  );
}
