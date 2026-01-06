
import React, { useState } from 'react';

interface Props {
  onNext: (phone: string) => void;
}

const LoginScreen: React.FC<Props> = ({ onNext }) => {
  const [phone, setPhone] = useState('');

  return (
    <div className="p-8 pt-20 h-screen flex flex-col bg-slate-50">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome</h2>
      <p className="text-slate-500 mb-10">Sign in with your mobile number to get started.</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 font-medium">
              +91
            </span>
            <input 
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="00000 00000"
              className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-lg tracking-wider"
              maxLength={10}
            />
          </div>
        </div>

        <button 
          onClick={() => phone.length === 10 && onNext(phone)}
          disabled={phone.length !== 10}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
            phone.length === 10 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          Get OTP
        </button>
      </div>

      <div className="mt-auto pb-10 text-center">
        <p className="text-slate-400 text-sm">By continuing, you agree to our Terms and Privacy Policy</p>
      </div>
    </div>
  );
};

export default LoginScreen;
