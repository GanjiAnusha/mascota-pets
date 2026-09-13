import React, { useState } from 'react';
import { ArrowLeft, Plus, CheckCircle2, ShieldCheck, AlertCircle, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export function DewormingScreen({
  dewormingList,
  onAddDeworming,
  onBack,
  dogName = "Rocky"
}) {
  const [activeTab, setActiveTab] = useState('history'); // 'history' | 'nextdue'
  const [showAddModal, setShowAddModal] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [date, setDate] = useState('13 Sep 2026');
  const [nextDue, setNextDue] = useState('13 Mar 2027');
  const [weight, setWeight] = useState('28 kg');
  const [dose, setDose] = useState('1 tablet');

  const filteredItems = dewormingList.filter(item => {
    if (activeTab === 'nextdue') return item.isDueSoon || item.status === 'Due Soon';
    return true;
  });

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      id: 'dw-' + Date.now(),
      name: name,
      date: date,
      nextDue: nextDue,
      weight: weight,
      dose: dose,
      status: 'Completed',
      isDueSoon: false
    };

    onAddDeworming(newItem);
    setShowAddModal(false);
    setName('');
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
        <div className="text-center">
          <h2 className="text-base font-bold text-slate-900">Deworming Schedule</h2>
          <span className="text-[10px] text-emerald-700 font-semibold">{dogName}</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-3 pb-2 bg-white border-b border-slate-200">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setActiveTab('history')}
            className={`py-2 px-3 text-xs font-bold rounded-xl transition-all tap-effect ${
              activeTab === 'history'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            History Records
          </button>
          <button
            onClick={() => setActiveTab('nextdue')}
            className={`py-2 px-3 text-xs font-bold rounded-xl transition-all tap-effect ${
              activeTab === 'nextdue'
                ? 'bg-purple-700 text-white shadow-md shadow-purple-700/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Next Due Scheduled
          </button>
        </div>
      </div>

      {/* List */}
      <div className="p-4 space-y-3">
        {filteredItems.map((item) => {
          const isCompleted = item.status === 'Completed';
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2.5 relative"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Administered: {item.date}</p>
                </div>

                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                  isCompleted
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                  {item.status}
                </span>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">Next Due Date</span>
                  <span className="font-semibold text-slate-800">{item.nextDue}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Weight at Dose</span>
                  <span className="font-semibold text-slate-800">{item.weight}</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-slate-600">Dose: <strong className="text-slate-900">{item.dose}</strong></span>
                  <span className="text-purple-700 font-semibold text-[11px] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Broad spectrum
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-200 p-6">
            <ShieldCheck className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs text-slate-500 font-medium">No deworming records in this view.</p>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-12 left-0 right-0 max-w-[412px] mx-auto px-4 z-20">
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-2xl shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all tap-effect"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add Deworming</span>
        </button>
      </div>

      {/* Add Deworming Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 z-50 animate-fade-in">
          <form
            onSubmit={handleCreate}
            className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl space-y-3.5 animate-slide-up"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Add Deworming Record</h3>
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
                <label className="text-slate-600 font-medium block mb-1">Medication / Compound Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fenbendazole / Drontal Plus"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Date Given</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Next Due</label>
                  <input
                    type="text"
                    value={nextDue}
                    onChange={(e) => setNextDue(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Dog Weight</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Dosage</label>
                  <input
                    type="text"
                    value={dose}
                    onChange={(e) => setDose(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
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
