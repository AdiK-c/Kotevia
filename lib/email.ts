import nodemailer from "nodemailer";

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    // Check if real credentials are provided
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    let transporter;

    if (user && pass) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user,
          pass,
        },
      });
    } else {
      // If no credentials, use ethereal email for testing
      console.warn("SMTP credentials missing. Using Ethereal Email for testing.");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const info = await transporter.sendMail({
      from: `"Kotevia Solar Solutions" <${process.env.SMTP_USER || "no-reply@koteviasolar.com"}>`,
      to,
      subject,
      html,
    });

    console.log("Message sent: %s", info.messageId);
    
    // Preview URL will only be available when using ethereal email
    if (!user) {
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
