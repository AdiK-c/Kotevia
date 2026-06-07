import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, default: "Homeowner" },
  text: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  approved: { type: Boolean, default: false } // Admin can approve this
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
