import { useState } from 'react';
import PageH1 from '../../PageH1';
import Subtitle from '../../Subtitle';
import VisionCard from '../VisionCard';

import VisionImage from '../../../../assets/images/landing/vision.webp';

const visionData = [
  {
    img: VisionImage,
    title: 'Nasza wizja 1',
    description: (
      <p>
        Naszym celem jest{' '}
        <b>
          połączenie współczesnych zawodów z możliwościami sztucznej
          inteligencji
        </b>
        . Jesteśmy tu po to, aby wspierać{' '}
        <b>cyfrową transformację przedsiębiorstw</b>, pomagając im dostosować
        się do dynamicznie zmieniającej się rzeczywistości.
      </p>
    ),
  },
  {
    img: VisionImage,
    title: 'Nasza wizja 2',
    description: (
      <p>
        Naszym celem jest{' '}
        <b>
          połączenie współczesnych zawodów z możliwościami sztucznej
          inteligencji
        </b>
        . Jesteśmy tu po to, aby wspierać{' '}
        <b>cyfrową transformację przedsiębiorstw</b>, pomagając im dostosować
        się do dynamicznie zmieniającej się rzeczywistości.
      </p>
    ),
  },
  {
    img: VisionImage,
    title: 'Nasza wizja 3',
    description: (
      <p>
        Naszym celem jest{' '}
        <b>
          połączenie współczesnych zawodów z możliwościami sztucznej
          inteligencji
        </b>
        . Jesteśmy tu po to, aby wspierać{' '}
        <b>cyfrową transformację przedsiębiorstw</b>, pomagając im dostosować
        się do dynamicznie zmieniającej się rzeczywistości.
      </p>
    ),
  },
];

const MainSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  const handleActiveIndex = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <section className="relative px-4 pt-10 pb-8 max-1024:pt-10 max-1024:pb-7 max-1024:px-4 max-520:pb-16">
      <div className="max-w-[950px] mx-auto flex flex-col justify-center items-center max-700:max-w-full">
        <Subtitle title="O nas" />
        <PageH1 className="mt-3 text-[44px] leading-[54px] font-semibold">
          Umiejętności komunikacyjne to klucz
        </PageH1>

        <p className="mt-2 text-lg text-center text-[var(--granite-gray)]">
          Jesteśmy <b>pasjonatami komunikacji</b> oraz{' '}
          <b>sztucznej inteligencji</b> i jej praktycznych zastosowań. Wierzymy,
          że odpowiednie połączenie tych dwóch obszarów to klucz do sukcesu w
          nowoczesnym świecie.
        </p>
      </div>

      <div className="mt-20 flex justify-center gap-6 max-w-[1255px] mx-auto max-1400:mt-14 max-520:mt-14">
        {visionData.map((vision, index) => (
          <VisionCard
            key={index}
            index={index}
            data={vision}
            activeCardIndex={activeCardIndex}
            handleActiveIndex={handleActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default MainSection;
