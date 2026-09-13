import { useEffect, useState } from 'react'
import hamburgerIcon from '../assets/hamburger.png'
import Logo from './Logo'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto grid h-12 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:h-16 sm:px-8 lg:flex lg:h-20 lg:justify-between">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="flex size-6 cursor-pointer items-center justify-center lg:hidden"
        >
          {isMenuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#7b7171" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 3l12 12M15 3L3 15" />
            </svg>
          ) : (
            <img src={hamburgerIcon} alt="" className="h-3.5 w-4.5" />
          )}
        </button>

        <Logo />

        <nav className="hidden lg:mr-auto lg:ml-12 lg:block xl:ml-64.5">
          <ul className="flex items-center gap-7.25">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleLinkClick(link)}
                  className={`text-sm leading-5 transition-colors hover:text-brand ${
                    activeLink === link ? 'font-semibold text-brand' : 'font-medium text-slate-600'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3.5 sm:gap-5">
          <button
            type="button"
            className="cursor-pointer font-inter text-[9px] font-bold text-gray-600 transition-colors hover:text-brand sm:font-sans sm:text-sm sm:leading-5 sm:font-medium sm:text-slate-700"
          >
            Sign In
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-brand-button px-2.5 py-1 text-[9px] leading-2.75 font-semibold text-white shadow-[0_1px_2px_0_#fbcfe8] transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm sm:leading-5"
          >
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute inset-x-0 top-full border-b border-slate-100 bg-white shadow-sm lg:hidden">
          <ul className="flex flex-col px-5 py-2 sm:px-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleLinkClick(link)}
                  className={`block py-2.5 text-sm leading-5 transition-colors hover:text-brand ${
                    activeLink === link ? 'font-semibold text-brand' : 'font-medium text-slate-600'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
