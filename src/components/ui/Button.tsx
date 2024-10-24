interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  isActive = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'rounded-lg transition-colors duration-200 shadow-lg font-medium';

  const variantStyles = {
    primary: `${
      isActive
        ? 'bg-violet-500 text-white shadow-violet-500/20'
        : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
    }`,
    secondary: `${
      isActive
        ? 'bg-slate-600 text-white shadow-slate-500/20'
        : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
    }`,
    success: `${
      isActive
        ? 'bg-emerald-500 text-white shadow-emerald-500/20'
        : 'bg-slate-700 text-slate-200 hover:bg-emerald-600'
    }`,
    danger: `${
      isActive
        ? 'bg-pink-500 text-white shadow-pink-500/20'
        : 'bg-slate-700 text-slate-200 hover:bg-pink-600'
    }`,
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
