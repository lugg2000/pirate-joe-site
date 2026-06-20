import Link from "next/link";

const footerLinks = [
  { href: "#the-book", label: "The Book" },
  { href: "#crew", label: "Meet the Crew" },
  { href: "/quiz", label: "Crew Quiz" },
  { href: "#engagements", label: "Engagements" },
  { href: "mailto:Mark.lugg@outlook.com", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-[rgba(200,150,12,0.3)] bg-[#060e1c] px-6 py-10 text-center md:flex-row md:justify-between md:px-10 md:text-left">
      <div className="font-heading text-[0.9rem] text-[var(--gold-light)]">
        Pirate Joe
        <span className="font-label mt-1 block text-[0.7rem] font-normal uppercase tracking-[0.1em] text-[rgba(244,228,193,0.7)]">
          An Adventure in Business
        </span>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-label text-[0.7rem] uppercase tracking-[0.1em] text-[rgba(244,228,193,0.7)] transition-colors hover:text-[var(--gold-light)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-[0.75rem] text-[rgba(244,228,193,0.6)]">
        © {new Date().getFullYear()} Pirate Joe
      </div>
    </footer>
  );
}
