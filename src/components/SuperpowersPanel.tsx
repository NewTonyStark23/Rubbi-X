import { useState } from 'react';
import { SuperpowerSkill, LoopEvent } from '../types';
import { SUPERPOWER_SKILLS } from '../data';

interface Props {
  loopEvents: LoopEvent[];
  isSolving: boolean;
}

export default function SuperpowersPanel({ loopEvents, isSolving }: Props) {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [activatedSkills, setActivatedSkills] = useState<string[]>([]);

  // Auto-activate skills when loops are detected
  if (loopEvents.length > 0 && activatedSkills.length < loopEvents.length) {
    const skillIdx = loopEvents.length % SUPERPOWER_SKILLS.length;
    const skill = SUPERPOWER_SKILLS[skillIdx];
    if (!activatedSkills.includes(skill.id)) {
      setActivatedSkills(prev => [...prev, skill.id]);
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'creative': return 'border-pink-500/30 bg-pink-500/5 text-pink-300';
      case 'analytical': return 'border-blue-500/30 bg-blue-500/5 text-blue-300';
      case 'lateral': return 'border-green-500/30 bg-green-500/5 text-green-300';
      case 'paradigm_shift': return 'border-purple-500/30 bg-purple-500/5 text-purple-300';
      default: return 'border-gray-500/30 bg-gray-500/5 text-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'creative': return '💡';
      case 'analytical': return '🔬';
      case 'lateral': return '🌐';
      case 'paradigm_shift': return '🔮';
      default: return '⚡';
    }
  };

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="text-xl">💥</span> Superpowers
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
              obra/superpowers
            </span>
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            Creative skills injected when loops detected — finds what humans miss
          </p>
        </div>
        {activatedSkills.length > 0 && (
          <span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full border border-orange-400/30">
            {activatedSkills.length} Activated
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SUPERPOWER_SKILLS.map((skill: SuperpowerSkill) => {
          const isActivated = activatedSkills.includes(skill.id);
          return (
            <div
              key={skill.id}
              onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                isActivated
                  ? 'border-orange-500/50 bg-orange-500/10 shadow-lg shadow-orange-500/10'
                  : getCategoryColor(skill.category)
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span>{getCategoryIcon(skill.category)}</span>
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
                {isActivated && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold animate-pulse">
                    ACTIVE
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400">{skill.description}</p>
              
              {expandedSkill === skill.id && (
                <div className="mt-2 pt-2 border-t border-gray-700/50 space-y-1">
                  <div className="text-[10px]">
                    <span className="text-gray-500">Trigger: </span>
                    <span className="text-gray-300">{skill.triggerCondition}</span>
                  </div>
                  <div className="text-[10px]">
                    <span className="text-gray-500">Effect: </span>
                    <span className="text-gray-300">{skill.effect}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* How it works */}
      <div className="mt-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
        <p className="text-[10px] text-gray-500 font-medium mb-1">HOW SUPERPOWERS INTEGRATES:</p>
        <p className="text-[10px] text-gray-400">
          When the Anti-Loop Engine detects a cycle, it doesn't just branch — it injects a <span className="text-orange-300">Superpower skill</span> that 
          forces the AI to think in a completely different way. These skills come from <span className="text-blue-300">obra/superpowers</span> — 
          a battle-tested agentic framework with circuit breakers, brainstorming protocols, and adversarial review patterns. 
          The AI literally cannot loop because each loop triggers a creative paradigm shift.
        </p>
      </div>
    </div>
  );
}
