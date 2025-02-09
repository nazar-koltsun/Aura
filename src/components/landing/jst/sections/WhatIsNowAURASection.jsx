import { useState } from 'react';
import { cn } from '../../../../lib/utils';
import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import Button from '../../../Button';
import Card from '../../../Card';

import ArrowDownSecondIcon from '../../../icons/ArrowDownSecondIcon';
import WhatIsFirstImage from '../../../../assets/images/landing/what-is-first.webp';
import WhatIsSecondImage from '../../../../assets/images/landing/what-is-second.webp';

const ItemCard = ({ header, isSecond = false, children }) => (
  <Card className="pl-[58px] pb-[58px] pr-11 pt-8 w-full flex flex-col rounded-[30px] max-960:max-w-[700px]">
    <div
      className={cn(
        'pr-4 flex justify-between items-center max-1240:flex-col',
        isSecond && 'max-1240:flex-col-reverse'
      )}
    >
      {header}
    </div>

    <div
      className={cn(
        'pl-6 space-y-8 text-lg leading-[30px] text-[var(--granite-gray)] max-1240:mt-8 max-1024:space-y-4 max-1024:mt-5 max-1024:text-base max-960:pl-0',
        isSecond && 'pl-0'
      )}
    >
      {children}
    </div>
  </Card>
);

const ItemTitle = ({ title }) => (
  <h3 className="text-[31px] leading-[38px] font-bold text-[var(--granite-gray)] max-1240:text-center max-1240:min-h-[76px] max-1024:min-h-[56px] max-960:min-h-0 max-1024:text-xl">
    {title}
  </h3>
);

const ItemImage = ({ image }) => (
  <div className="w-[158px] h-[158px] flex justify-center items-center flex-shrink-0">
    <img src={image} width="150" height="150" alt="" />
  </div>
);

const WhatIsNowAURASection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="relative pt-6 px-4 flex flex-col items-center max-1024:pt-8 max-700:pb-6">
      <Subtitle title="Co Robimy?" isShort />
      <SectionTitle title="Czym jest nowAURA?" className="mt-3.5" />

      <div className="mt-3 max-w-[940px] text-center text-[var(--granite-gray)] text-[22px] leading-[30px] max-1024:text-lg max-1024:mt-5 max-1024:text-center">
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

      <div className="max-w-[1280px] mx-auto mt-9 flex justify-between gap-12 w-full max-1400:gap-6 max-960:flex-col max-960:items-center">
        <ItemCard
          header={
            <>
              <ItemImage image={WhatIsFirstImage} />
              <ItemTitle title="Jak działa nowAURA?" />
            </>
          }
        >
          <>
            <p>
              <strong className="block font-semibold">
                Warsztaty w czasie rzeczywistym:
              </strong>
              Nasze szkolenia są praktyczne i interaktywne. Podczas warsztatów
              samodzielnie testujesz swoje kompetencje, otrzymujesz
              natychmiastową informację zwrotną o tym, co robisz dobrze i co
              warto poprawić. To nie klasyczna nauka, gdzie ekspert tylko mówi -
              próbujesz, analizujesz i doskonalisz swoje umiejętności.
            </p>

            <p>
              <strong className="block font-semibold">
                Indywidualne i bezpieczne ćwiczenia:
              </strong>
              Dzięki indywidualnym sesjom w kontrolowanym środowisku możesz
              uczyć się bez presji, stopniowo budując swoje umiejętności i
              pewność siebie.
            </p>

            <p>
              <strong className="block font-semibold">
                Symulacje AI i VR:
              </strong>
              Wykorzystujemy sztuczną inteligencję i technologię VR do tworzenia
              realistycznych symulacji. Rozmowy odzwierciedlają codzienne
              sytuacje, dzięki czemu przygotowujesz się na realne wyzwania.
              Trening trudnych rozmów:Ćwiczysz prowadzenie wymagających rozmów i
              odpowiadanie na trudne pytania. To bezpieczna przestrzeń, by
              przećwiczyć różne scenariusze i znaleźć skuteczne sposoby
              komunikacji.
            </p>
          </>
        </ItemCard>

        <ItemCard
          isSecond
          header={
            <>
              <ItemTitle title="Korzyści z wdrożenia nowAURA w urzędzie" />
              <ItemImage image={WhatIsSecondImage} />
            </>
          }
        >
          <>
            <p>
              Wdrożenie systemu nowAURA w urzędzie pozwala znacząco{' '}
              <b>usprawnić proces komunikacji</b> między urzędnikami a
              mieszkańcami, co przekłada się na konkretne korzyści organizacyjne
              i wizerunkowe. Pracownicy zyskują umiejętności do jasnego i
              przystępnego wyjaśniania procedur, co umożliwia interesariuszom
              lepsze zrozumienie wymagań oraz działań podejmowanych po wizycie w
              urzędzie.
            </p>

            <p>
              Dzięki temu znacząco{' '}
              <b>redukowane są błędy w składanych dokumentach</b>, co z jednej
              strony odciąża urzędników, a z drugiej pozwala na sprawniejsze
              załatwianie spraw. W efekcie zmniejsza się liczba wizyt
              powtórnych, a mieszkańcy oceniają obsługę jako bardziej
              profesjonalną.
            </p>

            <p>
              Lepsze dopasowanie komunikacji do potrzeb mieszkańców sprzyja
              także budowaniu zaufania do urzędu. Pracownicy, dzięki pogłębianiu
              umiejętności takich jak parafraza czy zadawanie pytań otwartych,{' '}
              <b>precyzyjnie określają oczekiwania petentów</b>, co zmniejsza
              ryzyko nieporozumień. W efekcie urząd funkcjonuje bardziej
              efektywnie, zyskując uznanie jako instytucja przyjazna i sprawnie
              zarządzana.
            </p>
          </>
        </ItemCard>
      </div>
    </section>
  );
};

export default WhatIsNowAURASection;
