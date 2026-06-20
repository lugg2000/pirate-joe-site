import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="the-book"
      className="relative grid min-h-[88vh] overflow-hidden bg-[linear-gradient(160deg,#0a1628_0%,#1a2744_45%,#0d3060_100%)] md:grid-cols-2"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(200,150,12,0.08) 0%, transparent 60%), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.01) 40px, rgba(255,255,255,0.01) 80px)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
        <div className="font-label mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(200,150,12,0.4)] bg-[rgba(255,255,255,0.05)] px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.1em] text-[var(--gold-light)]">
          ⚓ Ages 9–14 · And the adults who steal it from them
        </div>

        <div className="font-label mb-3 flex items-center gap-3 text-[0.75rem] uppercase tracking-[0.2em] text-[var(--gold)]">
          <span className="h-px max-w-10 flex-1 bg-gradient-to-r from-transparent to-[var(--gold)]" />
          Book One
          <span className="h-px max-w-10 flex-1 bg-gradient-to-l from-transparent to-[var(--gold)]" />
        </div>

        <h1 className="font-heading mb-2 text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.15] text-[var(--gold-light)] [text-shadow:0_0_40px_rgba(200,150,12,0.3)]">
          Pirate Joe: An Adventure
          <br />
          in Business
        </h1>

        <p className="font-label mb-8 text-[clamp(1.2rem,2.5vw,1.7rem)] font-semibold tracking-wide text-[var(--parchment)]">
          — Learning the Ropes
        </p>

        <p className="mb-3 max-w-xl text-[1.3rem] italic leading-relaxed text-[var(--parchment)]">
          The pirate adventure that adults keep reading for themselves.
        </p>
        <p className="mb-10 max-w-lg text-[1rem] leading-relaxed text-[rgba(244,228,193,0.65)]">
          A crew of characters who&apos;ll feel suspiciously familiar. A story about
          risk, leadership, and finding the right people. Hidden inside a
          genuinely brilliant adventure.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#the-book"
            className="font-label rounded-[4px] border-2 border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-[var(--red)] to-[#a02020] px-8 py-3.5 text-[0.95rem] font-bold uppercase tracking-[0.12em] text-[var(--parchment)] shadow-[0_4px_15px_rgba(139,26,26,0.4)] transition-transform hover:-translate-y-0.5"
          >
            ⚓ Get the Book
          </Link>
          <Link
            href="/quiz"
            className="font-label rounded-[4px] border border-[rgba(200,150,12,0.5)] px-8 py-3.5 text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold-light)] transition-colors hover:bg-[rgba(255,255,255,0.05)]"
          >
            Find Your Crew Role →
          </Link>
        </div>
      </div>

      <div className="relative hidden items-center justify-center p-12 md:flex">
        <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden rounded-md shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-2 ring-[var(--gold)]">
          <Image
            src="/images/book-cover.png"
            alt="Pirate Joe: An Adventure in Business — Learning the Ropes, book cover"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 400px, 0px"
          />
        </div>
      </div>
    </section>
  );
}
