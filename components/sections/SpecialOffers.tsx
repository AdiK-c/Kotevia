import Link from "next/link";
import { FiGift, FiSun, FiPhone } from "react-icons/fi";

export default function SpecialOffers() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cloud-like Container */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-16 relative overflow-hidden border border-white">
          
          {/* Cloud accents/blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-10 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full blur-[120px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>

          <div className="text-center mb-14 relative z-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-3 border border-blue-200 px-4 py-1.5 rounded-full bg-blue-50">
              Limited Time Promotions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Exclusive Solar Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Switching to solar has never been more rewarding. Take advantage of our premium ongoing offers designed to maximize your savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-14 relative z-10">
            {/* Offer 1 */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-5 py-1.5 rounded-bl-2xl z-10 shadow-sm">
                POPULAR
              </div>
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <FiSun className="text-yellow-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1 Year Free Maintenance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Keep your system running at absolute peak efficiency. We offer <strong className="text-gray-900">12 free cleaning and maintenance services</strong> for your solar panels for the first year (1 visit every month).
              </p>
            </div>

            {/* Offer 2 */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <FiGift className="text-blue-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Free EV Vehicle</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Accelerate your green journey! Get a completely <strong className="text-gray-900">FREE Electric Vehicle</strong> as a complimentary gift when you book any solar installation project valued above ₹2.7 Lakhs.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center relative z-10">
            <p className="text-gray-500 mb-6 font-medium">Want to claim these offers or need more details?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-full shadow-lg shadow-yellow-400/30 hover:bg-yellow-300 hover:shadow-xl hover:-translate-y-0.5 transition-all text-lg inline-flex items-center gap-2">
                Contact For Help
              </Link>
              <a href="tel:+919130910564" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 hover:-translate-y-0.5 transition-all text-lg inline-flex items-center gap-2">
                <FiPhone /> Call Us Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
