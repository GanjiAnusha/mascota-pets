import React, { useState } from 'react';
import { Search, Plus, ChevronRight, CheckCircle2, AlertCircle, Heart, Scissors, Syringe } from 'lucide-react';

export function MyDogsScreen({ dogs, onSelectDog, onAddDog }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dog.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (dog) => {
    switch (dog.statusType) {
      case 'healthy':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            {dog.status}
          </span>
        );
      case 'heat':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-pink-100 text-pink-800 px-2.5 py-0.5 rounded-full border border-pink-300">
            <Heart className="w-3 h-3 text-pink-600" />
            {dog.status}
          </span>
        );
      case 'grooming':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-300">
            <Scissors className="w-3 h-3 text-amber-600" />
            {dog.status}
          </span>
        );
      case 'vaccine':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded-full border border-rose-300">
            <Syringe className="w-3 h-3 text-rose-600" />
            {dog.status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-full">
            {dog.status}
          </span>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col p-4 space-y-4 animate-fade-in bg-slate-50/60 pb-8">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pt-1">
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          My Dogs
        </h2>
        <button
          onClick={onAddDog}
          className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-700/20 transition tap-effect"
        >
          <Plus className="w-4 h-4" />
          <span>Add Dog</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search dogs..."
          className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
        />
      </div>

      {/* Dogs List */}
      <div className="space-y-3">
        {filteredDogs.map((dog) => (
          <div
            key={dog.id}
            onClick={() => onSelectDog(dog)}
            className="bg-white rounded-2xl p-3.5 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all flex items-center justify-between cursor-pointer tap-effect"
          >
            <div className="flex items-center gap-3">
              {/* Dog Avatar */}
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border-2 border-emerald-100 shrink-0 shadow-sm">
                <img src={dog.photo} alt={dog.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Dog Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">{dog.name}</h3>
                  <span className="text-xs font-semibold text-slate-500">{dog.breed}</span>
                </div>
                
                <p className="text-[11px] text-slate-500 font-medium">
                  {dog.age} • {dog.weight} • {dog.gender}
                </p>

                <div>{getStatusBadge(dog)}</div>
              </div>
            </div>

            <div className="p-1 rounded-full text-slate-400 hover:text-emerald-700">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        ))}

        {filteredDogs.length === 0 && (
          <div className="text-center py-10 text-slate-400">
            <p className="text-sm">No dogs found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

    </div>
  );
}
