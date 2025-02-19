import { useState } from 'react';

import Subtitle from '../../Subtitle';

import PlansCardsBg from '../../../../assets/images/landing/plan-cards-indiv-bg.webp';
import SeparatorTopSimpleImage from '../../../../assets/images/landing/separator-top-simple.svg';
import SeparatorBottomSimpleImage from '../../../../assets/images/landing/separator-bottom-simple.svg';
import PlanCard from '../../PlanCard';

import FaceIcon from '../../../icons/FaceIcon';
import UserTableIcon from '../../../icons/UserTableIcon';
import TwoHeadsBrainIcon from '../../../icons/TwoHeadsBrainIcon';
import TwoHandsBrainIcon from '../../../icons/TwoHandsBrainIcon';
import MindsetThinkingGreenIcon from '../../../icons/MindsetThinkingGreenIcon';
import TeamPeopleThinkingGreenIcon from '../../../icons/TeamPeopleThinkingGreenIcon';
import HouseIcon from '../../../icons/HouseIcon';

const plansData = [
  {
    title: 'softskillAURA',
    icon: <UserTableIcon className="pointer-events-none" />,
    description_items: [
      <p>
        Dla <b>menedżerów</b>, którzy chcą doskonalić swoje umiejętności
        interpersonalne i zarządzania zespołem bez utraty motywacji i
        zaangażowania pracowników.
      </p>,
      <p>
        Trenuj rozmowy z zespołem, by <b>udzielać</b> konstruktywnego{' '}
        <b>feedbacku</b>, rozwiązywać konflikty, zarządzać zmianą i projektami.
      </p>,
    ],
    items: [
      {
        title: 'Rozwijaj karierę',
        icon: <MindsetThinkingGreenIcon />,
        features: [
          'Przyspiesz drogę do awansu',
          'Zyskaj wyższe wynagrodzenie',
          'Rozwijaj pozytywne techniki wpływu',
          'Zyskaj renomę i autorytet w organizacji',
          'Bądź przykładem dobrej komunikacji w firmie',
        ],
      },
      {
        title: 'Rozwijaj relacje z zespołem',
        icon: <TeamPeopleThinkingGreenIcon />,
        features: [
          'Zrozum potrzeby zespołu',
          'Motywuj i inspiruj',
          'Zarządzanie poprzez wartości',
          'Buduj lojalność zespołu',
          'Zarządzaj efektywnie zmianą i konfliktem',
        ],
      },
    ],
    color: '#2A9D8F',
    href: '#',
  },
  {
    title: 'salesAURA',
    icon: <FaceIcon className="pointer-events-none" />,
    description_items: [
      <p>
        Dla <b>handlowców</b>, którzy chcą doskonalić techniki sprzedażowe i
        relacyjne bez ryzyka rzeczywistych konsekwencji.
      </p>,
      <p>
        Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje{' '}
        <b>przełamywania obiekcji</b>, prezentacji oferty, budowania zaufania,
        zamykania sprzedaży.
      </p>,
    ],
    items: [
      {
        title: 'Wartość dla pracowników',
        icon: <TwoHeadsBrainIcon />,
        features: [
          'Zrozumienie potrzeb klientów',
          'Przełamywanie obiekcji',
          'Skrócenie cyklu sprzedaży',
          'Rozwój umiejętności negocjacji',
          'Prezentowanie oferty językiem korzyści',
        ],
      },
      {
        title: 'Wpływ na firmę',
        icon: <TwoHandsBrainIcon />,
        features: [
          'Zwiększenie szans na powtórny zakup',
          'Więcej pozytywnych rekomendacji',
          'Klienci jako ambasadorzy marki',
          'Wiarygodności firmy',
          'Większe szanse na cross-selling',
        ],
      },
    ],
    color: '#F4A261',
    href: '#',
  },
  {
    title: 'careerAURA',
    icon: <HouseIcon />,
    description_items: [
      <p>
        Dla <b>szukających pracę</b>, pragnących poprawić umiejętności
        komunikacyjne, zyskać pewność siebie oraz skutecznie negocjować warunki
        zatrudnienia.
      </p>,
      <p>
        <b>Trenuj</b> odpowiedzi na trudne pytania rekrutacyjne, efektownie
        prezentuj doświadczenie, sukcesy i motywację, aby zwiększyć szanse na
        pracę marzeń.
      </p>,
    ],
    items: [
      {
        title: 'Mniejszy stres',
        icon: <TwoHeadsBrainIcon />,
        features: [
          'Ćwicz spontaniczne odpowiedzi',
          'Praktykuj scenariusze i sytuacje rekrutacyjne',
          'Poznaj najczęściej zadawane pytania',
          'Rozwiń zdolność przewidywania pytań',
          'Negocjuj lepsze wynagrodzenie',
        ],
      },
      {
        title: 'Większa pewność siebie',
        icon: <TwoHandsBrainIcon />,
        features: [
          'Ćwicz przedstawianie umiejętności i osiągnięć',
          'Prezentuj skutecznie kompetencje',
          'Zwiększ atrakcyjność biznesową dla rekrutera',
          'Kreuj pozytywny wizerunek u decydentów',
          'Komunikuj precyzyjne oczekiwania',
        ],
      },
    ],
    color: '#8B8181',
    href: '#',
  },
];

const PlansCardsSection = () => {
  const [activePlanIndex, setActivePlanIndex] = useState(1);

  const handleActiveIndex = (index) => {
    setActivePlanIndex(index);
  };

  return (
    <section className="px-4 py-[92px] relative max-1024:pt-[50px] max-1024:pb-[50px]">
      <div className="relative z-10 max-w-[1034px] mx-auto flex flex-col items-center justify-center">
        <Subtitle title="Trenuj z nami" isShort />
        <h2 className="mt-6 text-center text-white text-[44px] leading-[54px] font-semibold max-1024:text-[28px] max-1024:leading-[34px] max-1024:mt-3">
          Lepsza komunikacja to klucz do sukcesu
        </h2>
        <p className="mt-[22px] text-center max-w-[645px] text-white leading-[27px] max-1024:mt-4">
          Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje
          przełamywania obiekcji, prezentacji oferty, budowania zaufania,
          zamykania sprzedaży.
        </p>
      </div>

      <div className="mt-[90px] w-full flex justify-center gap-[15%] relative max-1200:flex-col max-1200:max-w-[1034px] 
      max-1200:mx-auto max-1200:mt-8 max-1024:flex-col max-1024:mt-8 max-1024:gap-4">
        <PlanCard
          index={0}
          activeIndex={activePlanIndex}
          planData={plansData[0]}
          isVertical
          className="-mr-[390px] relative flex-shrink-0 left-0 z-10 w-[570px] hover:z-30 hover:shadow-cardGray max-1400:w-[490px] max-1400:px-4 
           max-1200:mr-0 max-1024:mr-0 max-1024:w-full"
          handleActiveIndex={handleActiveIndex}
        />
        <PlanCard
          index={1}
          activeIndex={activePlanIndex}
          planData={plansData[1]}
          isVertical
          isActive
          className="-top-[45px] relative flex-shrink-0 z-20 w-[570px] hover:-translate-y-0 max-1400:w-[490px] max-1400:px-4 
          max-1200:top-0 max-1024:top-0 max-1024:w-full"
          handleActiveIndex={handleActiveIndex}
        />
        <PlanCard
          index={2}
          activeIndex={activePlanIndex}
          planData={plansData[2]}
          isVertical
          className="-ml-[390px] relative flex-shrink-0 z-10 right-0 w-[570px] hover:z-30 hover:shadow-cardGray max-1400:w-[490px] max-1400:px-4 max-1200:ml-0 max-1024:ml-0 max-1024:w-full"
          handleActiveIndex={handleActiveIndex}
        />
      </div>

      <picture>
        {/* <source srcSet={PlansCardsBgMob} media="(max-width: 520px)" /> */}
        <img
          src={PlansCardsBg}
          alt=""
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      </picture>
      <img
        src={SeparatorTopSimpleImage}
        alt=""
        role="presentation"
        className="absolute top-0 left-0 w-full"
      />
      <img
        src={SeparatorBottomSimpleImage}
        alt=""
        role="presentation"
        className="absolute left-0 w-full bottom-[-1px] max-1920:bottom-[-1vw]"
      />
    </section>
  );
};

export default PlansCardsSection;
