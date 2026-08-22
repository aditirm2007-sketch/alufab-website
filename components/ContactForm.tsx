"use client";

import { useState, type FormEvent } from "react";
import { products, contact } from "@/lib/data";

const fieldClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-steel focus:border-blueprint focus:outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const subject = `New enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Project type: ${data.get("projectType")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-surface p-8">
        <h3 className="font-display text-lg font-bold text-ink">Thank you — we&rsquo;ve got it.</h3>
        <p className="mt-2 text-sm text-body">
          Your enquiry has been noted. The Alufab team will get back to you shortly at the number
          or email you shared.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className={fieldClass} />
        <input required name="phone" type="tel" placeholder="Phone number" className={fieldClass} />
      </div>
      <input required name="email" type="email" placeholder="Email address" className={fieldClass} />
      <select name="projectType" defaultValue="" className={fieldClass}>
        <option value="" disabled>
          Project type
        </option>
        {products.map((p) => (
          <option key={p.slug} value={p.title}>
            {p.title}
          </option>
        ))}
        <option value="other">Other / Not sure yet</option>
      </select>
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell us about your project"
        className={fieldClass}
      />
      <button
        type="submit"
        className="font-display mt-2 w-fit bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blueprint"
      >
        Send Enquiry
      </button>
    </form>
  );
}
