import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    
    // Automatically approve for now, or you can change to false to require admin approval
    const reviewData = {
      ...data,
      approved: true 
    };

    const review = await Review.create(reviewData);
    return NextResponse.json({ success: true, review });
  } catch (error) {
    console.error("Failed to submit review:", error);
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}
