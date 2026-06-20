import Image from "next/image";

export default function SeriesTeaser() {
  return (
    <section className="border-t-2 border-[var(--gold)] bg-[#0a1628] px-6 py-14 text-center md:px-12">
      <h2 className="font-heading mb-8 text-[1.3rem] text-[var(--gold-light)]">
        The Series So Far
      </h2>

      <div className="flex flex-wrap items-start justify-center gap-10 md:gap-14">
        <div>
          <div className="relative mx-auto mb-3 h-[180px] w-[120px] overflow-hidden rounded-[3px] border-2 border-[var(--gold)] shadow-[0_8px_25px_rgba(0,0,0,0.4)]">
            <Image
              src="/images/book-cover.png"
              alt="Learning the Ropes book cover"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
          <div className="font-label text-[0.8rem] text-[var(--gold-light)]">
            Learning the Ropes
          </div>
          <div className="text-[0.75rem] italic text-[rgba(244,228,193,0.5)]">
            Book One · Out Now
          </div>
        </div>

        <div>
          <div className="mx-auto mb-3 flex h-[180px] w-[120px] items-center justify-center rounded-[3px] border-2 border-dashed border-[var(--gold)] bg-[var(--navy)] text-[2rem] opacity-50">
            ⚔️
          </div>
          <div className="font-label text-[0.8rem] text-[var(--gold-light)]">
            Book Two
          </div>
          <div className="text-[0.75rem] italic text-[rgba(244,228,193,0.5)]">
            Coming Soon
          </div>
        </div>

        <div>
          <div className="mx-auto mb-3 flex h-[180px] w-[120px] items-center justify-center rounded-[3px] border-2 border-dashed border-[var(--gold)] bg-[var(--navy)] text-[2rem] opacity-50">
            ?
          </div>
          <div className="font-label text-[0.8rem] text-[var(--gold-light)]">
            Book Three
          </div>
          <div className="text-[0.75rem] italic text-[rgba(244,228,193,0.5)]">
            The journey continues…
          </div>
        </div>
      </div>
    </section>
  );
}
