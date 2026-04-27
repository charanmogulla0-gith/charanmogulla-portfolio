"use server";

import { Resend } from "resend";
import { profile } from "@/lib/content";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = (formData.get("company") as string) || "";
  if (honeypot.trim() !== "") {
    return { status: "success" };
  }

  const name = ((formData.get("name") as string) || "").trim();
  const email = ((formData.get("email") as string) || "").trim();
  const message = ((formData.get("message") as string) || "").trim();

  if (!name || !email || !message) {
    return { status: "error", error: "All fields are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", error: "Please enter a valid email." };
  }
  if (message.length < 10) {
    return { status: "error", error: "Message is too short." };
  }
  if (message.length > 5000) {
    return { status: "error", error: "Message is too long." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      status: "error",
      error: "Email service is not configured. Please email directly.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [profile.email],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: [
        `From: ${name} <${email}>`,
        `Sent via charanmogulla-portfolio.vercel.app`,
        ``,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        error: "Could not send message. Please try again or email directly.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Contact form exception:", err);
    return {
      status: "error",
      error: "Could not send message. Please try again or email directly.",
    };
  }
}
