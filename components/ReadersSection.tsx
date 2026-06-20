const readers = [
  {
    icon: "🧒",
    title: "For Young Readers (9–14)",
    text: "A genuine adventure. A crew you'll want to join. A captain making decisions you'd probably make differently — and occasionally being right for exactly the wrong reasons.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "For Parents",
    text: "A book your child will actually read — and that will quietly teach them how organisations, teams, risk and decisions actually work. You'll probably read it too. You'll claim you were checking it first.",
  },
  {
    icon: "💼",
    title: "For Business Readers",
    text: "\"I know a Bob.\" \"We've worked with a Mike.\" \"Jane is our whole HR team.\" The book that accidentally explains your entire career, wrapped in a pirate adventure. Perfect for the person who has everything.",
  },
];

export default function ReadersSection() {
  return (
    <section className="bg-[var(--parchment)] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-2 text-[2rem] text-[var(--navy)]">
            For Every Reader
          </h2>
          <div className="mx-auto my-4 h-0.5 w-20 bg-[var(--gold)]" />
          <p className="mx-auto max-w-xl text-[1.1rem] leading-relaxed text-[var(--wood)]">
            Three very different reasons to read the same book.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {readers.map((r) => (
            <div
              key={r.title}
              className="rounded border border-[rgba(92,58,30,0.15)] bg-[rgba(255,255,255,0.5)] p-6 text-center"
            >
              <span className="mb-3 block text-[2.2rem]">{r.icon}</span>
              <div className="font-label mb-2 text-[1rem] font-semibold text-[var(--navy)]">
                {r.title}
              </div>
              <p className="text-[0.95rem] leading-relaxed text-[var(--wood)]">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
