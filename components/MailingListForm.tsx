"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function MailingListForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <p className="font-label rounded border border-[var(--green)] bg-[rgba(26,92,42,0.08)] px-4 py-3 text-[0.95rem] text-[var(--green)]">
        ⚓ You&apos;re aboard. Check your inbox to confirm.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-2 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading"}
          className="flex-1 rounded-[3px] border-2 border-[var(--wood-light)] bg-white px-5 py-3.5 text-[1rem] text-[var(--ink)] focus:border-[var(--gold)] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="font-label rounded-[3px] bg-gradient-to-br from-[var(--red)] to-[#a02020] px-6 py-3.5 text-[0.9rem] font-bold uppercase tracking-[0.1em] text-[var(--parchment)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "loading" ? "Signing Up…" : "Sign Up"}
        </button>
      </div>
      {status === "error" && (
        <p className="mb-2 text-[0.85rem] text-[var(--red)]">{errorMessage}</p>
      )}
      <p className="text-[0.85rem] italic text-[var(--wood-light-text)]">
        No spam. No weekly newsletters. Just the things worth knowing. See
        our{" "}
        <Link href="/privacy" className="underline hover:text-[var(--wood)]">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
