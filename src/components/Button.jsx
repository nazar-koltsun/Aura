import { cn } from '../lib/utils';

const Button = ({ variant = 'default', children, onClick, className = '', ...props }) => {
  const baseStyles = 'flex items-center gap-3 py-[13px] px-9 font-semibold text-base rounded-full transition duration-300 ease-in-out';

  const variantStyles = {
    flat: 'text-[var(--granite-gray)] font-medium py-0 px-0 hover:underline',
    default: 'text-white bg-[var(--jungle-green)] hover:bg-[#1e6960]',
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;