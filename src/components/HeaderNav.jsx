import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import Button from './Button';
import HaaderSubNav from './HaaderSubNav';

const HeaderNav = ({ navItems }) => {
  const renderNavItem = (item, isLastItem, index) => {
    const baseClasses =
      'px-5 text-[var(--granite-gray)] font-medium hover:text-[var(--sandy-brown)] transition duration-200 ease-in-out';

    if (isLastItem) {
      return (
        <Button
          key={item.title}
          path={item.path}
          className="ml-5 py-2.5 px-5 text-sm bg-[var(--sandy-brown)] hover:bg-[#DE8640]"
        >
          {item.title}
        </Button>
      );
    }

    return (
      <div key={item.title} className="group relative">
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
      {navItems.map((item, index) =>
        renderNavItem(item, index === navItems.length - 1, index)
      )}
    </div>
  );
};

export default HeaderNav;
