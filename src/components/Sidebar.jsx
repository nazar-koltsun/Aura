import MainNav from './MainNav';

import Button from './Button';
import { cn } from '../lib/utils';

import GoOutIcon from '../components/icons/GoOutIcon';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <aside
        className={cn(
          'row-start-2 col-start-1 col-end-2 px-5 py-8 border-r border-[var(--bright-gray)] z-20 bg-white',
          !isOpen && 'max-1024:hidden'
        )}
      >
        <MainNav />

        <Button variant="flat" className="mt-6 ml-4">
          <GoOutIcon />
          Wyloguj się
        </Button>
      </aside>

      <div
        className={cn(
          'hidden max-1024:block absolute z-10 top-0 right-0 bottom-0 w-full left-0 bg-black opacity-50',
          !isOpen && 'max-1024:hidden'
        )}
        onClick={() => closeSidebar()}
      ></div>
    </>
  );
};

export default Sidebar;
