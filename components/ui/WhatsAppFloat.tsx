import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919130910564"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
