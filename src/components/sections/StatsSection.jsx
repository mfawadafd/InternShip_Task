
import { Users, BookOpen, Building2, Star } from 'lucide-react'

const stats = [
    {
        icon: BookOpen,
        value: '500+',
        label: 'Courses Available',
        description: 'Across all industries',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        icon: Users,
        value: '10,000+',
        label: 'Students Enrolled',
        description: 'And growing every day',
        color: 'bg-green-50 text-green-600',
    },
    {
        icon: Building2,
        value: '50+',
        label: 'Training Providers',
        description: 'Verified & trusted',
        color: 'bg-amber-50 text-amber-500',
    },
    {
        icon: Star,
        value: '4.8',
        label: 'Average Rating',
        description: 'From verified reviews',
        color: 'bg-purple-50 text-purple-600',
    },
]

const StatsSection = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                        Our Numbers
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
                        Trusted by Thousands
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                        Courses4me is Pakistan's fastest growing course discovery platform.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map(({ icon: Icon, value, label, description, color }) => (
                        <div
                            key={label}
                            className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 ${color}`}>
                                <Icon size={26} />
                            </div>

                            {/* Value */}
                            <p className="text-4xl font-bold text-slate-800 mb-1">
                                {value}
                            </p>

                            {/* Label */}
                            <p className="text-slate-700 font-semibold text-base mb-1">
                                {label}
                            </p>

                            {/* Description */}
                            <p className="text-slate-400 text-sm">
                                {description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default StatsSection