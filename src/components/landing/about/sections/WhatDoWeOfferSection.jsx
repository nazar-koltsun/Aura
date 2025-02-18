import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import Button from '../../../Button';
import Offers from '../Offers';

import SeparatorTopImg from '../../../../assets/images/landing/separator-top.svg';

import ComputerEducationIcon from '../../../icons/ComputerEducationIcon';
import MoneyDownIcon from '../../../icons/MoneyDownIcon';
import PeopleAroundWorldIcon from '../../../icons/PeopleAroundWorldIcon';

const offers = [
  {
    icon: <ComputerEducationIcon />,
    text: (
      <p>
        <b>Nowoczesne metody nauki</b>, które pozwalają na efektywną naukę w
        dogodnym miejscu i czasie.
      </p>
    ),
  },
  {
    icon: <MoneyDownIcon />,
    text: (
      <p>
        <b>Obniżenie kosztów szkoleń</b> - dzięki rozwiązaniom AI edukacja staje
        się bardziej dostępna i efektywna.
      </p>
    ),
  },
  {
    icon: <PeopleAroundWorldIcon />,
    text: (
      <p>
        <b>Rozwój umiejętności społecznych i komunikacyjnych</b> w łatwy,
        przystępny sposób, bez potrzeby fizycznych spotkań czy poświęcania czasu
        na dojazdy.
      </p>
    ),
  },
];

const WhatDoWeOfferSection = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      <img
        className="w-full"
        alt=""
        role="presentation"
        src={SeparatorTopImg}
      />

      <div className="px-10 pt-2.5 pb-10 flex flex-col justify-center items-center mx-auto max-1024:max-w-full max-1024:pt-6 max-1240:px-6 max-1024:px-4">
        <Subtitle title="Co robimy?" isShort />

        <SectionTitle title="Co oferujemy?" className="mt-4 max-w-[660px]" />

        <p className="mt-2 max-w-[950px] text-center text-[var(--granite-gray)] text-lg">
          Nowoczesna platforma szkoleniowa oparta na sztucznej inteligencji,
          która pozwala użytkownikom rozwijać umiejętności komunikacji w formie
          interaktywnych symulacji rozmów.
        </p>
        
        <Offers offers={offers} />

        <Button
          path="#"
          className="mt-8 text-[17px] min-w-[262px] min-h-[60px] border-2 tracking-wider max-700:min-w-[250px]"
        >
          Skontaktuj się
        </Button>
      </div>
    </section>
  );
};

export default WhatDoWeOfferSection;
