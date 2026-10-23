import { ArrowRight, Atom, Baby, BookOpen, ExternalLink, FileText, Globe, ListChecks, Wallet } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const LEVELS = [
  {
    num: '01',
    level: 'Primary & Middle',
    title: 'Begin Your Learning Journey',
    text: 'Montessori to Grade 8 with activity-based learning that builds strong foundations in literacy, numeracy and values.',
    cta: 'Explore School Section',
    icon: Baby,
    card: 'bg-[#eef8f7] border-[#d3ecea]',
    iconWrap: 'bg-white text-teal',
    accent: 'text-teal',
    blob: 'bg-teal/10',
  },
  {
    num: '02',
    level: 'Matric & O-Levels',
    title: 'Build Your Expertise',
    text: 'Grades 9–10 in Science and Computer streams with board-focused preparation and experienced subject teachers.',
    cta: 'Explore Matric Programs',
    icon: BookOpen,
    card: 'bg-[#f1f4fd] border-[#5b7be0] border-t-4',
    iconWrap: 'bg-[#5b7be0] text-white',
    accent: 'text-[#4d6ad6]',
    blob: 'bg-[#5b7be0]/10',
  },
  {
    num: '03',
    level: 'Intermediate & A-Levels',
    title: 'Shape Your Future',
    text: 'FSc Pre-Medical, Pre-Engineering, ICS and A-Levels with entry-test guidance for top universities.',
    cta: 'Explore College Programs',
    icon: Atom,
    card: 'bg-[#f7f2fb] border-[#e6daf1]',
    iconWrap: 'bg-white text-[#8a5cbf]',
    accent: 'text-[#8a5cbf]',
    blob: 'bg-[#8a5cbf]/10',
  },
]

const RESOURCES = [
  { icon: FileText, label: 'Prospectus 2026' },
  { icon: ListChecks, label: 'How to Apply' },
  { icon: Wallet, label: 'Fee Structure' },
  { icon: Globe, label: 'Scholarships' },
]

export function Admissions() {
  return (
    <section id="admissions" aria-labelledby="admissions-title" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="admissions-title"
          eyebrow="Admissions 2026"
          title="Start Your Journey"
          highlight="With Us"
          description="Explore our academic levels, admission requirements and resources to take the next step toward your child's future at Linz."
        />

        <ul id="programs" className="mt-14 grid scroll-mt-28 gap-6 md:grid-cols-3">
          {LEVELS.map(({ icon: Icon, ...l }) => (
            <li key={l.num} className={cn('relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-shadow hover:shadow-xl', l.card)}>
              <div className="flex items-start justify-between">
                <span className={cn('flex size-14 items-center justify-center rounded-2xl shadow-sm', l.iconWrap)}>
                  <Icon className="size-6" />
                </span>
                <span className={cn('font-heading font-bold opacity-50', l.accent)}>{l.num}</span>
              </div>
              <p className={cn('mt-6 text-sm font-bold uppercase tracking-[0.18em]', l.accent)}>{l.level}</p>
              <h3 className="mt-2 text-xl font-bold text-navy">{l.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{l.text}</p>
              <a href="#" className={cn('relative z-10 mt-6 inline-flex items-center gap-2 font-heading font-bold', l.accent)}>
                {l.cta} <ArrowRight className="size-4" />
              </a>
              <span aria-hidden="true" className={cn('absolute -bottom-12 -right-12 size-36 rounded-full', l.blob)} />
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-sm md:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">Admission Resources</p>
          <h3 className="mt-1 text-xl font-bold text-navy">Everything You Need to Apply</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {RESOURCES.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a href="#" className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 font-semibold text-navy/80 transition-colors hover:border-teal hover:text-teal">
                  <span className="flex items-center gap-3">
                    <Icon className="size-4 text-teal" />
                    {label}
                  </span>
                  <ExternalLink className="size-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl bg-gradient-to-r from-navy to-teal p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-heading font-bold text-white">Ready to take the next step?</p>
              <p className="text-sm text-white/75">Submit your application through our online admission portal.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-3 rounded-xl bg-gold px-6 py-3 font-heading font-bold text-navy hover:brightness-105">
              Apply Now <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
