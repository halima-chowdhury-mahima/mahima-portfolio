
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  deadline?: string;
  details?: string;
  website?: string;
};

declare global {
  // Reuse the MongoDB connection during development hot reloads.
  // eslint-disable-next-line no-var
  var _portfolioMongoPromise: Promise<MongoClient> | undefined;
}

function clean(value: unknown, maxLength = 200): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

async function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!global._portfolioMongoPromise) {
    const client = new MongoClient(uri);
    global._portfolioMongoPromise = client.connect();
  }

  return global._portfolioMongoPromise;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    // Honeypot: ignore automated submissions that fill this hidden field.
    if (clean(payload.website, 200)) {
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    const name = clean(payload.name, 100);
    const email = clean(payload.email, 254).toLowerCase();
    const company = clean(payload.company, 150);
    const service = clean(payload.service, 100);
    const budget = clean(payload.budget, 50);
    const deadline = clean(payload.deadline, 30);
    const details = clean(payload.details, 5000);

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !validEmail || !service || !budget || details.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields correctly.",
        },
        { status: 400 }
      );
    }

    // Save the inquiry before attempting email delivery.
    const client = await getMongoClient();
    const database = client.db("portfolio");
    const collection = database.collection("contact_inquiries");

    const result = await collection.insertOne({
      name,
      email,
      company,
      service,
      budget,
      deadline: deadline || null,
      details,
      createdAt: new Date(),
      status: "new",
    });

    // Database saving is successful even if email delivery is unavailable.
    const apiKey = process.env.RESEND_API_KEY;
    const recipient =
      process.env.CONTACT_EMAIL || "mahihalima14@gmail.com";
    const from =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json({
        success: true,
        emailSent: false,
        message:
          "Your inquiry was saved, but email notification is not configured yet.",
        inquiryId: result.insertedId.toString(),
      });
    }

    const resend = new Resend(apiKey);

    const emailResult = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: email,
      subject: `New portfolio inquiry: ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.7;color:#172033;max-width:650px;margin:auto">
          <h2 style="color:#b68a35">New Portfolio Inquiry</h2>
          <p>You received a new message through your portfolio contact form.</p>
          <hr />
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
          <p><strong>Deadline:</strong> ${escapeHtml(deadline || "Not provided")}</p>
          <p><strong>Project details:</strong></p>
          <p style="white-space:pre-wrap">${escapeHtml(details)}</p>
          <hr />
          <p style="font-size:12px;color:#64748b">
            Inquiry ID: ${result.insertedId.toString()}
          </p>
        </div>
      `,
    });

    if (emailResult.error) {
      // The inquiry is already saved, so don't report that saving failed.
      console.error("Contact notification email failed:", emailResult.error);

      return NextResponse.json({
        success: true,
        emailSent: false,
        message:
          "Your inquiry was saved, but the email notification could not be sent. Please try again later if needed.",
        inquiryId: result.insertedId.toString(),
      });
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      message: "Your inquiry was sent successfully!",
      inquiryId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't process your inquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
