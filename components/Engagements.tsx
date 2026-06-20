const engagements = [
  {
    icon: "🏫",
    title: "School Visits",
    text: "A talk for students about entrepreneurship, teamwork and leadership, using the book and crew cards as a starting point. Suitable for enterprise days, careers events, or business and English classes.",
  },
  {
    icon: "🎤",
    title: "Business & Leadership Events",
    text: "A talk about building the right team, the business concepts behind the series, and what a children's pirate adventure can teach us about how organisations actually work.",
  },
  {
    icon: "📚",
    title: "Educational Workshops",
    text: "Working with teachers or enterprise coordinators to use the book, crew cards and tracker as a classroom resource for teamwork, communication and business thinking.",
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="bg-[var(--navy-mid)] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-2 text-[2rem] text-[var(--gold-light)]">
            Bring Pirate Joe
            <br />
            to Your World
          </h2>
          <div className="mx-auto my-4 h-0.5 w-20 bg-[var(--gold)]" />
          <p className="mx-auto max-w-xl text-[1.1rem] leading-relaxed text-[var(--parchment-dark)]">
            The ideas behind the book didn&apos;t come from a textbook. They came
            from years of watching businesses succeed and fail. Get in touch
            if you&apos;d like to bring that into your school, event, or
            organisation.
          </p>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {engagements.map((e) => (
            <div
              key={e.title}
              className="rounded border border-[rgba(200,150,12,0.25)] bg-[rgba(255,255,255,0.06)] p-7 transition-colors hover:border-[var(--gold)] hover:bg-[rgba(255,255,255,0.1)]"
            >
              <span className="mb-3 block text-[2rem]">{e.icon}</span>
              <div className="font-label mb-2 text-[0.85rem] font-bold uppercase tracking-[0.08em] text-[var(--gold-light)]">
                {e.title}
              </div>
              <p className="text-[0.9rem] leading-relaxed text-[rgba(244,228,193,0.65)]">
                {e.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-lg text-center">
          <p className="mb-6 text-[1rem] leading-relaxed text-[var(--parchment-dark)]">
            If any of this sounds like something your school or organisation
            would benefit from, get in touch. The first conversation is
            always just a conversation.
          </p>
          <a
            href="mailto:hello@piratejoeadventures.com"
            className="font-label inline-block rounded border border-[rgba(200,150,12,0.5)] px-8 py-3 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold-light)] transition-colors hover:bg-[rgba(255,255,255,0.05)]"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
