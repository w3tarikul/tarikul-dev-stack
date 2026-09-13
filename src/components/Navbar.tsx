import { useState } from 'react'
import Logo from './Logo'

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Logo />

        <nav className="mr-auto ml-64.5">
          <ul className="flex items-center gap-7.25">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActiveLink(link)}
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

        <div className="flex items-center justify-end gap-5">
          <button
            type="button"
            className="cursor-pointer text-sm leading-5 font-medium text-slate-700 transition-colors hover:text-brand"
          >
            Sign In
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-brand-button px-5 py-2.5 text-sm leading-5 font-semibold text-white shadow-[0_1px_2px_0_#fbcfe8] transition hover:brightness-110"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
