"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiZap } from "react-icons/fi";

export default function Calculator() {
  const [bill, setBill] = useState(3000);

  const unitsPerMonth = bill / 8;
  const systemSize = Math.ceil(unitsPerMonth / 120 * 10) / 10;
  const monthlySavings = Math.round(bill * 0.85);
  const annualSavings = monthlySavings * 12;
  const payback = parseFloat((systemSize * 45000 / annualSavings).toFixed(1));
  const co2Saved = Math.round(systemSize * 1.5 * 1000);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Solar Calculator</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">How Much Can You Save?</h2>
            <p className="text-gray-500">Enter your monthly electricity bill and see your estimated solar savings.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12">
            {/* Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <label className="font-semibold text-gray-800">Monthly Electricity Bill</label>
                <span className="text-2xl font-bold text-gray-900">₹{bill.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={20000}
                step={500}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>₹500</span><span>₹20,000</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "System Size", value: `${systemSize} kW`, sub: "Recommended" },
                { label: "Monthly Savings", value: `₹${monthlySavings.toLocaleString()}`, sub: "Approx." },
                { label: "Payback Period", value: `${payback} yrs`, sub: "Return on Investment" },
                { label: "CO₂ Saved", value: `${(co2Saved / 1000).toFixed(1)} T`, sub: "Per year" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                  <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Annual highlight */}
            <div className="bg-black rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <FiZap className="text-white text-2xl shrink-0" />
                <div>
                  <div className="text-white font-bold text-lg">Annual Savings: ₹{annualSavings.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Based on current electricity rates in Maharashtra</div>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 text-sm whitespace-nowrap hover:bg-gray-100 transition-colors">
                Get Exact Quote <FiArrowRight />
              </Link>
            </div>

            <p className="text-xs text-gray-400 text-center">
              * Estimates based on average Maharashtra electricity tariffs. Actual savings may vary based on roof area, location, and usage patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
