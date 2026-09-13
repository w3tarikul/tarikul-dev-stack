type LogoProps = {
  variant?: 'header' | 'footer'
}

function Logo({ variant = 'header' }: LogoProps) {
  if (variant === 'footer') {
    return (
      <a href="#" className="flex items-center gap-2 sm:gap-2.5">
        <span className="flex size-6 items-center justify-center rounded-md bg-linear-to-tr from-pink-500 to-violet-600 text-xs leading-4 font-extrabold text-white">
          DS
        </span>
        <span className="text-lg leading-7 font-bold text-slate-900">
          Dev <span className="font-extrabold text-brand">Stack</span>
        </span>
      </a>
    )
  }

  return (
    <a href="#" className="flex items-center gap-1.5 sm:gap-2.5">
      <span className="flex size-6 items-center justify-center rounded-[5px] bg-linear-to-tr from-pink-500 to-violet-600 text-[9px] font-extrabold tracking-[-0.5px] text-white shadow-xs sm:size-8 sm:rounded-lg sm:text-sm">
        DS
      </span>
      <span className="font-inter text-[11px] font-bold tracking-[-0.45px] text-gray-900 sm:font-sans sm:text-xl sm:leading-7 sm:tracking-[-0.5px] sm:text-slate-900">
        Dev
        <span className="text-brand sm:ml-1.25 sm:font-extrabold">Stack</span>
      </span>
    </a>
  )
}

export default Logo
