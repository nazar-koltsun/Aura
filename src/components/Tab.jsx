import { cn } from '../lib/utils';

const Tab = ({ activeTab, item, onClick}) => {
  return (
    <li>
      <button
        className={cn(
          'relative pl-7 pr-9 pb-5 text-[var(--granite-gray)] text-lg font-medium',
          activeTab === item && 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-0.5 after:bg-[var(--granite-gray)]'
        )}
        onClick={() => onClick(item)}
      >
        {item}
      </button>
    </li>
  );
};

export default Tab;
