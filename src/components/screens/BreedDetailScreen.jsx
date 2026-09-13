import React from 'react';
import { ArrowLeft, Scale, Ruler, Bath, Ear, Sparkles, Heart, CheckCircle2, ShieldAlert } from 'lucide-react';

export function BreedDetailScreen({ breed, onBack }) {
  if (!breed) return null;

  return (
    <div className="flex-1 flex flex-col bg-slate-50/60 animate-fade-in pb-12">
      
      {/* Top Header */}
      <div className="px-4 pt-1 pb-2 flex items-center justify-between bg-white border-b border-slate-100">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 text-slate-700 hover:text-emerald-700 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-base font-bold text-slate-900">{breed.name}</h2>
        <div className="w-8"></div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-52 bg-slate-900">
        <img
          src={breed.photo}
          alt={breed.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
            {breed.sizeCategory} Breed
          </span>
          <h1 className="text-xl font-extrabold mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {breed.name}
          </h1>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-2.5">
          {/* Weight */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Weight</span>
              <span className="text-xs font-extrabold text-slate-900">{breed.weight}</span>
            </div>
          </div>

          {/* Height */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Height</span>
              <span className="text-xs font-extrabold text-slate-900">{breed.height || "21 - 24 in"}</span>
            </div>
          </div>

          {/* Bath */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Bath className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Bath</span>
              <span className="text-xs font-extrabold text-slate-900">{breed.bath}</span>
            </div>
          </div>

          {/* Ear Care */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <Ear className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ear Care</span>
              <span className="text-xs font-extrabold text-slate-900">{breed.earCare}</span>
            </div>
          </div>
        </div>

        {/* Coat Type */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">Coat Type:</span>
          <span className="text-slate-900 font-bold bg-slate-100 px-2.5 py-1 rounded-lg">
            {breed.coat}
          </span>
        </div>

        {/* Special Notes */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 pb-1 border-b border-slate-100">
            <ShieldAlert className="w-4 h-4 text-amber-500" />
            <span>Special Notes & Health Care</span>
          </h3>

          <ul className="space-y-2 text-xs text-slate-600">
            {breed.specialNotes?.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Temperament */}
        {breed.temperament && (
          <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-3.5 space-y-1.5">
            <span className="text-[11px] font-bold text-emerald-950 uppercase tracking-wider block">
              Temperament & Personality
            </span>
            <p className="text-xs text-emerald-900 font-medium leading-relaxed">
              {breed.temperament}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
