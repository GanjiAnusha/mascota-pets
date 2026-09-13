import React from 'react';
import { Smartphone, LayoutGrid, Maximize2, RotateCcw, Sparkles, Dog, ChevronRight } from 'lucide-react';
import { MascotaPaw } from './MascotaLogo';

export const SCREENS_LIST = [
  { id: 'onboarding', title: '1. Welcome & Onboarding', category: 'General' },
  { id: 'home', title: '2. Home Dashboard', category: 'Core' },
  { id: 'dogs', title: '3. My Dogs List', category: 'Dogs' },
  { id: 'profile', title: '4. Dog Profile (Rocky)', category: 'Dogs' },
  { id: 'grooming', title: '5. Grooming & Hygiene', category: 'Care' },
  { id: 'vaccination', title: '6. Vaccination Record', category: 'Health' },
  { id: 'medication', title: '7. Medication Tracker', category: 'Health' },
  { id: 'deworming', title: '8. Deworming Schedule', category: 'Health' },
  { id: 'heatcycle', title: '9. Heat Cycle (Bella)', category: 'Care' },
  { id: 'breedguide', title: '10. Breed Guide', category: 'Guide' },
  { id: 'breeddetail', title: '11. Breed Details (Labrador)', category: 'Guide' },
  { id: 'calendar', title: '12. Calendar & Reminders', category: 'Care' },
  { id: 'history', title: '13. Activity History', category: 'History' },
  { id: 'adddog', title: '14. Add New Dog', category: 'Dogs' },
  { id: 'showcase', title: '15. Feature Marketing Card', category: 'General' },
  { id: 'studio', title: '🌟 Studio Gallery (All 15 Screens)', category: 'Presentation' }
];

export function DemoPresentationBar({
  currentScreen,
  setCurrentScreen,
  viewMode,
  setViewMode,
  activeDog,
  setActiveDog,
  dogs,
  onResetData
}) {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white px-4 py-2.5 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
        
        {/* Brand & Demo Tag */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <MascotaPaw className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white flex items-center gap-1.5">
                Mascota <span className="text-emerald-400">Pets</span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Client Demo
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Screen Jump Selector */}
        <div className="flex items-center gap-2 flex-1 max-w-md">
          <label htmlFor="screen-select" className="text-slate-400 text-xs hidden sm:inline whitespace-nowrap">
            Jump to:
          </label>
          <select
            id="screen-select"
            value={currentScreen}
            onChange={(e) => setCurrentScreen(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-lg px-3 py-1.5 text-xs md:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition cursor-pointer"
          >
            {SCREENS_LIST.map((sc) => (
              <option key={sc.id} value={sc.id}>
                {sc.title}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setViewMode('phone')}
            title="Mobile Simulator View"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
              viewMode === 'phone'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile Frame</span>
          </button>
          
          <button
            onClick={() => setViewMode('studio')}
            title="Studio Grid (All 15 Screens View)"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
              viewMode === 'studio'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Studio (15 Screens)</span>
          </button>

          <button
            onClick={() => setViewMode('fullscreen')}
            title="Responsive Full Screen View"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition ${
              viewMode === 'fullscreen'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Full Width</span>
          </button>
        </div>

        {/* Active Dog Quick Switcher */}
        <div className="hidden lg:flex items-center gap-2 bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800">
          <Dog className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-400 text-xs">Active:</span>
          <div className="flex items-center gap-1">
            {dogs.map((dog) => (
              <button
                key={dog.id}
                onClick={() => setActiveDog(dog)}
                className={`px-2 py-0.5 rounded text-xs font-medium transition ${
                  activeDog.id === dog.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {dog.name}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Data Button */}
        <button
          onClick={onResetData}
          title="Reset all demo data to pristine state"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition"
        >
          <RotateCcw className="w-3 h-3" />
          <span className="hidden sm:inline">Reset Demo</span>
        </button>

      </div>
    </header>
  );
}
