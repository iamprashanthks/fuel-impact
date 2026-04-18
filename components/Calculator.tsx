'use client';

import React, { useState, useMemo } from 'react';
import { Fuel } from 'lucide-react';
import InputField from './InputField';
import ResultCard from './ResultCard';
import { FuelData, calculateFuelCost, getInsight, getMarketInsight } from '../lib/calculations';

export default function Calculator() {
  const [data, setData] = useState<FuelData>({
    distance: 50,
    mileage: 15,
    fuelPrice: 100,
    daysPerMonth: 20,
    monthlyIncome: 50000,
  });
  const [compareEnabled, setCompareEnabled] = useState(false);
  const [previousFuelPrice, setPreviousFuelPrice] = useState(90);

  const results = useMemo(() => calculateFuelCost(data), [data]);
  const previousResults = useMemo(
    () => calculateFuelCost({ ...data, fuelPrice: previousFuelPrice }),
    [data, previousFuelPrice]
  );
  const marketInsight = useMemo(() => getMarketInsight(results.incomePercentage), [results.incomePercentage]);
  const personalInsight = useMemo(() => getInsight(results.incomePercentage), [results.incomePercentage]);

  const monthlyDifference = results.monthlyCost - previousResults.monthlyCost;
  const monthlyDifferenceLabel = monthlyDifference <= 0 ? 'You saved' : 'You spent more';

  const updateData = (key: keyof FuelData, value: number) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3">
            <Fuel className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Fuel Cost Calculator</h2>
        </div>
        <p className="text-center text-blue-100 max-w-2xl mx-auto">
          Enter your details below to calculate your fuel expenses and see how they impact your income.
        </p>
      </div>

      <div className="p-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Your Details</h3>
            </div>

            <div className="grid gap-4">
              <InputField
                label="Daily Distance"
                value={data.distance}
                onChange={(value) => updateData('distance', value)}
                placeholder="50"
                unit="km/day"
                min={1}
                icon="route"
              />
              <InputField
                label="Vehicle Mileage"
                value={data.mileage}
                onChange={(value) => updateData('mileage', value)}
                placeholder="15"
                unit="km/l"
                min={1}
                icon="car"
              />
              <InputField
                label="Fuel Price"
                value={data.fuelPrice}
                onChange={(value) => updateData('fuelPrice', value)}
                placeholder="100"
                unit="₹/l"
                min={1}
                icon="fuel"
              />
              <InputField
                label="Days per Month"
                value={data.daysPerMonth}
                onChange={(value) => updateData('daysPerMonth', value)}
                placeholder="20"
                unit="days"
                min={1}
                max={31}
                icon="calendar"
              />
              <InputField
                label="Monthly Income"
                value={data.monthlyIncome}
                onChange={(value) => updateData('monthlyIncome', value)}
                placeholder="50000"
                unit="₹"
                min={1}
                icon="wallet"
              />
            </div>

            <div className="mt-6 bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Compare Previous Fuel Price</h4>
                  <p className="text-sm text-gray-500">Toggle to compare your current fuel cost with a previous fuel price.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCompareEnabled((current) => !current)}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 ${compareEnabled ? 'bg-emerald-500' : 'bg-slate-300'}`}
                >
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${compareEnabled ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>

              {compareEnabled && (
                <div className="mt-6">
                  <InputField
                    label="Previous Fuel Price"
                    value={previousFuelPrice}
                    onChange={(value) => setPreviousFuelPrice(value)}
                    placeholder="90"
                    unit="₹/l"
                    min={1}
                    icon="fuel"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Your Fuel Costs</h3>
            </div>

            <div className="grid gap-4">
              <ResultCard
                title="Daily Cost"
                value={`₹${results.dailyCost}`}
                subtitle="Fuel cost per day"
                icon="sun"
                color="blue"
              />
              <ResultCard
                title="Monthly Cost"
                value={`₹${results.monthlyCost}`}
                subtitle="Fuel cost per month"
                icon="calendar"
                color="purple"
              />
              <ResultCard
                title="Yearly Cost"
                value={`₹${results.yearlyCost}`}
                subtitle="Fuel cost per year"
                icon="year"
                color="indigo"
              />
              <ResultCard
                title="Income Percentage"
                value={`${results.incomePercentage}%`}
                subtitle="Of your monthly income"
                icon="percentage"
                color="emerald"
              />
            </div>

            {compareEnabled && (
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Comparison Summary</h4>
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white p-4 border border-slate-200">
                    <p className="text-sm text-gray-500">Current Monthly Cost</p>
                    <p className="text-2xl font-bold text-gray-900">₹{results.monthlyCost}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-slate-200">
                    <p className="text-sm text-gray-500">Previous Monthly Cost</p>
                    <p className="text-2xl font-bold text-gray-900">₹{previousResults.monthlyCost}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-slate-200">
                    <p className="text-sm text-gray-500">Price Comparison</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-2xl font-bold ${monthlyDifference <= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {monthlyDifference <= 0 ? '↓' : '↑'} ₹{Math.abs(monthlyDifference).toFixed(2)}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${monthlyDifference <= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {monthlyDifference <= 0 ? 'You saved per month' : 'You spent more per month'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-200/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v5m0 8v5m8.66-6.34l-4.95 4.95M6.34 6.34l-4.95 4.95M21 12h-5M8 12H3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{marketInsight.headline}</h4>
                  <p className="text-xl font-semibold text-slate-900 mb-1">{marketInsight.spotPrice}</p>
                  <p className="text-gray-700 leading-relaxed">{marketInsight.note}</p>
                  <p className="mt-4 text-sm text-slate-600">{personalInsight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}