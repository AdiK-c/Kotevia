import Link from "next/link";
import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";

const fallbackTestimonials = [
  { name: "Ramesh Deshmukh", location: "Wardha", role: "Homeowner", text: "We installed a 5kW system and our electricity bill dropped from ₹4,500 to just ₹300. The team was professional and completed the job in one day. Highly recommended!", rating: 5 },
  { name: "Aditya Woods", location: "Wardha", role: "Business Owner", text: "Our factory's power cost was huge. Kotevia Solar Solutions installed a 50kW commercial system — the ROI has been outstanding. We'll recover the cost in 4 years.", rating: 5 },
  { name: "Suresh Kolhe", location: "Yavatmal", role: "Farmer", text: "The solar pump system has transformed our irrigation. No more diesel costs, no power cuts. The government subsidy was also handled by their team — zero hassle.", rating: 5 },
];

async function getReviews() {
  try {
    await dbConnect();
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 }).limit(6).lean();
    return reviews.length > 0 ? reviews : fallbackTestimonials;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return fallbackTestimonials;
  }
}

export default async function Testimonials() {
  const reviews = await getReviews();

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3 block">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">What Our Customers Say</h2>
          </div>
          <Link href="/write-review" className="bg-white text-gray-900 border border-gray-200 font-bold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-gray-50 hover:-translate-y-0.5 transition-all shrink-0">
            Write a Review
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((t: any) => (
            <div key={t._id?.toString() || t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xl ${i < t.rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-600 shrink-0">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-extrabold text-gray-900">{t.name}</div>
                  <div className="text-gray-500 text-sm font-medium">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
