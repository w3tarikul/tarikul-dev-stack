import bannerImage from '../assets/banner-stack.png'

function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-7xl px-8">
      <div className="grid min-h-105 grid-cols-12 items-center gap-8">
        <div className="col-span-7 pr-8">
          <h1 className="pb-6 font-inter text-6xl leading-none font-extrabold tracking-[-1.5px] text-slate-900">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="max-w-xl pb-10 text-lg leading-relaxed text-slate-600">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex items-center gap-3 pt-3">
            <a
              href="#technologies"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-brand-gradient bg-size-[200%_100%] px-2.75 font-inter text-sm leading-4 font-semibold whitespace-nowrap text-white shadow-xs transition hover:brightness-110"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="inline-flex h-10.5 w-42.5 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 font-inter text-sm leading-4 text-gray-700 transition-colors hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="col-span-5 flex justify-center">
          <img
            src={bannerImage}
            alt="Isometric illustration of a layered development stack"
            className="-my-13.25 size-131.5 max-w-none object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
