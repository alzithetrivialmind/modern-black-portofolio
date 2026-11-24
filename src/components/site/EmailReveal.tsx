import { useState } from "react";
import { profile } from "@/data/portfolio";

/**
 * Keeps the address out of the served HTML. It is decoded only on click,
 * which shows it and opens the visitor's mail app.
 */
export function EmailReveal({ label, className = "" }: { label: string; className?: string }) {
  const [email, setEmail] = useState<string | null>(null);

  if (email) {
    return (
      <a href={`mailto:${email}`} className={`break-all ${className}`}>
        {email}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`cursor-pointer ${className}`}
      onClick={() => {
        const address = atob(profile.emailEncoded);
        setEmail(address);
        window.location.href = `mailto:${address}`;
      }}
    >
      {label}
    </button>
  );
}
