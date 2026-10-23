import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { SectionHeading } from './section-heading'

const NEWS = [
  { date: '02 September 2026', title: 'Linz Students Win Inter-School Science Fair 2026', text: 'Our FSc students secured first place with an innovative renewable energy project.', image: '/images/news-1.png' },
  { date: '07 October 2026', title: 'New Digital Library Inaugurated', text: 'A modern library with e-resources and quiet study zones is now open to all students.', image: '/images/news-2.png' },
  { date: '15 October 2026', title: 'Mid-Term Examinations Schedule Announced', text: 'Date sheets for Grades 6 to 12 are available on the parent portal.', image: '/images/news-3.png' },
]

const EVENTS = [
  { day: '31', month: 'Oct', tag: 'Parents & Teachers', title: 'Parent-Teacher Meeting', text: 'Discuss term progress with class teachers from 9:00 AM to 1:00 PM.' },
  { day: '14', month: 'Nov', tag: 'Co-Curricular', title: 'Annual Sports Week 2026', text: 'Five days of athletics, cricket, football and house competitions.' },
  { day: '12', month: 'Dec', tag: 'Celebration', title: 'Annual Prize Distribution', text: 'Honoring position holders and outstanding achievers of the year.' },
]

export function NewsEvents() {
  return (
    <section aria-labelledby="news-title" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="news-title"
          eyebrow="Campus Updates"
          title="What's Happening at"
          highlight="Linz"
          description="Stay connected with the latest announcements, achievements, activities and upcoming events."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="rounded-3xl border border-border bg-white p-6 md:p-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">Latest News</p>
                <h3 className="mt-1 text-2xl font-bold text-navy">News &amp; Updates</h3>
              </div>
              <a href="#" className="inline-flex items-center gap-2 font-heading font-bold text-teal">
                View All <ArrowRight className="size-4" />
              </a>
            </div>
            <ul className="mt-6 divide-y divide-border">
              {NEWS.map((n) => (
                <li key={n.title} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-xl sm:w-32">
                    <Image src={n.image} alt="" fill sizes="128px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 text-sm font-bold text-teal">
                      <CalendarDays className="size-4" /> {n.date}
                    </p>
                    <h4 className="mt-1 font-bold leading-snug text-navy">{n.title}</h4>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{n.text}</p>
                    <a href="#" className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-teal">
                      Read More <ArrowRight className="size-4" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-navy to-teal p-6 md:p-7">
            <span aria-hidden="true" className="absolute -right-16 -top-16 size-48 rounded-full border border-white/10" />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Mark Your Calendar</p>
                <h3 className="mt-1 text-2xl font-bold text-white">Upcoming Events</h3>
              </div>
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-gold">
                <CalendarDays className="size-5" />
              </span>
            </div>
            <ul className="mt-6 divide-y divide-white/10">
              {EVENTS.map((e) => (
                <li key={e.title}>
                  <a href="#" className="group flex items-center gap-4 py-5">
                    <span className="flex w-14 shrink-0 flex-col items-center rounded-xl border border-white/15 bg-white/10 py-2">
                      <span className="font-heading text-xl font-bold text-white">{e.day}</span>
                      <span className="text-sm font-bold text-gold">{e.month}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-teal-light">{e.tag}</span>
                      <span className="block font-heading font-bold text-white">{e.title}</span>
                      <span className="block text-sm text-white/65">{e.text}</span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
