import { useState } from 'react';
import { cn } from '../../../../lib/utils';
import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import Button from '../../../Button';

import ArrowDownSecondIcon from '../../../icons/ArrowDownSecondIcon';
import WhatIsFirstImage from '../../../../assets/images/landing/what-is-first.webp';
import WhatIsSecondImage from '../../../../assets/images/landing/what-is-second.webp';

const ItemCard = ({ title, isSecond = false, children }) => (
  <div
    className={cn(
      'w-full flex items-center gap-6 max-1024:flex-col max-1024:gap-0',
      isSecond && 'flex-row-reverse'
    )}
  >
    <ItemImage image={isSecond ? WhatIsSecondImage : WhatIsFirstImage} />
    <div className="flex flex-col text-lg text-[var(--granite-gray)] max-1024:text-base">
      <ItemTitle title={title} />
      <div className='max-700:max-h-[300px] max-700:overflow-y-auto'>
        {children}
      </div>
    </div>
  </div>
);

const ItemTitle = ({ title }) => (
  <h3 className="text-[22px] leading-[30px] font-bold text-[var(--granite-gray)] max-1024:text-xl">
    {title}
  </h3>
);

const ItemImage = ({ image }) => (
  <div className="w-[200px] h-[200px] flex justify-center items-center flex-shrink-0 max-700:w-[120px] max-700:h-[120px]">
    <img src={image} width="200" height="200" alt="" />
  </div>
);

const WhatIsNowAURASection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="relative pt-5 pb-8 px-10 flex flex-col items-center max-1024:pt-8 max-1024:px-4 max-700:pb-8">
      <Subtitle title="Co Robimy?" isShort />
      <SectionTitle title="Czym jest nowAURA?" className="mt-3.5" />

      <div className="mt-3 max-w-[940px] text-center text-[var(--granite-gray)] text-lg max-1024:mt-5 max-1024:text-center">
        <p>
          nowAURA to zaawansowane narzędzie szkoleniowe wspierające pracowników
          urzędu w rozwijaniu kompetencji miękkich i komunikacyjnych. Dzięki
          warsztatom opartym na sztucznej inteligencji i technologii VR
          urzędnicy mogą ćwiczyć prowadzenie rozmów z mieszkańcami,
          przygotowanie do wystąpień publicznych, czy koordynowanie zebrań.
        </p>
        <p className={cn('hidden', isExpanded && 'block')}>
          ROWIZŃ WIĘCEJ Symulacje odtwarzają realne sytuacje, pozwalając na
          praktyczny trening w bezpiecznym środowisku. Uczestnicy otrzymują
          szczegółową ocenę swoich umiejętności w formie raportu w którym
          znajdują się wskazówki, porady i ocena rozmowy. Możliwość powtarzania
          ćwiczeń, zwiększa efektywność komunikacji.
        </p>

        <Button
          variant="flat"
          className="text-xs text-[var(--jungle-green)] mt-1 gap-[3px] mx-auto"
          onClick={toggleExpand}
        >
          <ArrowDownSecondIcon
            fill="var(--jungle-green)"
            className={isExpanded ? 'rotate-180' : ''}
          />
          {isExpanded ? 'Schowaj' : 'Czytaj więcej'}
        </Button>
      </div>

      <div className="max-w-[1280px] mx-auto mt-9 flex flex-col gap-10 w-full max-960:flex-col max-960:items-center">
        <ItemCard title="Jak to działa?">
          <ol className="mt-4 list-decimal space-y-4 max-1024:pl-5">
            <li>
              <strong className="block font-semibold">
                Warsztaty w czasie rzeczywistym:
              </strong>
              Praktyczne szkolenia, podczas których ćwiczysz swoje kompetencje,
              otrzymujesz natychmiastową informację zwrotną i rozwijasz
              umiejętności. To nie wykład – działasz, analizujesz, doskonalisz.
            </li>

            <li>
              <strong className="block font-semibold">
                Indywidualne i bezpieczne ćwiczenia:
              </strong>
              Trenujesz w kontrolowanym środowisku, bez presji, stopniowo
              budując swoje umiejętności i pewność siebie, bez ryzyka
              rzeczywistych konsekwencji.
            </li>

            <li>
              <strong className="block font-semibold">
                Symulacje AI i VR:
              </strong>
              Wykorzystujemy sztuczną inteligencję i technologię VR do tworzenia
              realistycznych symulacji. Rozmowy projektujemy tak aby
              odzwierciedlały sytuacji z twojego dnia pracy. Zdobywasz
              umiejętności które możesz od razu wykorzystać.
            </li>

            <li>
              <strong className="block font-semibold">
                Trening trudnych rozmów:
              </strong>
              Trenuj prowadzenie wymagających rozmów i odpowiadanie na trudne
              pytania. To bezpieczna przestrzeń, by przećwiczyć różne
              scenariusze i znaleźć skuteczne sposoby komunikacji.
            </li>
          </ol>
        </ItemCard>

        <ItemCard title="Korzyści z wdrożenia" isSecond>
          <div className="mt-4 space-y-4">
            <p>
              Wdrożenie narzędzia w urzędzie pozwala znacząco usprawnić proces
              komunikacji między urzędnikami a mieszkańcami. Pracownicy zyskują
              umiejętności m. in do jasnego i przystępnego wyjaśniania procedur,
              co umożliwia interesariuszom lepsze zrozumienie wymagań oraz
              działań podejmowanych po wizycie w urzędzie.
            </p>

            <p>
              Znacząco redukowane są błędy w składanych dokumentach, co odciąża
              urzędników i pozwala na sprawniejsze załatwianie spraw. W efekcie
              zmniejsza się liczba wizyt powtórnych, a mieszkańcy oceniają
              obsługę jako profesjonalną.
            </p>

            <p>
              Dopasowanie komunikacji do potrzeb mieszkańców sprzyja budowaniu
              zaufania do urzędu. Pracownicy, dzięki pogłębianiu umiejętności
              parafrazy czy zadawaniu pytań otwartych, precyzyjnie określają
              oczekiwania interesariuszy, co zmniejsza ryzyko nieporozumień. W
              efekcie urząd funkcjonuje bardziej efektywnie, zyskując uznanie
              jako instytucja przyjazna i sprawnie zarządzana.
            </p>
          </div>
        </ItemCard>
      </div>
    </section>
  );
};

export default WhatIsNowAURASection;
