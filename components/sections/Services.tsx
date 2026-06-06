import Link from "next/link";
import Image from "next/image";
import { FiHome, FiZap, FiTool, FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: FiHome,
    title: "Residential Solar",
    image: "/residential-solar.jpg",
    description: "Power your home with clean solar energy. Reduce your electricity bill by up to 90% with our expert rooftop solar installations designed for homes across Vidarbha.",
    features: ["Rooftop solar PV systems", "Net metering setup", "Government subsidy assistance", "25-year panel warranty"],
    href: "/services#residential",
  },
  {
    icon: FiZap,
    title: "Commercial Solar",
    image: "/industrial-solar.jpg",
    description: "Cut operational costs and go green with large-scale commercial solar solutions for offices, industries, factories, and housing societies.",
    features: ["High-capacity solar plants", "ROI in 3–5 years", "Industrial & factory setups", "DISCOM approvals handled"],
    href: "/services#commercial",
  },
  {
    icon: FiTool,
    title: "Maintenance & AMC",
    image: "/maintenance.jpg",
    description: "Keep your solar system performing at peak efficiency with our Annual Maintenance Contracts and regular servicing across the Vidarbha region.",
    features: ["Quarterly cleaning & checks", "Performance monitoring", "Panel replacement support", "24/7 breakdown support"],
    href: "/services#maintenance",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">What We Offer</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            End-to-end solar solutions for every need — from a single home to an entire industrial complex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="border border-gray-200 rounded-lg bg-white hover:border-gray-900 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col">
              <div className="relative h-48 w-full shrink-0">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-white">
                  <service.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-black group-hover:gap-3 transition-all">
                  Learn More <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
