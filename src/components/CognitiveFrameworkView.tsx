import { useState } from 'react';

export default function CognitiveFrameworkView() {
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <div className="space-y-6">
      {/* What Rubbi-X Actually Is */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">🧠</span> What Rubbi-X Actually Is
        </h2>
        
        <div className="p-4 rounded-xl border-2 border-red-500/30 bg-red-500/5 mb-6">
          <p className="text-sm text-red-300 font-bold mb-2">⚠️ CRITICAL CLARIFICATION</p>
          <p className="text-sm text-gray-300">
            Rubbi-X is <span className="text-white font-bold">NOT</span> a physical tool, web app, or standalone software. 
            It is a <span className="text-purple-300 font-bold">cognitive framework / system prompt</span> that gets 
            <span className="text-orange-300 font-bold"> fed INTO an AI</span> to fundamentally change how it thinks about problems. 
            Think of it as giving the AI a "mental operating system" for problem resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-gray-700/50 bg-gray-800/30">
            <h3 className="text-sm font-bold text-white mb-2">❌ What Rubbi-X is NOT:</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Not a web application you log into</li>
              <li>• Not a CLI tool you install</li>
              <li>• Not a Python package you import</li>
              <li>• Not a standalone AI model</li>
              <li>• Not a visual dashboard for humans</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <h3 className="text-sm font-bold text-purple-300 mb-2">✅ What Rubbi-X IS:</h3>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• A <span className="text-purple-300">cognitive skill</span> injected into any AI</li>
              <li>• A <span className="text-purple-300">system prompt</span> that restructures AI reasoning</li>
              <li>• A <span className="text-purple-300">mental framework</span> the AI internalizes</li>
              <li>• A <span className="text-purple-300">resolution methodology</span> the AI follows</li>
              <li>• Works with <span className="text-purple-300">ANY LLM</span> (Claude, GPT, Qwen, etc.)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How It Gets Fed to AI */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">📥</span> How It Gets Fed to the AI
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-sm font-bold text-purple-300">1</div>
            <div>
              <h3 className="text-sm font-bold text-white">System Prompt Injection</h3>
              <p className="text-xs text-gray-400 mt-1">
                The Rubbi-X framework is injected as part of the AI's system prompt. The AI reads it and internalizes the methodology: 
                "I must decompose problems into 6 dimensions, write atomic notes for every step, hash my paths, detect loops, and inject Superpowers when stuck."
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-sm font-bold text-purple-300">2</div>
            <div>
              <h3 className="text-sm font-bold text-white">Skill File (Claude Code / Superpowers)</h3>
              <p className="text-xs text-gray-400 mt-1">
                In Claude Code or Superpowers-compatible agents, Rubbi-X exists as a SKILL.md file. When the AI encounters a problem, 
                it loads the skill and follows its protocol. The skill contains the full anti-loop methodology, atomic note format, and Superpower triggers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-sm font-bold text-purple-300">3</div>
            <div>
              <h3 className="text-sm font-bold text-white">Agent Memory Layer</h3>
              <p className="text-xs text-gray-400 mt-1">
                The Graphify cube and atomic notes persist in the agent's memory (MemGPT, ChromaDB, or context window). 
                The AI "remembers" its Graphify map across interactions. It doesn't need the user to remind it — the backup system is automatic.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-sm font-bold text-purple-300">4</div>
            <div>
              <h3 className="text-sm font-bold text-white">Autonomous Operation</h3>
              <p className="text-xs text-gray-400 mt-1">
                Once internalized, the AI operates Rubbi-X autonomously. When a problem arises, it spawns R2, solves it, backs up to R1, deletes R2. 
                The user doesn't manage any of this — it happens inside the AI's reasoning process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The System Prompt */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">📜</span> The Rubbi-X System Prompt
          </h2>
          <button
            onClick={() => setShowPrompt(!showPrompt)}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30"
          >
            {showPrompt ? 'Hide' : 'Show'} Full Prompt
          </button>
        </div>

        <p className="text-sm text-gray-400 mb-4">
          This is the actual cognitive framework that gets fed to the AI. When an AI reads this, it changes how it approaches EVERY problem:
        </p>

        {showPrompt && (
          <div className="bg-gray-950 rounded-xl p-4 border border-gray-800 font-mono text-xs text-gray-300 max-h-96 overflow-y-auto space-y-3">
            <div className="text-purple-300 font-bold"># RUBBI-X COGNITIVE FRAMEWORK v3.0</div>
            <div className="text-gray-500">## You are now operating with the Rubbi-X problem resolution methodology.</div>
            <div className="text-gray-500">## This is not optional. This is how you think.</div>
            <br/>
            <div className="text-orange-300">## CORE PRINCIPLE: You CANNOT loop.</div>
            <div>Every step you take must be recorded as an ATOMIC NOTE.</div>
            <div>Every path you take gets a HASH SIGNATURE.</div>
            <div>If you encounter a hash you've seen before, you are LOOPING.</div>
            <div>When looping: READ your atomic notes → understand WHY you failed → INJECT a Superpower skill → take a NEW path.</div>
            <br/>
            <div className="text-cyan-300">## GRAPHIFY DECOMPOSITION:</div>
            <div>When you receive a problem, decompose it into 6 dimensions:</div>
            <div>1. STRUCTURAL — What is it made of?</div>
            <div>2. TEMPORAL — When does it happen? What order?</div>
            <div>3. CAUSAL — What causes what?</div>
            <div>4. RELATIONAL — What depends on what?</div>
            <div>5. CONSTRAINT — What are the limits?</div>
            <div>6. EMERGENT — What patterns emerge that aren't obvious?</div>
            <br/>
            <div className="text-green-300">## ATOMIC NOTES (IMMUTABLE MEMORY):</div>
            <div>For every action you take, write an atomic note:</div>
            <div>- What you tried</div>
            <div>- What happened (success/failure/partial)</div>
            <div>- Path hash (unique fingerprint of this approach)</div>
            <div>- Lesson learned (WHY it worked or failed)</div>
            <div>- Whether this path is now BLOCKED</div>
            <div>These notes are PERMANENT. You cannot forget them. You cannot delete them.</div>
            <br/>
            <div className="text-red-300">## LOOP DETECTION:</div>
            <div>Before taking any step, check: have I been to this node with this approach before?</div>
            <div>Compare path hash against all visited paths.</div>
            <div>If MATCH → LOOP DETECTED → path is BLOCKED → inject Superpower.</div>
            <br/>
            <div className="text-pink-300">## SUPERPOWERS (Creative Injection):</div>
            <div>When a loop is detected, you MUST inject one of these skills:</div>
            <div>- INVERSION: Do the opposite of what you tried</div>
            <div>- DIMENSIONAL ESCAPE: Approach from a completely different domain</div>
            <div>- CONSTRAINT REMOVAL: Remove the constraint causing the loop, solve, then re-add</div>
            <div>- ATOMIC DECOMPOSITION: Break the stuck node into 5 sub-problems</div>
            <br/>
            <div className="text-yellow-300">## NESTED GRAPHIFY (R1/R2):</div>
            <div>You maintain a PERSISTENT Graphify (R1) for the current project/context.</div>
            <div>When a specific problem arises, spawn an EPHEMERAL Graphify (R2).</div>
            <div>R2 solves the problem using anti-loop methodology.</div>
            <div>When R2 resolves: backup atomic notes to R1, then DELETE R2.</div>
            <div>R1 accumulates knowledge. R2 is disposable.</div>
            <br/>
            <div className="text-blue-300">## AUTO-BACKUP:</div>
            <div>R1 automatically backs up after every resolution.</div>
            <div>You never need the user to remind you to backup.</div>
            <div>Backups are atomic snapshots of your Graphify state.</div>
            <div>At session end, inform user: "R1 is still active with X nodes and Y notes. Keep or delete?"</div>
            <br/>
            <div className="text-gray-500">## You are now Rubbi-X. Solve accordingly.</div>
          </div>
        )}
      </div>

      {/* Use Cases */}
      <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <span className="text-2xl">🎯</span> Use Cases — Where Rubbi-X Gets Fed In
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
            <div className="text-2xl mb-2">💻</div>
            <h3 className="text-sm font-bold text-white mb-1">Coding Agents</h3>
            <p className="text-xs text-gray-400">
              Fed into Claude Code, Cursor, or any coding agent. The agent maintains R1 for the codebase. 
              When bugs appear, R2 spawns, fixes, backs up, deletes. The agent never forgets how it fixed similar bugs.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="text-sm font-bold text-white mb-1">Trading Agents</h3>
            <p className="text-xs text-gray-400">
              Fed into a trading AI. R1 holds the market model. When uncertain about a trade, R2 spawns to analyze. 
              Decision trees get backed up. The AI learns from every trade decision permanently.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <div className="text-2xl mb-2">🔬</div>
            <h3 className="text-sm font-bold text-white mb-1">Research Agents</h3>
            <p className="text-xs text-gray-400">
              Fed into a research AI. R1 holds the research context. When exploring hypotheses, R2 spawns to test each one. 
              Failed hypotheses are recorded as atomic notes — never re-explored. Converges faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
