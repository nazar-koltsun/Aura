import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import AccountTypeCards from '../../../AccountTypeCards';
import Button from '../../../Button';

import SeparatorBottom from '../../../../assets/images/landing/separator-bottom.svg';

const ACCOUNT_TYPE_CARDS = [
  {
    type: 'standard',
    title: 'Podstawowy',
    subtitle: 'Slogan reklamowy slogan',
    plan_limit_price: (
      <span className="text-base">
        <sup className="text-2xl">zł</sup>{' '}
        <span className="text-[40px]">29</span>/ 3 rozmowy
      </span>
    ),
    btn_title: 'Doładuj',
    url: '/conversations/card-1',
    features: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'],
  },
  {
    type: 'premium',
    title: 'Premium',
    subtitle: 'Slogan reklamowy slogan',
    plan_limit_price: (
      <span className="text-base">
        <sup className="text-2xl">zł</sup>{' '}
        <span className="text-[40px]">99</span>/ 10 rozmowy
      </span>
    ),
    btn_title: 'Doładuj',
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
    subtitle: 'Slogan reklamowy slogan',
    plan_limit_price: (
      <span className="text-base">
        <sup className="text-2xl">zł</sup>{' '}
        <span className="text-[40px]">49</span>/ 5 rozmowy
      </span>
    ),
    btn_title: 'Doładuj',
    url: '/conversations/card-3',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
  },
];

const ChooseThePriceSection = () => {
  return (
    <section className="relative pt-10 px-4 flex flex-col items-center max-1024:pt-8">
      <Subtitle title="Cennik" isShort />
      <SectionTitle title="Wybierz cennik dla siebie" className="mt-3.5" />

      <p className="mt-4 max-w-[500px] text-center text-[var(--granite-gray)] leading-[27px] max-1024:mt-5 max-1024:text-center">
        nowAURA rozwija Twoje kompetencje, z pewnością przyniesie korzyści
        całemu zespołowi! Jako polecający, możesz liczyć na bonus za każdą
        podpisaną umowę!
      </p>

      <AccountTypeCards
        cards={ACCOUNT_TYPE_CARDS}
        className="mt-12 w-full max-w-[960px]"
      />

      <div className="mt-14 flex justify-center items-center gap-6 max-1024:mt-8 max-1024:gap-4 max-700:flex-col">
        <Button
          path="#"
          className="text-[17px] min-w-[250px] min-h-[60px] tracking-wider"
        >
          Rozpocznij naukę
        </Button>
        <Button
          path="#"
          variant="bordered"
          className="text-[17px] min-w-[262px] min-h-[60px] border-2 tracking-wider max-700:min-w-[250px]"
        >
          Zobacz wideo
        </Button>
      </div>

      <img
        src={SeparatorBottom}
        className="w-full mt-16 max-1024:mt-10"
        role="presentation"
        alt=""
      />
    </section>
  );
};

export default ChooseThePriceSection;
