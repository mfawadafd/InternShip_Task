
import { Search, GitCompare, CalendarCheck, ArrowRight } from 'lucide-react'

const steps = [
    {
        step: '01',
        icon: Search,
        title: 'Search',
        description:
            'Enter the course you need and your location. Filter by category, price, or duration to narrow down results.',
        color: 'bg-blue-50 text-blue-600',
        border: 'border-blue-100',
    },
    {
        step: '02',
        icon: GitCompare,
        title: 'Compare',
        description:
            'Compare courses side by side — check ratings, prices, provider reputation, and available dates.',
        color: 'bg-amber-50 text-amber-500',
        border: 'border-amber-100',
    },
    {
        step: '03',
        icon: CalendarCheck,
        title: 'Book',
        description:
            'Choose your preferred date and book instantly. Get a confirmation straight to your inbox.',
        color: 'bg-green-50 text-green-600',
        border: 'border-green-100',
    },
]

const HowItWorksSection = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                        Simple Process
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
                        How It Works
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                        From search to booking — it takes less than 5 minutes.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

                    {steps.map(({ step, icon: Icon, title, description, color, border }, index) => (
                        <div key={step} className="relative flex flex-col items-center text-center">

                            {/* Connector Arrow — desktop only, not on last item */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex absolute top-10 left-[60%] w-[40%] items-center justify-center z-10">
                                    <ArrowRight size={20} className="text-slate-300" />
                                </div>
                            )}

                            {/* Card */}
                            <div className={`w-full bg-white rounded-2xl border ${border} shadow-sm p-8 hover:shadow-md transition-shadow duration-300`}>

                                {/* Step Number */}
                                <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">
                                    Step {step}
                                </span>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-5 ${color}`}>
                                    <Icon size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default HowItWorksSection