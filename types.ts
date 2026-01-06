
export enum Screen {
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  OTP = 'OTP',
  DASHBOARD = 'DASHBOARD',
  FOOD = 'FOOD',
  HEALTHCARE = 'HEALTHCARE',
  JOBS = 'JOBS',
  SCHEMES = 'SCHEMES',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export interface UserProfile {
  phone: string;
  name: string;
  location: string;
  language: 'English' | 'Hindi' | 'Tamil';
}

export interface Scheme {
  id: string;
  title: string;
  category: string;
  description: string;
  eligibility: string[];
  docs: string[];
}
