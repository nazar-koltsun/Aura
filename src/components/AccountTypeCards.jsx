import { useState } from 'react';
import { cn } from '../lib/utils';
import AccountTypeCard from './AccountTypeCard';

const AccountTypeCards = ({ cards, className }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <ul
      className={cn(
        'grid grid-cols-3 max-md:grid-cols-2 gap-6 max-1240:grid-cols-2 max-700:grid-cols-1',
        className
      )}
    >
      {cards.map((card, index) => (
        <AccountTypeCard
          key={index}
          card={card}
          index={index}
          setActiveIndex={setActiveIndex}
          isActive={activeIndex === index}
        />
      ))}
    </ul>
  );
};

export default AccountTypeCards;
