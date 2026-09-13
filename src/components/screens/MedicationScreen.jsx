import React, { useState } from 'react';
import { ArrowLeft, Plus, CheckCircle2, AlertCircle, Pill, Calendar, Clock, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export function MedicationScreen({
  medications,
  onAddMedication,
  onBack,
  dogName = "Rocky"
}) {
  const [activeTab, setActiveTab] = useState('current'); // 'current' | 'history'
  const [showAddModal, setShowAddModal] = useState(false);

  // Form State
  const [medName, setMedName] = useState('');
  const [startDate, setStartDate] = useState('15 Sep 2026');
  const [endDate, setEndDate] = useState('22 Sep 2026');
  const [dose, setDose] = useState('100 mg, 1 time/day');
  const [reason, setReason] = useState('Ear allergy / anti-inflammatory');

  const filteredMeds = medications.filter(m => {
    if (activeTab === 'current') return m.isCurrent;
    return !m.isCurrent || m.status === 'Completed';
  });

  const handleCreateMedication = (e) => {
    e.preventDefault();
    if (!medName.trim()) return;

    const newMed = {
      id: 'm-' + Date.now(),
      name: medName,
      startDate: startDate,
      endDate: endDate,
      dose: dose,
      reason: reason,
      status: 'Active',
      isCurrent: true
    };

    onAddMedication(newMed);
    setShowAddModal(false);
    setMedName('');
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
          <h2 className="text-base font-bold text-slate-900">Medication</h2>
          <span className="text-[10px] text-emerald-700 font-semibold">{dogName}'s Prescriptions</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-3 pb-2 bg-white border-b border-slate-200">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setActiveTab('current')}
            className={`py-2 px-3 text-xs font-bold rounded-xl transition-all tap-effect ${
              activeTab === 'current'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Current Prescriptions
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-2 px-3 text-xs font-bold rounded-xl transition-all tap-effect ${
              activeTab === 'history'
                ? 'bg-slate-800 text-white shadow-md shadow-slate-800/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Medication History
          </button>
        </div>
      </div>

      {/* Medications List */}
      <div className="p-4 space-y-3">
        {filteredMeds.map((med) => (
          <div
            key={med.id}
            className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2.5 relative"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{med.name}</h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {med.startDate} — {med.endDate}
                </p>
              </div>

              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                med.status === 'Completed'
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : 'bg-amber-100 text-amber-800 border-amber-300'
              }`}>
                {med.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                {med.status}
              </span>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Dose:</span>
                <span className="text-slate-900 font-semibold">{med.dose}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Reason:</span>
                <span className="text-slate-800">{med.reason}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] text-emerald-700">
              <span className="flex items-center gap-1 font-semibold">
                <FileText className="w-3.5 h-3.5" /> Vet Prescription on file
              </span>
              <button className="text-slate-400 hover:text-slate-700 text-xs">Details ›</button>
            </div>
          </div>
        ))}

        {filteredMeds.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-200 p-6">
            <Pill className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs text-slate-500 font-medium">No medications found in this view.</p>
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
          <span>Add Medication</span>
        </button>
      </div>

      {/* Add Medication Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 z-50 animate-fade-in">
          <form
            onSubmit={handleCreateMedication}
            className="bg-white rounded-3xl p-5 max-w-sm w-full shadow-2xl space-y-3.5 animate-slide-up"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Add Medication</h3>
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
                <label className="text-slate-600 font-medium block mb-1">Medication Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apoquel / Metronidazole"
                  value={medName}
                  onChange={(e) => setMedName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-600 font-medium block mb-1">Start Date</label>
                  <input
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-600 font-medium block mb-1">End Date</label>
                  <input
                    type="text"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-600 font-medium block mb-1">Dosage & Frequency</label>
                <input
                  type="text"
                  value={dose}
                  onChange={(e) => setDose(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-600 font-medium block mb-1">Condition / Reason</label>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
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
                Save Medication
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
