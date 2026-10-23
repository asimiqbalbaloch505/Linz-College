'use client'

import { ArrowUp } from 'lucide-react'

export function ScrollTop() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-lg bg-secondary/95 text-navy shadow-lg ring-1 ring-border transition-colors hover:bg-teal hover:text-white"
    >
      <ArrowUp className="size-5" />
    </button>
  )
}
