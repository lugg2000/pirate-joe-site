import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Pirate Joe",
  description:
    "How piratejoeadventures.com collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--navy)]">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,60,120,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,40,100,0.3) 0%, transparent 40%), linear-gradient(180deg, #0a1628 0%, #1a2744 40%, #0d3060 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <div className="mb-10 text-center">
          <div className="mb-2 text-[1.4rem] tracking-[0.5rem] opacity-70">
            ☠ ⚓ ☠
          </div>
          <h1 className="font-heading mb-2 text-[clamp(1.6rem,5vw,2.4rem)] leading-tight text-[var(--gold-light)] [text-shadow:0_0_30px_rgba(200,150,12,0.5),2px_2px_0_rgba(0,0,0,0.8)]">
            Privacy Policy
          </h1>
          <p className="font-label text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(244,228,193,0.5)]">
            Last updated: {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        </div>

        <div className="space-y-8 rounded-lg bg-[linear-gradient(160deg,rgba(244,228,193,0.97),rgba(232,213,163,0.95))] p-6 text-[var(--ink)] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(200,150,12,0.3)] sm:p-10">
          <p className="text-[1.05rem] leading-relaxed">
            This page explains what information piratejoeadventures.com
            collects, why, and what your choices are. It&apos;s written in
            plain language on purpose — if anything here is unclear, get in
            touch and we&apos;ll happily explain further.
          </p>

          <section>
            <h2 className="font-heading mb-2 text-[1.2rem] text-[var(--navy)]">
              What we collect
            </h2>
            <p className="leading-relaxed">
              If you sign up to the mailing list (the &ldquo;Join the
              Crew&rdquo; form), we collect the email address you provide.
              That&apos;s the only personal information this site asks you
              for. We don&apos;t use tracking cookies, and the Crew Quiz
              doesn&apos;t collect or store anything about your answers — it
              all runs in your browser and is forgotten as soon as you close
              the tab.
            </p>
          </section>

          <section>
            <h2 className="font-heading mb-2 text-[1.2rem] text-[var(--navy)]">
              How we use it
            </h2>
            <p className="leading-relaxed">
              Your email address is used only to send you updates about the
              Pirate Joe series — things like new book releases, events, or
              occasional news. We don&apos;t send regular newsletters, and we
              don&apos;t sell, rent, or share your email address with anyone
              for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-heading mb-2 text-[1.2rem] text-[var(--navy)]">
              Where it&apos;s stored
            </h2>
            <p className="leading-relaxed">
              Email addresses submitted through the mailing list form are
              stored by{" "}
              <a
                href="https://emailoctopus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--gold)] underline-offset-2 hover:text-[var(--wood)]"
              >
                EmailOctopus
              </a>
              , the email service provider we use to manage the mailing
              list. EmailOctopus is responsible for the security of their
              own systems; we&apos;re responsible for being clear with you
              about what we collect and why, which is what this page is for.
              This website itself is hosted on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--gold)] underline-offset-2 hover:text-[var(--wood)]"
              >
                Vercel
              </a>
              , which may collect basic technical information (like general
              location and browser type) as part of standard web hosting —
              this is not linked to your email address or used for
              marketing.
            </p>
          </section>

          <section>
            <h2 className="font-heading mb-2 text-[1.2rem] text-[var(--navy)]">
              Your choices
            </h2>
            <p className="leading-relaxed">
              Every email we send includes an unsubscribe link — using it
              removes you from the list immediately. You can also email{" "}
              <a
                href="mailto:Mark.lugg@outlook.com"
                className="underline decoration-[var(--gold)] underline-offset-2 hover:text-[var(--wood)]"
              >
                Mark.lugg@outlook.com
              </a>{" "}
              at any time to ask what information we hold about you, or to
              have it deleted.
            </p>
          </section>

          <section>
            <h2 className="font-heading mb-2 text-[1.2rem] text-[var(--navy)]">
              Questions
            </h2>
            <p className="leading-relaxed">
              If anything on this page is unclear, or you&apos;d like to ask
              about how your information is handled, please reach out at{" "}
              <a
                href="mailto:Mark.lugg@outlook.com"
                className="underline decoration-[var(--gold)] underline-offset-2 hover:text-[var(--wood)]"
              >
                Mark.lugg@outlook.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="font-label text-[0.85rem] uppercase tracking-[0.1em] text-[var(--gold-light)] transition-colors hover:underline"
          >
            ← Back to Pirate Joe
          </Link>
        </div>
      </div>
    </div>
  );
}
