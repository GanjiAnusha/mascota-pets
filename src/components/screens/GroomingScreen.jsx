import React, { useState } from 'react';
import { ArrowLeft, Check, Sparkles, Scissors, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export function GroomingScreen({
  groomingServices,
  onUpdateGrooming,
  onBack,
  dogName = "Rocky"
}) {
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [showMarkModal, setShowMarkModal] = useState(false);
  const [selectedForModal, setSelectedForModal] = useState(null);

  const handleMarkAsDone = (service) => {
    setSelectedForModal(service);
    setShowMarkModal(true);
  };

  const confirmDone = () => {
    if (selectedForModal) {
      onUpdateGrooming(selectedForModal.id);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
    setShowMarkModal(false);
    setSelectedForModal(null);
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
        <div className="text-center">
          <h2 className="text-base font-bold text-slate-900">Grooming & Hygiene</h2>
          <span className="text-[10px] text-emerald-700 font-semibold">{dogName}'s Schedule</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Services List Table Header */}
      <div className="p-4 space-y-2.5">
        <div className="grid grid-cols-12 text-[11px] font-bold text-slate-400 px-3 uppercase tracking-wider">
          <span className="col-span-4">Service</span>
          <span className="col-span-3 text-center">Last Done</span>
          <span className="col-span-3 text-center">Next Due</span>
          <span className="col-span-2 text-right">Status</span>
        </div>

        {/* List of Grooming Tasks */}
        <div className="space-y-2">
          {groomingServices.map((item) => {
            const isDue = item.status === 'Due';
            const isUpcoming = item.status === 'Upcoming';
            const isOnTrack = item.status === 'On track';

            return (
              <div
                key={item.id}
                onClick={() => handleMarkAsDone(item)}
                className={`bg-white rounded-2xl p-3 border transition-all cursor-pointer tap-effect ${
                  isDue
                    ? 'border-amber-200 shadow-sm hover:border-amber-400'
                    : 'border-slate-200 hover:border-emerald-300'
                }`}
              >
                <div className="grid grid-cols-12 items-center text-xs">
                  
                  {/* Service Name */}
                  <div className="col-span-4 flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isDue ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      <Scissors className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-slate-800 leading-tight">
                      {item.service}
                    </span>
                  </div>

                  {/* Last Done */}
                  <div className="col-span-3 text-center text-slate-500 font-medium text-[11px]">
                    {item.lastDone}
                  </div>

                  {/* Next Due */}
                  <div className={`col-span-3 text-center font-semibold text-[11px] ${
                    isDue ? 'text-amber-700' : 'text-slate-600'
                  }`}>
                    {item.nextDue}
                  </div>

                  {/* Status Chip */}
                  <div className="col-span-2 text-right">
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      isDue
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : isUpcoming
                        ? 'bg-blue-100 text-blue-800 border-blue-300'
                        : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="fixed bottom-12 left-0 right-0 max-w-[412px] mx-auto px-4 z-20">
        <button
          onClick={() => {
            const firstDue = groomingServices.find(g => g.status === 'Due') || groomingServices[0];
            handleMarkAsDone(firstDue);
          }}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-2xl shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all tap-effect"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Mark as Done</span>
        </button>
      </div>

      {/* Modal for Marking Done */}
      {showMarkModal && selectedForModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4 animate-slide-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Scissors className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Complete Grooming</h3>
                <p className="text-xs text-slate-500">{selectedForModal.service} for {dogName}</p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-3 text-xs text-emerald-900 space-y-1">
              <p className="font-semibold">Log session for today?</p>
              <p className="text-emerald-700 text-[11px]">
                This will update the last done date to Today and schedule the next recurring due date automatically.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowMarkModal(false)}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl text-xs transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDone}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 rounded-xl text-xs shadow-md shadow-emerald-700/30 transition tap-effect"
              >
                Confirm Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
