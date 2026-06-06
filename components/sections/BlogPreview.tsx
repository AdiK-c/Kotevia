import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const recentPosts = [
  {
    id: "solar-subsidies-maharashtra-2026",
    title: "Guide to Solar Subsidies in Maharashtra (2026)",
    excerpt: "Learn how you can save up to 40% on your residential solar installation...",
    date: "June 2, 2026",
    category: "Subsidies",
  },
  {
    id: "solar-roi-vidarbha",
    title: "Calculating Solar ROI in Nagpur and Wardha",
    excerpt: "Wondering how long it takes to recover your investment? We break down the ROI...",
    date: "May 15, 2026",
    category: "Financials",
  },
  {
    id: "residential-vs-commercial-solar",
    title: "Residential vs. Commercial Solar: Differences",
    excerpt: "While the underlying technology is the same, the implementation differs vastly...",
    date: "April 28, 2026",
    category: "Education",
  }
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Resources & Articles</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Latest from our Blog</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center text-black font-semibold hover:text-gray-600 transition-colors">
            View All Posts <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 w-full flex items-center justify-center">
                <span className="text-gray-400 font-medium">[{post.category} Image]</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-black bg-gray-100 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center text-xs text-gray-500">
                    <FiCalendar className="mr-1" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-gray-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-sm text-black hover:text-gray-600 transition-colors"
                >
                  Read More <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-colors">
            View All Posts <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
