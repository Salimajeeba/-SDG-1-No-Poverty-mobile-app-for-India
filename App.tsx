
import React, { useState, useEffect } from 'react';
import { Screen, UserProfile } from './types';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import Dashboard from './screens/Dashboard';
import FoodModule from './screens/FoodModule';
import HealthcareModule from './screens/HealthcareModule';
import JobsModule from './screens/JobsModule';
import SchemesModule from './screens/SchemesModule';
import AIAssistant from './screens/AIAssistant';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [phoneInput, setPhoneInput] = useState('');

  useEffect(() => {
    if (currentScreen === Screen.SPLASH) {
      const timer = setTimeout(() => setCurrentScreen(Screen.LOGIN), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen />;
      case Screen.LOGIN:
        return <LoginScreen 
          onNext={(phone) => { setPhoneInput(phone); setCurrentScreen(Screen.OTP); }} 
        />;
      case Screen.OTP:
        return <OTPScreen 
          phone={phoneInput} 
          onVerify={() => {
            setUser({ phone: phoneInput, name: 'Ravi', location: 'Chennai', language: 'Tamil' });
            setCurrentScreen(Screen.DASHBOARD);
          }} 
          onBack={() => setCurrentScreen(Screen.LOGIN)}
        />;
      case Screen.DASHBOARD:
        return <Dashboard 
          user={user} 
          onNavigate={(s) => setCurrentScreen(s)} 
          onLogout={() => setCurrentScreen(Screen.LOGIN)}
        />;
      case Screen.FOOD:
        return <FoodModule onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.HEALTHCARE:
        return <HealthcareModule onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.JOBS:
        return <JobsModule onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.SCHEMES:
        return <SchemesModule onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.AI_ASSISTANT:
        return <AIAssistant onBack={() => setCurrentScreen(Screen.DASHBOARD)} />;
      default:
        return <Dashboard user={user} onNavigate={(s) => setCurrentScreen(s)} onLogout={() => setCurrentScreen(Screen.LOGIN)} />;
    }
  };

  return (
    <div className="mobile-frame font-sans">
      {renderScreen()}
      
      {/* Persistent Voice Assistant Trigger (FAB) */}
      {![Screen.SPLASH, Screen.LOGIN, Screen.OTP, Screen.AI_ASSISTANT].includes(currentScreen) && (
        <button 
          onClick={() => setCurrentScreen(Screen.AI_ASSISTANT)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
        </button>
      )}
    </div>
  );
};

export default App;
