import { cn } from '../lib/utils';
import Tab from './Tab';

const Tabs = ({ items, activeTab, onClick, className }) => {
  return (
    <>
      <ul className={cn('relative flex overflow-x-auto after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-[1px] after:h-[1px] after:bg-[#EBEBEB]', className)}>
        {items.map((item, index) => (
          <Tab key={index} item={item} activeTab={activeTab} onClick={onClick} />
        ))}
      </ul>
    </>
  );
};

export default Tabs;
