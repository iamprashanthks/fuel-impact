import Calculator from '../../components/Calculator';

export const metadata = {
  title: 'Petrol vs Electric Vehicle Cost Comparison | EV Savings Calculator',
  description: 'Compare fuel costs of petrol cars vs electric vehicles. Calculate potential savings with EV adoption in India.',
  keywords: 'petrol vs EV cost, electric vehicle savings, EV cost calculator India, fuel vs electricity cost',
};

export default function PetrolVsEVPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Petrol vs Electric Vehicle Cost Comparison
          </h1>
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Thinking about switching to an electric vehicle? Our comparison tool helps you understand the cost difference between traditional petrol cars and modern EVs, including fuel savings and potential long-term benefits.
            </p>
            <h2>Why Compare Petrol vs Electric Vehicles?</h2>
            <p>
              Electric vehicles are becoming increasingly popular in India due to:
            </p>
            <ul>
              <li>Lower running costs compared to petrol vehicles</li>
              <li>Government incentives and subsidies</li>
              <li>Environmental benefits and reduced carbon footprint</li>
              <li>Lower maintenance costs</li>
            </ul>
            <h2>Cost Comparison Factors</h2>
            <p>
              When comparing costs, consider:
            </p>
            <ul>
              <li><strong>Fuel/Electricity Costs:</strong> Current petrol prices vs electricity rates</li>
              <li><strong>Efficiency:</strong> km/l for petrol vs km/kWh for EVs</li>
              <li><strong>Maintenance:</strong> EVs have fewer moving parts and lower maintenance</li>
              <li><strong>Initial Investment:</strong> Higher upfront cost for EVs (offset by savings)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <Calculator />
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Petrol vs EV Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Petrol Car</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Electric Vehicle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Fuel/Energy Cost</td>
                  <td className="border border-gray-300 px-4 py-2">₹100/litre</td>
                  <td className="border border-gray-300 px-4 py-2">₹8-12/kWh</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Efficiency</td>
                  <td className="border border-gray-300 px-4 py-2">12-18 km/l</td>
                  <td className="border border-gray-300 px-4 py-2">4-6 km/kWh</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Monthly Cost (50km/day)</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000-4,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹400-800</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Maintenance</td>
                  <td className="border border-gray-300 px-4 py-2">High</td>
                  <td className="border border-gray-300 px-4 py-2">Low</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Environmental Impact</td>
                  <td className="border border-gray-300 px-4 py-2">High emissions</td>
                  <td className="border border-gray-300 px-4 py-2">Zero emissions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            *Costs are approximate and may vary based on location, vehicle model, and usage patterns.
          </p>
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