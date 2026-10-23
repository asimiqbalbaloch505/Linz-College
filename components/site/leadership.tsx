import Image from 'next/image'
import { ArrowRight, Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const LEADERS = [
  {
    badge: 'Message from Principal',
    name: 'Prof. Muhammad Aslam',
    role: 'Principal',
    heading: 'Message from the Principal',
    text: 'At Linz, we believe every child carries a unique spark. Our mission is to nurture that potential through quality teaching, strong moral values and an environment where curiosity is celebrated and…',
    image: '/images/principal.png',
    light: false,
  },
  {
    badge: 'Message from Vice Principal',
    name: 'Mrs. Ayesha Siddiqui',
    role: 'Vice Principal',
    heading: 'Message from the Vice Principal',
    text: 'Our dedicated faculty works closely with parents to ensure every student learns, grows and succeeds. We are proud of our consistent board results and the confident young people who graduate from…',
    image: '/images/vice-principal.png',
    light: true,
  },
]

export function Leadership() {
  return (
    <section aria-labelledby="leaders-title" className="bg-gradient-to-br from-navy to-navy-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="leaders-title"
          dark
          eyebrow="School Leadership"
          title="Inspiring Excellence,"
          highlight="Leading the Future"
          description="Hear from the leadership guiding Linz School and College towards academic excellence, character building and a brighter future."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LEADERS.map((l) => (
            <article
              key={l.name}
              className={cn(
                'flex flex-col overflow-hidden rounded-3xl border',
                l.light ? 'border-white bg-[#f2f8f9]' : 'border-white/10 bg-white/5',
              )}
            >
              <div className="relative aspect-[16/8.5]">
                <Image src={l.image} alt={`${l.name}, ${l.role}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className={cn('absolute left-4 top-4 rounded-md px-3 py-1 text-sm font-bold tracking-wide text-navy', l.light ? 'bg-teal-light' : 'bg-gold')}>
                  {l.badge}
                </span>
                <div className="absolute bottom-4 left-5">
                  <p className="font-heading text-lg font-bold text-white">{l.name}</p>
                  <p className="text-sm text-white/80">{l.role}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className={cn('flex items-center justify-between border-b pb-4', l.light ? 'border-border' : 'border-white/10')}>
                  <h3 className={cn('font-heading text-sm font-bold uppercase tracking-[0.15em]', l.light ? 'text-teal' : 'text-gold')}>
                    {l.heading}
                  </h3>
                  <span className={cn('flex size-9 items-center justify-center rounded-lg', l.light ? 'bg-secondary text-teal' : 'bg-white/10 text-gold')}>
                    <Quote className="size-4" />
                  </span>
                </div>
                <p className={cn('mt-5 flex-1 leading-relaxed', l.light ? 'text-muted-foreground' : 'text-white/75')}>{l.text}</p>
                <a href="#" className={cn('mt-6 inline-flex items-center gap-2 font-heading font-bold', l.light ? 'text-teal' : 'text-gold')}>
                  Read Full Message <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
