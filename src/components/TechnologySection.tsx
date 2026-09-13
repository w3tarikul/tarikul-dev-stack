import { useEffect, useState } from 'react'
import type { Technology } from '../types'
import StackSidebar from './StackSidebar'
import TechCard from './TechCard'

function TechnologySection() {
  const [technologies, setTechnologies] = useState<Technology[]>([])

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => response.json())
      .then((data: Technology[]) => setTechnologies(data))
  }, [])

  return (
    <section id="technologies" className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 pb-14 sm:px-8 lg:pb-39">
      <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:gap-2 sm:text-left">
        <h2 className="font-inter text-2xl leading-8 font-bold tracking-[-0.6px] text-gray-900 sm:text-4xl sm:leading-10 sm:font-extrabold sm:tracking-[-0.9px] sm:text-slate-900">
          Explore the{' '}
          <span className="text-brand-gradient sm:bg-linear-to-r sm:from-pink-500 sm:to-violet-500">Technologies</span>
        </h2>
        <p className="font-inter text-xs leading-4 text-gray-500 sm:font-sans sm:text-base sm:leading-6 sm:text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-5 sm:mt-10 sm:gap-8 lg:grid lg:grid-cols-12 lg:items-start">
        <div className="grid grid-cols-1 items-start gap-3.5 sm:grid-cols-2 sm:gap-5 lg:col-span-8 xl:col-span-9 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechCard key={technology.id} technology={technology} />
          ))}
        </div>

        <div className="lg:sticky lg:top-24 lg:col-span-4 xl:col-span-3">
          <StackSidebar stack={[]} />
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
