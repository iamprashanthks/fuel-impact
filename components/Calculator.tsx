'use client';

import React, { useState, useMemo } from 'react';
import InputField from './InputField';
import ResultCard from './ResultCard';
import { FuelData, calculateFuelCost, getInsight } from '../lib/calculations';

export default function Calculator() {
  const [data, setData] = useState<FuelData>({
    distance: 50,
    mileage: 15,
    fuelPrice: 100,
    daysPerMonth: 20,
    monthlyIncome: 50000,
  });

  const results = useMemo(() => calculateFuelCost(data), [data]);

  const updateData = (key: keyof FuelData, value: number) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Fuel Cost Calculator</h2>
          <InputField
            label="Daily Distance"
            value={data.distance}
            onChange={(value) => updateData('distance', value)}
            placeholder="50"
            unit="km/day"
            min={1}
          />
          <InputField
            label="Vehicle Mileage"
            value={data.mileage}
            onChange={(value) => updateData('mileage', value)}
            placeholder="15"
            unit="km/l"
            min={1}
          />
          <InputField
            label="Fuel Price"
            value={data.fuelPrice}
            onChange={(value) => updateData('fuelPrice', value)}
            placeholder="100"
            unit="₹/l"
            min={1}
          />
          <InputField
            label="Days per Month"
            value={data.daysPerMonth}
            onChange={(value) => updateData('daysPerMonth', value)}
            placeholder="20"
            unit="days"
            min={1}
            max={31}
          />
          <InputField
            label="Monthly Income"
            value={data.monthlyIncome}
            onChange={(value) => updateData('monthlyIncome', value)}
            placeholder="50000"
            unit="₹"
            min={1}
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Fuel Costs</h2>
          <ResultCard
            title="Daily Cost"
            value={`₹${results.dailyCost}`}
            subtitle="Fuel cost per day"
          />
          <ResultCard
            title="Monthly Cost"
            value={`₹${results.monthlyCost}`}
            subtitle="Fuel cost per month"
          />
          <ResultCard
            title="Yearly Cost"
            value={`₹${results.yearlyCost}`}
            subtitle="Fuel cost per year"
          />
          <ResultCard
            title="Income Percentage"
            value={`${results.incomePercentage}%`}
            subtitle="Of your monthly income"
          />

          {/* Insight */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Insight</h3>
            <p className="text-blue-700">{getInsight(results.incomePercentage)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}