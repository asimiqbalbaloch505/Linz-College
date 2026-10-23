import { cn } from '@/lib/utils'

export function LogoCrest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      className={cn('h-11 w-10 shrink-0', className)}
      role="img"
      aria-label="Linz School and College crest"
    >
      <path
        d="M32 2 L60 10 V34 C60 52 47 64 32 70 C17 64 4 52 4 34 V10 Z"
        fill="#0a2c3d"
        stroke="#e4b13c"
        strokeWidth="3"
      />
      <path
        d="M32 9 L53 15 V34 C53 48 43 57 32 62 C21 57 11 48 11 34 V15 Z"
        fill="#0e7f88"
      />
      <path d="M18 28 L32 22 L46 28 L32 34 Z" fill="#e4b13c" />
      <path d="M23 31 V38 C23 41 41 41 41 38 V31 L32 35 Z" fill="#ffffff" />
      <rect x="44" y="28" width="2" height="9" fill="#e4b13c" />
      <text
        x="32"
        y="53"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="Georgia, serif"
      >
        LSC
      </text>
    </svg>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Linz School and College home">
      <LogoCrest />
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-heading text-xl font-bold tracking-tight',
            light ? 'text-white' : 'text-navy',
          )}
        >
          LINZ
        </span>
        <span
          className={cn(
            'text-[11px] font-semibold uppercase tracking-[0.12em]',
            light ? 'text-teal-light' : 'text-muted-foreground',
          )}
        >
          School and College
        </span>
      </span>
    </a>
  )
}
