"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import SpecialOffers from "@/components/sections/SpecialOffers";

type FormData = {
  name: string;
  phone: string;
  email: string;
  city: string;
  pincode: string;
  monthlyBill: string;
  installationType: string;
  roofSize: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setSubmitted(true);
        window.location.href = "/thank-you";
      } else {
        const errorData = await res.json();
        alert(`Failed to submit: ${errorData.error || 'Server Error'}. Make sure your database is connected!`);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Get In Touch</span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-4">Get a Free Solar Quote</h1>
          <p className="text-gray-400 max-w-xl">
            Fill in your details and our team will contact you within 24 hours with a custom quote for your home or business.
          </p>
        </div>
      </section>

      <SpecialOffers />

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: FiPhone, label: "Phone", value: "+91 91309 10564", href: "tel:+919130910564" },
                  { icon: FiMail, label: "Email", value: "pkotewar45@gmail.com", href: "mailto:pkotewar45@gmail.com" },
                  { icon: FiMapPin, label: "Registered Office", value: "H.N 1050/31, Ward No 2 Deshmukh Wadi, Mahadeo Mandir, Pipri Meghe, Wardha, Maharashtra 442001", href: "#" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-gray-700" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.label}</div>
                      <a href={item.href} className="text-gray-800 text-sm hover:text-black">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                <p className="text-sm text-gray-500">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                <p className="text-sm text-gray-500">Sunday: Closed</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label>Full Name *</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Ramesh Deshmukh"
                    />
                    {errors.name && <p className="error-msg">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label>WhatsApp Number *</label>
                    <input
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: { value: /^[6-9]\d{9}$/, message: "Enter valid 10-digit mobile number" }
                      })}
                      placeholder="9130910564"
                      type="tel"
                    />
                    {errors.phone && <p className="error-msg">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label>Email Address *</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Enter valid email" }
                      })}
                      placeholder="ramesh@example.com"
                      type="email"
                    />
                    {errors.email && <p className="error-msg">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label>City *</label>
                    <select {...register("city", { required: "City is required" })}>
                      <option value="">Select your city</option>
                      <option>Wardha</option>
                      <option>Nagpur</option>
                      <option>Yavatmal</option>
                      <option>Chandrapur</option>
                      <option>Other (Vidarbha)</option>
                    </select>
                    {errors.city && <p className="error-msg">{errors.city.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label>Pincode *</label>
                    <input
                      {...register("pincode", { required: "Pincode is required" })}
                      placeholder="442001"
                    />
                    {errors.pincode && <p className="error-msg">{errors.pincode.message}</p>}
                  </div>
                  <div>
                    <label>Monthly Electricity Bill *</label>
                    <select {...register("monthlyBill", { required: "Please select bill range" })}>
                      <option value="">Select bill range</option>
                      <option>Less than ₹1,500</option>
                      <option>₹1,500 – ₹2,500</option>
                      <option>₹2,500 – ₹4,000</option>
                      <option>₹4,000 – ₹8,000</option>
                      <option>₹8,000 – ₹15,000</option>
                      <option>More than ₹15,000</option>
                    </select>
                    {errors.monthlyBill && <p className="error-msg">{errors.monthlyBill.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label>Type of Installation *</label>
                    <select {...register("installationType", { required: "Please select type" })}>
                      <option value="">Select type</option>
                      <option>Residential (Home)</option>
                      <option>Commercial (Office/Factory)</option>
                      <option>Industrial</option>
                      <option>Housing Society</option>
                      <option>Maintenance / AMC</option>
                    </select>
                    {errors.installationType && <p className="error-msg">{errors.installationType.message}</p>}
                  </div>
                  <div>
                    <label>Approximate Roof Size (sq ft)</label>
                    <input
                      {...register("roofSize")}
                      placeholder="e.g. 500"
                    />
                  </div>
                </div>

                <div>
                  <label>Additional Message (Optional)</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us anything specific about your requirements..."
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-60"
                >
                  {loading ? "Submitting..." : (<>Submit Enquiry <FiArrowRight /></>)}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Your details will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
