import Link from "next/link";
import Image from "next/image";
import { FiHome, FiBriefcase, FiTool, FiArrowRight } from "react-icons/fi";

const services = [
  {
    id: "residential",
    title: "Residential Solar",
    image: "/residential-solar.jpg",
    description: "Transform your home into a powerhouse. Our residential rooftop solar solutions drastically reduce your electricity bills while increasing your property value. We handle everything from net-metering applications to seamless installation.",
    icon: <FiHome className="text-4xl text-black mb-4" />,
    features: [
      "Custom system design for your roof",
      "Assistance with government subsidies",
      "Net-metering integration",
      "25-year performance warranty",
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Solar",
    image: "/industrial-solar.jpg",
    description: "Empower your business with clean energy. We provide large-scale solar installations for factories, offices, and warehouses. Reduce operational costs and meet your corporate sustainability goals with our high-yield systems.",
    icon: <FiBriefcase className="text-4xl text-black mb-4" />,
    features: [
      "High-efficiency panels for limited space",
      "Tax benefits and accelerated depreciation",
      "Zero-downtime installation process",
      "Advanced monitoring software",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & AMC",
    image: "/maintenance.jpg",
    description: "Ensure your solar investment performs at its peak. Our Annual Maintenance Contracts (AMC) cover comprehensive health checks, panel cleaning, and rapid troubleshooting to maximize your system's lifespan and output.",
    icon: <FiTool className="text-4xl text-black mb-4" />,
    features: [
      "Biannual deep cleaning",
      "Inverter and wiring health checks",
      "Performance optimization",
      "Priority support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            End-to-end solar solutions tailored for your unique energy needs. Install once. Save for decades.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[350px] bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2">
                {service.icon}
                <h2 className="text-3xl font-bold text-black mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-800">
                      <div className="w-2 h-2 bg-black rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors font-medium"
                >
                  Get a Quote <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
