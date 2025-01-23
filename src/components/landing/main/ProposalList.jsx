import { cn } from '../../../lib/utils';

import FaceIcon from '../../icons/FaceIcon';
import InfoIcon from '../../icons/InfoIcon';


const proposals = [
  {
    title: 'salesAURA',
    icon: <FaceIcon />,
    description_items: [
      <p>Dla <b>handlowców</b>, którzy chcą doskonalić techniki sprzedażowe i relacyjne bez ryzyka rzeczywistych konsekwencji.</p>,
      <p>Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje <b>przełamywania obiekcji</b>, prezentacji oferty, budowania zaufania, zamykania sprzedaży.</p>
    ],
    add_info: 'Badania RAIN Group pokazują, że sprzedawcy, którzy regularnie rozwijają swoje umiejętności, mają o 20% wyższe szanse na przekroczenie targetów sprzedażowych'
  },
  {
    title: 'salesAURA',
    icon: <FaceIcon />,
    description_items: [
      <p>Dla <b>handlowców</b>, którzy chcą doskonalić techniki sprzedażowe i relacyjne bez ryzyka rzeczywistych konsekwencji.</p>,
      <p>Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje <b>przełamywania obiekcji</b>, prezentacji oferty, budowania zaufania, zamykania sprzedaży.</p>
    ],
    add_info: 'Zgodnie z badaniami Gallup, menedżerowie, którzy regularnie trenują umiejętności miękkie, są w stanie poprawić zaangażowanie zespołu nawet o 14%, co przekłada się na wyższą produktywność i mniejszą rotację pracowników.'
  },
  {
    title: 'salesAURA',
    icon: <FaceIcon />,
    description_items: [
      <p>Dla <b>handlowców</b>, którzy chcą doskonalić techniki sprzedażowe i relacyjne bez ryzyka rzeczywistych konsekwencji.</p>,
      <p>Trenuj rozmowy sprzedaży z wirtualnym klientem, rozwijaj kompetencje <b>przełamywania obiekcji</b>, prezentacji oferty, budowania zaufania, zamykania sprzedaży.</p>
    ],
    add_info: 'Badania przeprowadzone przez LinkedIn wykazały, że osoby, które ćwiczyły umiejętności rozmów kwalifikacyjnych, zwiększyły swoje szanse na otrzymanie oferty pracy o 15%.'
  }
]

const ProposalList = ({ className }) => {
  return (
    <ul className={cn('grid grid-cols-3 gap-7 max-1240:grid-cols-2 max-1024:gap-4 max-700:grid-cols-1 max-700:gap-9', className)}>
      {proposals.map((proposal) => (
        <li key={proposal.title} className='relative flex flex-col items-center bg-[var(--cultured)] pt-8 pb-11 px-8 rounded-[30px] shadow-cardGray'>
          <div className='absolute top-3 right-10 flex justify-center items-center peer cursor-pointer w-8 h-8 max-700:right-7'>
            <InfoIcon />
          </div>
          <p className='hidden peer-hover:block absolute left-8 top-11 right-11 px-9 pt-9 pb-5 text-lg text-[var(--granite-gray)] rounded-[30px] bg-white'>
            {proposal.add_info}
          </p>
          {proposal.icon}
          <h3 className='mt-3 text-2xl font-semibold text-[var(--eerie-black)]'>{proposal.title}</h3>
          <ul className='mt-5 space-y-7 list-disc pl-6'>
            {proposal.description_items.map((item, index) => (
              <li key={index} className='text-lg text-[var(--granite-gray)]'>
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ProposalList;