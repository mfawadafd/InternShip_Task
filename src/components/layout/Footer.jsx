
import { BookOpen, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
    courses: {
        title: 'Courses',
        links: [
            { label: 'IT & Technology', href: '#' },
            { label: 'Cyber Security', href: '#' },
            { label: 'Business & Management', href: '#' },
            { label: 'Health & Safety', href: '#' },
            { label: 'Construction', href: '#' },
        ],
    },
    company: {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'How It Works', href: '#' },
            { label: 'Become a Provider', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
        ],
    },
    support: {
        title: 'Support',
        links: [
            { label: 'Help Center', href: '#' },
            { label: 'Contact Us', href: '#' },
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Cookie Policy', href: '#' },
        ],
    },
}

const socialLinks = [
    { label: 'FB', name: 'Facebook', href: '#' },
    { label: 'X', name: 'Twitter', href: '#' },
    { label: 'IN', name: 'Instagram', href: '#' },
    { label: 'LI', name: 'LinkedIn', href: '#' },
    { label: 'YT', name: 'YouTube', href: '#' },
]

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">

            <div className="border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        <div>
                            <h3 className="text-white text-xl font-semibold">
                                Stay updated with new courses
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                                Get weekly recommendations straight to your inbox.
                            </p>
                        </div>

                        <div className="flex w-full md:w-auto gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap">
                                Subscribe <ArrowRight size={15} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    <div className="lg:col-span-2">

                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <BookOpen size={18} className="text-white" />
                            </div>
                            <span className="text-white text-xl font-bold tracking-tight">
                                Courses<span className="text-blue-500">4me</span>
                            </span>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Pakistan's leading platform to discover, compare, and book
                            professional training courses near you.
                        </p>

                        <ul className="mt-6 space-y-3 text-sm">
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail size={15} className="text-blue-500 shrink-0" />
                                mfawadafd65@gmail.com
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone size={15} className="text-blue-500 shrink-0" />
                                0312-7315901
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <MapPin size={15} className="text-blue-500 shrink-0" />
                                Islamabad, Pakistan
                            </li>
                        </ul>

                        <div className="flex items-center gap-3 mt-7">
                            {socialLinks.map(({ label, name, href }) => (
                                <Link
                                    key={name}
                                    to={href}
                                    aria-label={name}
                                    className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 text-xs font-semibold hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>

                    </div>

                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                                {section.title}
                            </h4>
                            <ul className="space-y-2.5">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.href}
                                            className="text-slate-400 text-sm hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Courses4me. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5 text-xs text-slate-500">
                        <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer