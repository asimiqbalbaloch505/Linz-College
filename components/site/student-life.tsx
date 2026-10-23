import Image from 'next/image'
import { ArrowRight, Bus, Coffee, Dumbbell, ExternalLink, HeartPulse, ShieldCheck, SquareParking, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const CARDS = [
  { icon: Users, tag: 'Student Support', title: 'Counseling & Guidance', text: 'Academic and career counseling to help students plan their path with confidence.', color: 'text-teal-light', bg: 'bg-teal-light/15' },
  { icon: Dumbbell, tag: 'Wellness', title: 'Sports & Fitness', text: 'Cricket, football, badminton, basketball and indoor games for every age group.', color: 'text-emerald-400', bg: 'bg-emerald-400/15' },
  { icon: HeartPulse, tag: 'Health & Care', title: 'Medical Room', text: 'On-campus first-aid and a qualified nurse supporting student wellbeing.', color: 'text-rose-400', bg: 'bg-rose-400/20' },
  { icon: Coffee, tag: 'Campus Services', title: 'Cafeteria', text: 'Hygienic, healthy meals and snacks in a clean and friendly space.', color: 'text-gold', bg: 'bg-gold/20' },
]

const QUICK = [
  { icon: Users, label: 'Clubs & Societies' },
  { icon: Bus, label: 'Transport' },
  { icon: SquareParking, label: 'Parent Parking' },
  { icon: ShieldCheck, label: 'Campus Safety' },
]

export function StudentLife() {
  return (
    <section aria-labelledby="life-title" className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="life-title"
          dark
          eyebrow="Student Experience"
          title="Life Beyond"
          highlight="the Classroom"
          description="From sports and clubs to wellness and student services, Linz offers an environment where students learn, connect, grow and make lasting memories."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[26rem] overflow-hidden rounded-3xl border border-white/10">
            <Image src="/images/campus-building.png" alt="Linz School and College academic block" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Linz Campus</p>
              <h3 className="mt-2 text-balance text-2xl font-bold text-white md:text-3xl">A Campus Built for Your Experience</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/80">
                A safe community, modern facilities and opportunities that make school life meaningful beyond academics.
              </p>
              <a href="#" className="mt-5 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 font-heading font-bold text-navy hover:bg-gold">
                Explore Campus Life <ArrowRight className="size-5" />
              </a>
            </div>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {CARDS.map(({ icon: Icon, ...c }) => (
              <li key={c.title}>
                <a href="#" className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-gold/60 hover:bg-white/10">
                  <span className={cn('flex size-12 items-center justify-center rounded-xl', c.bg, c.color)}>
                    <Icon className="size-5" />
                  </span>
                  <p className={cn('mt-6 text-sm font-bold uppercase tracking-[0.15em]', c.color)}>{c.tag}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-3 pr-6 leading-relaxed text-white/65">{c.text}</p>
                  <ExternalLink className="absolute bottom-6 right-6 size-4 text-white/40 group-hover:text-gold" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map(({ icon: Icon, label }) => (
            <li key={label}>
              <a href="#" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-heading font-bold text-white/85 transition-colors hover:bg-white/10">
                <span className="flex items-center gap-3">
                  <Icon className="size-5 text-teal-light" />
                  {label}
                </span>
                <ArrowRight className="size-4 text-white/40" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
