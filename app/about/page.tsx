import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About KOTEVIA INFRA & TECH SOLUTIONS
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Vidarbha's Most Trusted Solar Partner. We are committed to making sustainable energy accessible to homes and businesses across the region.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
            <Image 
              src="/office.jpg" 
              alt="Kotevia Solar Solutions Office in Wardha" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="lg:pr-8">
            <span className="text-sm font-bold tracking-widest uppercase text-yellow-600 mb-2 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with the vision to power Vidarbha with clean and renewable energy, Kotevia Solar Solutions has quickly become a leading name in solar installations across Wardha, Nagpur, Yavatmal, and Chandrapur.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We started with a simple belief: transitioning to solar shouldn't be complicated. Our team of certified engineers handles everything from initial site inspection to final commissioning, ensuring a seamless experience.
            </p>
            <ul className="space-y-3">
              {['Tier-1 Solar Panels', 'Expert Maintenance', 'Local Support'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-800 font-medium">
                  <FiCheckCircle className="text-black mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          <div className="bg-gray-50 p-10 md:p-12 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the driving force behind Vidarbha's transition to 100% renewable energy, empowering every household and business to generate their own clean power and achieve energy independence.
            </p>
          </div>
          <div className="bg-gray-900 text-white p-10 md:p-12 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To deliver premium quality, highly efficient solar solutions with unmatched customer service. We simplify the solar journey, maximizing savings and environmental impact for our clients.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest uppercase text-yellow-600 mb-2 block">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Prashant Kotewar", position: "Director", image: "/prashant-kotewar.jpg" },
              { name: "Vinod Kotewar", position: "Director", image: "/vinod-kotewar.jpg" },
              { name: "Dinesh Kotewar", position: "Director", image: "/dinesh-kotewar.jpg" }
            ].map((leader, i) => (
              <div key={i} className="text-center group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-40 h-40 mx-auto rounded-full mb-6 shadow-sm overflow-hidden border-4 border-white transition-transform group-hover:scale-105 duration-300 relative bg-gray-200">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                <p className="text-yellow-700 font-medium">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Placeholder */}
        <div className="text-center p-12 bg-gray-50 rounded-lg border border-gray-200 border-dashed">
          <h3 className="text-xl font-bold text-gray-400 mb-2">Certifications & Awards</h3>
          <p className="text-gray-400 text-sm">To be updated in Phase 2</p>
        </div>
      </div>
    </div>
  );
}
