import { ArrowRight, Camera, Clock, Globe, Mail, MapPin, Phone, Send, Video } from 'lucide-react'
import { LogoCrest } from './logo'

const VISIT = [
  { icon: MapPin, title: 'Visit Us', text: 'Main Campus Road, Model Town, Lahore, Pakistan' },
  { icon: Clock, title: 'Office Hours', text: 'Monday – Saturday, 8:00 AM – 3:00 PM' },
  { icon: Phone, title: 'Admissions Helpline', text: '+92-42-3500-1234' },
]

const QUICK = ['Home', 'About Linz', 'Admissions', 'Academics', 'Campus Life', 'News & Events']
const RESOURCES = ['School Section', 'College Section', 'Library', 'Scholarships', 'Results', 'Careers']
const SOCIALS = [
  { icon: Globe, label: 'Website' },
  { icon: Send, label: 'Facebook' },
  { icon: Camera, label: 'Instagram' },
  { icon: Video, label: 'YouTube' },
]

export function Footer() {
  return (
    <>
      <section aria-label="Contact information" className="bg-gradient-to-br from-navy to-navy-light py-14">
        <ul className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:mx-12 md:grid-cols-3 lg:mx-auto">
          {VISIT.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-center gap-4 border-white/10 p-6 md:border-l md:first:border-l-0">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold">
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block font-heading font-bold text-white">{title}</span>
                <span className="block text-sm text-white/70">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="bg-[#06212e] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] lg:px-16">
          <div>
            <LogoCrest className="h-16 w-14" />
            <p className="mt-5 font-heading text-lg font-bold">Linz School and College</p>
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-teal-light">Main Campus</p>
            <p className="mt-4 max-w-xs leading-relaxed text-white/70">
              Empowering future leaders through quality education, strong values and holistic development.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a href="#" aria-label={label} className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-gold hover:text-gold">
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterList title="Quick Links" links={QUICK} />
          <FooterList title="Resources" links={RESOURCES} />

          <div>
            <h2 className="font-heading font-bold">Contact Us</h2>
            <span aria-hidden="true" className="mt-2 block h-0.5 w-6 bg-gold" />
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="size-4 shrink-0 text-teal-light" /> Main Campus Road, Model Town, Lahore, Pakistan</li>
              <li className="flex gap-3"><Mail className="size-4 shrink-0 text-teal-light" /> admissions@linz.edu.pk</li>
              <li className="flex gap-3"><Phone className="size-4 shrink-0 text-teal-light" /> +92-42-3500-1234</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 font-heading font-bold text-teal-light hover:border-teal-light">
              Contact Campus <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-6 text-sm text-white/55 md:flex-row md:px-12 lg:px-16">
          <p>{'© 2026 Linz School and College. All Rights Reserved.'}</p>
          <ul className="flex gap-6">
            {['Privacy Policy', 'Terms & Conditions', 'Contact'].map((l) => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}

function FooterList({ title, links }: { title: string; links: string[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-heading font-bold">{title}</h2>
      <span aria-hidden="true" className="mt-2 block h-0.5 w-6 bg-gold" />
      <ul className="mt-6 space-y-3.5 text-sm text-white/70">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
        ))}
      </ul>
    </nav>
  )
}
