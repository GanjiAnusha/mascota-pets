import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Activity, Pill, Syringe, Shield, Scissors } from 'lucide-react';

export function CalendarScreen({ calendarData, onBack, onNavigate }) {
  const [selectedDay, setSelectedDay] = useState(16);

  const daysRow = [
    { day: 14, label: 'Sun' },
    { day: 15, label: 'Mon' },
    { day: 16, label: 'Tue' },
    { day: 17, label: 'Wed' },
    { day: 18, label: 'Thu' },
    { day: 19, label: 'Fri' },
    { day: 20, label: 'Sat' },
  ];

  const currentDayEvents = calendarData.eventsByDay[selectedDay] || [
    { id: 'def-1', time: '09:00 AM', title: 'Daily Health & Activity Check', type: 'tracky', color: 'border-blue-500 bg-blue-50 text-blue-700', icon: 'activity' },
    { id: 'def-2', time: '05:00 PM', title: 'Evening Walk & Exercise', type: 'tracky', color: 'border-emerald-500 bg-emerald-50 text-emerald-700', icon: 'activity' }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case 'medicine': return <Pill className="w-4 h-4 text-amber-600" />;
      case 'vaccination': return <Syringe className="w-4 h-4 text-rose-600" />;
      case 'deworming': return <Shield className="w-4 h-4 text-purple-600" />;
      case 'grooming': return <Scissors className="w-4 h-4 text-emerald-600" />;
      default: return <Activity className="w-4 h-4 text-blue-600" />;
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
        <h2 className="text-base font-bold text-slate-900">Calendar & Reminders</h2>
        <div className="w-8"></div>
      </div>

      {/* Month Picker Header */}
      <div className="bg-white px-4 pt-3 pb-3 border-b border-slate-200/80">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold text-slate-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
              September 2025
            </span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
          
          <div className="flex items-center gap-1">
            <button className="p-1 rounded-lg hover:bg-slate-100 text-slate-500">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-lg hover:bg-slate-100 text-slate-500">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Days Horizontal Strip */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {daysRow.map((item) => {
            const isSelected = selectedDay === item.day;
            const hasEvents = calendarData.eventsByDay[item.day];

            return (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item.day)}
                className={`py-2 px-1 rounded-2xl flex flex-col items-center justify-center transition-all tap-effect ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/30'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <span className={`text-[10px] uppercase font-semibold ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {item.label}
                </span>
                <span className={`text-sm font-extrabold mt-0.5 ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                  {item.day}
                </span>
                {hasEvents && !isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1"></span>
                )}
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events Timeline */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Schedule for Sept {selectedDay}, 2025
          </h3>
          <span className="text-xs text-emerald-700 font-semibold">
            {currentDayEvents.length} events
          </span>
        </div>

        <div className="space-y-2.5">
          {currentDayEvents.map((ev) => (
            <div
              key={ev.id}
              className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                  {getEventIcon(ev.type)}
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{ev.title}</h4>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium mt-0.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {ev.time}
                  </span>
                </div>
              </div>

              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                ev.type === 'medicine' ? 'bg-amber-100 text-amber-800' :
                ev.type === 'vaccination' ? 'bg-rose-100 text-rose-800' :
                ev.type === 'deworming' ? 'bg-purple-100 text-purple-800' :
                ev.type === 'grooming' ? 'bg-emerald-100 text-emerald-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {ev.type}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
