import Image from 'next/image'
import { ArrowRight, BookOpen, FlaskConical, GraduationCap, Landmark, Trophy, Users } from 'lucide-react'

const FEATURES = [
  { icon: GraduationCap, title: 'Academic Excellence', text: 'Primary, Matric, FSc, ICS and A-Level programs under one roof.' },
  { icon: FlaskConical, title: 'Practical Learning', text: 'Fully equipped science and computer labs for hands-on learning.' },
  { icon: Users, title: 'Vibrant Student Life', text: 'Clubs, sports and events for a complete student experience.' },
]

const STATS = [
  { icon: Landmark, value: '12', label: 'Academic Programs' },
  { icon: FlaskConical, value: '8', label: 'Science & IT Labs' },
  { icon: Users, value: '3,500+', label: 'Students Enrolled' },
  { icon: Trophy, value: '150+', label: 'Board Position Holders' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl sm:aspect-[5/5]">
              <Image
                src="/images/campus-aerial.png"
                alt="Aerial view of the Linz School and College campus"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-navy px-6 py-4 shadow-2xl sm:-right-4">
              <span className="font-heading text-3xl font-bold text-gold">25+</span>
              <span className="text-sm leading-snug text-white/80">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-teal">
              <span aria-hidden="true" className="h-0.5 w-7 bg-gold" />
              About Linz
            </p>
            <h2 id="about-title" className="mt-3 text-balance text-3xl font-bold leading-tight text-navy md:text-[2.6rem]">
              A Place to <span className="text-teal">Learn, Grow &amp; Lead.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Linz School and College is a leading institution offering a seamless education journey from
              early years through Intermediate and A-Levels, where students, teachers and parents work together.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground/90">
              Our green, secure campus provides a stimulating environment for academics, character building,
              sports and creative expression.
            </p>

            <ul className="mt-7 space-y-3">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-md">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-teal">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-heading font-bold text-navy">{title}</span>
                    <span className="block text-sm text-muted-foreground">{text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#facilities"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-teal px-6 py-3.5 font-heading font-bold text-white shadow-lg transition-colors hover:bg-navy"
            >
              Discover Our Campus <ArrowRight className="size-5" />
            </a>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-y-6 rounded-3xl bg-navy p-6 shadow-xl md:grid-cols-4 md:p-8">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div key={label} className={`flex items-center gap-4 px-2 md:px-6 ${i > 0 ? 'md:border-l md:border-white/15' : ''}`}>
              <Icon className="size-6 shrink-0 text-gold" />
              <div className="flex flex-col-reverse">
                <dt className="text-sm text-white/60">{label}</dt>
                <dd className="font-heading text-xl font-bold text-white">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <BookOpen aria-hidden="true" className="pointer-events-none absolute -right-10 top-10 size-64 text-teal/5" />
    </section>
  )
}
