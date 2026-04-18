import Calculator from '../../components/Calculator';

export const metadata = {
  title: "Fuel Impact on Salary Calculator | How Much Fuel Costs You Monthly",
  description: "Discover what percentage of your salary goes to fuel expenses. Calculate fuel impact on income and get personalized savings tips.",
  keywords: "fuel impact on salary, fuel cost percentage, income fuel expenses, fuel savings calculator",
};

export default function FuelImpactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fuel Impact on Salary Calculator
          </h1>
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Ever wondered what percentage of your hard-earned salary is going towards fuel expenses? Our fuel impact calculator shows you exactly how much of your income is spent on transportation costs and provides insights to help you save money.
            </p>
            <h2>Understanding Fuel&apos;s Impact on Your Finances</h2>
            <p>
              Fuel expenses can be a significant portion of your monthly budget, especially if you commute long distances or have multiple vehicles. This calculator helps you:
            </p>
            <ul>
              <li>Calculate the exact percentage of your salary spent on fuel</li>
              <li>Understand your annual fuel expenditure</li>
              <li>Get personalized recommendations to reduce costs</li>
              <li>Compare fuel costs with alternative transportation options</li>
            </ul>
            <h2>Fuel Price Trends in India (2026)</h2>
            <p>
              With fluctuating fuel prices, it&apos;s important to track how changes affect your budget. Our calculator uses current market rates to give you accurate estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <Calculator />
      </section>

      {/* Insights Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Your Fuel Percentage Means</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Low Impact (&lt;5%)</h3>
              <p className="text-green-700">
                Your fuel expenses are well-managed. You&apos;re either driving efficiently or have low commuting needs.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Moderate Impact (5-10%)</h3>
              <p className="text-yellow-700">
                Consider route optimization or carpooling to reduce your fuel expenses further.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">High Impact (10-15%)</h3>
              <p className="text-orange-700">
                Your fuel costs are significant. Look into public transport or electric vehicle options.
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Very High Impact (&gt;15%)</h3>
              <p className="text-red-700">
                Fuel is consuming a large portion of your income. Consider major changes like relocating closer to work.
              </p>
            </div>
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