
import React from 'react';
import { Screen, UserProfile } from '../types';

interface Props {
  user: UserProfile | null;
  onNavigate: (s: Screen) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<Props> = ({ user, onNavigate, onLogout }) => {
  const cards = [
    { id: Screen.FOOD, label: 'Food & PDS', sub: 'Ration, MDM, Kitchens', icon: '🍲', color: 'bg-orange-100 text-orange-600' },
    { id: Screen.HEALTHCARE, label: 'Healthcare', sub: 'Hospitals, PHC, Camps', icon: '🏥', color: 'bg-emerald-100 text-emerald-600' },
    { id: Screen.JOBS, label: 'Skills & Jobs', sub: 'Training, Matching', icon: '👷', color: 'bg-blue-100 text-blue-600' },
    { id: Screen.SCHEMES, label: 'Govt Schemes', sub: 'Eligibility & Help', icon: '📜', color: 'bg-indigo-100 text-indigo-600' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-y-auto">
      {/* Header */}
      <div className="p-6 bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Namaste,</p>
            <h1 className="text-2xl font-bold text-slate-800">{user?.name || 'Friend'}</h1>
          </div>
          <button onClick={onLogout} className="p-2 bg-slate-100 rounded-full text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-indigo-600 rounded-2xl p-5 text-white mb-8 relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-1">Your Sahaya Assistant</h3>
            <p className="text-indigo-100 text-sm mb-4">"I can help you find free food or check health benefits. Tap me below."</p>
            <button 
              onClick={() => onNavigate(Screen.AI_ASSISTANT)}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm"
            >
              Talk to AI (Voice)
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-20 -mr-8 -mt-8 rounded-full"></div>
        </div>

        <h4 className="text-slate-800 font-bold mb-4">Modules</h4>
        <div className="grid grid-cols-1 gap-4">
          {cards.map((card) => (
            <button 
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center text-left hover:border-indigo-200 transition-colors group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mr-4 ${card.color}`}>
                {card.icon}
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-800 group-hover:text-indigo-600">{card.label}</h5>
                <p className="text-slate-500 text-sm">{card.sub}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          ))}
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center mt-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <p className="text-blue-800 text-xs leading-tight">Emergency? Call <span className="font-bold">112</span> for Help Services</p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto p-6 text-center text-slate-400 text-xs">
        v1.0.2 • Social Impact Tech India
      </div>
    </div>
  );
};

export default Dashboard;
