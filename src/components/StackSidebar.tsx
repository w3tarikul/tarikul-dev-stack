import type { Technology } from '../types'

type StackSidebarProps = {
  stack: Technology[]
}

function StackSidebar({ stack }: StackSidebarProps) {
  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
      <h3 className="text-base leading-6 font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 pb-3 text-xs leading-4 text-slate-400">
        {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-1 rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs leading-4 text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-1 flex flex-col gap-1">
            {stack.map((technology) => (
              <li key={technology.id} className="flex h-12.5 items-center rounded-lg border border-slate-200 px-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center">
                  <img src={technology.icon} alt={`${technology.name} logo`} className="size-7" />
                </span>
                <div className="ml-1 flex min-w-0 flex-col">
                  <span className="truncate text-[10px] leading-3.5 font-bold text-slate-900">{technology.name}</span>
                  <span className="truncate text-[6px] leading-2 font-bold text-slate-400">{technology.category}</span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${technology.name}`}
                  className="ml-auto flex size-6 shrink-0 cursor-pointer items-center justify-center text-slate-400 transition-colors hover:text-slate-600"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-12 h-7.5 w-full cursor-pointer rounded-lg border-[0.5px] border-[#ed8c85] bg-white font-inter text-sm leading-4 font-semibold text-[#d82c20] transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default StackSidebar
