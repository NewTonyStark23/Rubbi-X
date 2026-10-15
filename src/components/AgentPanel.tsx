import { useState, useEffect } from 'react';
import { Agent } from '../types';
import { AGENTS } from '../data';

interface Props {
  isSolving: boolean;
  currentPhase: number;
}

export default function AgentPanel({ isSolving, currentPhase }: Props) {
  const [agents, setAgents] = useState<Agent[]>(AGENTS);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);

  useEffect(() => {
    if (isSolving) {
      setAgents(prev => prev.map((agent, i) => {
        if (i < currentPhase) return { ...agent, status: 'complete' as const };
        if (i === currentPhase) return { ...agent, status: 'active' as const };
        return { ...agent, status: 'idle' as const };
      }));
    } else {
      setAgents(AGENTS);
    }
  }, [isSolving, currentPhase]);

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'active': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'complete': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'vetting': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusLabel = (status: Agent['status']) => {
    switch (status) {
      case 'active': return 'Processing...';
      case 'complete': return 'Complete';
      case 'vetting': return 'Vetting...';
      default: return 'Standby';
    }
  };

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">🤖</span> Agent Swarm
          </h2>
          <p className="text-gray-400 text-sm mt-1">Multi-agent collaborative resolution</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400">
            {agents.filter(a => a.status === 'complete').length}/{agents.length} Active
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {agents.map((agent) => (
          <div
            key={agent.id}
            onClick={() => setExpandedAgent(expandedAgent === agent.id ? null : agent.id)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              agent.status === 'active'
                ? 'border-blue-500/50 bg-blue-500/5 shadow-lg shadow-blue-500/10'
                : agent.status === 'complete'
                ? 'border-green-500/30 bg-green-500/5'
                : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{agent.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">{agent.name}</h3>
                  <p className="text-xs text-gray-400">{agent.role}</p>
                </div>
              </div>
              <span className={`text-[10px] px-2 py-1 rounded-full border ${getStatusColor(agent.status)}`}>
                {getStatusLabel(agent.status)}
              </span>
            </div>

            {agent.status === 'active' && (
              <div className="mt-3">
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
              </div>
            )}

            {expandedAgent === agent.id && (
              <div className="mt-3 pt-3 border-t border-gray-700/50 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {agent.expertise.map(exp => (
                    <span key={exp} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-300">
                      {exp}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Resolutions: <span className="text-white font-medium">{agent.resolutionCount.toLocaleString()}</span></span>
                  <span className="text-gray-400">Accuracy: <span className="text-green-400 font-medium">{agent.accuracyScore}%</span></span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Workflow Pipeline */}
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">Resolution Pipeline</h3>
        <div className="flex items-center gap-1">
          {agents.map((agent, i) => (
            <div key={agent.id} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                agent.status === 'complete' ? 'bg-green-500/20 border border-green-500/50' :
                agent.status === 'active' ? 'bg-blue-500/20 border border-blue-500/50 animate-pulse' :
                'bg-gray-700/50 border border-gray-600/50'
              }`}>
                {agent.status === 'complete' ? '✓' : agent.icon}
              </div>
              {i < agents.length - 1 && (
                <div className={`flex-1 h-0.5 mx-1 ${
                  agent.status === 'complete' ? 'bg-green-500/50' : 'bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
