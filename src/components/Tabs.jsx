import { cn } from '../lib/utils';
import Tab from './Tab';

const Tabs = ({ items, activeTab, onClick, className }) => {
  return (
    <ul className={cn('flex border-b border-[#EBEBEB]', className)}>
      {items.map((item, index) => (
        <Tab key={index} item={item} activeTab={activeTab} onClick={onClick} />
      ))}
    </ul>
  );
};

export default Tabs;
