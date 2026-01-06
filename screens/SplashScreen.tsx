
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-700 to-blue-900 text-white p-6">
      <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-2xl animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4338ca" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-2">Sahaya</h1>
      <p className="text-indigo-100 text-center text-lg max-w-xs">Supporting SDG 1: Ending Poverty for all</p>
      
      <div className="absolute bottom-10 flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
        </div>
        <p className="text-sm opacity-60">Bharat Seva Initiative</p>
      </div>
    </div>
  );
};

export default SplashScreen;
