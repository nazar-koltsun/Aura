import NavItem from './NavItem';

import UsersIcon from '../components/icons/UsersIcon';
import CreditCardIcon from '../components/icons/CreditCardIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import LinkIcon from '../components/icons/LinkIcon';
import GoOutIcon from '../components/icons/GoOutIcon';

const NAV_ITEMS = [
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

const MainNav = () => {
  return (
    <nav className="mt-2">
      <ul className='space-y-2'>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
