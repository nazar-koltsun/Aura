import { cn } from '../../../lib/utils';
import HighlightBox from '../HighlightBox';

import FaceIcon from '../../icons/FaceIcon';
import UserTableIcon from '../../icons/UserTableIcon';
import HouseIcon from '../../icons/HouseIcon';
import InfoIcon from '../../icons/InfoIcon';

const proposals = [
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
    add_info:
      'Badania RAIN Group pokazują, że sprzedawcy, którzy regularnie rozwijają swoje umiejętności, mają o 20% wyższe szanse na przekroczenie targetów sprzedażowych',
  },
  {
    title: 'softskillAURA',
    icon: <UserTableIcon className="pointer-events-none" />,
    description_items: [
      <p>
        Dla <b>menedżerów</b>, którzy chcą doskonalić swoje umiejętności interpersonalne i zarządzania zespołem bez utraty motywacji i zaangażowania pracowników.
      </p>,
      <p>
        Trenuj rozmowy z zespołem, by <b>udzielać</b> konstruktywnego <b>feedbacku</b>, rozwiązywać konflikty, zarządzać zmianą i projektami.
      </p>,
    ],
    add_info:
      'Zgodnie z badaniami Gallup, menedżerowie, którzy regularnie trenują umiejętności miękkie, są w stanie poprawić zaangażowanie zespołu nawet o 14%, co przekłada się na wyższą produktywność i mniejszą rotację pracowników.',
  },
  {
    title: 'careerAURA',
    icon: <HouseIcon className="pointer-events-none" />,
    description_items: [
      <p>
        Dla osób <b>przygotowujących się do rozmowy kwalifikacyjnej</b>,
        chcących sprawdzić swoje kompetencje w rozmowie z wirtualnym rekruterem.
      </p>,
      <p>
        Trenuj odpowiedzi na trudne <b>pytania rekrutacyjne</b>, przedstawiaj
        doświadczenie, sukcesy i motywację, aby zwiększyć szanse na pracę
        marzeń.
      </p>,
    ],
    add_info:
      'Badania przeprowadzone przez LinkedIn wykazały, że osoby, które ćwiczyły umiejętności rozmów kwalifikacyjnych, zwiększyły swoje szanse na otrzymanie oferty pracy o 15%.',
  },
];

const ProposalList = ({ className }) => {
  return (
    <ul
      className={cn(
        'grid grid-cols-3 gap-7 max-1240:grid-cols-2 max-1024:gap-4 max-700:grid-cols-1 max-700:gap-9',
        className
      )}
    >
      {proposals.map((proposal, index) => (
        <li
          key={index}
          className="transform duration-200 ease-in hover:-translate-y-2"
        >
          <HighlightBox
            color="var(--metallic-silver)"
            className="flex h-full rounded-[30px]"
          >
            <div className="relative flex flex-col items-center bg-[var(--cultured)] pt-8 pb-11 px-8 rounded-[30px] shadow-cardGray">
              <div className="absolute top-3 right-10 flex justify-center items-center peer cursor-pointer w-8 h-8 max-700:right-7">
                <InfoIcon className="pointer-events-none" />
              </div>

              <p className="hidden peer-hover:block absolute left-8 top-11 right-11 px-9 pt-9 pb-5 text-lg text-[var(--granite-gray)] rounded-[30px] bg-white pointer-events-none">
                {proposal.add_info}
              </p>
              <div className="flex justify-center items-center w-[45px] h-[45px]">
                {proposal.icon}
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--eerie-black)] pointer-events-none">
                {proposal.title}
              </h3>
              <ul className="mt-5 space-y-7 list-disc pl-6 pointer-events-none">
                {proposal.description_items.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg text-[var(--granite-gray)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </HighlightBox>
        </li>
      ))}
    </ul>
  );
};

export default ProposalList;
