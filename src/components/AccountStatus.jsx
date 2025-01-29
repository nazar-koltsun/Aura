import { cn } from '../lib/utils';
import UserInfoBox from './UserInfoBox';
import UserAvatar from '../assets/images/user-avatar.png';
import Button from './Button';

const USER_DATA = {
  name: 'Trent',
  'last-name': 'Adam',
  email: 'trentadam@net',
  avatar: UserAvatar,
  'conversations-count': 3,
  isOnline: true,
};

const AccountStatus = ({ user = USER_DATA, className }) => {
  return (
    <div className={cn('flex flex-col place-items-start', className)}>
      <div className="relative flex items-start w-full after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[1px] after:h-[1px] after:bg-[#EBEBEB]">
        <h2 className='relative pl-7 pr-9 pb-5 text-[var(--granite-gray)] text-lg font-medium max-1024:pl-4 max-1024:pr-5 max-1024:pb-3 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[var(--granite-gray)] after:z-10'>
          Stan konta
        </h2>

        <div className="relative -left-4 mt-1 px-3 text-white text-xs leading-[20px] bg-[var(--jungle-green)] rounded max-1024:-left-2">
          Stan konta: {user['conversations-count']} rozmowy
        </div>
      </div>

      <UserInfoBox user={user} className="mt-5 min-w-[280px]" />

      <Button variant='flat' className='mt-3 font-semibold text-sm text-[var(--jungle-green)]'>
        + Przekaż rozmowę pracownikowi
      </Button>
    </div>
  );
};

export default AccountStatus;
