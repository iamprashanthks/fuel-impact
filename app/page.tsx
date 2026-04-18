import Calculator from '../components/Calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Calculate Your Fuel Cost Impact
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Know how much fuel is costing your income and get insights to save money
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <Calculator />
      </section>

      {/* CTA Section */}
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
