import Calculator from '../../components/Calculator';

export const metadata = {
  title: 'Petrol vs Electric Vehicle Cost Comparison | EV Savings Calculator',
  description: 'Compare fuel costs of petrol cars vs electric vehicles. Calculate potential savings with EV adoption in India.',
  keywords: 'petrol vs EV cost, electric vehicle savings, EV cost calculator India, fuel vs electricity cost',
};

export default function PetrolVsEVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-slate-900">Fuel Impact</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-600 hidden sm:block">Follow me:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/uxui_shan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
                  aria-label="Follow on Twitter"
                >
                  <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/iamprashanthks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
                  aria-label="Follow on GitHub"
                >
                  <svg className="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-teal-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl mb-8 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-teal-800 bg-clip-text text-transparent mb-6 leading-tight">
              Petrol vs Electric
              <br />
              <span className="text-2xl md:text-4xl font-semibold text-gray-600">Vehicle Costs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Compare fuel costs of petrol cars vs electric vehicles. Calculate potential savings with EV adoption in India.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Thinking about switching to an electric vehicle? Our comparison tool helps you understand the cost difference between traditional petrol cars and modern EVs, including fuel savings and potential long-term benefits.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Why Compare?
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lower running costs compared to petrol vehicles
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Government incentives and subsidies
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Environmental benefits and reduced carbon footprint
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lower maintenance costs
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Cost Comparison Factors
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fuel/Electricity Costs: Current petrol prices vs electricity rates
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Efficiency: km/l for petrol vs km/kWh for EVs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Maintenance: EVs have fewer moving parts and lower maintenance
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Initial Investment: Higher upfront cost for EVs (offset by savings)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Calculator />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Petrol vs EV Cost Comparison</h2>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/50">
            <table className="min-w-full divide-y divide-slate-200 bg-white rounded-3xl overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.08em]">Aspect</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.08em]">Petrol Car</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.08em]">Electric Vehicle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="bg-slate-50">
                  <td className="px-5 py-4 font-semibold">Fuel/Energy Cost</td>
                  <td className="px-5 py-4">₹100/litre</td>
                  <td className="px-5 py-4">₹8-12/kWh</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Efficiency</td>
                  <td className="px-5 py-4">12-18 km/l</td>
                  <td className="px-5 py-4">4-6 km/kWh</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-5 py-4 font-semibold">Monthly Cost (50km/day)</td>
                  <td className="px-5 py-4">₹3,000-4,500</td>
                  <td className="px-5 py-4">₹400-800</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Maintenance</td>
                  <td className="px-5 py-4">High</td>
                  <td className="px-5 py-4">Low</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-5 py-4 font-semibold">Environmental Impact</td>
                  <td className="px-5 py-4">High emissions</td>
                  <td className="px-5 py-4">Zero emissions</td>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Follow for More Financial Tools
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get updates on new calculators, money-saving tips, and financial insights delivered to your feed.
          </p>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Follow on Twitter
          </a>
        </div>
      </section>
    </div>
  );
}