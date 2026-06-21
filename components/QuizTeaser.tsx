import Link from "next/link";
import { crewList } from "@/lib/crew";

export default function QuizTeaser() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-mid)] px-6 py-16 text-center md:px-12 md:py-20">
      <div className="relative z-10 mx-auto max-w-xl">
        <h2 className="font-heading mb-2 text-[2rem] text-[var(--gold-light)]">
          Which Crew Member Are You?
        </h2>
        <div className="mx-auto my-4 h-0.5 w-20 bg-[var(--gold)]" />
        <p className="mb-8 text-[1.1rem] leading-relaxed text-[var(--parchment-dark)]">
          Nine questions about how you work, make decisions, and respond
          under pressure. Your crew role awaits.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {crewList.map((member) => (
            <span
              key={member.key}
              className="font-label rounded-full border border-[rgba(200,150,12,0.4)] bg-[rgba(255,255,255,0.08)] px-3 py-1.5 text-[0.7rem] tracking-wide text-[var(--gold-light)]"
            >
              {member.emoji} {member.name}
            </span>
          ))}
        </div>

        <Link
          href="/quiz"
          className="font-label inline-block rounded-[4px] border-2 border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-[var(--red)] to-[#a02020] px-8 py-3.5 text-[1rem] font-bold uppercase tracking-[0.12em] text-[var(--parchment)] shadow-[0_4px_15px_rgba(139,26,26,0.4)] transition-transform hover:-translate-y-0.5"
        >
          ☠ Find Your Crew Role ☠
        </Link>

        <p className="mt-4 text-[0.85rem] italic text-[rgba(244,228,193,0.7)]">
          Takes about 3 minutes · Shareable results
        </p>
      </div>
    </section>
  );
}
