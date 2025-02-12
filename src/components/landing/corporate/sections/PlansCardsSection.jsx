import Subtitle from '../../Subtitle';

import PlansCardsBg from '../../../../assets/images/landing/plans-cards-bg.webp';
import PlansCardsBgMob from '../../../../assets/images/landing/plans-cards-bg-mob.webp';
import SeparatorTopSimpleImage from '../../../../assets/images/landing/separator-top-simple.svg';
import SeparatorBottomSimpleImage from '../../../../assets/images/landing/separator-bottom-simple.svg';
import PlanCard from '../../PlanCard';

import FaceIcon from '../../../icons/FaceIcon';
import UserTableIcon from '../../../icons/UserTableIcon';
import TwoHeadsBrainIcon from '../../../icons/TwoHeadsBrainIcon';
import TwoHandsBrainIcon from '../../../icons/TwoHandsBrainIcon';
import MindsetThinkingGreenIcon from '../../../icons/MindsetThinkingGreenIcon';
import TeamPeopleThinkingGreenIcon from '../../../icons/TeamPeopleThinkingGreenIcon';

const plansData = [
  {
    title: 'salesAURA',
    icon: <FaceIcon className="pointer-events-none" />,
    description_items: [
      <p>
        Dla <b>handlowców</b>, którzy chcą doskonalić techniki sprzedaży i
        umiejętność budowania relacji bez ryzyka rzeczywistych konsekwencji
      </p>,
      <p>
        Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje{' '}
        <b>przełamywania obiekcji</b>, prezentacji oferty, budowania zaufania,
        zamykania sprzedaży
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
        title: 'Nagłówek 1',
        icon: <MindsetThinkingGreenIcon />,
        features: [
          'Motywowanie zespołu wartościami',
          'Precyzyjne przekazywanie oczekiwań',
          'Zrozumienie potrzeb i oczekiwań zespołu',
          'Zarządzanie obawami zespołu',
          'Udzielanie adekwatnego feedbacku',
        ],
      },
      {
        title: 'Nagłówek 2',
        icon: <TeamPeopleThinkingGreenIcon />,
        features: [
          'Zwiększenie szans na powtórny zakup',
          'Więcej pozytywnych rekomendacji',
          'Klienci jako ambasadorzy marki',
          'Wiarygodności firmy',
          'Większe szanse na cross-selling',
        ],
      },
    ],
    color: '#2A9D8F',
    href: '#',
  },
];

const PlansCardsSection = () => {
  return (
    <section className="px-4 pt-[92px] pb-[80px] relative max-1024:pt-[50px] max-1024:pb-[50px]">
      <div className="relative z-10 max-w-[1034px] mx-auto flex flex-col items-center justify-center">
        <Subtitle title="Trenuj z nami" isShort />
        <h2 className="mt-5 text-center text-white text-[44px] leading-[54px] font-semibold max-1024:text-[28px] max-1024:leading-[34px] max-1024:mt-3">
          Dla handlowców i menadżerów
        </h2>
        <p className="mt-4 text-center max-w-[645px] text-white leading-[27px] max-1024:mt-4">
          Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje
          przełamywania obiekcji, prezentacji oferty, budowania zaufania,
          zamykania sprzedaży.
        </p>

        <div className="mt-7 w-full space-y-[27px]">
          {plansData.map((plan, index) => (
            <PlanCard key={index} planData={plan} />
          ))}
        </div>
      </div>

      <picture>
        <source srcSet={PlansCardsBgMob} media="(max-width: 520px)" />
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
