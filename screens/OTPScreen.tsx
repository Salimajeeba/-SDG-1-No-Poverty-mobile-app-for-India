
import React, { useState, useEffect } from 'react';

interface Props {
  phone: string;
  onVerify: () => void;
  onBack: () => void;
}

const OTPScreen: React.FC<Props> = ({ phone, onVerify, onBack }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const t = setInterval(() => setTimer(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);

  const handleChange = (val: string, index: number) => {
    if (val.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    
    // Auto focus next
    if (val && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const isComplete = otp.every(v => v !== '');

  return (
    <div className="p-8 pt-20 h-screen flex flex-col bg-slate-50">
      <button onClick={onBack} className="mb-6 text-indigo-600 flex items-center font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
        Back
      </button>

      <h2 className="text-3xl font-bold text-slate-800 mb-2">Verify Mobile</h2>
      <p className="text-slate-500 mb-10">Enter the 4-digit code sent to +91 {phone}</p>
      
      <div className="flex justify-between mb-10">
        {otp.map((digit, i) => (
          <input 
            key={i}
            id={`otp-${i}`}
            type="number"
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            className="w-16 h-16 text-center text-2xl font-bold bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
          />
        ))}
      </div>

      <button 
        onClick={() => isComplete && onVerify()}
        disabled={!isComplete}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
          isComplete 
          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
      >
        Verify & Continue
      </button>

      <div className="mt-8 text-center">
        {timer > 0 ? (
          <p className="text-slate-500">Resend code in <span className="font-bold">{timer}s</span></p>
        ) : (
          <button className="text-indigo-600 font-bold underline">Resend OTP Now</button>
        )}
      </div>
    </div>
  );
};

export default OTPScreen;
