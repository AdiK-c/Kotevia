import Link from "next/link";
import { FiCheckCircle, FiPhone, FiSearch, FiFileText, FiArrowRight } from "react-icons/fi";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <FiCheckCircle className="text-green-600 text-4xl" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-500 text-lg mb-12 max-w-lg mx-auto">
          Your inquiry has been received. Our team will contact you within <strong>24 hours</strong> to discuss your solar requirements.
        </p>

        {/* What Happens Next */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
          {[
            { icon: FiPhone, step: "01", title: "We Call You", desc: "Our solar expert will call you to understand your requirements in detail." },
            { icon: FiSearch, step: "02", title: "Site Survey", desc: "We schedule a free site visit to assess your roof and location." },
            { icon: FiFileText, step: "03", title: "Get Your Quote", desc: "Receive a detailed, custom quote with system size and savings estimate." },
          ].map((item) => (
            <div key={item.step} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <item.icon className="text-gray-700 text-xl mb-3" />
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Step {item.step}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded hover:bg-gray-800 transition-colors">
            Back to Home <FiArrowRight />
          </Link>
          <a href="https://wa.me/919130910564" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded hover:border-black transition-colors">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
