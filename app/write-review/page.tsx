"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiStar, FiArrowRight, FiCheckCircle } from "react-icons/fi";

type ReviewData = {
  name: string;
  location: string;
  role: string;
  rating: number;
  text: string;
};

export default function WriteReviewPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReviewData>({
    defaultValues: { role: "Homeowner" }
  });

  const onSubmit = async (data: ReviewData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rating }),
      });
      
      if (res.ok) {
        setSubmitted(true);
        reset();
        window.scrollTo(0, 0);
      } else {
        alert("Failed to submit review. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-sm text-center border border-gray-100">
          <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            Your review has been successfully submitted. We deeply appreciate your feedback and support!
          </p>
          <a href="/" className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-3 block">Customer Feedback</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Write a Review</h1>
          <p className="text-gray-600 text-lg">Share your solar experience with the Kotevia team.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Rating Selector */}
            <div className="mb-8 text-center">
              <label className="block text-sm font-bold text-gray-700 mb-4">How would you rate your experience?</label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <FiStar 
                      className={`text-4xl ${(hoveredRating || rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all outline-none"
                  placeholder="e.g. Ramesh Deshmukh"
                />
                {errors.name && <p className="text-red-500 text-xs font-bold mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">City/Location *</label>
                <input
                  {...register("location", { required: "Location is required" })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all outline-none"
                  placeholder="e.g. Wardha"
                />
                {errors.location && <p className="text-red-500 text-xs font-bold mt-1">{errors.location.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Who are you? (Role)</label>
              <select
                {...register("role")}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all outline-none"
              >
                <option value="Homeowner">Homeowner</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Farmer">Farmer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Your Review *</label>
              <textarea
                {...register("text", { required: "Please write a review", minLength: { value: 10, message: "Review is too short" } })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all outline-none"
                placeholder="Tell us about the installation, the savings, and the team's service..."
                rows={5}
              />
              {errors.text && <p className="text-red-500 text-xs font-bold mt-1">{errors.text.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all disabled:opacity-60 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5"
            >
              {loading ? "Submitting..." : (<>Submit Review <FiArrowRight /></>)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
