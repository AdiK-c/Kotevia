const testimonials = [
  { name: "Ramesh Deshmukh", location: "Wardha", role: "Homeowner", text: "We installed a 5kW system and our electricity bill dropped from ₹4,500 to just ₹300. The team was professional and completed the job in one day. Highly recommended!", rating: 5 },
  { name: "Aditya Woods", location: "Wardha", role: "Business Owner", text: "Our factory's power cost was huge. Kotevia Solar Solutions installed a 50kW commercial system — the ROI has been outstanding. We'll recover the cost in 4 years.", rating: 5 },
  { name: "Suresh Kolhe", location: "Yavatmal", role: "Farmer", text: "The solar pump system has transformed our irrigation. No more diesel costs, no power cuts. The government subsidy was also handled by their team — zero hassle.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Customer Stories</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
