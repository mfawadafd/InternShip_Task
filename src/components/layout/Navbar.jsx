import { Link } from "react-router-dom"
import { BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
        { name: "Contact", path: "/" },
        { name: "Support", path: "/" },
        { name: "About", path: "/" },
    ]
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                            Courses4Me
                        </span>
                    </Link>
                    <ul className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.path}
                                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md transition hover:bg-blue-50"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
                            Sign in
                        </button>
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                            Try it for free
                        </button>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-4 pt-3 space-y-2">
                            <button className="w-full text-left text-gray-600 py-2">
                                Sign in
                            </button>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                                Try it for free
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Navbar
