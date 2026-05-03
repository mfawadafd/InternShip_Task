
import { useState } from 'react'
import { Search, MapPin, ArrowRight, Star, Users, BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import Input from '../ui/Input'

const suggestions = [
    'IOSH Managing Safely',
    'CompTIA Security+',
    'PMP Certification',
    'First Aid',
    'Data Analysis',
]

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (!searchQuery.trim()) return
        navigate(`/courses?q=${searchQuery}&location=${location}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch()
    }

    return (
        <section className="relative bg-slate-900 overflow-hidden">

            <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] bg-blue-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-blue-400 opacity-10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="max-w-3xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                        <BookOpen size={14} />
                        Pakistan's #1 Course Discovery Platform
                    </div>


                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
                        Find the Right{' '}
                        <span className="text-blue-500">Course</span>{' '}
                        Near You
                    </h1>


                    <p className="text-slate-400 text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
                        Search, compare, and book professional training courses
                        across Pakistan — all in one place.
                    </p>

                    <div className="bg-white rounded-2xl p-3 shadow-xl flex flex-col sm:flex-row gap-3">

                        <div className="flex-1">
                            <Input
                                placeholder="What course are you looking for?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                icon={<Search size={16} />}
                                iconPosition="left"
                                fullWidth
                            />
                        </div>

                        <div className="hidden sm:block w-px bg-slate-200 self-stretch" />

                        <div className="flex-1">
                            <Input
                                placeholder="Location (e.g. Islamabad)"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                onKeyDown={handleKeyDown}
                                icon={<MapPin size={16} />}
                                iconPosition="left"
                                fullWidth
                            />
                        </div>

                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleSearch}
                            className="sm:w-auto w-full shrink-0"
                        >
                            Search
                            <ArrowRight size={16} />
                        </Button>

                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                        <span className="text-slate-500 text-sm">Popular:</span>
                        {suggestions.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSearchQuery(s)}
                                className="px-3 py-1 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 hover:border-blue-600 transition-all"
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">

                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">500+</p>
                        <p className="text-slate-400 text-sm mt-1">Courses Available</p>
                    </div>

                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">50+</p>
                        <p className="text-slate-400 text-sm mt-1">Training Providers</p>
                    </div>

                    <div className="text-center col-span-2 md:col-span-1">
                        <p className="text-3xl font-bold text-white">10k+</p>
                        <p className="text-slate-400 text-sm mt-1">Students Enrolled</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HeroSection