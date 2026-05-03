// src/pages/CourseDetail.jsx

import { useParams, useNavigate } from 'react-router-dom'
import {
    MapPin, Clock, Users, Star, CheckCircle,
    ArrowLeft, Calendar, Building2, Award
} from 'lucide-react'
import { courses } from '../data/courses'
import Button from '../components/ui/Button'

const CourseDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // Find course by id
    const course = courses.find((c) => c.id === id)

    // Course not found
    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <p className="text-slate-500 text-xl mb-4">Course not found.</p>
                <Button variant="primary" onClick={() => navigate('/courses')}>
                    Back to Courses
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">

            {/* ── Hero Banner ─────────────────────────────── */}
            <div className="bg-slate-900 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to results
                    </button>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Left — Title + Meta */}
                        <div className="flex-1">

                            {/* Category Badge */}
                            {course.category && (
                                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-4">
                                    {course.category}
                                </span>
                            )}

                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                                {course.title}
                            </h1>

                            {/* Meta Row */}
                            <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <Building2 size={15} className="text-blue-400" />
                                    {course.provider}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={15} className="text-blue-400" />
                                    {course.location}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={15} className="text-blue-400" />
                                    {course.duration}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Star size={15} className="text-amber-400 fill-amber-400" />
                                    {course.rating} ({course.reviewCount} reviews)
                                </div>
                            </div>

                        </div>

                        {/* Right — Price Card */}
                        <div className="bg-white rounded-2xl p-6 w-full md:w-72 shrink-0 shadow-lg">

                            <p className="text-3xl font-bold text-blue-600 mb-1">
                                {course.price === 0 ? 'Free' : `£${course.price}`}
                            </p>
                            <p className="text-slate-400 text-xs mb-5">Per person, all taxes included</p>

                            {course.seats && (
                                <div className="flex items-center gap-2 text-amber-600 bg-amber-50 rounded-lg px-3 py-2 text-sm mb-5">
                                    <Users size={14} className="shrink-0" />
                                    Only {course.seats} seats left
                                </div>
                            )}

                            <Button
                                variant="primary"
                                fullWidth
                                size="lg"
                                onClick={() => navigate(`/booking/${course.id}`)}
                            >
                                Book Now
                            </Button>

                            <p className="text-center text-slate-400 text-xs mt-3">
                                Free cancellation within 24 hours
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* ── Main Content ────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column — Course Info */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* About */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">About This Course</h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                This professional training course is designed to equip participants with
                                the knowledge and skills needed to excel in their field. Delivered by
                                experienced instructors, the course combines theory with practical
                                application to ensure maximum learning outcomes.
                            </p>
                            <p className="text-slate-500 text-sm leading-relaxed mt-3">
                                Upon successful completion, participants will receive an internationally
                                recognised certificate that demonstrates their competence and commitment
                                to professional development.
                            </p>
                        </div>

                        {/* What You Will Learn */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">What You Will Learn</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    'Core concepts and fundamentals',
                                    'Industry best practices',
                                    'Hands-on practical skills',
                                    'Risk assessment techniques',
                                    'Regulatory compliance',
                                    'Real-world case studies',
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Course Includes */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Course Includes</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { icon: Clock, text: `${course.duration} of training` },
                                    { icon: Award, text: 'Certificate of completion' },
                                    { icon: Users, text: 'Small group sessions' },
                                    { icon: Calendar, text: 'Flexible booking dates' },
                                ].map(({ icon: Icon, text }) => (
                                    <div key={text} className="flex items-center gap-3 text-slate-600 text-sm">
                                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                            <Icon size={15} className="text-blue-600" />
                                        </div>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column — Sidebar */}
                    <div className="space-y-6">

                        {/* Provider Info */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h3 className="text-base font-bold text-slate-800 mb-4">Training Provider</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                    <Building2 size={22} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800 text-sm">{course.provider}</p>
                                    <p className="text-slate-400 text-xs">Verified Provider</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <Star size={14} className="text-amber-400 fill-amber-400" />
                                <span className="font-semibold text-slate-700">{course.rating}</span>
                                <span className="text-slate-400">({course.reviewCount} reviews)</span>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h3 className="text-base font-bold text-slate-800 mb-4">Quick Info</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-center justify-between">
                                    <span className="text-slate-400">Duration</span>
                                    <span className="font-medium">{course.duration}</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-slate-400">Location</span>
                                    <span className="font-medium">{course.location}</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-slate-400">Seats Left</span>
                                    <span className="font-medium text-amber-600">{course.seats}</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-slate-400">Price</span>
                                    <span className="font-bold text-blue-600">
                                        {course.price === 0 ? 'Free' : `£${course.price}`}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* CTA — Mobile hidden (already in hero) */}
                        <div className="hidden lg:block">
                            <Button
                                variant="primary"
                                fullWidth
                                size="lg"
                                onClick={() => navigate(`/booking/${course.id}`)}
                            >
                                Book This Course
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail