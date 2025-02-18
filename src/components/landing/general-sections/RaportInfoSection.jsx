import { cn } from '../../../lib/utils';
import { useState } from 'react';
import { Collapse } from 'react-collapse';
import Button from '../../Button';
import RaportInfoImg from '../../../assets/images/landing/raport-info.webp';
import RaportInfoImgMob from '../../../assets/images/landing/raport-info-mobile.webp';
import RaportInfoSecondImg from '../../../assets/images/landing/raport-info-second-image.webp';
import RaportInfoSecondImgMob from '../../../assets/images/landing/raport-info-second-image-mob.webp';

import AccordionLineIcon from '../../../components/icons/AccordionLineIcon';
import PlusIcon from '../../../components/icons/PlusIcon';
import MinusIcon from '../../../components/icons/MinusIcon';
import SeparatorBottomImg from '../../../assets/images/landing/separator-bottom.svg';

const ACCORDION_DATA = [
  {
    title: 'Transkrypcja rozmowy',
    text: (
      <p>
        Otrzymasz pełny zapis swojej rozmowy z czytelnymi oznaczeniami:
        <span className='block text-[var(--jungle-green)]'>• odpowiedzi zgodne ze sztuką komunikacji</span>
        <span className='block text-[var(--sandy-brown)]'>• odpowiedzi poprawne, z potencjałem doskonalenia</span>
        <span className='block text-red-500'>• odpowiedzi wymagające poprawy</span>
      </p>
    ),
  },
  {
    title: 'Feedback wygenerowany przez AI',
    text: 'Szczegółowa analiza Twojej rozmowy pod kątem struktury, argumentacji i skuteczności komunikacji. Nasz raport można porównać do uproszczonego Assessment & Development Centre, co daje Ci rzetelną ocenę Twoich kompetencji',
  },
  {
    title: 'Rekomendacje i sugestię na przyszłe rozmowy',
    text: 'Otrzymasz konkretne wskazówki, jak poprawić swoje umiejętności i zwiększyć skuteczność w kolejnych rozmowach, dostosowane do Twojego stylu komunikacji. Dzięki rekomendacjom unikniesz błędów w prawdziwej konwersacji oraz lepiej zareagujesz na trudne sytuacje',
  },
  {
    title: 'Pełna analiza kompetencji miękkich',
    text: 'Kompleksowa analiza Twoich umiejętności interpersonalnych, takich jak budowanie relacji, przekonywanie, zarządzanie emocjami, obawami czy aktywne słuchanie. Dzięki systemowi oznaczeń kolorystycznych łatwo zrozumiesz, które aspekty wymagają poprawy, a które są Twoją mocną stroną',
  },
  {
    title: 'Porównywalność wyników',
    text: 'Możliwość śledzenia postępów i porównywania wyników na przestrzeni czasu, co pozwala na systematyczny rozwój i doskonalenie umiejętności',
  },
];

const Accordion = ({ title, children, isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-lg text-[var(--granite-gray)] font-medium max-1024:text-base leading-[30px]"
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
        </div>

        <div className="relative mt-[2px] w-full h-[1px] bg-gradient-to-r from-transparent via-[#79BCB3] via-[50%] to-transparent to-[100%] overflow-hidden">
          <AccordionLineIcon
            className={cn(
              'absolute left-0',
              isOpen && 'translate-x-[100vw] duration-[5000ms]'
            )}
          />
        </div>
      </button>

      <Collapse isOpened={isOpen}>
        <div className="py-3 leading-[28px] text-[var(--granite-gray)]">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

const RaportInfoSection = ({ isSecondary = false, hasTopSeparator = true, hasBottomSeparator = false, className }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={cn(className)}>
      {hasTopSeparator && (
        <img
          src={SeparatorBottomImg}
          className="w-full"
          role="presentation"
          alt=""
        />
      )}

      <div className="pt-8 px-4 pb-12 max-w-[1060px] mx-auto grid grid-cols-2 gap-24 max-1024:gap-8 max-700:grid-cols-1 max-1024:pt-3 max-1024:pb-10">
        <div className="rounded-[30px] overflow-hidden self-start shadow-cardGray max-700:order-2">
          <picture>
            <source media="(max-width: 700px)" srcSet={isSecondary ? RaportInfoSecondImgMob : RaportInfoImgMob} />
            <img
              src={isSecondary ? RaportInfoSecondImg : RaportInfoImg}
              width="498"
              height="716"
              className="w-full h-full max-h-[640px] object-cover"
              alt="Raport"
            />
          </picture>
        </div>

        <div className="pt-4 flex flex-col items-start">
          <h2 className="text-[36px] leading-[50px] font-bold text-[var(--eerie-black)] max-1024:text-[28px] max-1024:leading-[34px]">
            Czym wyróżnia się nasz raport nowAURA?
          </h2>

          <p className="pr-8 mt-4 text-lg text-[var(--granite-gray)] leading-[27px] max-1024:text-base max-1024:pr-0">
            Nasz raport cechuje się obiektywizmem, neutralnością i
            inkluzywnością. Skupiamy się wyłącznie na faktach i treści rozmowy.
            Nie odnosimy się do cech zewnętrznych, takich jak ubiór, wygląd,
            płeć czy pochodzenie etniczne, co zapewnia profesjonalizm i szacunek
            wobec wszystkich stron.
          </p>

          <div className="mt-4 mb-11 flex flex-col gap-4">
            {ACCORDION_DATA.map((data, index) => (
              <Accordion key={index} title={data.title} isOpen={index === activeIndex} setIsOpen={() => setActiveIndex(index === activeIndex ? null : index)}>
                {data.text}
              </Accordion>
            ))}
          </div>

          <Button className="mt-auto max-700:mx-auto">Dowiedz się więcej</Button>
        </div>
      </div>

      {hasBottomSeparator && (
        <img
          src={SeparatorBottomImg}
          className="w-full"
          role="presentation"
          alt=""
        />
      )}
    </section>
  );
};

export default RaportInfoSection;
