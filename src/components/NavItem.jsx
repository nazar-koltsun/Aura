import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

import ArrowRightIcon from '../components/icons/ArrowRightIcon';

const NavItem = ({ title, path, icon }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            'flex items-center gap-3 py-4 px-4 text-[var(--granite-gray)] rounded-full transition duration-200 ease-in-out hover:bg-[#E8F4F3] font-medium',
            isActive && 'bg-[#E8F4F3] font-semibold'
          )
        }
      >
        {({ isActive }) => (
          <>
            {icon}
            {title}
            {isActive && <ArrowRightIcon className={'ml-auto'} />}
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
