import React, { useState } from 'react';
import { ArrowLeft, Plus, Calendar, Heart, AlertCircle, Sparkles, Clock, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export function HeatCycleScreen({
  heatData,
  onAddCycle,
  onBack
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [startDate, setStartDate] = useState('02 Nov 2026');
  const [endDate, setEndDate] = useState('09 Nov 2026');
  const [notes, setNotes] = useState('Mild behavioral change, rested well.');

  const handleCreate = (e) => {
    e.preventDefault();
    const newCycle = {
      id: Date.now().toString(),
      range: `${startDate} - ${endDate}`,
      duration: '7 days'
    };
    onAddCycle(newCycle);
    setShowAddModal(false);
    confetti({ particleCount: 70, spread: 50, origin: { y: 0.8 } });
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/60 animate-fade-in relative pb-24">
      
      {/* Top Header */}
      <div className="px-4 pt-1 pb-2 flex items-center justify-between bg-white border-b border-slate-100">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 text-slate-700 hover:text-emerald-700 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-base font-bold text-slate-900">Heat Cycle (Female)</h2>
        <div className="w-8"></div>
      </div>

      {/* Dog Info Card */}
      <div className="bg-white px-4 py-3 border-b border-slate-200/70 flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-pink-200 shadow-sm shrink-0">
          <img src={heatData.photo} alt={heatData.dogName} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-extrabold text-slate-900">{heatData.dogName}</h3>
            <span className="text-pink-600 font-bold">♀</span>
          </div>
          <p className="text-xs text-slate-500">{heatData.breed}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        
        {/* Current Cycle Box */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-pink-500" />
            <span>Current Cycle</span>
          </h3>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-1.5 flex items-center justify-between">
              <span className="text-slate-500 font-medium">Heat Started</span>
              <span className="text-slate-800 font-semibold">{heatData.currentCycle.heatStarted}</span>
            </div>
            <div className="py-1.5 flex items-center justify-between">
              <span className="text-slate-500 font-medium">Heat Ended</span>
              <span className="text-slate-800 font-semibold">{heatData.currentCycle.heatEnded}</span>
            </div>
            <div className="py-1.5 flex items-center justify-between">
              <span className="text-slate-500 font-medium">Cycle Duration</span>
              <span className="text-pink-700 font-bold bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200">
                {heatData.currentCycle.duration}
              </span>
            </div>
          </div>

          {/* Next Cycle Estimate Pill Banner */}
          <div className="bg-pink-50 border border-pink-200/80 rounded-2xl p-3 flex items-center gap-3 text-pink-900">
            <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-pink-500/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-pink-600 uppercase tracking-wider block">
                Next cycle (estimated)
              </span>
              <span className="text-base font-extrabold text-pink-950">
                {heatData.nextCycleEstimated}
              </span>
            </div>
          </div>
        </div>

        {/* Previous Cycles List */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>Previous Cycles</span>
          </h3>

          <div className="space-y-2 text-xs">
            {heatData.previousCycles.map((cycle, idx) => (
              <div
                key={cycle.id}
                className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 font-bold text-[10px] flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-slate-800">{cycle.range}</span>
                </div>
                <span className="text-slate-500 font-medium">{cycle.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Notice Box */}
        <div className="bg-pink-50/70 border border-pink-200/70 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-pink-950">
          <AlertCircle className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-pink-900">
            {heatData.disclaimer}
          </p>
        </div>

      </div>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-12 left-0 right-0 max-w-[412px] mx-auto px-4 z-20">
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-2xl shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all tap-effect"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add Cycle Record</span>
        </button>
      </div>

      {/* Add Cycle Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 z-50 animate-fade-in">
          <form
            onSubmit={handleCreate}
            className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl space-y-3.5 animate-slide-up"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Log Heat Cycle</h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <label className="text-slate-600 font-medium block mb-1">Heat Started Date</label>
                <input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-600 font-medium block mb-1">Heat Ended Date</label>
                <input
                  type="text"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-600 font-medium block mb-1">Behavioral / Care Notes</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-slate-100 text-slate-700 font-semibold py-2.5 rounded-xl text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-xl text-xs shadow-md shadow-emerald-700/30"
              >
                Save Record
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
