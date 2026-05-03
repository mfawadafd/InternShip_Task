import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
const perks = [
    'Free to search and compare',
    'Verified training providers',
    'Instant booking confirmation',
]
const CTASection = () => {
    const navigate = useNavigate()
    return (
        <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] bg-blue-400 opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl px-8 py-14 md:px-16 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <BookOpen size={30} className="text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Ready to Advance Your Career?
                    </h2>
                    <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                        Join thousands of professionals who found and booked their perfect
                        course through Courses4me.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        {perks.map((perk) => (
                            <div key={perk} className="flex items-center gap-2 text-blue-100 text-sm">
                                <CheckCircle size={16} className="text-white shrink-0" />
                                {perk}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="ghost"
                            size="lg"
                            onClick={() => navigate('/courses')}
                            className="bg-white text-blue-600 hover:bg-blue-50 border-transparent w-full sm:w-auto"
                        >
                            Browse Courses <ArrowRight size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => navigate('/contact')}
                            className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CTASection
