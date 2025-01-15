import { cn } from '../lib/utils';

const FormLabel = ({ htmlFor, children, className = '' }) => {
  return (
    <label className={cn("text-[var(--taupe-gray)] font-semibold", className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default FormLabel;
