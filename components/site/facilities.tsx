import { ArrowRight, Building2, Bus, FlaskConical, GraduationCap, Library, Presentation, ShieldCheck, Trophy, Utensils } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

type Facility = {
  icon: typeof ShieldCheck
  title: string
  text: string
  tone: string
  stats?: { value: string; label: string }[]
}

const FACILITIES: Facility[] = [
  { icon: ShieldCheck, title: 'Safety First', text: 'CCTV-monitored, secure campus with trained guards and controlled entry.', tone: 'text-emerald-700 bg-emerald-50' },
  { icon: Presentation, title: 'Regular Classes', text: 'Structured timetables supporting consistent learning and engagement.', tone: 'text-indigo-600 bg-indigo-50' },
  { icon: GraduationCap, title: 'Qualified Teachers', text: 'Experienced faculty fostering communication and critical thinking.', tone: 'text-violet-600 bg-violet-50' },
  { icon: Building2, title: 'Modern Classrooms', text: 'Spacious, air-conditioned and multimedia-enabled classrooms.', tone: 'text-amber-700 bg-amber-50', stats: [{ value: '60', label: 'Classrooms' }] },
  { icon: FlaskConical, title: 'Science & Computer Labs', text: 'Physics, Chemistry, Biology and IT labs for practical learning.', tone: 'text-teal bg-secondary', stats: [{ value: '8', label: 'Labs' }, { value: '250+', label: 'Computers' }] },
  { icon: Trophy, title: 'Sports & Recreation', text: 'Playgrounds and courts that promote fitness and teamwork.', tone: 'text-green-700 bg-green-50' },
  { icon: Bus, title: 'School Transport', text: 'Safe pick-and-drop service across major city routes.', tone: 'text-orange-700 bg-orange-50', stats: [{ value: '25', label: 'Buses' }] },
  { icon: Library, title: 'Library', text: 'Thousands of books, journals and digital resources for every grade.', tone: 'text-sky-700 bg-sky-50', stats: [{ value: '12K+', label: 'Books' }] },
  { icon: Utensils, title: 'Cafeteria', text: 'Clean, hygienic food court offering healthy meals.', tone: 'text-rose-700 bg-rose-50' },
]

export function Facilities() {
  return (
    <section id="facilities" aria-labelledby="facilities-title" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="facilities-title"
          eyebrow="Campus Facilities"
          title="Everything You Need,"
          highlight="All in One Campus"
          description="A complete school experience supported by modern facilities, student services and resources designed to help every child learn, grow and thrive."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map(({ icon: Icon, title, text, tone, stats }, i) => (
            <li
              key={title}
              className={cn(
                'relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-6 transition-shadow hover:shadow-lg',
                i === 4 && 'lg:col-span-2',
              )}
            >
              <span className={cn('flex size-11 items-center justify-center rounded-xl', tone)}>
                <Icon className="size-5" />
              </span>
              <p className="mt-6 font-heading text-sm font-bold text-muted-foreground/70">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-1 font-bold text-navy">{title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{text}</p>
              {stats ? (
                <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                  {stats.map((s) => (
                    <span key={s.label} className="flex items-baseline gap-1.5">
                      <span className={cn('font-heading text-xl font-bold', tone.split(' ')[0])}>{s.value}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{s.label}</span>
                    </span>
                  ))}
                </p>
              ) : (
                <ArrowRight className={cn('mt-4 size-5', tone.split(' ')[0])} />
              )}
              <span aria-hidden="true" className={cn('absolute -bottom-10 -right-10 size-28 rounded-full opacity-60', tone.split(' ')[1])} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
