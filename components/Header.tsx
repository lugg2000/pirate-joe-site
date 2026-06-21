"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#the-book", label: "The Book" },
  { href: "#crew", label: "Meet the Crew" },
  { href: "/quiz", label: "Crew Quiz" },
  { href: "#engagements", label: "Engagements" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--navy)] shadow-[0_2px_20px_rgba(0,0,0,0.4)] border-b-2 border-[var(--gold)]">
      <div className="flex items-center justify-between gap-6 px-6 py-4 md:px-10">
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

        {/* Mobile: quiz + buy stay visible, everything else lives behind the menu button */}
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
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded border border-[rgba(200,150,12,0.4)]"
          >
            <span
              className={`block h-[2px] w-4 bg-[var(--gold-light)] transition-transform ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-[var(--gold-light)] transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-[var(--gold-light)] transition-transform ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-[rgba(200,150,12,0.3)] bg-[var(--navy)] px-6 py-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-label rounded px-2 py-3 text-[0.8rem] uppercase tracking-[0.1em] text-[var(--parchment-dark)] transition-colors hover:bg-[rgba(200,150,12,0.08)] hover:text-[var(--gold-light)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
