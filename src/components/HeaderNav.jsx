import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import Button from './Button';
import HaaderSubNav from './HaaderSubNav';

import BurgerIconSmall from './icons/BurgerIconSmall';
import CloseIcon from './icons/CloseIcon';

const HeaderNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  const renderNavItem = (item, isLastItem, index) => {
    const baseClasses =
      'max-960:block px-5 max-960:py-4 text-center text-[var(--granite-gray)] font-medium hover:text-[var(--sandy-brown)] transition duration-200 ease-in-out max-960:text-lg';

    if (isLastItem) {
      return (
        <Button
          key={item.title}
          path={item.path}
          className="ml-5 py-2.5 px-5 max-960:mt-4 max-960:ml-0 text-sm bg-[var(--sandy-brown)] hover:bg-[#DE8640] text-center max-960:text-lg"
        >
          {item.title}
        </Button>
      );
    }

    return (
      <div key={item.title} className="group relative max-960:w-full max-960:text-center 
      max-960:border-b max-960:border-b-[var(--cultured)]}">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            cn(baseClasses, isActive && 'text-[var(--sandy-brown)]')
          }
        >
          {item.title}
        </NavLink>

        {item.submenu && <HaaderSubNav submenu={item.submenu} />}
      </div>
    );
  };

  return (
    <div className="flex items-center ml-auto">
      <button
        className={cn(
          'hidden group max-960:flex justify-center items-center w-8 h-8 -mr-2',
          isOpen && 'max-960:hidden'
        )}
        onClick={openNav}
      >
        <BurgerIconSmall
          className={cn(
            'group-hover:fill-[var(--sandy-brown)] transition duration-200 ease-in-out'
          )}
        />
      </button>

      <div
        className={cn(
          'max-960:hidden max-960:fixed max-960:top-0 max-960:left-0 max-960:w-full max-960:h-full max-960:pt-14 max-960:px-4 max-960:pb-4 max-960:bg-white z-10',
          isOpen && 'max-960:block'
        )}
      >
        <button
          className={cn(
            'hidden group absolute top-3 right-3 justify-center items-center w-8 h-8',
            isOpen && 'max-960:flex'
          )}
          onClick={closeNav}
        >
          <CloseIcon
            className={cn(
              'group-hover:fill-[var(--sandy-brown)] transition duration-200 ease-in-out'
            )}
          />
        </button>

        <div className='flex items-center max-960:flex-col'>
          {navItems.map((item, index) =>
            renderNavItem(item, index === navItems.length - 1, index)
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
