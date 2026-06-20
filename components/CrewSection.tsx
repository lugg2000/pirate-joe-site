import Image from "next/image";
import Link from "next/link";
import { crewList } from "@/lib/crew";

export default function CrewSection() {
  return (
    <section id="crew" className="bg-[var(--navy)] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-2 text-[2rem] text-[var(--gold-light)]">
            Meet the Crew
          </h2>
          <div className="mx-auto my-4 h-0.5 w-20 bg-[var(--gold)]" />
          <p className="mx-auto max-w-xl text-[1.1rem] leading-relaxed text-[var(--parchment-dark)]">
            You&apos;ll recognise all of them. You&apos;ve worked with most of them.
            You might be one of them.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {crewList.map((member) => (
            <div
              key={member.key}
              className="rounded border border-[rgba(200,150,12,0.3)] bg-[rgba(255,255,255,0.05)] p-4 transition-colors hover:border-[var(--gold)] hover:bg-[rgba(255,255,255,0.08)]"
            >
              <div className="relative mb-3 aspect-square w-full overflow-hidden rounded border border-[rgba(200,150,12,0.25)]">
                <Image
                  src={member.portrait}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                />
              </div>
              <div className="font-label text-[0.85rem] font-semibold text-[var(--gold-light)]">
                {member.name}
              </div>
              <div className="mt-1 text-[0.8rem] leading-snug text-[rgba(244,228,193,0.65)]">
                {member.role}
                <br />
                {member.tagline}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-[1.05rem] text-[var(--parchment-dark)]">
            Not sure which one you are? Nine questions. Honest answers.
          </p>
          <Link
            href="/quiz"
            className="font-label inline-block rounded border border-[rgba(200,150,12,0.5)] px-8 py-3 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold-light)] transition-colors hover:bg-[rgba(255,255,255,0.05)]"
          >
            Take the Crew Quiz →
          </Link>
        </div>
      </div>
    </section>
  );
}
