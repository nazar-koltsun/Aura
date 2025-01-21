import { cn } from '../lib/utils';

const FormAgreementCheckbox = ({
  name = 'agreement',
  checked = false,
  label,
  className = '',
  isSmall = false,
  ...props
}) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        className={cn("w-5 h-5", isSmall && 'w-4 h-4')}
        {...props}
      />
      <label htmlFor={name} className={cn("text-[var(--granite-gray)] text-sm", isSmall && 'text-[10px]')}>
        {label}
      </label>
    </div>
  );
};

export default FormAgreementCheckbox;
