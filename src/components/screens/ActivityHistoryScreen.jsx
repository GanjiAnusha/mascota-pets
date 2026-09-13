import React, { useState } from 'react';
import { ArrowLeft, Filter, CheckCircle2, ChevronDown, Bath, Scissors, Pill, Shield, Syringe, Sparkles } from 'lucide-react';

export function ActivityHistoryScreen({
  activityList,
  onBack
}) {
  const [filterType, setFilterType] = useState('All');
  const [filterTime, setFilterTime] = useState('Last 3 Months');

  const filtered = activityList.filter(item => {
    if (filterType === 'All') return true;
    return item.category.toLowerCase() === filterType.toLowerCase();
  });

  const getIcon = (item) => {
    switch (item.category) {
      case 'medication': return <Pill className="w-4 h-4 text-blue-600" />;
      case 'vaccination': return <Syringe className="w-4 h-4 text-rose-600" />;
      case 'deworming': return <Shield className="w-4 h-4 text-purple-600" />;
      case 'grooming': return item.title.includes('Bath') ? <Bath className="w-4 h-4 text-teal-600" /> : <Scissors className="w-4 h-4 text-emerald-600" />;
      default: return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

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
        <h2 className="text-base font-bold text-slate-900">Activity History</h2>
        <div className="w-8"></div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white px-4 py-3 border-b border-slate-200/80 flex items-center justify-between gap-2">
        <div className="relative flex-1">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-8 cursor-pointer"
          >
            <option value="All">All Activities</option>
            <option value="grooming">Grooming</option>
            <option value="vaccination">Vaccinations</option>
            <option value="medication">Medications</option>
            <option value="deworming">Deworming</option>
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select
            value={filterTime}
            onChange={(e) => setFilterTime(e.target.value)}
            className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-8 cursor-pointer"
          >
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="Last 3 Months">Last 3 Months</option>
            <option value="This Year">This Year</option>
          </select>
          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Activities List */}
      <div className="p-4 space-y-2.5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex items-center justify-between hover:border-emerald-300 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-slate-400 w-16 text-left shrink-0">
                {item.date}
              </span>

              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                {getIcon(item)}
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">{item.title}</h4>
                <span className="text-[11px] text-slate-500 font-medium">{item.dogName}</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              {item.status}
            </span>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-200 p-6">
            <p className="text-xs text-slate-500 font-medium">No activity records found.</p>
          </div>
        )}
      </div>

    </div>
  );
}
