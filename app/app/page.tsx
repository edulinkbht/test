import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="w-full p-6 flex justify-between items-center bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600">MyBrand</div>
        <nav>
          <ul className="flex space-x-6 text-gray-600 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Features</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Build faster with <span className="text-blue-600">TypeScript</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
          Launch your next big idea in minutes. Seamlessly push to GitHub and deploy to Vercel with zero configuration.
        </p>
        <div className="flex space-x-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 border border-slate-300 rounded-full font-bold text-lg hover:bg-slate-50 transition">
            Learn More
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-5xl w-full text-left">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2 text-slate-800">⚡ Lightning Fast</h3>
            <p className="text-slate-600">Built on Next.js for blazing fast performance and SEO optimization.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2 text-slate-800">🛡️ Type Safe</h3>
            <p className="text-slate-600">100% TypeScript. Catch errors before you even run your code.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-2 text-slate-800">🚀 Easy Deploy</h3>
            <p className="text-slate-600">Push to your GitHub repo and watch Vercel deploy it instantly.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center p-6 text-slate-500 mt-20 border-t border-slate-200">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </footer>
    </div>
  );
}
