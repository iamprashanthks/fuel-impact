import React from 'react';

interface ResultCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: string;
  color?: string;
}

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'sun':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'year':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'percentage':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
};

const getGradient = (color?: string) => {
  switch (color) {
    case 'blue':
      return 'from-blue-500 to-blue-600';
    case 'purple':
      return 'from-purple-500 to-purple-600';
    case 'indigo':
      return 'from-indigo-500 to-indigo-600';
    case 'emerald':
      return 'from-emerald-500 to-emerald-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export default function ResultCard({ title, value, subtitle, icon, color }: ResultCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${getGradient(color)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white">
            {getIcon(icon)}
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          {value}
        </p>
      </div>
    </div>
  );
}