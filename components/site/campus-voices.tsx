'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const VOICES = [
  {
    name: 'Ayesha Malik',
    program: 'FSc Pre-Medical',
    initials: 'AM',
    tone: 'from-teal to-navy',
    quote:
      'The teachers at Linz make even the toughest topics feel approachable. I have grown more confident in class and feel supported as I prepare for my next step.',
  },
  {
    name: 'Hamza Ahmed',
    program: 'ICS',
    initials: 'HA',
    tone: 'from-navy-light to-teal',
    quote:
      'There is a real sense of community here. The balance of strong academics and opportunities to get involved has helped me discover what I want to pursue.',
  },
  {
    name: 'Mariam Shah',
    program: 'Linz College Alumna',
    initials: 'MS',
    tone: 'from-[#a66e17] to-gold',
    quote:
      'My time at Linz gave me the foundation and encouragement to take on new challenges. I will always value the friendships and guidance I found on campus.',
  },
]

export function CampusVoices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVoice = VOICES[activeIndex]

  function showVoice(index: number) {
    setActiveIndex((index + VOICES.length) % VOICES.length)
  }

  return (
    <section
      id="campus-voices"
      aria-labelledby="voices-title"
      className="bg-gradient-to-b from-surface to-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="voices-title"
          eyebrow="Campus Voices"
          title="What Our Community"
          highlight="Says"
          description="A glimpse into the experiences, friendships and ambitions that make Linz feel like home."
        />

        <div
          className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-navy/5 md:mt-14"
          aria-roledescription="carousel"
          aria-label="Student and alumni testimonials"
        >
          <div className="grid md:min-h-[390px] md:grid-cols-[0.85fr_1.15fr]">
            <div className={`relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br ${activeVoice.tone} p-8 md:min-h-full`}>
              <div aria-hidden="true" className="absolute -left-16 -top-16 size-64 rounded-full border border-white/15" />
              <div aria-hidden="true" className="absolute -bottom-24 -right-16 size-72 rounded-full border border-white/15" />
              <div
                aria-label={`${activeVoice.name} profile photo placeholder`}
                role="img"
                className="relative flex size-36 items-center justify-center rounded-full border-4 border-white/50 bg-white/15 font-heading text-4xl font-bold text-white shadow-xl md:size-48 md:text-5xl"
              >
                {activeVoice.initials}
              </div>
              <span className="absolute bottom-5 left-5 rounded-lg bg-gold px-3 py-2 text-xs font-bold uppercase tracking-wider text-navy md:bottom-7 md:left-7">
                Linz College
              </span>
            </div>

            <article
              key={activeVoice.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${VOICES.length}`}
              className="flex flex-col justify-center p-7 md:p-10 lg:p-12"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-teal">
                <Quote aria-hidden="true" className="size-5 fill-current" />
              </span>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-teal">Student experience</p>
              <div aria-label="5 out of 5 stars" className="mt-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-balance text-xl font-bold leading-snug text-navy md:text-2xl">
                “{activeVoice.quote}”
              </blockquote>
              <div className="mt-7 border-t border-border pt-5">
                <p className="font-heading font-bold text-navy">{activeVoice.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{activeVoice.program}</p>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => showVoice(activeIndex - 1)}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:border-teal hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <div className="flex items-center gap-2" aria-label="Choose a testimonial">
            {VOICES.map((voice, index) => (
              <button
                key={voice.name}
                type="button"
                onClick={() => showVoice(index)}
                aria-label={`Show testimonial ${index + 1}: ${voice.name}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
                  index === activeIndex ? 'w-8 bg-teal' : 'w-2.5 bg-navy/20 hover:bg-teal/50'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => showVoice(activeIndex + 1)}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:border-teal hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
          <span className="sr-only" aria-live="polite">
            Showing testimonial {activeIndex + 1} of {VOICES.length} by {activeVoice.name}
          </span>
        </div>
      </div>
    </section>
  )
}
