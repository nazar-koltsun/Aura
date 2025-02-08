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

const ACCOUNT_TYPE_CARDS = [
  {
    type: 'standard',
    title: 'Podstawowy',
    subtitle: 'Indywidualna wycena',
    plan_limit_price: '3 rozmowy',
    btn_title: 'Skontaktuj się',
    url: '/conversations/card-1',
    features: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'],
  },
  {
    type: 'premium',
    title: 'Premium',
    subtitle: 'Indywidualna wycena',
    plan_limit_price: '10 rozmowy',
    btn_title: 'Skontaktuj się',
    url: '/conversations/card-2',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    type: 'standard',
    title: 'Standardowy',
    subtitle: 'Indywidualna wycena',
    plan_limit_price: '5 rozmów',
    btn_title: 'Skontaktuj się',
    url: '/conversations/card-3',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
];

const TopUpAccountTab = () => {
  return (
    <>
      <AccountTypeCards cards={ACCOUNT_TYPE_CARDS} />
      <AccountStatus user={USER_DATA} className="mt-12" />
    </>
  );
};

export default TopUpAccountTab;
