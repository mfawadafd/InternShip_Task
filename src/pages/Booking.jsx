
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
    ArrowLeft, Calendar, User, Mail,
    Phone, Users, CheckCircle, Clock, MapPin
} from 'lucide-react'
import { courses } from '../data/courses'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

const availableDates = [
    '15 June 2025',
    '22 June 2025',
    '1 July 2025',
    '14 July 2025',
]

const Booking = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const course = courses.find((c) => c.id === id)

    // Form state
    const [selectedDate, setSelectedDate] = useState('')
    const [seats, setSeats] = useState(1)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

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

    const totalPrice = course.price * seats

    // ── Validation ───────────────────────────────────
    const validate = () => {
        const newErrors = {}
        if (!form.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!form.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!form.email.trim()) newErrors.email = 'Email is required'
        if (!form.phone.trim()) newErrors.phone = 'Phone is required'
        if (!selectedDate) newErrors.date = 'Please select a date'
        return newErrors
    }

    // ── Submit Handler ───────────────────────────────
    const handleSubmit = () => {
        const newErrors = validate()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        setSubmitted(true)
    }

    // ── Success Screen ───────────────────────────────
    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Booking Confirmed!</h2>
                    <p className="text-slate-500 text-sm mb-2">
                        Thank you, <span className="font-semibold text-slate-700">{form.firstName}</span>!
                    </p>
                    <p className="text-slate-500 text-sm mb-6">
                        Your booking for <span className="font-semibold text-blue-600">{course.title}</span> on{' '}
                        <span className="font-semibold">{selectedDate}</span> has been confirmed.
                        A confirmation email has been sent to{' '}
                        <span className="font-semibold">{form.email}</span>.
                    </p>

                    {/* Booking Summary */}
                    <div className="bg-slate-50 rounded-2xl p-4 text-sm text-left mb-6 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Course</span>
                            <span className="font-medium text-slate-700 text-right max-w-[180px]">{course.title}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-400">Date</span>
                            <span className="font-medium text-slate-700">{selectedDate}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-400">Seats</span>
                            <span className="font-medium text-slate-700">{seats}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-200 pt-2 mt-2">
                            <span className="text-slate-500 font-semibold">Total Paid</span>
                            <span className="font-bold text-blue-600">
                                {course.price === 0 ? 'Free' : `£${totalPrice}`}
                            </span>
                        </div>
                    </div>

                    <Button
                        variant="primary"
                        fullWidth
                        onClick={() => navigate('/')}
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        )
    }

    // ── Booking Form ─────────────────────────────────
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Header */}
            <div className="bg-slate-900 py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-4 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to course
                    </button>
                    <h1 className="text-2xl font-bold text-white">Complete Your Booking</h1>
                    <p className="text-slate-400 text-sm mt-1">{course.title}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* ── Left — Form ────────────────────────── */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Step 1 — Select Date */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-800 mb-1">
                                Step 1 — Select a Date
                            </h2>
                            <p className="text-slate-400 text-sm mb-5">
                                Choose your preferred training date.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {availableDates.map((date) => (
                                    <button
                                        key={date}
                                        onClick={() => {
                                            setSelectedDate(date)
                                            setErrors((e) => ({ ...e, date: '' }))
                                        }}
                                        className={`flex flex-col items-center p-3 rounded-xl border text-sm transition-all
                      ${selectedDate === date
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                                            }`}
                                    >
                                        <Calendar size={16} className="mb-1" />
                                        {date}
                                    </button>
                                ))}
                            </div>
                            {errors.date && (
                                <p className="text-red-500 text-xs mt-2">{errors.date}</p>
                            )}
                        </div>

                        {/* Step 2 — Seats */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-800 mb-1">
                                Step 2 — Number of Seats
                            </h2>
                            <p className="text-slate-400 text-sm mb-5">
                                How many people are attending?
                            </p>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSeats((s) => Math.max(1, s - 1))}
                                    className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 hover:text-blue-600 text-xl font-bold transition-all"
                                >
                                    −
                                </button>
                                <span className="text-2xl font-bold text-slate-800 w-8 text-center">
                                    {seats}
                                </span>
                                <button
                                    onClick={() => setSeats((s) => Math.min(course.seats || 10, s + 1))}
                                    className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-400 hover:text-blue-600 text-xl font-bold transition-all"
                                >
                                    +
                                </button>
                                <span className="text-slate-400 text-sm ml-2">
                                    Max {course.seats} seats available
                                </span>
                            </div>
                        </div>

                        {/* Step 3 — Personal Details */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-800 mb-1">
                                Step 3 — Your Details
                            </h2>
                            <p className="text-slate-400 text-sm mb-5">
                                Enter the lead attendee's information.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    label="First Name"
                                    placeholder="Muhammad"
                                    value={form.firstName}
                                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                    icon={<User size={15} />}
                                    error={errors.firstName}
                                    fullWidth
                                />
                                <Input
                                    label="Last Name"
                                    placeholder="Fawad"
                                    value={form.lastName}
                                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                    icon={<User size={15} />}
                                    error={errors.lastName}
                                    fullWidth
                                />
                                <Input
                                    label="Email Address"
                                    placeholder="you@example.com"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    icon={<Mail size={15} />}
                                    error={errors.email}
                                    fullWidth
                                />
                                <Input
                                    label="Phone Number"
                                    placeholder="+92 300 0000000"
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    icon={<Phone size={15} />}
                                    error={errors.phone}
                                    fullWidth
                                />
                            </div>
                        </div>

                    </div>

                    {/* ── Right — Order Summary ───────────────── */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm sticky top-6">

                            <h3 className="text-base font-bold text-slate-800 mb-4">Order Summary</h3>

                            {/* Course Info */}
                            <div className="pb-4 border-b border-slate-100 space-y-2 text-sm">
                                <p className="font-semibold text-slate-700 leading-snug">{course.title}</p>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <MapPin size={13} /> {course.location}
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <Clock size={13} /> {course.duration}
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <Calendar size={13} />
                                    {selectedDate || 'No date selected'}
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <Users size={13} /> {seats} seat{seats > 1 ? 's' : ''}
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="py-4 border-b border-slate-100 space-y-2 text-sm">
                                <div className="flex justify-between text-slate-500">
                                    <span>Price per seat</span>
                                    <span>{course.price === 0 ? 'Free' : `£${course.price}`}</span>
                                </div>
                                <div className="flex justify-between text-slate-500">
                                    <span>Seats</span>
                                    <span>× {seats}</span>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center pt-4 mb-6">
                                <span className="font-bold text-slate-800">Total</span>
                                <span className="text-2xl font-bold text-blue-600">
                                    {course.price === 0 ? 'Free' : `£${totalPrice}`}
                                </span>
                            </div>

                            <Button
                                variant="primary"
                                fullWidth
                                size="lg"
                                onClick={handleSubmit}
                            >
                                Confirm Booking
                            </Button>

                            <p className="text-center text-slate-400 text-xs mt-3">
                                Free cancellation within 24 hours
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Booking