import { cn } from '../lib/utils';
import UserInfoBox from './UserInfoBox';
import Button from './Button';
import AdminSectionTitle from './AdminSectionTitle';

const AccountStatus = ({ user, className }) => {
  return (
    <div className={cn('flex flex-col place-items-start', className)}>
      <AdminSectionTitle title="Stan konta">
        <div
          className={cn(
            'relative -left-4 mt-1 px-3 text-white text-xs leading-[20px] bg-[var(--jungle-green)] rounded max-1024:-left-2',
            user.conversationsCount === 0 && 'bg-[#EE6663]'
          )}
        >
          Stan konta: {user.conversationsCount} rozmowy
        </div>
      </AdminSectionTitle>

      <UserInfoBox user={user} className="mt-5 min-w-[280px]" />

      <Button
        variant="flat"
        className={cn(
          'mt-3 font-semibold text-sm text-[var(--jungle-green)]',
          user.conversationsCount === 0 && 'text-[#EE6663]'
        )}
      >
        + Przekaż rozmowę pracownikowi {user.conversationsCount === 0 && '- doładuj konto'}
      </Button>
    </div>
  );
};

export default AccountStatus;
