import bannerImage from '../assets/banner-stack.png'

function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-7xl overflow-x-clip px-5 pt-10 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:overflow-x-visible lg:pt-0 lg:pb-0">
      <div className="flex flex-col items-center text-center lg:grid lg:min-h-105 lg:grid-cols-12 lg:items-center lg:gap-8 lg:text-left">
        <div className="flex flex-col items-center lg:col-span-7 lg:block lg:pr-8">
          <h1 className="pb-3 font-inter text-3xl leading-tight font-bold tracking-[-0.75px] text-gray-950 sm:pb-5 sm:text-5xl sm:tracking-[-1.2px] lg:pb-6 lg:text-5xl lg:leading-none lg:font-extrabold lg:tracking-[-1.2px] lg:text-slate-900 xl:text-6xl xl:tracking-[-1.5px]">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="max-w-88.75 pb-3 font-inter text-sm leading-relaxed text-gray-600 sm:max-w-xl sm:pb-6 sm:font-sans sm:text-lg sm:text-slate-600 lg:pb-10">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex items-center justify-center gap-3 pt-3 lg:justify-start">
            <a
              href="#technologies"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-brand-gradient bg-size-[200%_100%] px-6 font-inter text-xs leading-4 whitespace-nowrap text-white shadow-xs transition hover:brightness-110 sm:px-2.75 sm:text-sm sm:font-semibold"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="inline-flex h-10.5 w-42.5 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 font-inter text-xs leading-4 text-gray-700 transition-colors hover:bg-gray-50 sm:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center pt-5 lg:col-span-5 lg:pt-0">
          <img
            src={bannerImage}
            alt="Isometric illustration of a layered development stack"
            className="-my-20 size-109 max-w-none object-contain sm:-my-13.25 sm:size-131.5"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
