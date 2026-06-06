import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const data = await req.json();
    const { name, phone, email, city, pincode, monthlyBill, installationType, roofSize, message } = data;

    // Validate required fields
    if (!name || !phone || !email || !city || !pincode || !monthlyBill || !installationType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to MongoDB
    const lead = new Lead({ name, phone, email, city, pincode, monthlyBill, installationType, roofSize, message });
    await lead.save();

    // Send Email notification via Nodemailer
    const emailHtml = `
      <h2>New Solar Inquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Pincode:</strong> ${pincode}</p>
      <p><strong>Monthly Bill:</strong> ${monthlyBill}</p>
      <p><strong>Type:</strong> ${installationType}</p>
      <p><strong>Roof Size:</strong> ${roofSize || 'N/A'}</p>
      <p><strong>Message:</strong> ${message || 'N/A'}</p>
    `;

    await sendEmail({
      to: process.env.ADMIN_EMAIL || "pkotewar45@gmail.com",
      subject: `New Inquiry from ${name} - ${city}`,
      html: emailHtml,
    });

    // TODO: Send WhatsApp notification
    // await sendWhatsApp({ to: process.env.ADMIN_WHATSAPP, message: `New lead: ${name} from ${city}` });

    console.log("New inquiry saved to DB and email sent:", { name, phone, email, city, installationType });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Inquiry API error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
