import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "48px 48px"
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 border border-gray-700 px-4 py-2 rounded-full">
            Vidarbha&apos;s Most Trusted Solar Partner
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Install Once.
            <span className="block text-gray-300">Save for Decades.</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
            Professional solar installation for homes and businesses across Wardha, Nagpur, Yavatmal, Chandrapur and all of Vidarbha. Clean energy. Trusted results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded hover:bg-gray-100 transition-colors">
              Get Free Quote <FiArrowRight />
            </Link>
            <a href="tel:+919130910564" className="inline-flex items-center gap-2 border border-gray-600 text-white font-semibold px-8 py-4 rounded hover:border-white transition-colors">
              <FiPhone /> Call Us Now
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: "4", label: "Cities Served" },
              { value: "2MW+", label: "Solar Capacity" },
              { value: "100%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
