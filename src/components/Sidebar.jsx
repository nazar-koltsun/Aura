import { useLocation } from 'react-router-dom';

import MainNav from './MainNav';
import Button from './Button';
import { cn } from '../lib/utils';
import UserInfoBox from './UserInfoBox';

import GoOutIcon from '../components/icons/GoOutIcon';
import UserAvatar from '../assets/images/user-avatar.png';

const USER_DATA = {
  name: 'Trent',
  'last-name': 'Adam',
  email: 'trentadam@net',
  avatar: UserAvatar,
  'notifications-count': 3,
  isOnline: true,
}

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  const isSuperAdminMainPage = location.pathname === '/';

  return (
    <>
      <aside
        className={cn(
          'row-start-2 col-start-1 col-end-2 px-5 py-8 border-r border-[var(--bright-gray)] z-20 bg-white',
          !isOpen && 'max-1024:hidden'
        )}
      >
        {!isSuperAdminMainPage && <UserInfoBox user={USER_DATA} className='mb-5' />}

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
