import { FiShield, FiUsers, FiAward, FiClock } from "react-icons/fi";

const reasons = [
  { icon: FiShield, title: "Trusted & Reliable", desc: "Licensed, insured, and certified solar installers with a proven track record across Vidarbha." },
  { icon: FiUsers, title: "Local Experts", desc: "We understand the Vidarbha region — its sunlight patterns, grid setup, and local regulations." },
  { icon: FiAward, title: "Quality Guaranteed", desc: "Premium Tier-1 solar panels and inverters with long-term manufacturer warranties." },
  { icon: FiClock, title: "End-to-End Service", desc: "From site survey to installation to AMC — we handle everything so you don't have to." },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
              Trusted Solar.<br />Proven Results.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We&apos;re not just installers — we&apos;re your long-term energy partners. Our team brings local expertise, quality products, and genuine after-sales support to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-block bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800 transition-colors text-sm">
                Get Free Site Survey
              </a>
              <a href="tel:+919130910564" className="inline-block border border-black text-black font-semibold px-6 py-3 rounded hover:bg-black hover:text-white transition-colors text-sm">
                Talk to an Expert
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <r.icon className="text-gray-900 text-lg" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
