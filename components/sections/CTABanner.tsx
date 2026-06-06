import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function CTABanner() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Switch to Solar?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
          Get a free site survey and custom quote from Vidarbha&apos;s most trusted solar team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded hover:bg-gray-100 transition-colors">
            Get Free Quote <FiArrowRight />
          </Link>
          <a href="tel:+919130910564" className="inline-flex items-center gap-2 border border-gray-600 text-white font-semibold px-8 py-4 rounded hover:border-white transition-colors">
            <FiPhone /> Call: +91 91309 10564
          </a>
        </div>
      </div>
    </section>
  );
}
