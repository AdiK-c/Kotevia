import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-full shrink-0">
                <Image src="/logo.jpg" alt="Kotevia Solar Solutions Logo" width={56} height={56} className="object-contain rounded-full" />
              </div>
              <span className="font-bold text-xl text-white">Kotevia Solar Solutions</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Vidarbha&apos;s Most Trusted Solar Partner. Powering homes and businesses across Wardha, Nagpur, Yavatmal, and Chandrapur.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/919130910564" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xl"><FaWhatsapp /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-xl"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Residential Solar", href: "/services/residential" },
                { label: "Commercial Solar", href: "/services/commercial" },
                { label: "Maintenance & AMC", href: "/services/maintenance" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiMapPin className="text-base mt-0.5 shrink-0" />
                <span>H.N 1050/31, Ward No 2 Deshmukh Wadi, Mahadeo Mandir, Pipri Meghe, Wardha, Maharashtra 442001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiPhone className="text-base shrink-0" />
                <a href="tel:+919130910564" className="hover:text-white transition-colors">+91 91309 10564</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiMail className="text-base shrink-0" />
                <a href="mailto:pkotewar45@gmail.com" className="hover:text-white transition-colors">pkotewar45@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            <p>© 2026 Kotevia Infra & Tech Solutions Private Limited.</p>
            <p className="mt-1 text-xs">CIN: U43222MH2025PTC460829</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
