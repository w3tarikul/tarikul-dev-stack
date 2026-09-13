import type { BadgeColor, Technology } from '../types'

type TechCardProps = {
  technology: Technology
  isAdded: boolean
  onAddToStack: (technology: Technology) => void
}

const badgeStyles: Record<BadgeColor, { badge: string; iconBox: string }> = {
  sky: {
    badge: 'bg-sky-100 text-sky-700 sm:border-sky-100 sm:bg-sky-50 sm:text-sky-500',
    iconBox: 'bg-sky-50',
  },
  ocean: {
    badge: 'bg-sky-100 text-sky-700 sm:border-sky-100 sm:bg-sky-50 sm:text-sky-600',
    iconBox: 'bg-sky-50',
  },
  emerald: {
    badge: 'bg-emerald-100 text-emerald-700 sm:border-emerald-100 sm:bg-emerald-50 sm:text-emerald-600',
    iconBox: 'bg-emerald-50',
  },
  orange: {
    badge: 'bg-orange-100 text-orange-700 sm:border-orange-100 sm:bg-orange-50 sm:text-orange-600',
    iconBox: 'bg-orange-50',
  },
  purple: {
    badge: 'bg-purple-100 text-purple-700 sm:border-purple-100 sm:bg-purple-50 sm:text-purple-700',
    iconBox: 'bg-purple-50',
  },
  blue: {
    badge: 'bg-blue-100 text-blue-700 sm:border-blue-100 sm:bg-blue-50 sm:text-blue-600',
    iconBox: 'bg-blue-50',
  },
  red: {
    badge: 'bg-red-100 text-red-700 sm:border-red-100 sm:bg-red-50 sm:text-red-600',
    iconBox: 'bg-red-50',
  },
  amber: {
    badge: 'bg-amber-100 text-amber-700 sm:border-amber-100 sm:bg-amber-50 sm:text-amber-600',
    iconBox: 'bg-amber-50',
  },
  cyan: {
    badge: 'bg-cyan-100 text-cyan-700 sm:border-cyan-100 sm:bg-cyan-50 sm:text-cyan-600',
    iconBox: 'bg-cyan-50',
  },
}

function TechCard({ technology, isAdded, onAddToStack }: TechCardProps) {
  const { name, category, description, icon, rating, difficulty, badge, badgeColor } = technology
  const styles = badgeStyles[badgeColor]

  return (
    <article className="flex flex-col gap-2.25 rounded-xl border border-gray-100 bg-white p-4 shadow-xs sm:justify-between sm:gap-0 sm:rounded-2xl sm:border-slate-100 sm:p-5 sm:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col gap-2.25 sm:gap-1.5 sm:pb-4">
        <div className="flex flex-wrap items-start">
          <div className={`flex size-10 items-center justify-center rounded-lg sm:bg-transparent ${styles.iconBox}`}>
            <img src={icon} alt={`${name} logo`} className="size-6 sm:size-7" />
          </div>
          <h3 className="ml-3 self-center font-inter text-base leading-5 font-bold text-gray-900 sm:order-last sm:mt-3 sm:ml-0 sm:w-full sm:self-auto sm:font-sans sm:text-lg sm:leading-7 sm:text-slate-900">
            {name}
          </h3>
          <span
            className={`ml-auto rounded-full px-2 py-0.5 font-inter text-[10.4px] leading-normal font-bold tracking-[0.208px] sm:border sm:px-2.5 sm:font-sans sm:text-[11.5px] sm:font-semibold sm:tracking-normal ${styles.badge}`}
          >
            {badge}
          </span>
        </div>
        <p className="font-inter text-xs leading-relaxed text-gray-600 sm:font-sans sm:text-slate-500">{description}</p>
      </div>

      <div className="flex flex-col gap-2.25 sm:gap-4">
        <div className="flex items-center justify-between border-t border-gray-50 pt-3 sm:border-slate-50 sm:pt-2">
          <span className="rounded bg-gray-100 px-2 py-0.5 font-inter text-[11px] leading-normal text-gray-600 sm:bg-slate-100/80 sm:font-sans sm:font-medium sm:text-slate-600">
            {category}
          </span>
          <span className="font-inter text-[11px] leading-normal text-gray-500 sm:font-sans sm:font-medium sm:text-slate-500">
            {difficulty}
          </span>
          <span className="flex items-center gap-1 font-inter text-[11px] leading-normal text-amber-500 sm:font-sans sm:font-semibold sm:text-slate-700">
            <span className="sm:text-amber-400">★</span>
            {rating}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onAddToStack(technology)}
          aria-disabled={isAdded}
          className={`h-8.75 w-full rounded-lg font-inter text-xs leading-4 transition sm:h-9 sm:font-sans sm:font-medium ${
            isAdded
              ? 'cursor-not-allowed bg-slate-100 text-slate-400'
              : 'cursor-pointer bg-gray-900 text-white hover:bg-gray-800 sm:bg-[#0a0f1d] sm:hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  )
}

export default TechCard
