'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { SectionHeading } from './section-heading'

const VIDEOS = [
  { title: 'Annual Function 2025', image: '/images/video-annual.png' },
  { title: 'Annual Sports Week', image: '/images/video-sports.png' },
  { title: 'Science Department', image: '/images/video-science.png' },
  { title: 'Computer Science (ICS)', image: '/images/video-computer.png' },
]

const PLACEHOLDER_VIDEO_ID = 'aqz-KE-bpKQ'

export function Videos() {
  const [playing, setPlaying] = useState<string | null>(null)

  return (
    <section id="videos" aria-labelledby="videos-title" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="videos-title"
          eyebrow="Experience Linz"
          title="Explore"
          highlight="Our Campus"
          description="Take a glimpse into the academic, co-curricular and student experience at Linz School and College."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((v) => (
            <li key={v.title} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="relative aspect-[16/11.5] bg-navy">
                {playing === v.title ? (
                  <iframe
                    className="absolute inset-0 size-full"
                    src={`https://www.youtube-nocookie.com/embed/${PLACEHOLDER_VIDEO_ID}?autoplay=1&rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(v.title)}
                    className="group absolute inset-0"
                    aria-label={`Play video: ${v.title}`}
                  >
                    <Image src={v.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                    <span className="absolute inset-0 bg-navy/20 transition-colors group-hover:bg-navy/35" />
                    <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform group-hover:scale-110">
                      <Play className="ml-0.5 size-5 fill-teal text-teal" />
                    </span>
                  </button>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm font-bold tracking-wider text-teal">Video</p>
                <h3 className="mt-1 font-heading font-bold text-navy">{v.title}</h3>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl bg-teal px-6 py-3.5 font-heading font-bold text-white shadow-lg transition-colors hover:bg-navy"
          >
            View More Videos <ArrowRight className="size-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
