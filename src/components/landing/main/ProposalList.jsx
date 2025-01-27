import { cn } from '../../../lib/utils';
import ProposalItem from './ProposalItem';

import FaceIcon from '../../icons/FaceIcon';
import UserTableIcon from '../../icons/UserTableIcon';
import HouseIcon from '../../icons/HouseIcon';

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
        'grid grid-cols-3 gap-7 max-1240:grid-cols-1 max-1024:gap-4 max-700:grid-cols-1 max-700:gap-9',
        className
      )}
    >
      {proposals.map((proposal, index) => (
        <ProposalItem proposal={proposal} key={index} />
      ))}
    </ul>
  );
};

export default ProposalList;
