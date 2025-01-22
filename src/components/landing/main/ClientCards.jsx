import { cn } from '../../../lib/utils';

import Button from '../../Button';
import CompanyIcon from '../../icons/CompanyIcon';
import MessageIcon from '../../icons/MessageIcon';
import ClientIcon from '../../icons/ClientIcon';

const clientCards = [
  {
    title: 'Klient Firmowy',
    icon: <CompanyIcon />,
    description:
      'Odkryj potencjał talentów w swojej firmie, aby zwiększać przychody, podnosić efektywność i obniżać koszty.',
  },
  {
    title: 'Klient Indywidualny',
    icon: <MessageIcon />,
    description:
      'Zbuduj umiejętności komunikacyjne i sprzedażowe, które zmienią Twoje życie.',
  },
  {
    title: 'Klient JST',
    icon: <ClientIcon />,
    description:
      'Wykorzystaj potencjał kadry w urzędzie, by usprawnić działania i podnieść jakość obsługi.',
  },
];

const ClientCards = ({ data = clientCards, className }) => {
  const renderActions = (index) => {
    if (index === 0) {
      return (
        <>
          <Button
            to="#"
            variant="bordered"
            className="px-7 border-[var(--sandy-brown)]"
          >
            Zarezerwuj darmowe demo
          </Button>
          <Button
            to="#"
            className="px-5 bg-[var(--sandy-brown)] hover:bg-[#DE8640]"
          >
            Dowiedz się więcej
          </Button>
        </>
      );
    }

    if (index === 1) {
      return (
        <>
          <Button to="#" variant="bordered" className="px-7 min-w-[194px]">
            Zadaj pytanie
          </Button>
          <Button to="#" className="px-5 min-w-[194px]">
            Dowiedz się więcej
          </Button>
        </>
      );
    }

    return (
      <>
        <Button
          to="#"
          variant="bordered"
          className="px-7 min-w-[194px] border-[var(--rocket-metallic)]"
        >
          Zadaj pytanie
        </Button>
        <Button
          to="#"
          className="px-5 min-w-[194px] bg-[var(--rocket-metallic)] hover:bg-[var(--eerie-black)]"
        >
          Dowiedz się więcej
        </Button>
      </>
    );
  };

  return (
    <ul className={cn('grid grid-cols-3 gap-7 max-1240:grid-cols-2', className)}>
      {data.map((cardData, index) => (
        <li
          key={cardData.title}
          className={cn("flex flex-col items-center bg-[var(--cultured)] px-8 py-7 rounded-[30px]", 
            index === 0 && 'shadow-cardOrange', index === 1 && 'shadow-cardGreen', index === 2 && 'shadow-cardGray')}
        >
          <div className="flex justify-center items-center w-[42px] h-[42px]">
            {cardData.icon}
          </div>

          <h3 className="mt-8 text-[24px] text-center leading-[30px] text-[var(--eerie-black)] font-semibold">
            {cardData.title}
          </h3>

          <p className="mt-7 mb-7 text-[18px] text-center leading-[30px] text-[var(--granite-gray)]">
            {cardData.description}
          </p>

          <div className="mt-auto flex flex-col items-center gap-5">
            {renderActions(index)}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ClientCards;
