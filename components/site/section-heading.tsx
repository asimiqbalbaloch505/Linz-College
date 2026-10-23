import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  title: string
  highlight: string
  description?: string
  dark?: boolean
  align?: 'center' | 'left'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  dark = false,
  align = 'center',
  id,
}: Props) {
  const centered = align === 'center'
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
      <p
        className={cn(
          'flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]',
          centered && 'justify-center',
          dark ? 'text-gold' : 'text-teal',
        )}
      >
        <span aria-hidden="true" className="h-0.5 w-7 bg-gold" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-3 text-balance text-3xl font-bold leading-tight tracking-tight md:text-[2.6rem]',
          dark ? 'text-white' : 'text-navy',
        )}
      >
        {title} <span className={dark ? 'text-teal-light' : 'text-teal'}>{highlight}</span>
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed',
            dark ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
