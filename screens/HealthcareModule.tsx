
import React from 'react';

interface Props {
  onBack: () => void;
}

const HealthcareModule: React.FC<Props> = ({ onBack }) => {
  const actions = [
    { title: 'Free PHC Near Me', color: 'bg-emerald-500', icon: '📍' },
    { title: 'Symptom Checker', color: 'bg-blue-500', icon: '🤖' },
    { title: 'Ayushman Bharat', color: 'bg-purple-500', icon: '📜' },
    { title: 'Vaccination', color: 'bg-rose-500', icon: '💉' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-200 flex items-center">
        <button onClick={onBack} className="mr-4 text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h2 className="text-xl font-bold text-slate-800">Healthcare</h2>
      </div>

      <div className="p-6 space-y-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {actions.map((act, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start gap-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl text-white ${act.color}`}>
                {act.icon}
              </div>
              <span className="font-bold text-slate-800 text-xs">{act.title}</span>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
          <h4 className="font-bold text-red-800 text-sm mb-2">Emergency Helpline</h4>
          <div className="flex justify-between">
            <button className="flex-1 bg-white p-2 rounded-lg border border-red-200 text-red-600 font-bold text-xs mr-2">Ambulance (102)</button>
            <button className="flex-1 bg-white p-2 rounded-lg border border-red-200 text-red-600 font-bold text-xs">Women (1091)</button>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-3">Free Health Camps</h4>
          <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
            <img src="https://picsum.photos/seed/camp/400/150" alt="camp" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h5 className="font-bold text-slate-800 text-sm">Mega Dental Camp</h5>
              <p className="text-slate-500 text-xs mb-2">Location: Govt High School, Mandi</p>
              <div className="flex items-center text-xs text-indigo-600 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                Tomorrow, 9:00 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareModule;
