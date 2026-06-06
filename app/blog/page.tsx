import Link from "next/link";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const blogPosts = [
  {
    id: "solar-subsidies-maharashtra-2026",
    title: "Guide to Solar Subsidies in Maharashtra (2026)",
    excerpt: "Learn how you can save up to 40% on your residential solar installation through the latest state and central government subsidies available for homeowners in Vidarbha.",
    date: "June 2, 2026",
    category: "Subsidies",
  },
  {
    id: "solar-roi-vidarbha",
    title: "Calculating Solar ROI in Nagpur and Wardha",
    excerpt: "Wondering how long it takes to recover your investment? We break down the average electricity costs in Vidarbha and show you the real ROI of a 5kW system.",
    date: "May 15, 2026",
    category: "Financials",
  },
  {
    id: "residential-vs-commercial-solar",
    title: "Residential vs. Commercial Solar: What's the Difference?",
    excerpt: "While the underlying technology is the same, the implementation, tax benefits, and scale differ vastly. Here is a comprehensive comparison.",
    date: "April 28, 2026",
    category: "Education",
  },
  {
    id: "solar-maintenance-tips",
    title: "5 Tips to Keep Your Solar Panels Efficient Before the Monsoon",
    excerpt: "Vidarbha monsoons can be heavy. Ensure your panels are clean, wiring is secure, and system is ready to handle the rainy season effectively.",
    date: "April 10, 2026",
    category: "Maintenance",
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Solar Resources & Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expert insights, guides, and updates on solar energy specifically tailored for the Vidarbha region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 w-full flex items-center justify-center">
                 <span className="text-gray-400 font-medium">[{post.category} Image]</span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-black bg-gray-100 px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-2" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-black mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-gray-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-black hover:text-gray-600 transition-colors"
                >
                  Read Article <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
