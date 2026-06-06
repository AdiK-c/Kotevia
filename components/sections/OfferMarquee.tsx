import Link from "next/link";
import { FiStar } from "react-icons/fi";

export default function OfferMarquee() {
  return (
    <div className="bg-yellow-500 text-black py-4 overflow-hidden flex whitespace-nowrap border-y-4 border-black relative group z-40">
      <div className="animate-marquee flex items-center gap-10 min-w-full">
        {/* We repeat the content multiple times to ensure a smooth continuous loop */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <FiStar className="text-xl fill-black" />
              <span className="text-xl md:text-2xl font-extrabold uppercase tracking-widest">
                Get 12 FREE Cleaning Services for 1 Year!
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FiStar className="text-xl fill-black" />
              <span className="text-xl md:text-2xl font-extrabold uppercase tracking-widest">
                FREE EV Vehicle on projects over ₹2.7 Lakhs!
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
