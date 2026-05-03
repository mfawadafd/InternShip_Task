// src/pages/SearchResults.jsx

import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Search, MapPin, SlidersHorizontal, X } from 'lucide-react'
import CourseCard from '../components/ui/CourseCard'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { courses } from '../data/courses'

const categories = ['All', 'IT & Technology', 'Cyber Security', 'Business', 'Health & Safety']
const durations = ['Any', '1 Day', '3 Days', '5 Days', '12 Weeks']
const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Top Rated']

const SearchResults = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    // Search state — prefill from URL params
    const [query, setQuery] = useState(searchParams.get('q') || '')
    const [location, setLocation] = useState(searchParams.get('location') || '')

    // Filter state
    const [category, setCategory] = useState(searchParams.get('category') || 'All')
    const [duration, setDuration] = useState('Any')
    const [sortBy, setSortBy] = useState('Relevance')
    const [showFilters, setShowFilters] = useState(false)

    // Filtered results
    const [results, setResults] = useState([])

    // ── Filter + Sort logic ──────────────────────────────
    useEffect(() => {
        let filtered = [...courses]

        // Filter by search query
        if (query) {
            filtered = filtered.filter((c) =>
                c.title.toLowerCase().includes(query.toLowerCase()) ||
                c.provider.toLowerCase().includes(query.toLowerCase())
            )
        }

        // Filter by location
        if (location) {
            filtered = filtered.filter((c) =>
                c.location.toLowerCase().includes(location.toLowerCase())
            )
        }

        // Filter by category
        if (category !== 'All') {
            filtered = filtered.filter((c) => c.category === category)
        }

        // Filter by duration
        if (duration !== 'Any') {
            filtered = filtered.filter((c) => c.duration === duration)
        }

        // Sort
        if (sortBy === 'Price: Low to High') {
            filtered.sort((a, b) => a.price - b.price)
        } else if (sortBy === 'Price: High to Low') {
            filtered.sort((a, b) => b.price - a.price)
        } else if (sortBy === 'Top Rated') {
            filtered.sort((a, b) => b.rating - a.rating)
        }

        setResults(filtered)
    }, [query, location, category, duration, sortBy])

    // ── Search handler ───────────────────────────────────
    const handleSearch = () => {
        navigate(`/courses?q=${query}&location=${location}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch()
    }

    const clearFilters = () => {
        setCategory('All')
        setDuration('Any')
        setSortBy('Relevance')
    }

    const activeFilterCount = [
        category !== 'All',
        duration !== 'Any',
        sortBy !== 'Relevance',
    ].filter(Boolean).length

    return (
        <div className="min-h-screen bg-slate-50">

            {/* ── Search Bar Header ──────────────────────────── */}
            <div className="bg-slate-900 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-3 flex flex-col sm:flex-row gap-3">

                        <div className="flex-1">
                            <Input
                                placeholder="Search courses..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
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
                            className="shrink-0 w-full sm:w-auto"
                        >
                            Search
                        </Button>

                    </div>
                </div>
            </div>

            {/* ── Main Content ───────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Results count + filter toggle */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-slate-600 text-sm">
                        <span className="font-semibold text-slate-800">{results.length}</span> courses found
                        {query && <span> for <span className="text-blue-600 font-medium">"{query}"</span></span>}
                    </p>

                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
                    >
                        <SlidersHorizontal size={15} />
                        Filters
                        {activeFilterCount > 0 && (
                            <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                                {activeFilterCount}
                            </span>
                        )}
                    </button>
                </div>

                {/* ── Filter Panel ─────────────────────────────── */}
                {showFilters && (
                    <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-6 shadow-sm">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="font-semibold text-slate-800">Filters</h3>
                            {activeFilterCount > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-1 text-red-500 text-sm hover:underline"
                                >
                                    <X size={13} /> Clear all
                                </button>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                            {/* Category Filter */}
                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                    Category
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setCategory(cat)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all
                        ${category === cat
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration Filter */}
                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                    Duration
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {durations.map((d) => (
                                        <button
                                            key={d}
                                            onClick={() => setDuration(d)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all
                        ${duration === d
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                                                }`}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort Filter */}
                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                                    Sort By
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {sortOptions.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSortBy(s)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all
                        ${sortBy === s
                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* ── Course Grid ───────────────────────────────── */}
                {results.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {results.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-xl mb-2">No courses found</p>
                        <p className="text-slate-400 text-sm mb-6">
                            Try different keywords or clear your filters
                        </p>
                        <Button variant="outline" onClick={clearFilters}>
                            Clear Filters
                        </Button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default SearchResults