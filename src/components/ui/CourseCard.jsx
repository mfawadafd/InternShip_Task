
import { MapPin, Star, Clock, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

const CourseCard = ({
  id,
  title,
  provider,
  price,
  rating,
  reviewCount,
  location,
  duration,
  seats,
  category,
  image,
  badge,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

      <div className="relative h-44 bg-slate-100 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <span className="text-blue-300 text-4xl font-bold">
              {title?.charAt(0)}
            </span>
          </div>
        )}

        {category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        )}

        {badge && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-amber-400 text-amber-900 text-xs font-semibold rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">

        <p className="text-xs text-slate-400 mb-1 truncate">{provider}</p>

        <h3 className="text-slate-800 font-semibold text-base leading-snug mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="flex flex-col gap-1.5 mb-4">

          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <MapPin size={13} className="text-blue-500 shrink-0" />
            {location}
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Clock size={13} className="text-blue-500 shrink-0" />
            {duration}
          </div>

          {seats && (
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <Users size={13} className="text-blue-500 shrink-0" />
              {seats} seats available
            </div>
          )}

        </div>

        <div className="flex-1" />

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">

          <div className="flex items-center gap-1">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-sm font-semibold text-slate-700">{rating}</span>
            <span className="text-xs text-slate-400">({reviewCount})</span>
          </div>

          <span className="text-blue-600 font-bold text-base">
            {price === 0 ? 'Free' : `£${price}`}
          </span>

        </div>

        <Link to={`/courses/${id}`} className="mt-4">
          <Button variant="primary" fullWidth size="md">
            View Course
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default CourseCard