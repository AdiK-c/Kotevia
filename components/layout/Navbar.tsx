"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Kotevia Solar Solutions Logo" width={56} height={56} className="object-contain rounded-full" priority />
          <span className="font-bold text-lg text-gray-900 hidden lg:block">Kotevia Solar Solutions</span>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-black text-white text-sm font-semibold py-2 px-5 rounded hover:bg-gray-800 transition-colors shrink-0">
            Get Free Quote
          </Link>
        </div>

        <button
          className="md:hidden text-gray-900 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block bg-black text-white text-sm font-semibold py-2 px-5 rounded"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
