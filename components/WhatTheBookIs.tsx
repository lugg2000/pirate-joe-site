const metaphors = [
  {
    icon: "🦈",
    title: "Sharks = Risk",
    text: "Two sharks on the broken ship. None on the suspicious one — more dangerous, not less. One honest shark on the right one.",
  },
  {
    icon: "🥃",
    title: "Rum = Morale & Culture",
    text: "More rum, happier crew. No rum, mutiny. Jane manages it deliberately. That's the whole job.",
  },
  {
    icon: "💣",
    title: "The Cannon = Continuous Improvement",
    text: "Starts at Version 1. Mike will never stop. Ian has structural concerns about every version. Both are right.",
  },
  {
    icon: "🪙",
    title: "Doubloons = Financial Reality",
    text: "Alan keeps the ledger. Nobody reads it until it matters. Then it matters enormously.",
  },
];

export default function WhatTheBookIs() {
  return (
    <section className="relative overflow-hidden bg-[var(--parchment)] px-6 py-16 before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-[linear-gradient(90deg,var(--navy),var(--gold),var(--navy))] md:px-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-2 text-[2rem] text-[var(--navy)]">
            Adventure First.
            <br />
            Intelligence Underneath.
          </h2>
          <div className="mx-auto my-4 h-0.5 w-20 bg-[var(--gold)]" />
          <p className="mx-auto max-w-xl text-[1.1rem] leading-relaxed text-[var(--wood)]">
            Pirate Joe isn&apos;t a business lesson. It&apos;s a story about a crew, a
            captain, and what it actually takes to build something from
            nothing.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-5 text-[1.1rem] leading-[1.9] text-[var(--ink)]">
            <p>
              Pirate Joe has big dreams and no plan. Starting with nothing
              more than a leaky dinghy and his oldest friend Bob, he sets out
              to become the greatest pirate on the seas.
            </p>
            <p>
              As he builds his crew — each member a different kind of person
              with a different way of seeing the world — Joe learns that
              bravery isn&apos;t enough. You need the right people. A process.
              Information you can trust. And someone keeping the ledger.
            </p>
            <p>
              Each chapter is a self-contained adventure. Each adventure
              teaches something real. The tracker at the end of every chapter
              shows exactly how the crew is doing — in doubloons, morale, rum
              level, and plunders successful and otherwise.
            </p>
            <p className="italic">
              Children read it as the best pirate story they&apos;ve ever found.
              Adults read it and recognise their entire career.
            </p>
          </div>

          <div className="rounded border-2 border-[var(--gold)] bg-[var(--navy)] p-8">
            <div className="font-label mb-5 text-[0.8rem] uppercase tracking-[0.15em] text-[var(--gold-light)]">
              ☠ The Hidden Engine
            </div>
            <div className="space-y-4">
              {metaphors.map((m, i) => (
                <div
                  key={m.title}
                  className={`flex gap-4 ${
                    i < metaphors.length - 1
                      ? "border-b border-[rgba(255,255,255,0.08)] pb-4"
                      : ""
                  }`}
                >
                  <div className="min-w-[28px] text-[1.4rem]">{m.icon}</div>
                  <div>
                    <strong className="font-label block text-[0.8rem] tracking-wide text-[var(--gold-light)]">
                      {m.title}
                    </strong>
                    <span className="text-[0.9rem] leading-relaxed text-[rgba(244,228,193,0.7)]">
                      {m.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
