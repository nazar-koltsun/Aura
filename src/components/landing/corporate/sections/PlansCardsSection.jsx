import Subtitle from "../../Subtitle";

import PlansCardsBg from '../../../../assets/images/landing/plans-cards-bg.webp';
import SeparatorTopSimpleImage from '../../../../assets/images/landing/separator-top-simple.svg';
import SeparatorBottomSimpleImage from '../../../../assets/images/landing/separator-bottom-simple.svg';
import PlanCard from '../../PlanCard';

import FaceIcon from '../../../icons/FaceIcon';
import UserTableIcon from '../../../icons/UserTableIcon';

const plansData = [
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
        title: "Wartość dla pracowników",
        icon: null,
        features: ['Zrozumienie potrzeb klientów', 'Przełamywanie obiekcji', 'Skrócenie cyklu sprzedaży', 'Rozwój umiejętności negocjacji', 'Prezentowanie oferty językiem korzyścim'],
      }
    ],
    color: '#F4A261',
  },
  // {
  //   title: 'softskillAURA',
  //   icon: <UserTableIcon className="pointer-events-none" />,
  //   description_items: [
  //     <p>
  //       Dla <b>menedżerów</b>, którzy chcą doskonalić swoje umiejętności interpersonalne i zarządzania zespołem bez utraty motywacji i zaangażowania pracowników.
  //     </p>,
  //     <p>
  //       Trenuj rozmowy z zespołem, by <b>udzielać</b> konstruktywnego <b>feedbacku</b>, rozwiązywać konflikty, zarządzać zmianą i projektami.
  //     </p>,
  //   ],
  // },
];

const PlansCardsSection = () => {
  return (
    <section className="px-4 py-[92px] relative">
      <div className="relative z-10 max-w-[1034px] mx-auto flex flex-col items-center justify-center">
        <Subtitle title='Trenuj z nami' isShort />
        <h2 className="mt-6 text-center text-white text-[44px] leading-[54px] font-semibold">Dla handlowców i menadżerów</h2>
        <p className="mt-[22px] text-center max-w-[500px] text-white leading-[27px]">Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje przełamywania obiekcji, prezentacji oferty, budowania zaufania, zamykania sprzedaży.</p>

        <div className="mt-8 w-full">
          {plansData.map((plan, index) => (
            <PlanCard key={index} planData={plan} />
          ))}
        </div>

      </div>

      <picture>
        {/* <source
          srcSet={PlansCardsBg}
          media="(max-width: 520px)"
        /> */}
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
  )
}

export default PlansCardsSection;