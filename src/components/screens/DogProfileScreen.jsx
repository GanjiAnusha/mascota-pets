import React, { useState } from 'react';
import { ArrowLeft, Edit3, Camera, CheckCircle2, ChevronRight, Phone, MapPin, User, Calendar, ShieldCheck, Scissors, Syringe, Pill, Heart } from 'lucide-react';

export function DogProfileScreen({
  dog,
  user,
  onBack,
  onEdit,
  onNavigate
}) {
  const [activeSubTab, setActiveSubTab] = useState('overview');

  return (
    <div className="flex-1 flex flex-col bg-slate-50/60 animate-fade-in pb-10">
      
      {/* Top Header */}
      <div className="px-4 pt-1 pb-2 flex items-center justify-between bg-white border-b border-slate-100">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 text-slate-700 hover:text-emerald-700 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-base font-bold text-slate-900">Dog Profile</h2>
        <button
          onClick={onEdit}
          className="p-1.5 -mr-1 text-slate-700 hover:text-emerald-700 rounded-lg transition"
        >
          <Edit3 className="w-4 h-4" />
        </button>
      </div>

      {/* Hero Header / Profile Cover & Avatar */}
      <div className="bg-white px-4 pt-4 pb-5 border-b border-slate-200/70 shadow-sm">
        <div className="flex flex-col items-center text-center">
          
          {/* Avatar with Camera Badge */}
          <div className="relative mb-3">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
              <img src={dog.photo} alt={dog.name} className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-emerald-700 text-white shadow-md border-2 border-white hover:bg-emerald-800 transition">
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Name & Gender */}
          <div className="flex items-center gap-1.5">
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {dog.name}
            </h1>
            <span className="text-base font-bold text-blue-600">{dog.genderSymbol}</span>
          </div>

          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {dog.age} • {dog.weight} • {dog.gender}
          </p>

          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            Microchip: {dog.microchip}
          </p>

          <div className="mt-2.5">
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-100 text-emerald-800 px-3 py-0.5 rounded-full border border-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {dog.status}
            </span>
          </div>

        </div>

        {/* Profile Navigation Tabs */}
        <div className="flex items-center justify-around border-b border-slate-200 mt-5 text-xs font-semibold">
          {['overview', 'care', 'health', 'history'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`pb-2 px-3 capitalize transition-all border-b-2 ${
                activeSubTab === tab
                  ? 'border-emerald-700 text-emerald-800 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 space-y-4">
        
        {/* OVERVIEW TAB */}
        {activeSubTab === 'overview' && (
          <div className="space-y-4 animate-fade-in">
            {/* Basic Information Section */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5 pb-1 border-b border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Basic Information</span>
              </h3>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Date of Birth</span>
                  <span className="text-slate-800 font-semibold">{dog.dob}</span>
                </div>

                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Breed</span>
                  <span className="text-slate-800 font-semibold flex items-center gap-1">
                    {dog.breed}
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </span>
                </div>

                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Color</span>
                  <span className="text-slate-800 font-semibold">{dog.color}</span>
                </div>

                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Owner
                  </span>
                  <span className="text-slate-800 font-semibold">{user.name}</span>
                </div>

                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone
                  </span>
                  <span className="text-slate-800 font-semibold">{user.phone}</span>
                </div>

                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> Address
                  </span>
                  <span className="text-slate-800 font-semibold">{user.address}</span>
                </div>
              </div>
            </div>

            {/* Health Highlights */}
            <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-3.5 text-xs space-y-1.5">
              <span className="font-bold text-emerald-950 block">Diet & Notes</span>
              <p className="text-emerald-900">{dog.overview?.diet || "Standard premium canine diet."}</p>
              <p className="text-emerald-800 text-[11px] pt-1">Primary Vet: {dog.overview?.vetContact}</p>
            </div>
          </div>
        )}

        {/* CARE TAB */}
        {activeSubTab === 'care' && (
          <div className="space-y-3 animate-fade-in">
            <button
              onClick={() => onNavigate('grooming')}
              className="w-full bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-400 shadow-sm flex items-center justify-between text-left transition tap-effect"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Grooming & Hygiene</h4>
                  <p className="text-xs text-slate-500">Bathing, nail clipping, ear cleaning</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            {dog.gender === 'Female' && (
              <button
                onClick={() => onNavigate('heatcycle')}
                className="w-full bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-pink-400 shadow-sm flex items-center justify-between text-left transition tap-effect"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Heat Cycle Management</h4>
                    <p className="text-xs text-slate-500">Forecast and reproductive health</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
            )}
          </div>
        )}

        {/* HEALTH TAB */}
        {activeSubTab === 'health' && (
          <div className="space-y-3 animate-fade-in">
            <button
              onClick={() => onNavigate('vaccination')}
              className="w-full bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-rose-400 shadow-sm flex items-center justify-between text-left transition tap-effect"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <Syringe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Vaccination Records</h4>
                  <p className="text-xs text-slate-500">Rabies, DHPP, Bordetella & due dates</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            <button
              onClick={() => onNavigate('medication')}
              className="w-full bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-amber-400 shadow-sm flex items-center justify-between text-left transition tap-effect"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Prescription & Medications</h4>
                  <p className="text-xs text-slate-500">Dosage schedules and active medicines</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>

            <button
              onClick={() => onNavigate('deworming')}
              className="w-full bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-purple-400 shadow-sm flex items-center justify-between text-left transition tap-effect"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Deworming Schedule</h4>
                  <p className="text-xs text-slate-500">Internal parasite protection</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        )}

        {/* HISTORY TAB */}
        {activeSubTab === 'history' && (
          <div className="space-y-3 animate-fade-in">
            <button
              onClick={() => onNavigate('history')}
              className="w-full bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 tap-effect"
            >
              <span>View Full Activity Timeline</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
