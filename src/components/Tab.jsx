import { cn } from '../lib/utils';

const Tab = ({ activeTab, item, onClick}) => {
  return (
    <li className='shrink-0'>
      <button
        className={cn(
          'relative pl-7 pr-9 pb-5 text-[var(--granite-gray)] text-lg font-medium max-1024:pl-4 max-1024:pr-5 max-1024:pb-3 max-1024:text-base',
          activeTab === item && 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[var(--granite-gray)] after:z-10'
        )}
        onClick={() => onClick(item)}
      >
        {item}
      </button>
    </li>
  );
};

export default Tab;
