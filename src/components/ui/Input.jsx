
import { Search } from 'lucide-react'

const Input = ({
    type = 'text',
    placeholder = '',
    value,
    onChange,
    icon,
    iconPosition = 'left',
    error,
    label,
    fullWidth = false,
    className = '',
}) => {
    return (
        <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : ''}`}>

            {label && (
                <label className="text-sm font-medium text-slate-700">
                    {label}
                </label>
            )}

            <div className="relative">

                {icon && iconPosition === 'left' && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                        {icon}
                    </div>
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`
            w-full px-4 py-3 rounded-lg border bg-white text-slate-800
            placeholder-slate-400 text-sm
            border-slate-200 focus:outline-none focus:border-blue-500
            focus:ring-2 focus:ring-blue-100 transition-all
            ${icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${icon && iconPosition === 'right' ? 'pr-10' : ''}
            ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}
            ${className}
          `}
                />

                {icon && iconPosition === 'right' && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        {icon}
                    </div>
                )}

            </div>

            {error && (
                <p className="text-red-500 text-xs mt-0.5">{error}</p>
            )}

        </div>
    )
}

export default Input