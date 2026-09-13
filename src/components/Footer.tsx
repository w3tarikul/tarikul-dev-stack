import Logo from './Logo'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/w3tarikul' },
  { name: 'Twitter', url: 'https://x.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
]

const footerGroups = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-8">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-2 flex flex-col gap-3 pr-4">
            <Logo variant="footer" />
            <p className="max-w-96 text-xs leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <ul className="flex items-center gap-4 pt-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xs leading-4 font-semibold text-slate-600 transition-colors hover:text-brand"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="block text-xs leading-4 font-bold tracking-[0.6px] text-slate-900 uppercase">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="block text-xs leading-4 text-slate-500 transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-8">
          <p className="block text-xs leading-4 text-slate-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="block text-xs leading-4 text-slate-400 transition-colors hover:text-brand">
              Privacy
            </a>
            <a href="#" className="block text-xs leading-4 text-slate-400 transition-colors hover:text-brand">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
