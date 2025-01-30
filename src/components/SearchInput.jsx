import { cn } from '../lib/utils';
import SearchIcon from "./icons/SearchIcon";

const SearchInput = ({ onChange, value, className, placeholder = 'Szukaj', ...props }) => {
  return (
    <div className={cn('relative', className)}>
      <input
        type="text"
        className={cn('py-2.5 pl-10 pr-4 min-w-[215px] bg-[var(--ghost-white)] text-[var(--granite-gray)] text-xs tracking-tighter w-full focus:outline-none rounded-[10px]', className)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none' />
    </div>
  );
};

export default SearchInput;