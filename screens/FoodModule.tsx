
import React from 'react';

interface Props {
  onBack: () => void;
}

const FoodModule: React.FC<Props> = ({ onBack }) => {
  const sections = [
    { title: 'Nearby Ration Shops', desc: 'Real-time stock & timings', icon: '📍' },
    { title: 'Free Meal Programs', desc: 'Anganwadi & Mid-day meals', icon: '🍱' },
    { title: 'Scheme Eligibility', desc: 'Ration card & Anna Yojana', icon: '✅' },
    { title: 'Nutrition Guide', desc: 'Simple food for families', icon: '🥦' },
    { title: 'Emergency Hunger', desc: 'Contact local food banks', icon: '🆘' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-200 flex items-center">
        <button onClick={onBack} className="mr-4 text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h2 className="text-xl font-bold text-slate-800">Food & Nutrition</h2>
      </div>

      <div className="p-6 space-y-4 overflow-y-auto pb-24">
        {/* Status Alert */}
        <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-start gap-3">
          <span className="text-2xl">📦</span>
          <div>
            <h4 className="font-bold text-orange-800 text-sm">PDS Stock Updated</h4>
            <p className="text-orange-700 text-xs">Rice & Dal available at Shop #42 (2km away).</p>
          </div>
        </div>

        {sections.map((sec, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center hover:bg-slate-50 cursor-pointer">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl mr-4">
              {sec.icon}
            </div>
            <div>
              <h5 className="font-bold text-slate-800 text-sm">{sec.title}</h5>
              <p className="text-slate-500 text-xs">{sec.desc}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-slate-300"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        ))}

        <div className="mt-6">
          <h4 className="font-bold text-slate-800 mb-3 text-sm">Family Nutrition Track</h4>
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs text-slate-500">Iron Intake</span>
              <span className="text-xs font-bold text-indigo-600">70%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[70%]"></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 italic">Add more green leaves to reach 100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModule;
