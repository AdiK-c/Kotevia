import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
      maxlength: [20, "Phone number cannot be more than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
    city: {
      type: String,
      required: [true, "Please provide a city"],
    },
    pincode: {
      type: String,
      required: [true, "Please provide a pincode"],
    },
    monthlyBill: {
      type: String,
      required: [true, "Please provide a monthly bill range"],
    },
    installationType: {
      type: String,
      required: [true, "Please provide an installation type"],
    },
    roofSize: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Lost"],
      default: "New",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
