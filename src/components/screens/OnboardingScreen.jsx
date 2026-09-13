import React from 'react';
import { MascotaPaw } from '../common/MascotaLogo';
import { ArrowRight, Heart, Shield, Sparkles } from 'lucide-react';

export function OnboardingScreen({ onGetStarted, onLogin }) {
  return (
    <div className="flex-1 flex flex-col justify-between bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/40 p-6 text-center animate-fade-in">
      
      {/* Brand Header */}
      <div className="pt-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-3xl bg-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-700/25 mb-3">
          <MascotaPaw className="w-10 h-10" fill="currentColor" />
        </div>
        <h1 className="text-3xl font-extrabold text-emerald-950 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Mascota <span className="text-emerald-700">Pets</span>
        </h1>
        <p className="text-xs font-semibold text-emerald-800 uppercase tracking-widest mt-0.5">
          Healthy Dogs • Happy Lives
        </p>
      </div>

      {/* Hero Dogs Image Card */}
      <div className="my-auto py-4 relative">
        <div className="relative mx-auto w-full max-w-[280px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-emerald-100/50">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80"
            alt="Happy golden retriever and friend"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle floating badge */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-2xl flex items-center justify-around text-[11px] font-semibold text-emerald-900 shadow-sm border border-emerald-100">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-700" /> Vaccines
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-rose-500" /> Care
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Reminders
            </span>
          </div>
        </div>
      </div>

      {/* Tagline and CTAs */}
      <div className="pb-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 leading-snug">
            Complete care for your <br />
            <span className="text-emerald-700">beloved dogs</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1.5 max-w-xs mx-auto">
            Vaccination tracking, grooming schedules, heat cycle forecasts, and health records in one place.
          </p>
        </div>

        <button
          onClick={onGetStarted}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-700/30 flex items-center justify-center gap-2 transition-all tap-effect"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-xs text-slate-500">
          Already have an account?{' '}
          <button
            onClick={onLogin || onGetStarted}
            className="font-bold text-emerald-700 hover:underline"
          >
            Login
          </button>
        </p>
      </div>

    </div>
  );
}
