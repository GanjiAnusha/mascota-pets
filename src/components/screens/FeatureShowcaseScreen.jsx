import React from 'react';
import { MascotaPaw, MascotaLogo } from '../common/MascotaLogo';
import { Heart, Bell, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function FeatureShowcaseScreen({ onNavigate }) {
  const features = [
    {
      title: 'Track Health',
      desc: 'Smart logs for vaccines, medicines, and deworming routines.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      action: 'vaccination'
    },
    {
      title: 'Set Reminders',
      desc: 'Timely alerts so you never miss a dose, bath, or nail trim.',
      icon: Bell,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      action: 'calendar'
    },
    {
      title: 'Keep Records',
      desc: 'Centralized microchip IDs, vet certificates, and medical history.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      action: 'history'
    },
    {
      title: 'Better Care',
      desc: 'Breed-specific health intelligence and heat cycle estimations.',
      icon: Sparkles,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      action: 'breedguide'
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50/60 animate-fade-in pb-12 p-4 space-y-4">
      
      {/* Top Banner Card */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-950 rounded-3xl p-5 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <MascotaPaw className="w-6 h-6 text-white" />
          </div>
          <span className="text-pink-300 font-bold text-xs uppercase tracking-widest block">
            Because they are family 🐾
          </span>
          <h2 className="text-2xl font-extrabold leading-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Complete Canine Wellness Platform
          </h2>
          <p className="text-xs text-emerald-100 max-w-xs">
            Designed for veterinary precision and dog parent convenience.
          </p>
        </div>

        <div className="absolute -right-6 -bottom-6 w-36 h-36 opacity-30 pointer-events-none">
          <MascotaPaw className="w-full h-full text-white" />
        </div>
      </div>

      {/* 4 Feature Pillars Grid */}
      <div className="grid grid-cols-2 gap-3">
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <button
              key={feat.title}
              onClick={() => onNavigate(feat.action)}
              className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-sm text-left flex flex-col justify-between transition-all tap-effect hover:shadow-md"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${feat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-1">{feat.title}</h3>
                <p className="text-[10px] text-slate-500 leading-normal">{feat.desc}</p>
              </div>
              <div className="mt-3 flex items-center text-[10px] font-bold text-emerald-700">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Brand Card Footer */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-emerald-100">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=300&q=80"
              alt="Mascota Dogs"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Mascota Pets Pro</h4>
            <p className="text-[10px] text-slate-500">Version 2.4 • Client Demo Ready</p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm hover:bg-emerald-800 transition tap-effect"
        >
          Open App
        </button>
      </div>

    </div>
  );
}
