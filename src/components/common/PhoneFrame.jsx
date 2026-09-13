import React from 'react';
import { Wifi, Battery, Signal, Home, Dog, Calendar, BookOpen, MoreHorizontal } from 'lucide-react';

export function PhoneStatusBar() {
  return (
    <div className="w-full h-11 px-6 pt-3 flex items-center justify-between text-slate-800 text-[13px] font-semibold select-none z-30 bg-transparent">
      <span>9:41</span>
      <div className="w-24 h-4 bg-black/80 rounded-full mx-auto -mt-1 hidden sm:block"></div>
      <div className="flex items-center gap-1.5 text-slate-800">
        <Signal className="w-3.5 h-3.5 stroke-[2.5]" />
        <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
        <Battery className="w-4 h-4 stroke-[2.5]" />
      </div>
    </div>
  );
}

export function PhoneBottomNav({ activeTab, onSelectTab, dogCount = 4 }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dogs', label: 'My Dogs', icon: Dog },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'breedguide', label: 'Breed Guide', icon: BookOpen },
    { id: 'more', label: 'More', icon: MoreHorizontal },
  ];

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 px-3 py-1.5 flex items-center justify-around z-30 shadow-lg shadow-emerald-950/5">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id || (tab.id === 'dogs' && (activeTab === 'profile' || activeTab === 'adddog'));
        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all tap-effect ${
              isActive
                ? 'text-emerald-700 font-bold'
                : 'text-slate-400 hover:text-slate-600 font-medium'
            }`}
          >
            <div className={`p-1 rounded-lg transition ${isActive ? 'bg-emerald-50 text-emerald-700' : ''}`}>
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            </div>
            <span className="text-[10px] tracking-tight">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function PhoneHomeIndicator() {
  return (
    <div className="w-full py-1.5 flex justify-center items-center bg-white">
      <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
    </div>
  );
}

export function PhoneFrame({ children, currentScreen, onSelectTab, hideNav = false }) {
  return (
    <div className="relative mx-auto my-4 transition-all duration-300">
      {/* Outer Phone Shell */}
      <div className="relative w-[390px] sm:w-[412px] h-[860px] max-h-[92vh] bg-black rounded-[52px] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)] border-[4px] border-slate-800 flex flex-col">
        
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-end px-2.5 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse"></div>
          </div>
        </div>

        {/* Screen Bezel Container */}
        <div className="relative flex-1 bg-slate-50 rounded-[44px] overflow-hidden flex flex-col border border-slate-200/50">
          
          {/* iOS Status Bar */}
          <PhoneStatusBar />

          {/* Scrollable Main Screen Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
            {children}
          </div>

          {/* Bottom Tab Navigation */}
          {!hideNav && currentScreen !== 'onboarding' && (
            <>
              <PhoneBottomNav activeTab={currentScreen} onSelectTab={onSelectTab} />
              <PhoneHomeIndicator />
            </>
          )}

        </div>

      </div>
    </div>
  );
}
