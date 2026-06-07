import Link from "next/link";
import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";

export const dynamic = "force-dynamic";

async function getAllReviews() {
  try {
    await dbConnect();
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 }).lean();
    return reviews;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return [];
  }
}

export default async function ReviewsPage() {
  const reviews = await getAllReviews();

  return (
    <div className="pt-32 pb-24 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3 block">Real Experiences</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Customer Reviews</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            See what our clients across Vidarbha are saying about their solar journey with Kotevia Solar Solutions.
          </p>
          <Link href="/write-review" className="bg-black text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
            Write a Review
          </Link>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 font-medium text-lg">No reviews yet. Be the first to share your experience!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((t: any) => (
              <div key={t._id.toString()} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-xl ${i < t.rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-8 italic flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-600 shrink-0">
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900">{t.name}</div>
                    <div className="text-gray-500 text-sm font-medium">
                      {t.role} · {t.location}
                      <span className="block text-gray-400 text-xs mt-0.5">
                        {new Date(t.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
