import Image from 'next/image'
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  Globe2,
  Play,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const RESOURCES = [
  {
    number: '01',
    title: 'Prospectus',
    description: 'Explore academic programs, campus information and opportunities.',
    action: 'Read More',
    href: '#admissions',
    image: '/images/link-prospectus.png',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Scholarships',
    description: 'Discover scholarship and financial support opportunities.',
    action: 'Explore',
    href: '#admissions',
    image: '/images/link-scholarships.png',
    icon: Award,
  },
  {
    number: '03',
    title: 'Linz-Online',
    description: 'Access digital college services, portal, and academic processes.',
    action: 'Visit Portal',
    href: '#contact',
    image: '/images/link-portal.png',
    icon: Globe2,
  },
  {
    number: '04',
    title: 'Career Development Center',
    description: 'Discover internships, career counseling, and skill development.',
    action: 'Explore',
    href: '#contact',
    image: '/images/link-career.png',
    icon: BriefcaseBusiness,
  },
  {
    number: '05',
    title: 'Downloads & Notifications',
    description: 'Access important forms, syllabus PDFs, date sheets, and notices.',
    action: 'View Resources',
    href: '#admissions',
    icon: Download,
  },
  {
    number: '06',
    title: 'Videos & Media',
    description: 'Watch campus highlights, events, orientation, and student life.',
    action: 'Watch Videos',
    href: '#videos',
    image: '/images/campus-building.png',
    icon: Play,
  },
]

export function QuickResources() {
  return (
    <section
      id="quick-resources"
      aria-labelledby="quick-resources-title"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light py-20 md:py-28"
    >
      <div aria-hidden="true" className="absolute -right-36 -top-40 size-[30rem] rounded-full border border-white/5" />
      <div aria-hidden="true" className="absolute -bottom-56 -left-40 size-[34rem] rounded-full border border-white/5" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <SectionHeading
          id="quick-resources-title"
          dark
          eyebrow="Quick Resources"
          title="Useful"
          highlight="Links"
          description="Quick access to important academic resources, student services, and information for the Linz College community."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {RESOURCES.map(({ number, title, description, action, href, image, icon: Icon }) => (
            <li key={number} className="min-w-0">
              <a
                href={href}
                aria-label={`${title} — ${action}`}
                className="group relative flex min-h-[320px] h-full flex-col justify-end overflow-hidden rounded-2xl border border-white/15 bg-navy p-5 transition duration-300 before:absolute before:inset-x-0 before:top-0 before:z-20 before:h-1 before:bg-gold hover:-translate-y-1 hover:border-gold/70 hover:shadow-xl hover:shadow-black/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-light sm:p-6"
              >
                {image ? (
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-teal/70 via-navy-light to-navy" />
                )}
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/25 transition-colors group-hover:via-navy/70" />
                <Icon aria-hidden="true" className="absolute right-5 top-10 z-10 size-16 text-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:text-teal-light/50" />
                <span className="relative z-10 mb-auto mt-4 font-heading text-base font-bold text-gold">{number}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 min-h-12 leading-relaxed text-white/75">{description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-heading font-bold text-teal-light transition-colors group-hover:text-gold">
                    {action} <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
