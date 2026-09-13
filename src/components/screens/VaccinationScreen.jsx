import React, { useState } from 'react';
import { ArrowLeft, Plus, CheckCircle2, AlertTriangle, FileText, Syringe, Calendar, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export function VaccinationScreen({
  vaccinations,
  onAddVaccination,
  onBack,
  dogName = "Rocky"
}) {
  const [activeTab, setActiveTab] = useState('due'); // 'due' | 'completed' | 'all'
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Form State
  const [vacName, setVacName] = useState('');
  const [vacDate, setVacDate] = useState('13 Sep 2026');
  const [vacNextDue, setVacNextDue] = useState('13 Sep 2027');
  const [vacBatch, setVacBatch] = useState('VX-' + Math.floor(1000 + Math.random() * 9000));
  const [vacVet, setVacVet] = useState('Dr. Sharma');

  const filteredVaccinations = vaccinations.filter(v => {
    if (activeTab === 'due') return v.isDueSoon || v.status === 'Due Soon';
    if (activeTab === 'completed') return v.status === 'Completed';
    return true;
  });

  const dueCount = vaccinations.filter(v => v.isDueSoon || v.status === 'Due Soon').length;

  const handleCreateVaccination = (e) => {
    e.preventDefault();
    if (!vacName.trim()) return;

    const newVac = {
      id: 'v-' + Date.now(),
      name: vacName,
      date: vacDate,
      nextDue: vacNextDue,
      batch: vacBatch,
      vet: vacVet,
      status: 'Completed',
      isDueSoon: false
    };

    onAddVaccination(newVac);
    setShowAddModal(false);
    setVacName('');
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
          <h2 className="text-base font-bold text-slate-900">Vaccination Record</h2>
          <span className="text-[10px] text-emerald-700 font-semibold">{dogName}</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 pt-3 pb-2 bg-white border-b border-slate-200">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setActiveTab('due')}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition-all tap-effect ${
              activeTab === 'due'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Due Soon ({dueCount})
          </button>

          <button
            onClick={() => setActiveTab('completed')}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition-all tap-effect ${
              activeTab === 'completed'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Completed
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`py-2 px-2 text-xs font-bold rounded-xl transition-all tap-effect ${
              activeTab === 'all'
                ? 'bg-slate-800 text-white shadow-md shadow-slate-800/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({vaccinations.length})
          </button>
        </div>
      </div>

      {/* Vaccinations List */}
      <div className="p-4 space-y-3">
        {filteredVaccinations.map((vac) => {
          const isCompleted = vac.status === 'Completed';
          return (
            <div
              key={vac.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3 relative"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{vac.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Given: {vac.date}</p>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                    isCompleted
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <AlertTriangle className="w-3 h-3 text-amber-600" />}
                    {vac.status}
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-2.5 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[10px]">Next Due</span>
                  <span className="font-semibold text-slate-800">{vac.nextDue}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Batch Number</span>
                  <span className="font-mono font-medium text-slate-700">{vac.batch}</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-slate-200/60 flex items-center justify-between">
                  <span>Vet: <strong className="text-slate-800">{vac.vet}</strong></span>
                  <button className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1 font-semibold text-[10px]">
                    <FileText className="w-3 h-3" /> Certificate
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredVaccinations.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-200 p-6">
            <Syringe className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs text-slate-500 font-medium">No records found in this category.</p>
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
          <span>Add Vaccination</span>
        </button>
      </div>

      {/* Add Vaccination Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 z-50 animate-fade-in">
          <form
            onSubmit={handleCreateVaccination}
            className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl space-y-3.5 animate-slide-up"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Add Vaccination Record</h3>
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
                <label className="text-slate-600 font-medium block mb-1">Vaccine Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Canine Coronavirus / Kennel Cough"
                  value={vacName}
                  onChange={(e) => setVacName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Date Given</label>
                  <input
                    type="text"
                    value={vacDate}
                    onChange={(e) => setVacDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Next Due</label>
                  <input
                    type="text"
                    value={vacNextDue}
                    onChange={(e) => setVacNextDue(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Batch Number</label>
                  <input
                    type="text"
                    value={vacBatch}
                    onChange={(e) => setVacBatch(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Veterinarian</label>
                  <input
                    type="text"
                    value={vacVet}
                    onChange={(e) => setVacVet(e.target.value)}
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
