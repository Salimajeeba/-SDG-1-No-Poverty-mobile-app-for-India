
import React, { useState } from 'react';

interface Props {
  onBack: () => void;
}

const SchemesModule: React.FC<Props> = ({ onBack }) => {
  const [step, setStep] = useState(0);

  const categories = ['All', 'Food', 'Health', 'Housing', 'Pension', 'Education'];

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-200 flex items-center">
        <button onClick={onBack} className="mr-4 text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h2 className="text-xl font-bold text-slate-800">MyScheme India</h2>
      </div>

      <div className="p-6 overflow-y-auto">
        <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-2xl mb-8">
          <h3 className="font-bold text-indigo-900 mb-2">Check Eligibility</h3>
          <p className="text-indigo-700 text-xs mb-4">Answer 4 quick questions to find schemes you qualify for.</p>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md">Start Now</button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          {categories.map(c => (
            <button key={c} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${c === 'All' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
              {c}
            </button>
          ))}
        </div>

        <h4 className="font-bold text-slate-800 mb-4">Popular for You</h4>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] px-3 py-1 rounded-bl-xl font-bold">New</div>
            <h5 className="font-bold text-slate-800 mb-1">PM Awas Yojana</h5>
            <p className="text-slate-500 text-xs mb-4">Housing support for low-income families.</p>
            <div className="flex items-center gap-4 text-[10px] text-slate-400 font-medium">
              <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg> 3 Documents</span>
              <span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 15 Days</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h5 className="font-bold text-slate-800 mb-1">Janani Suraksha Yojana</h5>
            <p className="text-slate-500 text-xs mb-4">Maternal health support and cash incentives.</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-slate-50 py-2 rounded-lg text-indigo-600 font-bold text-xs border border-indigo-100">Learn More</button>
              <button className="flex-1 bg-indigo-600 py-2 rounded-lg text-white font-bold text-xs">Apply Now</button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-100 p-4 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <h6 className="text-slate-800 font-bold text-xs">Need help applying?</h6>
            <p className="text-slate-500 text-[10px]">Find nearest Help Center (CSC)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemesModule;
