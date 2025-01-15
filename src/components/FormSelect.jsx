import { cn } from '../lib/utils';
import ArrowDownIcon from '../components/icons/ArrowDownIcon';

const FormSelect = ({
  id,
  name,
  value,
  onChange,
  options = [], // Array of options to populate the select menu
  placeholder = 'Select an option', // Default placeholder
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          'appearance-none w-full h-[52px] py-3 px-5 border-2 border-[#D1D1D3] rounded-xl text-[var(--granite-gray)] bg-white',
          className
        )}
        required={required}
        {...props}
      >
        <option value="" disabled style={{ color: '#9E9E9E' }}>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ArrowDownIcon />
      </div>
      
    </div>
  );
};

export default FormSelect;
