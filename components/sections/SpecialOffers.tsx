import Link from "next/link";
import { FiGift, FiSun, FiPhone } from "react-icons/fi";

export default function SpecialOffers() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-yellow-500 mb-3 border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-500/10">
            Limited Time Promotions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Exclusive Solar Offers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Switching to solar has never been more rewarding. Take advantage of our premium ongoing offers designed to maximize your savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {/* Offer 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-bl-lg z-10">
              POPULAR
            </div>
            <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 border border-yellow-500/30 group-hover:scale-110 transition-transform">
              <FiSun className="text-yellow-400 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">1 Year Free Maintenance</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Keep your system running at absolute peak efficiency. We offer <strong className="text-white">12 free cleaning and maintenance services</strong> for your solar panels for the first year (1 visit every month).
            </p>
          </div>

          {/* Offer 2 */}
          <div className="bg-gradient-to-br from-yellow-600/20 to-transparent border border-yellow-500/30 rounded-2xl p-8 lg:p-10 hover:from-yellow-600/30 transition-colors relative overflow-hidden group">
            <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
              <FiGift className="text-black text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Free EV Vehicle</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Accelerate your green journey! Get a completely <strong className="text-white">FREE Electric Vehicle</strong> as a complimentary gift when you book any solar installation project valued above ₹2.7 Lakhs.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">Want to claim these offers or need more details?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg inline-flex items-center gap-2">
              Contact For Help
            </Link>
            <a href="tel:+919130910564" className="bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-lg inline-flex items-center gap-2">
              <FiPhone /> Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
