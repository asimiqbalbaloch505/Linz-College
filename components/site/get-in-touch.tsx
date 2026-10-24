import { ArrowUpRight, Clock3, Mail, MapPin, Phone, MapPinned } from 'lucide-react'
import { SectionHeading } from './section-heading'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Main+Campus+Road%2C+Model+Town%2C+Lahore%2C+Pakistan'

export function GetInTouch() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light py-20 md:py-28"
    >
      <div aria-hidden="true" className="absolute -right-36 -top-40 size-[30rem] rounded-full border border-white/5" />
      <div aria-hidden="true" className="absolute -bottom-56 -left-40 size-[34rem] rounded-full border border-white/5" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="contact-title"
          dark
          eyebrow="Get in Touch"
          title="We're Here"
          highlight="to Help"
          description="Have a question or need assistance? Connect with our Linz School and College campus team."
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Linz Main Campus</p>
            <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">Let&apos;s start a conversation.</h3>
            <p className="mt-3 leading-relaxed text-white/70">
              Whether you are a prospective student, parent, alumnus or visitor, our team is here to help.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h4 className="font-bold text-gold">Address</h4>
                  <p className="mt-1 leading-relaxed text-white/75">Main Campus Road, Model Town, Lahore, Pakistan</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                  <Phone aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h4 className="font-bold text-gold">Campus &amp; Admissions</h4>
                  <a className="mt-1 inline-block text-white/75 hover:text-white" href="tel:+924235001234">
                    +92-42-3500-1234
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h4 className="font-bold text-gold">Email</h4>
                  <a className="mt-1 inline-block break-all text-white/75 hover:text-white" href="mailto:admissions@linz.edu.pk">
                    admissions@linz.edu.pk
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-light">
                  <Clock3 aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h4 className="font-bold text-gold">Office Hours</h4>
                  <p className="mt-1 text-white/75">Monday – Saturday, 8:00 AM – 3:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
              <a
                href="mailto:admissions@linz.edu.pk?subject=Campus%20assistance"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-heading text-sm font-bold text-white transition-colors hover:border-teal-light hover:text-teal-light"
              >
                Get assistance <Mail aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#admissions"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 font-heading text-sm font-bold text-navy transition-colors hover:bg-white"
              >
                Admissions inquiry <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex min-h-80 flex-col rounded-3xl bg-white p-4 shadow-xl shadow-black/10 sm:p-6">
            <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-[#eaf3ef] p-6 text-center">
              <div aria-hidden="true" className="absolute inset-0 opacity-70">
                <div className="absolute left-[15%] top-[-20%] h-[150%] w-12 rotate-[35deg] bg-white" />
                <div className="absolute left-[58%] top-[-20%] h-[150%] w-8 rotate-[-28deg] bg-white" />
                <div className="absolute left-[-10%] top-[35%] h-9 w-[120%] rotate-[-10deg] bg-white" />
                <div className="absolute left-[-10%] top-[72%] h-7 w-[120%] rotate-[8deg] bg-white" />
                <div className="absolute left-0 top-[52%] h-2 w-full -rotate-[10deg] bg-teal-light/60" />
              </div>
              <div className="relative flex max-w-sm flex-col items-center rounded-2xl border border-white/80 bg-white/95 p-6 shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-teal">
                  <MapPinned aria-hidden="true" className="size-6" />
                </span>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-teal">Find Linz College</p>
                <h3 className="mt-2 text-xl font-bold text-navy">Visit our Lahore campus</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Main Campus Road, Model Town, Lahore, Pakistan
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-navy px-4 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-teal"
                >
                  Open in Google Maps <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-2 pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span>Map preview</span>
              <a className="font-bold text-teal hover:text-navy" href={MAPS_URL} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
