import Logo from './Logo'

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/w3tarikul' },
    { name: 'Twitter', url: 'https://x.com/Alamhasu' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alamhasu/' },
]

const footerGroups = [
    {
        title: 'Product',
        links: [
            { label: 'Home', href: '#' },
            { label: 'Technologies', href: '#technologies' },
            { label: 'Projects', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'Careers', href: '#' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
        ],
    },
]

function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white px-6 pt-8 pb-12 sm:border-slate-100 sm:px-0 sm:pt-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:gap-14 sm:px-8">
                <div className="flex flex-col items-center sm:grid sm:grid-cols-3 sm:items-start sm:gap-10 lg:grid-cols-5">
                    <div className="flex flex-col items-center gap-3 text-center sm:col-span-3 sm:items-start sm:pr-4 sm:text-left lg:col-span-2">
                        <Logo variant="footer" />
                        <p className="max-w-80 font-inter text-xs leading-relaxed text-gray-500 sm:max-w-96 sm:font-sans sm:text-slate-500">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <ul className="flex items-center pt-1 pb-3 sm:gap-4 sm:pt-3 sm:pb-0">
                            {socialLinks.map((social, index) => (
                                <li key={social.name} className="flex items-center">
                                    {index > 0 && (
                                        <span aria-hidden="true" className="px-4 font-inter text-xs leading-4 text-gray-600 sm:hidden">
                                            •
                                        </span>
                                    )}
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block font-inter text-xs leading-4 text-gray-600 transition-colors hover:text-brand sm:font-sans sm:font-semibold sm:text-slate-600"
                                    >
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {footerGroups.map((group) => (
                        <div key={group.title} className="hidden sm:flex sm:flex-col sm:gap-4">
                            <h4 className="text-xs leading-4 font-bold tracking-[0.6px] text-slate-900 uppercase">
                                {group.title}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="block text-xs leading-4 text-slate-500 transition-colors hover:text-brand">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 sm:border-slate-100 sm:pt-8">
                    <p className="font-inter text-[11px] leading-normal text-gray-400 sm:font-sans sm:text-xs sm:leading-4 sm:text-slate-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-6">
                        <a href="#" className="block font-inter text-[11px] leading-normal text-gray-400 transition-colors hover:text-brand sm:font-sans sm:text-xs sm:leading-4 sm:text-slate-400">
                            Privacy
                        </a>
                        <a href="#" className="block font-inter text-[11px] leading-normal text-gray-400 transition-colors hover:text-brand sm:font-sans sm:text-xs sm:leading-4 sm:text-slate-400">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
