import React, { useState } from 'react';
import { SCREENS_LIST } from '../common/DemoPresentationBar';
import { ExternalLink, Sparkles, Smartphone, Eye, Check } from 'lucide-react';
import { MascotaPaw } from '../common/MascotaLogo';

export function StudioGalleryView({
  onSelectScreen,
  currentScreen,
  renderScreenContent
}) {
  const [filterCategory, setFilterCategory] = useState('All');
  const [zoomLevel, setZoomLevel] = useState('md'); // 'sm' | 'md' | 'lg'

  const categories = ['All', 'Core', 'Dogs', 'Health', 'Care', 'Guide', 'General'];

  const filteredScreens = SCREENS_LIST.filter(sc => {
    if (sc.id === 'studio') return false; // don't show recursive studio inside gallery
    if (filterCategory === 'All') return true;
    return sc.category.toLowerCase() === filterCategory.toLowerCase();
  });

  const getZoomClass = () => {
    switch (zoomLevel) {
      case 'sm': return 'w-[320px] h-[640px]';
      case 'lg': return 'w-[420px] h-[860px]';
      default: return 'w-[360px] h-[740px]';
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 p-6 pb-20 animate-fade-in">
      
      {/* Studio Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <MascotaPaw className="w-4 h-4" />
            </div>
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
              Design System & Flow Matrix
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Mascota Pets — 15 Screen Client Showcase
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Live interactive preview of all app modules. Click any screen card to launch its full-featured simulation.
          </p>
        </div>

        {/* Category Filters & Zoom Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  filterCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-slate-900 border border-slate-800 px-2 py-1 rounded-xl text-xs gap-1 text-slate-400">
            <span>Size:</span>
            {['sm', 'md', 'lg'].map((z) => (
              <button
                key={z}
                onClick={() => setZoomLevel(z)}
                className={`px-2 py-0.5 rounded uppercase font-bold text-[10px] ${
                  zoomLevel === z ? 'bg-emerald-500/20 text-emerald-300' : 'hover:text-white'
                }`}
              >
                {z}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of 15 Screens */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {filteredScreens.map((screen, idx) => (
          <div
            key={screen.id}
            className="flex flex-col items-center group"
          >
            {/* Screen Header Badge */}
            <div className="w-full flex items-center justify-between mb-2.5 px-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition truncate max-w-[200px]">
                  {screen.title}
                </span>
              </div>

              <button
                onClick={() => onSelectScreen(screen.id)}
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition"
              >
                <span>Launch</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Simulated Phone Card */}
            <div
              onClick={() => onSelectScreen(screen.id)}
              className={`${getZoomClass()} relative bg-slate-50 rounded-[38px] p-2.5 border-[3px] border-slate-700 shadow-[0_15px_35px_rgba(0,0,0,0.5)] group-hover:border-emerald-500 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col`}
            >
              {/* Internal Mock Bezel & Screen Render */}
              <div className="flex-1 rounded-[30px] overflow-y-auto no-scrollbar relative bg-slate-50 flex flex-col pointer-events-none select-none">
                {renderScreenContent(screen.id)}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 mb-3 transform group-hover:scale-110 transition">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">{screen.title}</h4>
                <p className="text-xs text-slate-300 mb-4">Click to open and test this interactive screen</p>
                <span className="bg-white text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-md">
                  Open Interactive View →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
