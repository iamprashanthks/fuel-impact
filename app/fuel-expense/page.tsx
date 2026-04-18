import Calculator from '../../components/Calculator';

export const metadata = {
  title: 'Fuel Expense Per Month Calculator (India 2026) | FuelImpact',
  description: 'Calculate your monthly fuel expenses and see how it impacts your income. Free fuel cost calculator for Indian drivers.',
  keywords: 'fuel expense calculator, monthly fuel cost, fuel impact on salary, India fuel prices',
};

export default function FuelExpensePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fuel Expense Per Month Calculator - India 2026
          </h1>
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Are you wondering how much you&apos;re spending on fuel every month? Our free fuel expense calculator helps you calculate your monthly fuel costs based on your daily driving habits, vehicle mileage, and current fuel prices in India.
            </p>
            <h2>Why Calculate Your Fuel Expenses?</h2>
            <p>
              Fuel costs can significantly impact your monthly budget. By understanding your fuel expenses, you can:
            </p>
            <ul>
              <li>Plan your monthly budget more effectively</li>
              <li>Compare fuel costs with other transportation options</li>
              <li>Make informed decisions about vehicle purchases</li>
              <li>Track the impact of fuel price changes on your finances</li>
            </ul>
            <h2>How to Use the Calculator</h2>
            <p>
              Simply enter your daily distance traveled, vehicle mileage, current fuel price, number of driving days per month, and your monthly income. The calculator will show you your daily, monthly, and yearly fuel costs, plus the percentage of your income spent on fuel.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <Calculator />
      </section>

      {/* Example Calculation */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Calculation</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-4">
              <strong>Scenario:</strong> You drive 50 km/day, your car gets 15 km/l, fuel costs ₹100/l, you drive 20 days/month, and earn ₹50,000/month.
            </p>
            <ul className="space-y-2">
              <li><strong>Daily Fuel Consumption:</strong> 50 ÷ 15 = 3.33 liters</li>
              <li><strong>Daily Cost:</strong> 3.33 × 100 = ₹333</li>
              <li><strong>Monthly Cost:</strong> 333 × 20 = ₹6,660</li>
              <li><strong>Yearly Cost:</strong> 6,660 × 12 = ₹79,920</li>
              <li><strong>Income Percentage:</strong> (6,660 ÷ 50,000) × 100 = 13.32%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Follow for More Financial Tools
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get updates on new calculators and money-saving tips
          </p>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Follow on Twitter
          </a>
        </div>
      </section>
    </div>
  );
}