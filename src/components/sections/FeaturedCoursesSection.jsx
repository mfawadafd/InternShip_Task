// src/components/sections/FeaturedCoursesSection.jsx

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CourseCard from '../ui/CourseCard'
import Button from '../ui/Button'
import { courses } from '../../data/courses'

// Filter tabs
const filters = ['All', 'IT & Technology', 'Cyber Security', 'Business', 'Health & Safety']

const FeaturedCoursesSection = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const navigate = useNavigate()

    // Filter logic
    const filteredCourses = activeFilter === 'All'
        ? courses
        : courses.filter((c) => c.category === activeFilter)

    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                            Top Picks
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
                            Featured Courses
                        </h2>
                        <p className="text-slate-500 mt-2">
                            Handpicked courses with the highest ratings and enrollments.
                        </p>
                    </div>

                    {/* View All Button */}
                    <Button
                        variant="outline"
                        size="md"
                        onClick={() => navigate('/courses')}
                        className="shrink-0"
                    >
                        View All Courses <ArrowRight size={15} />
                    </Button>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
                ${activeFilter === filter
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                {...course}
                            />
                        ))}
                    </div>
                ) : (
                    // No results state
                    <div className="text-center py-16">
                        <p className="text-slate-400 text-lg">No courses found in this category.</p>
                        <button
                            onClick={() => setActiveFilter('All')}
                            className="mt-4 text-blue-600 text-sm font-medium hover:underline"
                        >
                            Clear filter
                        </button>
                    </div>
                )}

            </div>
        </section>
    )
}

export default FeaturedCoursesSection