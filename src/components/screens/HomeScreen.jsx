import React from 'react';
import { Bell, Syringe, Pill, Scissors, Shield, Heart, ChevronRight, Plus, Sparkles } from 'lucide-react';
import { MascotaPaw } from '../common/MascotaLogo';

export function HomeScreen({
  user,
  dogs,
  activeDog,
  setActiveDog,
  onNavigate,
  onOpenNotifications
}) {
  return (
    <div className="flex-1 flex flex-col p-4 space-y-5 animate-fade-in bg-slate-50/60 pb-8">
      
      {/* Top App Header */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <span className="text-xs font-medium text-slate-500 block">Good Morning,</span>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
            {user.name}
          </h2>
        </div>
        
        <div className="flex items-center gap-2.5">
          {/* Notification Icon */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-100 transition tap-effect"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500"></span>
          </button>
          
          {/* User Profile Avatar */}
          <button
            onClick={() => onNavigate('dogs')}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-600 shadow-sm tap-effect"
          >
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      {/* Hero Promo Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 p-4 text-white shadow-lg shadow-emerald-950/15">
        <div className="relative z-10 max-w-[62%]">
          <div className="flex items-center gap-1.5 mb-1">
            <MascotaPaw className="w-4 h-4 text-emerald-300" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              Mascota Pets
            </span>
          </div>
          <h3 className="text-base font-extrabold leading-tight text-white mb-2">
            Happy Dogs <br />Healthy Lives
          </h3>
          <button
            onClick={() => onNavigate('showcase')}
            className="inline-flex items-center gap-1 text-[11px] font-bold bg-white text-emerald-900 px-3 py-1.5 rounded-xl shadow-sm hover:bg-emerald-50 transition tap-effect"
          >
            <span>Explore Care Hub</span>
            <ChevronRight className="w-3 h-3 text-emerald-700" />
          </button>
        </div>
        {/* Banner Dog Image */}
        <div className="absolute -right-2 -bottom-3 w-36 h-36">
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=350&q=80"
            alt="Happy Golden Dog"
            className="w-full h-full object-cover rounded-full border-4 border-white/20 drop-shadow-md"
          />
        </div>
      </div>

      {/* Today's Reminders Section */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
            <span>Today's Reminders</span>
          </h3>
          <button
            onClick={() => onNavigate('calendar')}
            className="text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-0.5"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Reminder Pill Cards */}
        <div className="grid grid-cols-3 gap-2">
          {/* Vaccinations */}
          <button
            onClick={() => onNavigate('vaccination')}
            className="bg-rose-50/80 hover:bg-rose-100/80 border border-rose-200/70 p-2.5 rounded-2xl flex flex-col items-start text-left transition tap-effect"
          >
            <div className="w-7 h-7 rounded-xl bg-rose-500/15 text-rose-600 flex items-center justify-center mb-1.5">
              <Syringe className="w-4 h-4" />
            </div>
            <span className="text-lg font-extrabold text-rose-950 leading-none">2</span>
            <span className="text-[11px] font-medium text-rose-700 mt-0.5">Vaccinations</span>
          </button>

          {/* Medicine */}
          <button
            onClick={() => onNavigate('medication')}
            className="bg-amber-50/80 hover:bg-amber-100/80 border border-amber-200/70 p-2.5 rounded-2xl flex flex-col items-start text-left transition tap-effect"
          >
            <div className="w-7 h-7 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-1.5">
              <Pill className="w-4 h-4" />
            </div>
            <span className="text-lg font-extrabold text-amber-950 leading-none">1</span>
            <span className="text-[11px] font-medium text-amber-700 mt-0.5">Medicine</span>
          </button>

          {/* Grooming */}
          <button
            onClick={() => onNavigate('grooming')}
            className="bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/70 p-2.5 rounded-2xl flex flex-col items-start text-left transition tap-effect"
          >
            <div className="w-7 h-7 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mb-1.5">
              <Scissors className="w-4 h-4" />
            </div>
            <span className="text-lg font-extrabold text-emerald-950 leading-none">3</span>
            <span className="text-[11px] font-medium text-emerald-700 mt-0.5">Grooming</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-0.5">
          {/* Deworming */}
          <button
            onClick={() => onNavigate('deworming')}
            className="bg-purple-50/80 hover:bg-purple-100/80 border border-purple-200/70 p-2.5 rounded-2xl flex items-center gap-2.5 text-left transition tap-effect"
          >
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-600 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-extrabold text-purple-950 block leading-none">1</span>
              <span className="text-[11px] font-medium text-purple-700">Deworming</span>
            </div>
          </button>

          {/* Heat Cycle */}
          <button
            onClick={() => onNavigate('heatcycle')}
            className="bg-pink-50/80 hover:bg-pink-100/80 border border-pink-200/70 p-2.5 rounded-2xl flex items-center gap-2.5 text-left transition tap-effect"
          >
            <div className="w-8 h-8 rounded-xl bg-pink-500/15 text-pink-600 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-extrabold text-pink-950 block leading-none">1</span>
              <span className="text-[11px] font-medium text-pink-700">Heat Cycle</span>
            </div>
          </button>
        </div>
      </div>

      {/* My Dogs (4) Horizontal Carousel */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight">
            My Dogs ({dogs.length})
          </h3>
          <button
            onClick={() => onNavigate('adddog')}
            className="text-xs font-semibold text-emerald-700 hover:underline flex items-center gap-0.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Dog</span>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {dogs.map((dog) => {
            const isSelected = activeDog.id === dog.id;
            return (
              <button
                key={dog.id}
                onClick={() => {
                  setActiveDog(dog);
                  onNavigate('profile');
                }}
                className={`flex flex-col items-center p-2 rounded-2xl transition-all tap-effect ${
                  isSelected
                    ? 'bg-emerald-100/70 border-2 border-emerald-600 shadow-sm'
                    : 'bg-white border border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm mb-1.5">
                  <img src={dog.photo} alt={dog.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-slate-800 truncate w-full text-center">
                  {dog.name}
                </span>
                <span className="text-[10px] text-slate-500 truncate w-full text-center">
                  {dog.age}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Access Care Cards */}
      <div className="space-y-2 pt-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onNavigate('breedguide')}
            className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-sm text-left flex items-center gap-2.5 transition tap-effect"
          >
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-800 block">Breed Guide</span>
              <span className="text-[10px] text-slate-500">Care encyclopedia</span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('history')}
            className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-sm text-left flex items-center gap-2.5 transition tap-effect"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-800 block">Activity Log</span>
              <span className="text-[10px] text-slate-500">Past treatments</span>
            </div>
          </button>
        </div>
      </div>

    </div>
  );
}
