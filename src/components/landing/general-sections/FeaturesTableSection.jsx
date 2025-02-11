import { useRef } from 'react';
import { motion } from "framer-motion";
import { cn } from '../../../lib/utils';

import FeaturesTableBg from '../../../assets/images/landing/features-table-bg.webp';
import SeparatorTopSimpleImage from '../../../assets/images/landing/separator-top-simple.svg';
import SeparatorBottomSimpleImage from '../../../assets/images/landing/separator-bottom-simple.svg';

import LeftRightArrowIcon from '../../icons/LeftRightArrowIcon';

const FEATURES_DATA = [
  {
    title: 'nowAURA (VR+AI)',
    Interaktywność: 'Bardzo wysoka',
    Personalizacja: 'Bardzo Wysoka',
    'Koszt początkowy': 'Średni',
    'Koszt skalowania': 'Niski',
    'Zaangażowanie użytkownika': 'Bardzo wysokie',
    'Symulacja realnych sytuacji': 'Bardzo Wysoka',
    'Możliwość analizy postępów': 'Bardzo Wysoka',
    'Dostosowanie do wyników': 'Wysoka',
  },
  {
    title: 'VR',
    Interaktywność: 'Wysoka',
    Personalizacja: 'Średnia',
    'Koszt początkowy': 'Średni',
    'Koszt skalowania': 'Średni',
    'Zaangażowanie użytkownika': 'Wysokie',
    'Symulacja realnych sytuacji': 'Wysoka',
    'Możliwość analizy postępów': 'Średnia',
    'Dostosowanie do wyników': 'Brak',
  },
  {
    title: 'Standardowe Szkolenia',
    Interaktywność: 'Niska',
    Personalizacja: 'Brak',
    'Koszt początkowy': 'Średni',
    'Koszt skalowania': 'Wysoki',
    'Zaangażowanie użytkownika': 'Średnie',
    'Symulacja realnych sytuacji': 'Niska',
    'Możliwość analizy postępów': 'Ograniczona',
    'Dostosowanie do wyników': 'Brak',
  },
  {
    title: 'E-learning',
    Interaktywność: 'Średnia',
    Personalizacja: 'Ograniczona',
    'Koszt początkowy': 'Niski',
    'Koszt skalowania': 'Niski',
    'Zaangażowanie użytkownika': 'Średnie',
    'Symulacja realnych sytuacji': 'Brak',
    'Możliwość analizy postępów': 'Wysoka',
    'Dostosowanie do wyników': 'Ograniczona',
  },
];

const ShakingArrow = () => {
  return (
    <motion.div
      className="relative w-[50px] z-10 mr-2 ml-auto hidden max-1394:block"
      animate={{
        x: [-5, 5, -5], // Moves left and right
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <LeftRightArrowIcon />
    </motion.div>
  );
};

const FeaturesTableSection = () => {
  const tableKeys = Object.keys(FEATURES_DATA[0]).slice(1);

  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDown = false);
  const handleMouseUp = () => (isDown = false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative px-10 pt-24 pb-20 max-1394:pt-11 max-1024:pr-0 max-1024:px-4 max-1024:pb-16 max-1024:pt-6 max-700:pb-12 max-700:pt-1">
      <ShakingArrow />
      <div className="relative z-10 flex items-end justify-center mx-auto">
        <div
          className="flex-shrink-0 border border-white w-[260px] rounded-[30px] rounded-tr-none overflow-hidden 
        max-1400:rounded-br-none max-700:rounded-[15px] max-700:rounded-br-none max-700:w-[175px]"
        >
          {tableKeys.map((key, index) => (
            <div
              key={index}
              className="min-h-[61px] px-2 py-4 border-b-2 border-b-white last:border-b-0 bg-white 
              bg-opacity-20 text-[17px] leading-[27px] font-bold text-white max-700:text-[12px] max-700:px-[2px]
              max-700:py-2 max-700:min-h-0"
            >
              {key}
            </div>
          ))}
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto whitespace-nowrap scrollbar-hide cursor-move"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex">
            {FEATURES_DATA.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  'border border-white w-[260px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] max-1400:rounded-b-none max-700:w-[160px] max-700:rounded-[15px] max-700:rounded-b-none',
                  index === 0 &&
                    'border-[var(--jungle-green)] rounded-[30px] max-700:rounded-b-none',
                  index === 1 && 'rounded-bl-[30px] max-700:rounded-b-none',
                  index === FEATURES_DATA.length - 1 &&
                    'rounded-br-[30px] max-1400:rounded-br-[30px] max-700:rounded-br-[15px]'
                )}
              >
                <div
                  className={cn(
                    'px-2 py-4 border-b-2 last:border-b-0 bg-white text-[17px] leading-[27px] font-bold text-[var(--granite-gray)] text-center max-700:text-[12px] max-700:px-[2px] max-700:py-2',
                    index === 0 &&
                      'bg-[var(--jungle-green)] text-white border-b-[var(--jungle-green)]'
                  )}
                >
                  {feature.title}
                </div>
                {Object.values(feature)
                  .slice(1)
                  .map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={cn(
                        'px-2 py-4 min-h-[61px] border-b-2 text-center border-b-white last:border-b-0 bg-white bg-opacity-20 text-[17px] leading-[27px] text-white max-700:text-[12px] max-700:px-[2px] max-700:py-2 max-700:min-h-0',
                        index === 0 &&
                          'font-bold bg-[#2A9D8F] border-b-[#2A9D8F]'
                      )}
                    >
                      {feature}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src={FeaturesTableBg}
        role="presentation"
        className="absolute left-0 top-0 w-full h-full object-cover"
        alt=""
      />
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

export default FeaturesTableSection;
