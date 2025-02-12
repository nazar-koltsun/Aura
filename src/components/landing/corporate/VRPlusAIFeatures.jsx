import { cn } from '../../../lib/utils';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import VRPlusAIImage from '../../../assets/images/landing/VRPlusAI.webp';

import TwoPeoplesIcon from '../../icons/TwoPeoplesIcon';
import ThreePeoplesIcon from '../../icons/ThreePeoplesIcon';
import VRGlassesIcon from '../../icons/VRGlassesIcon';
import BrainSettingsIcon from '../../icons/BrainSettingsIcon';
import MicIcon from '../../icons/MicIcon';
import LabIcon from '../../icons/LabIcon';
import HumanHeadIcon from '../../icons/HumanHeadIcon';

const circlesData = [
  {
    left: '2.1%',
    bottom: '22%',
    icon: <TwoPeoplesIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Trening 1 na 1 bez ryzyka konsekwencji!</b>
        Ćwicz indywidualnie rozmowy z sztuczną inteligencją w bezpiecznym
        środowisku, gdzie możesz eksperymentować, uczyć się na błędach i
        rozwijać swoje umiejętności bez stresu i konsekwencji
      </p>
    ),
  },
  {
    left: '0.5%',
    top: '40.5%',
    icon: <ThreePeoplesIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Buduj trwałe relacje i zdobywaj zaufanie!</b>
        Ćwicz umiejętności nawiązywania długotrwałych relacji z zespołem, klientami oraz partnerami biznesowymi, zwiększając swoją skuteczność i przewagę konkurencyjną
      </p>
    ),
  },
  {
    left: '9.1%',
    top: '17.7%',
    icon: <VRGlassesIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Maksymalna immersja w VR!</b>
        Zaawansowana technologia VR przenosi uczestników w wirtualny świat, gdzie mogą w pełni skupić się na szkoleniu, doświadczając realistycznych sytuacji i bodźców, ucząc się poprzez praktykę
      </p>
    ),
  },
  {
    left: '40.6%',
    top: '7.6%',
    icon: <BrainSettingsIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Raporty i analiza wyników!</b>
        Po każdej sesji otrzymujesz szczegółowy raport z analizą mocnych stron i obszarów do poprawy – dzięki temu wiesz, nad czym pracować, by osiągać jeszcze lepsze rezultaty
      </p>
    ),
  },
  {
    right: '8.9%',
    top: '17.7%',
    icon: <MicIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Trening w czasie rzeczywistym!</b>
        Szkolenie odbywa się w interaktywnym środowisku, gdzie sztuczna inteligencja odgrywa rolę klienta lub członka zespołu, <span className='underline'>odpowiadając głosowo na żywo na wypowiedzi uczestników</span> i maksymalizując ich zaangażowanie
      </p>
    ),
  },
  {
    right: '0.1%',
    top: '40.5%',
    icon: <LabIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Eksperymentowanie i doskonalenie strategii!</b>
        Testuj różne podejścia w sprzedaży i zarządzaniu, odkrywaj najlepsze strategie i udoskonalaj swoje umiejętności w praktycznych scenariuszach
      </p>
    ),
  },
  {
    right: '1.6%',
    bottom: '22%',
    icon: <HumanHeadIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Zadowoleni klienci, zmotywowany zespół!</b>
        Dzięki skutecznej komunikacji i umiejętności budowania relacji, Twój zespół lepiej odpowiada na potrzeby klientów, zwiększając ich satysfakcję i lojalność
      </p>
    ),
  },
];

const VRPlusAIFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if the device supports touch
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const handleToggle = (index) => {
    if (isTouchDevice) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="mt-1 max-w-[400px] relative max-1024:mt-3">
      <img src={VRPlusAIImage} alt="" />

      {circlesData.map((circle, index) => (
        <motion.div
          key={index}
          animate={
            hoveredIndex === index || activeIndex === index
              ? {} // Stop animation when hovered
              : {
                  scale: [1, 1.08, 1],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
          }
          className={cn(
            'absolute w-[19%] h-[14.769%] p-1 flex justify-center items-center gap-1 rounded-full text-xs text-white cursor-pointer',
            (hoveredIndex === index || activeIndex === index) && 'z-10'
          )}
          style={{ backgroundColor: circle.bg, ...circle }}
          onMouseEnter={() => !isTouchDevice && setHoveredIndex(index)}
          onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
          onClick={() => handleToggle(index)}
        >
          {/* Circle Animation (Stops on Hover) */}
          <motion.div
            animate={
              hoveredIndex === index || activeIndex === index
                ? {} // Stop animation when hovered
                : {
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }
            }
            className="absolute w-full h-full rounded-full z-10"
          ></motion.div>

          {/* Icon Animation (Stops on Hover) */}
          <motion.div
            animate={
              hoveredIndex === index || activeIndex === index
                ? {} // Stop animation when hovered
                : {
                    scale: [1, 1.07, 1],
                    transition: {
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }
            }
            className="flex justify-center items-center"
          >
            {circle.icon}
          </motion.div>

          {/* Text */}
          <div
            className={cn(
              'absolute bottom-full w-[300px] mb-2 text-[var(--granite-gray)] bg-white px-3 py-4 rounded-[20px] text-sm shadow-cardGreen text-center hidden max-700:left-0 max-700:w-[250px] max-700:text-xs max-700:rounded-[15px] max-700:px-2 max-700:py-3',
              (hoveredIndex === index || activeIndex === index) && 'block',
              index === 3 && 'max-700:left-auto',
              index > 3 && 'max-700:right-0 max-700:left-auto'
            )}
          >
            {circle.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VRPlusAIFeatures;
