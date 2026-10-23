import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'

const STATS = [
  { value: '3,500+', label: 'Students Enrolled' },
  { value: '180+', label: 'Qualified Teachers' },
  { value: '12', label: 'Academic Programs' },
  { value: '25+', label: 'Years of Excellence' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
      <Image
        src="/images/hero.png"
        alt="Linz School and College main campus building"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30"
      />

      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-36 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur sm:text-sm">
            <span aria-hidden="true" className="size-2 rounded-full bg-gold" />
            Linz School and College
          </p>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Nurturing <span className="text-teal-light">Young Minds</span>{' '}
            <br className="hidden sm:block" />
            Where Learning <br className="hidden sm:block" />
            <span className="text-gold">Shapes the Future.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
            From Primary to FSc and A-Levels, discover a caring academic community where strong values,
            modern teaching and co-curricular activities shape the leaders of tomorrow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#admissions"
              className="inline-flex items-center gap-3 rounded-xl bg-gold px-6 py-3.5 font-heading font-bold text-navy shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Apply Now <ArrowRight className="size-5" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 font-heading font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Explore Programs <ArrowDown className="size-5" />
            </a>
          </div>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-gold/70 pl-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-3xl font-bold text-white">{s.value}</dd>
              <dd className="mt-1 text-sm text-white/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
