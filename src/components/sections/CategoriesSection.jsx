import { useNavigate } from 'react-router-dom'
import {
    Monitor, Shield, Briefcase, HeartPulse,
    HardHat, Truck, FlameKindling, Leaf
} from 'lucide-react'

const categories = [
    { label: 'IT & Technology', icon: Monitor, color: 'bg-blue-50 text-blue-600', count: 120 },
    { label: 'Cyber Security', icon: Shield, color: 'bg-red-50 text-red-500', count: 85 },
    { label: 'Business & Management', icon: Briefcase, color: 'bg-amber-50 text-amber-600', count: 97 },
    { label: 'Health & Safety', icon: HeartPulse, color: 'bg-green-50 text-green-600', count: 143 },
    { label: 'Construction', icon: HardHat, color: 'bg-orange-50 text-orange-500', count: 64 },
    { label: 'Transport & Logistics', icon: Truck, color: 'bg-sky-50 text-sky-600', count: 52 },
    { label: 'Fire Safety', icon: FlameKindling, color: 'bg-rose-50 text-rose-500', count: 38 },
    { label: 'Environment', icon: Leaf, color: 'bg-teal-50 text-teal-600', count: 44 },
]

const CategoriesSection = () => {
    const navigate = useNavigate()

    const handleCategoryClick = (label) => {
        navigate(`/courses?category=${encodeURIComponent(label)}`)
    }

    return (
        <section className="bg-slate-50 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                        Browse by Category
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
                        What do you want to learn?
                    </h2>
                    <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                        Explore courses across industries — from tech to safety to business.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {categories.map(({ label, icon: Icon, color, count }) => (
                        <button
                            key={label}
                            onClick={() => handleCategoryClick(label)}
                            className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}>
                                <Icon size={26} />
                            </div>

                            <h3 className="text-slate-700 font-semibold text-sm leading-snug mb-1">
                                {label}
                            </h3>

                            <p className="text-slate-400 text-xs">
                                {count} courses
                            </p>
                        </button>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default CategoriesSection