import { ArrowRight, Award, Calculator, Cpu, Microscope, Stethoscope, Trophy } from 'lucide-react'
import { SectionHeading } from './section-heading'

const STREAMS = [
  { icon: Stethoscope, title: 'FSc Pre-Medical', text: 'Biology, Chemistry and Physics with MDCAT preparation support.' },
  { icon: Calculator, title: 'FSc Pre-Engineering', text: 'Mathematics, Physics and Chemistry with ECAT guidance.' },
  { icon: Cpu, title: 'ICS', text: 'Computer Science, Mathematics and Physics or Statistics.' },
  { icon: Microscope, title: 'O & A-Levels', text: 'Cambridge curriculum taught by experienced faculty.' },
]

export function Academics() {
  return (
    <section id="academics" aria-labelledby="academics-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="academics-title"
          eyebrow="Academics & Achievement"
          title="Learn."
          highlight="Achieve. Excel."
          description="Rigorous programs, dedicated teachers and continuous assessment that prepare students for board exams, entry tests and beyond."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-teal p-8 text-white lg:col-span-2">
            <Trophy aria-hidden="true" className="absolute -right-6 -top-6 size-40 text-white/5" />
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Board Results 2025</p>
            <h3 className="mt-3 text-balance text-2xl font-bold md:text-3xl">Consistently Among the Top Performers</h3>
            <p className="mt-4 leading-relaxed text-white/75">
              Our Matric and Intermediate students continue to secure distinctions and board positions every year.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {[
                ['98%', 'Pass Rate'],
                ['420+', 'A+ Grades'],
                ['18', 'Board Positions'],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col-reverse">
                  <dt className="text-sm text-white/65">{l}</dt>
                  <dd className="font-heading text-2xl font-bold text-gold">{v}</dd>
                </div>
              ))}
            </dl>
            <a href="#" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 font-heading font-bold text-navy hover:bg-gold">
              View Results <ArrowRight className="size-5" />
            </a>
          </article>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {STREAMS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="group rounded-3xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal">
                  Learn more <ArrowRight className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Award className="size-4 text-gold" /> Affiliated with the Board of Intermediate &amp; Secondary Education and Cambridge Assessment International Education.
        </p>
      </div>
    </section>
  )
}
