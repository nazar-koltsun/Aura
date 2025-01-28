import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';

import UsersIcon from '../components/icons/UsersIcon';
import CreditCardIcon from '../components/icons/CreditCardIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import LinkIcon from '../components/icons/LinkIcon';
import GoOutIcon from '../components/icons/GoOutIcon';

const SUPER_ADMIN_NAV_ITEMS = [
  {
    title: 'Użytkownicy',
    path: '/',
    icon: <UsersIcon />,
  },
  {
    title: 'Płatności',
    path: '/payments',
    icon: <CreditCardIcon />,
  },
  {
    title: 'Rozmowy',
    path: '/conversations',
    icon: <PhoneIcon />,
  },
  {
    title: 'Sandbox',
    path: '/sandbox',
    icon: <LinkIcon />,
  },
  {
    title: 'Scenariusz rozmów',
    path: '/interview-script',
    icon: <GoOutIcon />,
  },
  {
    title: 'Ustawienia',
    path: '/settings',
    icon: <GoOutIcon />,
  },
];

const ADMIN_NAV_ITEMS = [
  {
    title: 'Dane Profilu',
    path: '/',
    icon: <UsersIcon />,
  },
  {
    title: 'Płatności',
    path: '/payments',
    icon: <CreditCardIcon />,
  },
  {
    title: 'Rozmowy',
    path: '/conversations',
    icon: <PhoneIcon />,
  },
  {
    title: 'Raporty',
    path: '/sandbox',
    icon: <LinkIcon />,
  },
];

const MainNav = () => {
  const location = useLocation();
  const isSuperAdminMainPage = location.pathname === '/';
  const navItems = isSuperAdminMainPage ? SUPER_ADMIN_NAV_ITEMS : ADMIN_NAV_ITEMS;

  return (
    <nav className="mt-2">
      <ul className='space-y-2'>
        {navItems.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
