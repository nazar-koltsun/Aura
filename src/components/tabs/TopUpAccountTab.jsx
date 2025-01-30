import AccountTypeCards from '../AccountTypeCards';
import AccountStatus from '../AccountStatus';
import UserAvatar from '../../assets/images/user-avatar.png';

const USER_DATA = {
  name: 'Trent',
  lastName: 'Adam',
  email: 'trentadam@net',
  avatar: UserAvatar,
  conversationsCount: 3,
  isOnline: true,
};

const TopUpAccountTab = () => {
  return (
    <>
      <AccountTypeCards />
      <AccountStatus user={USER_DATA} className="mt-12" />
    </>
  );
};

export default TopUpAccountTab;
