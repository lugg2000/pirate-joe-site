import Link from "next/link";

const navLinks = [
  { href: "#the-book", label: "The Book" },
  { href: "#crew", label: "Meet the Crew" },
  { href: "/quiz", label: "Crew Quiz" },
  { href: "#engagements", label: "Engagements" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-[var(--navy)] px-6 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.4)] border-b-2 border-[var(--gold)] md:px-10">
      <Link href="/" className="font-heading text-[1.05rem] leading-tight text-[var(--gold-light)] [text-shadow:0_0_20px_rgba(200,150,12,0.4)]">
        Pirate Joe
        <span className="font-label mt-1 block text-[0.7rem] font-normal uppercase tracking-[0.15em] text-[var(--parchment-dark)]">
          An Adventure in Business
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-label text-[0.75rem] uppercase tracking-[0.12em] text-[var(--parchment-dark)] transition-colors hover:text-[var(--gold-light)]"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#the-book"
          className="font-label rounded-[3px] bg-[var(--gold)] px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--navy)] transition-transform hover:-translate-y-0.5"
        >
          Buy the Book
        </Link>
      </nav>

      {/* Mobile: just the quiz + buy as compact links */}
      <div className="flex items-center gap-4 md:hidden">
        <Link
          href="/quiz"
          className="font-label text-[0.7rem] uppercase tracking-[0.1em] text-[var(--gold-light)]"
        >
          Quiz
        </Link>
        <Link
          href="#the-book"
          className="font-label rounded-[3px] bg-[var(--gold)] px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[var(--navy)]"
        >
          Buy
        </Link>
      </div>
    </header>
  );
}
