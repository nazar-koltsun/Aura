import Subtitle from '../../Subtitle';

import PlansCardsBg from '../../../../assets/images/landing/plan-cards-jst-bg.webp';
import PlansCardsBgMob from '../../../../assets/images/landing/plans-cards-bg-mob.webp';
import SeparatorTopSimpleImage from '../../../../assets/images/landing/separator-top-simple.svg';
import SeparatorBottomSimpleImage from '../../../../assets/images/landing/separator-bottom-simple.svg';
import PlanCard from '../../PlanCard';

import UserTableIcon from '../../../icons/UserTableIcon';
import MindsetThinkingGreenIcon from '../../../icons/MindsetThinkingGreenIcon';
import TeamPeopleThinkingGreenIcon from '../../../icons/TeamPeopleThinkingGreenIcon';

const planData = {
  title: 'softskillAURA',
  icon: <UserTableIcon className="pointer-events-none" />,
  description_items: [
    <p>
      Dla <b>pracowników urzędów</b>, którzy chcą doskonalić swoje umiejętności
      interpersonalne i komunikacyjne, zwiększyć efektywność w pracy z
      mieszkańcami oraz lepiej zarządzać sytuacjami kryzysowymi.
    </p>,
    <p>
      Trenuj rozmowy z mieszkańcami i współpracownikami, by zyskać pewność
      siebie, precyzyjnie przekazywać informacje, skutecznie negocjować i
      rozwiązywać problemy.
    </p>,
    <p>Przyczyń się do poprawy wizerunku urzędu</p>,
  ],
  items: [
    {
      title: 'Korzyści dla Pracowników',
      icon: <MindsetThinkingGreenIcon />,
      features: [
        'Większa efektywność pracy',
        'Wzrost kompetencji komunikacyjnych',
        'Obniżony stres',
        'Sympatia interesariuszy',
        'Ambasador prostej komunikacji',
      ],
    },
    {
      title: 'Korzyści dla urzędu',
      icon: <TeamPeopleThinkingGreenIcon />,
      features: [
        'Podniesienie efektywności urzędu',
        'Redukcja czasu obsługi',
        'Zmniejszenie liczby błędów',
        'Większe zadowolenie interesariuszy',
        'Szybsza realizacja zadań',
      ],
    },
  ],
  color: '#2A9D8F',
  href: '#',
};

const PlansCardsSection = () => {
  return (
    <section className="px-4 pt-[92px] pb-[80px] relative max-1024:pt-[50px] max-1024:pb-[50px]">
      <div className="relative z-10 max-w-[1250px] mx-auto flex flex-col items-center justify-center">
        <Subtitle title="Trenuj z nami" isShort />
        <h2 className="mt-6 text-center text-white text-[44px] leading-[54px] font-semibold max-1024:text-[28px] max-1024:leading-[34px] max-1024:mt-3">
          Skuteczniejsza komunikacja to klucz do sukcesu
        </h2>
        <p className="mt-[22px] text-center max-w-[550px] text-white leading-[27px] max-1024:mt-4">
          Trenuj umiejętności skutecznej komunikacji w urzędzie i z
          mieszkańcami. Doskonal umiejętności prowadzenia rozmów, argumentacji i
          wystąpień publicznych. Trenuj zadawanie pytań pogłębiających,
          parafrazowanie, precyzyjne przekazywanie informacji oraz osiąganie
          porozumień.
        </p>

        <div className="mt-12 w-full max-1024:mt-8">
          <PlanCard
            planData={planData}
            hasTightDescription
            className="items-center pl-24 pt-9 pr-16 pb-10 gap-36"
          />
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
