import MailingListForm from "./MailingListForm";

export default function JoinTheCrew() {
  return (
    <section className="bg-[var(--parchment)] px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-heading mb-2 text-[2rem] text-[var(--navy)]">
          Join the Crew
        </h2>
        <div className="mx-auto my-4 h-0.5 w-20 bg-[var(--gold)]" />
        <p className="mb-8 text-[1rem] leading-relaxed text-[var(--wood)]">
          Be the first to hear about new books, crew updates, and what&apos;s
          coming next. No noise — just the good stuff.
        </p>
        <MailingListForm />
      </div>
    </section>
  );
}
