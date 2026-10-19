"use client";

import { type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  function openWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();
    if (!name || !email || !message) return;

    const text = `Hello Jeevodhayam Charitable Trust,\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.assign(`https://wa.me/917592823555?text=${encodeURIComponent(text)}`);
  }

  return (
    <form className="contact-form" onSubmit={openWhatsApp}>
      <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" placeholder="Your email address" /></label>
      <label>Message<textarea name="message" required placeholder="How can we help?" rows={4} /></label>
      <button className="button button-dark" type="submit">Continue to WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></button>
      <p className="contact-form-note">Opens WhatsApp with your message ready. Tap Send there to deliver it.</p>
    </form>
  );
}
