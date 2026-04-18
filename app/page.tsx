import Calculator from '../components/Calculator';
import Image from 'next/image';
import { Fuel } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/fuel-impact-logo.png"
                alt="Fuel Impact Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-slate-900">Fuel Impact</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),transparent_32%)]" />
        <div className="absolute -left-24 top-20 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-purple-300/15 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200/50 backdrop-blur-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg">
                  <Fuel className="w-5 h-5" />
                </span>
                <span className="text-sm font-semibold text-slate-700">Live fuel cost insights for everyday drivers</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.1]">
                  Fuel Cost Calculator
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
                  Know how much fuel is costing your income
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                  Fuel prices are rising, and many people dont realize how much they actually spend on petrol every month. FuelImpact helps you calculate your fuel expenses and understand how it affects your income, so you can make smarter financial decisions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#calculator" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/20 transition-all duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/30">
                  Try the calculator
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <div className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-6 py-4 text-sm text-slate-600 shadow-lg backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                  Market volatility alert: oil prices remain sensitive to geopolitical tension.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="group rounded-2xl bg-white/90 border border-slate-200/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                  <p className="text-sm font-medium text-slate-500 mb-2">Estimated fuel price</p>
                  <p className="text-2xl font-bold text-slate-900">₹100 / l</p>
                  <div className="mt-3 w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="group rounded-2xl bg-white/90 border border-slate-200/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                  <p className="text-sm font-medium text-slate-500 mb-2">Average mileage</p>
                  <p className="text-2xl font-bold text-slate-900">15 km/l</p>
                  <div className="mt-3 w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="group rounded-2xl bg-white/90 border border-slate-200/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                  <p className="text-sm font-medium text-slate-500 mb-2">Fuel volatility</p>
                  <p className="text-2xl font-bold text-slate-900">Medium</p>
                  <div className="mt-3 w-full bg-slate-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-1.5 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/95 p-8 shadow-2xl shadow-slate-400/20 backdrop-blur-xl">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl" />
                <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-purple-100/60 blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-600">Fuel impact preview</p>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm uppercase tracking-[0.15em] text-slate-400">Monthly fuel outlook</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="text-xs text-emerald-400 font-medium">Live</span>
                      </div>
                    </div>
                    <p className="text-5xl font-bold mb-3">₹4,680</p>
                    <p className="text-slate-300 leading-relaxed mb-8">Projected monthly cost based on typical daily commute.</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700/50">
                        <p className="text-xs uppercase tracking-[0.12em] text-slate-400 mb-2">Brent crude</p>
                        <p className="text-2xl font-bold">$83.40</p>
                        <div className="flex items-center gap-1 mt-2">
                          <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-emerald-400">+1.2% last 24h</span>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-slate-800/80 p-5 border border-slate-700/50">
                        <p className="text-xs uppercase tracking-[0.12em] text-slate-400 mb-2">Price trend</p>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span className="text-lg font-bold text-emerald-400">Stable</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">vs last month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter your daily travel distance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter your vehicle mileage</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter current fuel price</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get instant results</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Calculator />
        </div>
      </section>

      {/* AEO Q&A Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How do I calculate fuel cost per month?</h3>
              <p className="text-gray-600 mb-4">Fuel cost per month is calculated using: (Distance ÷ Mileage) × Fuel Price × Days</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How much of my salary should go to fuel?</h3>
              <p className="text-gray-600 mb-4">Ideally, fuel expenses should be less than 10% of your monthly income. If it exceeds that, it may impact your financial health.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How can I reduce fuel expenses?</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Reduce daily travel distance</li>
                <li>• Use public transport</li>
                <li>• Improve driving efficiency</li>
                <li>• Consider electric vehicles</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why are fuel prices increasing?</h3>
              <p className="text-gray-600">Fuel prices are affected by global oil supply, geopolitical events, and demand fluctuations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Use Fuel Impact Calculator?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get comprehensive insights into your fuel expenses and make informed financial decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Expenses</h3>
              <p className="text-gray-600">Monitor your daily, monthly, and yearly fuel costs with precision.</p>
              <a href="/fuel-expense" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Calculate Monthly Fuel Cost →
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Insights</h3>
              <p className="text-gray-600">Receive personalized recommendations to optimize your fuel expenses.</p>
              <a href="/fuel-impact" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium">
                See Fuel Impact on Salary →
              </a>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Money</h3>
              <p className="text-gray-600">Discover cost-saving opportunities and alternative transportation options.</p>
              <a href="/petrol-vs-ev-cost" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Compare EV vs Petrol →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Follow for More Financial Tools
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get updates on new calculators, money-saving tips, and financial insights delivered to your feed.
          </p>
          <a
            href="https://x.com/uxui_shan"
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
