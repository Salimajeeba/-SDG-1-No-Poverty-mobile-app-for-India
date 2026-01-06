
import React from 'react';

interface Props {
  onBack: () => void;
}

const JobsModule: React.FC<Props> = ({ onBack }) => {
  const jobs = [
    { title: 'Security Guard', loc: 'Ambattur, Chennai', type: 'Full-time', pay: '₹15k/mo' },
    { title: 'Tailoring Asst', loc: 'T. Nagar', type: 'Part-time', pay: '₹8k/mo' },
    { title: 'Daily Wage Work', loc: 'Construction Site B', type: 'Daily', pay: '₹600/day' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="p-6 bg-white border-b border-slate-200 flex items-center">
        <button onClick={onBack} className="mr-4 text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h2 className="text-xl font-bold text-slate-800">Skills & Jobs</h2>
      </div>

      <div className="p-6 space-y-6 overflow-y-auto">
        {/* Course Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 text-white shadow-lg">
          <h4 className="font-bold mb-1">Learn a New Skill</h4>
          <p className="text-blue-100 text-xs mb-4">Free courses in Tailoring, Electrical, and Driving near you.</p>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-lg text-xs font-bold">View Courses</button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-800">Local Jobs for You</h4>
            <button className="text-indigo-600 text-xs font-bold">Filter</button>
          </div>
          <div className="space-y-3">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-slate-800">{job.title}</h5>
                  <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">{job.pay}</span>
                </div>
                <p className="text-slate-500 text-xs mb-3">{job.loc} • {job.type}</p>
                <button className="w-full bg-slate-50 py-2 rounded-lg text-indigo-600 font-bold text-xs border border-indigo-100">Quick Apply</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 text-white p-4 rounded-xl flex items-center justify-between">
          <div>
            <h5 className="font-bold text-sm">Need a Resume?</h5>
            <p className="text-slate-400 text-[10px]">I'll build one via voice chat</p>
          </div>
          <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsModule;
