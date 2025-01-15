import { cn } from '../lib/utils';

const FormAgreementCheckbox = ({
  checked = false,
  label,
  className = '',
  ...props
}) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <input
        type="checkbox"
        id="agreement"
        name="agreement"
        checked={checked}
        className="w-5 h-5"
        {...props}
      />
      <label htmlFor="agreement" className="text-[var(--granite-gray)] text-sm">
        {label}
      </label>
    </div>
  );
};

export default FormAgreementCheckbox;
