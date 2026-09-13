import React, { useState } from 'react';
import { Search, ChevronRight, BookOpen, Sparkles, Filter } from 'lucide-react';

export function BreedGuideScreen({
  breeds,
  onSelectBreed,
  onBack
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Small', 'Medium', 'Large'];

  const filteredBreeds = breeds.filter(breed => {
    const matchesSearch = breed.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || breed.sizeCategory === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="flex-1 flex flex-col p-4 space-y-3.5 animate-fade-in bg-slate-50/60 pb-8">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pt-1">
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Breed Guide
        </h2>
        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <BookOpen className="w-4 h-4" />
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search breed..."
          className="w-full bg-white border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
        />
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap tap-effect ${
              selectedCategory === cat
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Breeds List */}
      <div className="space-y-2.5 pt-1">
        {filteredBreeds.map((breed) => (
          <div
            key={breed.id}
            onClick={() => onSelectBreed(breed)}
            className="bg-white rounded-2xl p-3 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all flex items-center justify-between cursor-pointer tap-effect"
          >
            <div className="flex items-center gap-3">
              {/* Breed Thumbnail */}
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border border-emerald-100 shrink-0 shadow-sm">
                <img src={breed.photo} alt={breed.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-900">{breed.name}</h3>
                <p className="text-[11px] text-slate-500">
                  Weight: <strong className="text-slate-700 font-semibold">{breed.weight}</strong>
                </p>
                <p className="text-[11px] text-emerald-800 font-medium">
                  Grooming: {breed.grooming} • Bath: {breed.bath}
                </p>
              </div>
            </div>

            <div className="p-1 text-slate-400">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        ))}

        {filteredBreeds.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-200 p-6">
            <p className="text-xs text-slate-500 font-medium">No dog breeds found matching your filter.</p>
          </div>
        )}
      </div>

    </div>
  );
}
