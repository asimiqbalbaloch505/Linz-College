'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, ChevronRight, GraduationCap, Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

type MenuColumn = { title: string; links: string[] }
type MegaMenu = {
  label: string
  heading: string
  pill: string
  columns: MenuColumn[]
  promo: { eyebrow: string; title: string; text: string; cta: string }
  footer: string
}

const MENUS: MegaMenu[] = [
  {
    label: 'Academics',
    heading: 'Academics at Linz',
    pill: 'Session 2026–27',
    columns: [
      { title: 'School', links: ['Pre-School & Montessori', 'Primary (1–5)', 'Middle (6–8)', 'Matric (9–10)'] },
      { title: 'College', links: ['FSc Pre-Medical', 'FSc Pre-Engineering', 'ICS', 'O & A-Levels'] },
      { title: 'Resources', links: ['Academic Calendar', 'Syllabus', 'Date Sheets', 'Results'] },
    ],
    promo: {
      eyebrow: 'Board Results',
      title: '98% Pass Rate',
      text: 'Our Matric and FSc students consistently secure top positions in board examinations.',
      cta: 'View Results',
    },
    footer: 'Explore Academics',
  },
  {
    label: 'Facilities',
    heading: 'Campus Facilities',
    pill: 'Modern Campus',
    columns: [
      { title: 'Learning', links: ['Science Labs', 'Computer Lab', 'Library', 'Smart Classrooms'] },
      { title: 'Activities', links: ['Sports Ground', 'Auditorium', 'Art Studio', 'Music Room'] },
      { title: 'Services', links: ['Transport', 'Cafeteria', 'Medical Room', 'Security'] },
    ],
    promo: {
      eyebrow: 'Take a Tour',
      title: 'Visit Our Campus',
      text: 'Book a guided campus visit and see our facilities in person.',
      cta: 'Book a Visit',
    },
    footer: 'Explore Facilities',
  },
  {
    label: 'Admissions',
    heading: 'Admissions',
    pill: 'Fall 2026 Open',
    columns: [
      { title: 'Get Started', links: ['Apply Online', 'How to Apply', 'Fee Structure', 'Scholarships'] },
      { title: 'Programs', links: ['Primary', 'Middle', 'Matriculation', 'FSc / ICS', 'A-Levels'] },
      { title: 'Helpful Links', links: ['Prospectus', 'Required Documents', 'Entry Test', 'Admission Timeline', 'FAQs'] },
    ],
    promo: {
      eyebrow: 'Fall 2026',
      title: 'Admissions Open',
      text: 'Join one of the leading schools and colleges and start your journey today.',
      cta: 'Apply Now',
    },
    footer: 'Explore Admissions',
  },
  {
    label: 'Campus Life',
    heading: 'Student Life',
    pill: 'Beyond Classrooms',
    columns: [
      { title: 'Activities', links: ['Clubs & Societies', 'Sports Week', 'Annual Function', 'Trips & Tours'] },
      { title: 'Support', links: ['Student Counseling', 'Health Care', 'Parent Portal', 'Discipline Policy'] },
      { title: 'Media', links: ['Photo Gallery', 'Videos', 'School Magazine', 'News & Events'] },
    ],
    promo: {
      eyebrow: 'Student Week',
      title: 'Learn. Play. Grow.',
      text: 'A balanced environment where every child discovers their talent.',
      cta: 'Explore Life',
    },
    footer: 'Explore Campus Life',
  },
  {
    label: 'About',
    heading: 'About Linz',
    pill: 'Since 2001',
    columns: [
      { title: 'Institution', links: ['Our Story', 'Vision & Mission', 'Our Journey', 'Achievements'] },
      { title: 'Administration', links: ['Principal', 'Vice Principal', 'Faculty', 'Admin Offices'] },
      { title: 'Community', links: ['News & Events', 'Alumni', 'Careers', 'Contact Us'] },
    ],
    promo: {
      eyebrow: 'Our Legacy',
      title: 'Excellence in Education',
      text: 'Nurturing confident, capable and caring young leaders for over two decades.',
      cta: 'Our Story',
    },
    footer: 'Explore About',
  },
]

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-6">
      <nav
        aria-label="Main"
        className="relative mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/60 bg-white/95 px-4 py-3 shadow-[0_12px_40px_-12px_rgba(10,44,61,0.35)] backdrop-blur md:px-8"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {MENUS.map((menu) => {
            const active = openMenu === menu.label
            return (
              <li key={menu.label} onMouseEnter={() => setOpenMenu(menu.label)}>
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpenMenu(active ? null : menu.label)}
                  className={cn(
                    'relative rounded-xl px-3.5 py-2.5 text-[13px] font-medium uppercase tracking-wide text-navy transition-colors hover:bg-secondary hover:text-teal',
                    active && 'bg-secondary text-teal',
                  )}
                >
                  {menu.label}
                  {active ? (
                    <span aria-hidden="true" className="absolute inset-x-1/2 bottom-1 mx-auto h-0.5 w-5 -translate-x-1/2 bg-gold" />
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-600">
            <span aria-hidden="true" className="size-2 animate-pulse rounded-full bg-emerald-500" />
            Admissions Open
          </span>
          <a
            href="#admissions"
            className="rounded-xl bg-navy px-5 py-3 font-heading text-sm font-bold text-white shadow-lg transition-colors hover:bg-teal"
          >
            {'Apply Now →'}
          </a>
        </div>

        <button
          type="button"
          className="rounded-xl p-2 text-navy lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {MENUS.map((menu) =>
          openMenu === menu.label ? (
            <MegaPanel key={menu.label} menu={menu} />
          ) : null,
        )}
      </nav>

      {mobileOpen ? (
        <div className="mx-auto mt-2 max-h-[75vh] max-w-7xl overflow-y-auto rounded-3xl bg-white p-4 shadow-xl lg:hidden">
          <ul className="flex flex-col">
            {MENUS.map((menu) => {
              const expanded = mobileSection === menu.label
              return (
                <li key={menu.label} className="border-b border-border last:border-0">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : menu.label)}
                    className="flex w-full items-center justify-between py-3.5 text-sm font-semibold uppercase tracking-wide text-navy"
                  >
                    {menu.label}
                    <ChevronDown className={cn('size-4 transition-transform', expanded && 'rotate-180')} />
                  </button>
                  {expanded ? (
                    <div className="grid gap-4 pb-4 sm:grid-cols-3">
                      {menu.columns.map((col) => (
                        <div key={col.title}>
                          <p className="text-xs font-bold uppercase tracking-widest text-teal">{col.title}</p>
                          <ul className="mt-2 space-y-2">
                            {col.links.map((link) => (
                              <li key={link}>
                                <a href="#" className="text-sm text-muted-foreground hover:text-teal">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              )
            })}
          </ul>
          <a
            href="#admissions"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3 font-heading font-bold text-white"
          >
            Apply Now <ArrowRight className="size-4" />
          </a>
        </div>
      ) : null}
    </header>
  )
}

function MegaPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="absolute left-1/2 top-full hidden w-[min(64rem,calc(100vw-3rem))] -translate-x-1/2 pt-2 lg:block">
      <div className="overflow-hidden rounded-3xl border-t-2 border-gold bg-white shadow-2xl animate-in fade-in slide-in-from-top-2">
        <div className="flex items-center justify-between border-b border-border bg-surface px-7 py-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">{menu.heading}</p>
          <span className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-bold text-teal">
            {menu.pill}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-6 p-7">
          {menu.columns.map((col) => (
            <div key={col.title}>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-teal">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="group flex items-center gap-1.5 text-[15px] text-navy/80 hover:text-teal">
                      <ChevronRight className="size-3.5 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-gold" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="rounded-2xl bg-gradient-to-br from-navy-light to-teal p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{menu.promo.eyebrow}</p>
            <p className="mt-3 font-heading text-xl font-bold leading-tight">{menu.promo.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{menu.promo.text}</p>
            <a
              href="#admissions"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:bg-gold"
            >
              {menu.promo.cta} <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border bg-surface px-7 py-4">
          <a href="#" className="font-heading text-sm font-bold text-teal hover:underline">
            {menu.footer}
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="size-4" /> Your Future Starts Here
          </span>
        </div>
      </div>
    </div>
  )
}
