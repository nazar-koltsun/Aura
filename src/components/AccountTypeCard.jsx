import { cn } from '../lib/utils';
import Card from './Card';
import Button from './Button';

import CheckIcon from './icons/CheckIcon';

const AccountTypeCard = ({ card }) => (
  <li
    className={cn(
      'grid rounded-[20px]',
      card.type === 'premium' && 'shadow-premiumSdadow'
    )}
  >
    <Card className="py-[30px] px-0 rounded-[20px] border border-[var(--light-silver)] max-1024:px-0">
      <div
        className={cn(
          'px-12 pb-6 flex flex-col items-center text-center border-b max-1440:px-6 border-b-[var(--light-silver)]',
        )}
      >
        <h3 className="text-[26px] text-[var(--granite-gray)] font-bold">
          {card.title}
        </h3>

        <p className="text-[13px] text-[var(--sonic-silver)]">
          {card.subtitle}
        </p>

        <p className="mt-10 text-[22px] text-[var(--granite-gray)] font-bold">
          {card.plan_limit_price}
        </p>

        <Button
          path={card.url}
          className="mt-7 min-w-[180px] py-2 text-sm font-bold bg-[var(--sandy-brown)] hover:bg-[#DE8640] shadow-buttonShadow"
        >
          {card.btn_title}
        </Button>

        <span className="mt-[2px] text-[11px] text-[var(--sonic-silver)] font-bold">
          Bezpieczna płatność z Tpay
        </span>
      </div>

      <div className="px-12 pt-6 max-1440:px-4">
        <ul className="space-y-4 flex flex-col items-center">
          {card.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-1 text-[13px] text-[var(--granite-gray)] font-bold"
            >
              <CheckIcon /> {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  </li>
);

export default AccountTypeCard;
