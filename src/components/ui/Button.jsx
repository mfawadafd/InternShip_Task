
const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white border-transparent',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border-transparent',
    outline: 'bg-transparent hover:bg-blue-50 text-blue-600 border-blue-600',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-600 border-transparent',
}

const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-lg border transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
        >
            {children}
        </button>
    )
}

export default Button