import { useState } from 'react';
import { GitHubTool } from '../types';
import { GITHUB_TOOLS } from '../data';

export default function ToolStack() {
  const [filter, setFilter] = useState<string>('all');
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'All', icon: '🔧' },
    { key: 'orchestration', label: 'Orchestration', icon: '🎛️' },
    { key: 'creative', label: 'Creative', icon: '💥' },
    { key: 'graph', label: 'Graph', icon: '🕸️' },
    { key: 'storage', label: 'Memory', icon: '💾' },
    { key: 'llm', label: 'LLM', icon: '🧠' },
    { key: 'safety', label: 'Safety', icon: '🛡️' },
    { key: 'optimization', label: 'Optimize', icon: '⚡' }
  ];

  const filteredTools = filter === 'all'
    ? GITHUB_TOOLS
    : GITHUB_TOOLS.filter((t: GitHubTool) => t.category === filter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'orchestration': return 'border-blue-500/30 bg-blue-500/5';
      case 'creative': return 'border-orange-500/30 bg-orange-500/5';
      case 'graph': return 'border-purple-500/30 bg-purple-500/5';
      case 'storage': return 'border-green-500/30 bg-green-500/5';
      case 'llm': return 'border-pink-500/30 bg-pink-500/5';
      case 'safety': return 'border-red-500/30 bg-red-500/5';
      case 'optimization': return 'border-cyan-500/30 bg-cyan-500/5';
      default: return 'border-gray-500/30 bg-gray-500/5';
    }
  };

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">⚙️</span> GitHub Tool Stack
          </h2>
          <p className="text-gray-400 text-sm mt-1">Each tool serves a specific role in the anti-loop architecture</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
          {GITHUB_TOOLS.length} tools
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
              filter === cat.key
                ? 'border-purple-500 bg-purple-500/10 text-purple-300'
                : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredTools.map((tool: GitHubTool) => (
          <div
            key={tool.name}
            onClick={() => setExpandedTool(expandedTool === tool.name ? null : tool.name)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${getCategoryColor(tool.category)} ${
              expandedTool === tool.name ? 'ring-1 ring-purple-500/50' : 'hover:scale-[1.01]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">{tool.name}</span>
                <span className="text-[10px] text-yellow-400">⭐ {tool.stars}</span>
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] text-blue-400 hover:text-blue-300"
              >
                GitHub →
              </a>
            </div>
            <p className="text-xs text-gray-400">{tool.purpose}</p>
            
            {expandedTool === tool.name && (
              <div className="mt-3 pt-3 border-t border-gray-700/50">
                <p className="text-[10px] text-gray-500 font-medium mb-1">ANTI-LOOP ROLE:</p>
                <p className="text-xs text-gray-300">{tool.integration}</p>
                <div className="mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-300 capitalize">
                    {tool.category}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
