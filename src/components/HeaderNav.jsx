import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import Button from './Button';

const HeaderNav = ({ navItems }) => {
  // Helper to render navigation items
  const renderNavItem = (item, isLastItem, index) => {
    const baseClasses =
      'text-[var(--granite-gray)] font-medium hover:text-[var(--sandy-brown)] transition duration-200 ease-in-out';

    if (isLastItem) {
      return (
        <Button
          key={item.title}
          path={item.path}
          className="py-2.5 px-5 text-sm bg-[var(--sandy-brown)] hover:bg-[#DE8640]"
        >
          {item.title}
        </Button>
      );
    }

    return (
      <NavLink
        key={item.title}
        to={item.path}
        className={({ isActive }) =>
          cn(baseClasses, isActive && 'text-[var(--sandy-brown)]')
        }
      >
        {item.title}
      </NavLink>
    );
  };

  return (
    <div className="flex items-center gap-7 ml-auto">
      {navItems.map((item, index) =>
        renderNavItem(item, index === navItems.length - 1, index)
      )}
    </div>
  );
};

export default HeaderNav;
