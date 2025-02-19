import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { debounce } from '../../../../lib/utils';

import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import HowToSteps from '../HowToSteps';
import Button from '../../../Button';

import HowToBgMobile from '../../../../assets/images/landing/how-to-bg-mobile.webp';
import HowToBg from '../../../../assets/images/landing/how-to-bg.webp';
import SecondBg from '../../../../assets/images/landing/corporate-main-bg.webp';
import ThirdBg from '../../../../assets/images/landing/features-table-bg.webp';
import FourthdBg from '../../../../assets/images/landing/plans-cards-bg.webp';
import SeparatorTopSimpleImage from '../../../../assets/images/landing/separator-top-simple.svg';
import SeparatorBottomSimpleImage from '../../../../assets/images/landing/separator-bottom-simple.svg';

const detectIsDesktop = () => {
  return typeof window !== 'undefined' && window.innerWidth > 1024;
};

const HowToSection = () => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(detectIsDesktop());

  useEffect(() => {
    const debouncedInitialize = debounce(
      () => setIsDesktop(detectIsDesktop()),
      400
    );
    window.addEventListener('resize', debouncedInitialize);
    return () => window.removeEventListener('resize', debouncedInitialize);
  }, []);

  const handleActiveIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const bgImages = [HowToBg, SecondBg, FourthdBg, ThirdBg];

  return (
    <section
      ref={ref}
      className="relative pt-[70px] pb-16 px-[70px] max-1024:px-4 max-1024:p-[50px] max-700:py-[40px] overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center">
        <Subtitle title="Jak to działa?" isShort />
        <SectionTitle
          title="Jak zacząć rozmowę?"
          className="mt-3 max-1024:mt-8"
        />
        <HowToSteps
          isInView={inView}
          activeIndex={activeIndex}
          setActiveIndex={handleActiveIndex}
          isDesktop={isDesktop}
        />
        <div className="mt-10 flex justify-center gap-6 max-700:mt-6 max-700:flex-col max-700:gap-2.5 max-700:items-center">
          <Button to="#" className="min-w-[247px] min-h-[60px]">
            Rozpocznij naukę
          </Button>
          <Button
            to="#"
            variant="bordered"
            className="min-w-[262px] min-h-[60px] bg-white max-700:min-w-[247px]"
          >
            Zobacz wideo
          </Button>
        </div>
      </div>

      {/* Backgro≈und images with dual transition effect */}
      {isDesktop && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {bgImages.map((img, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index < activeIndex;

            return (
              <motion.img
                key={index}
                src={img}
                alt=""
                role="presentation"
                className="absolute top-0 left-0 w-full h-full object-cover"
                animate={{
                  y: isActive ? '0%' : isPrevious ? '-100%' : '100%', // Current moves up, next comes from below
                }}
                initial={{ y: isActive ? '0' : '100%' }} // Starts off-screen at bottom
                transition={{
                  y: { duration: 0.5, ease: 'linear' },
                }}
              />
            );
          })}
        </div>
      )}

      {!isDesktop && (
        <img
          src={HowToBgMobile}
          alt=""
          role="presentation"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

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

export default HowToSection;
