import React from 'react';

interface ResultCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

export default function ResultCard({ title, value, subtitle }: ResultCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-600 mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
}