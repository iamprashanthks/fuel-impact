export interface FuelData {
  distance: number; // km/day
  mileage: number; // km/l
  fuelPrice: number; // ₹/l
  daysPerMonth: number;
  monthlyIncome: number; // ₹
}

export interface FuelResults {
  dailyCost: number;
  monthlyCost: number;
  yearlyCost: number;
  incomePercentage: number;
}

export function calculateFuelCost(data: FuelData): FuelResults {
  const dailyFuelConsumption = data.distance / data.mileage;
  const dailyCost = dailyFuelConsumption * data.fuelPrice;
  const monthlyCost = dailyCost * data.daysPerMonth;
  const yearlyCost = monthlyCost * 12;
  const incomePercentage = (monthlyCost / data.monthlyIncome) * 100;

  return {
    dailyCost: Math.round(dailyCost * 100) / 100,
    monthlyCost: Math.round(monthlyCost * 100) / 100,
    yearlyCost: Math.round(yearlyCost * 100) / 100,
    incomePercentage: Math.round(incomePercentage * 100) / 100,
  };
}

export function getInsight(incomePercentage: number): string {
  if (incomePercentage < 5) {
    return "Your fuel expenses are low. Great job on efficiency!";
  } else if (incomePercentage < 10) {
    return "Your fuel expenses are moderate. Consider optimizing your routes.";
  } else if (incomePercentage < 15) {
    return "Your fuel expenses are high. Look into carpooling or public transport.";
  } else {
    return "Your fuel expenses are very high. Consider switching to an electric vehicle.";
  }
}