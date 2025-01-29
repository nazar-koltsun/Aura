import AccountTypeCard from './AccountTypeCard';

const ACCOUNT_TYPE_CARDS = [
  {
    type: 'standard',
    title: 'Podstawowy',
    'conversations-limit': '3 rozmowy',
    url: '/conversations/card-1',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ]
  },
  {
    type: 'premium',
    title: 'Premium',
    'conversations-limit': '10 rozmowy',
    url: '/conversations/card-2',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ]
  },
  {
    type: 'standard',
    title: 'Standardowy',
    'conversations-limit': '5 rozmów',
    url: '/conversations/card-3',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ]
  },
];

const AccountTypeCards = () => (
  <ul className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-1240:grid-cols-2 max-700:grid-cols-1">
    {ACCOUNT_TYPE_CARDS.map((card, index) => (
      <AccountTypeCard key={index} card={card} />
    ))}
  </ul>
);

export default AccountTypeCards;
