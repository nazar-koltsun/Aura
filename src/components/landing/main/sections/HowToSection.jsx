import { useEffect, useState, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn, debounce } from '../../../../lib/utils';

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
  const imageContainerRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 1 });
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(detectIsDesktop());

  const { ref: imageOneRef } = useInView({
    threshold: 0.7,
    root: imageContainerRef.current,
    onChange: (inView) => {
      if (inView) {
        setActiveIndex(0);
      }
    },
  });

  const { ref: imageTwoRef } = useInView({
    threshold: 0.7,
    root: imageContainerRef.current,
    onChange: (inView) => {
      if (inView) {
        setActiveIndex(1);
      }
    },
  });
  const { ref: imageThreeRef } = useInView({
    threshold: 0.7,
    root: imageContainerRef.current,
    onChange: (inView) => {
      if (inView) {
        setActiveIndex(2);
      }
    },
  });

  const { ref: imageFourRef } = useInView({
    threshold: 0.7,
    root: imageContainerRef.current,
    onChange: (inView) => {
      if (inView) {
        setActiveIndex(3);
      }
    },
  });

  const handleActiveIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const bgImages = [HowToBg, SecondBg, ThirdBg, FourthdBg];

  useEffect(() => {
    const detectIsDesktopDebounced = debounce(
      () => setIsDesktop(detectIsDesktop()),
      400
    );
    window.addEventListener('resize', detectIsDesktopDebounced);
    return () => window.removeEventListener('resize', detectIsDesktopDebounced);
  }, []);

  useEffect(() => {
    // Helper to compute the scrollbar width
    const handleScroll = (e) => {
      const stepsAnimationBlock = imageContainerRef.current;
      if (!stepsAnimationBlock) return;

      const currentAnimationBlockTop =
        stepsAnimationBlock.getBoundingClientRect().top;
      const stepsAnimationBlockHeight = stepsAnimationBlock.offsetHeight;

      const centerBlockTop = window.innerHeight / 2 - stepsAnimationBlockHeight / 2;

      const isAnimationBlockTopCentered = Math.abs(currentAnimationBlockTop - centerBlockTop) <= 220;
      console.log('isAnimationBlockTopCentered', isAnimationBlockTopCentered);
      
      const lastIndex = bgImages.length - 1;
      const isAtBoundary =
        (activeIndex === 0 && e.deltaY < 0) ||
        (activeIndex === lastIndex && e.deltaY > 0);

      if (isAnimationBlockTopCentered && !isAtBoundary) {
        e.preventDefault();

        const isTrackpad = Math.abs(e.deltaY) < 50 && e.deltaY % 1 !== 0;

        if (isTrackpad) {
          stepsAnimationBlock.scrollTop += e.deltaY * 40;
        } else {
          stepsAnimationBlock.scrollBy({
            top: e.deltaY,
            behavior: 'smooth',
          });
        }
      } 
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: false });
    };
  }, [activeIndex, bgImages.length]);

  return (
    <section
      ref={ref}
      className="steps-animation relative pt-[70px] pb-16 px-[70px] max-1400:pb-10 max-1400:pt-[50px] max-1024:px-4 max-1024:p-[50px] max-700:py-[40px] overflow-hidden"
    >
      <div className="relative z-20 flex flex-col items-center pointer-events-none">
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
        <div className="mt-8 flex justify-center gap-6 max-700:mt-6 max-700:flex-col max-700:gap-2.5 max-700:items-center">
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

      {/* Background images with fade transition effect */}
      {isDesktop && (
        <div
          ref={imageContainerRef}
          className={cn(
            'absolute z-10 top-0 left-0 w-full h-full overflow-y-auto scroll-smooth snap-proximity snap-y scrollbar-hide overscroll-x-auto',
            !inView && 'overflow-y-hidden'
          )}
          tabIndex="-1"
        >
          <div index={0} className="relative w-full h-full snap-center">
            <img
              src={bgImages[0]}
              alt=""
              role="presentation"
              className="absolute inset-0 w-full h-full object-cover"
              ref={imageOneRef}
            />
          </div>

          <div index={1} className="relative w-full h-full snap-center">
            <img
              src={bgImages[1]}
              alt=""
              role="presentation"
              className="absolute inset-0 w-full h-full object-cover"
              ref={imageTwoRef}
            />
          </div>

          <div index={2} className="relative w-full h-full snap-center">
            <img
              src={bgImages[2]}
              alt=""
              role="presentation"
              className="absolute inset-0 w-full h-full object-cover"
              ref={imageThreeRef}
            />
          </div>

          <div index={3} className="relative w-full h-full snap-center">
            <img
              src={bgImages[3]}
              alt=""
              role="presentation"
              className="absolute inset-0 w-full h-full object-cover"
              ref={imageFourRef}
            />
          </div>
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
        className="absolute z-20 top-0 left-0 w-full"
      />
      <img
        src={SeparatorBottomSimpleImage}
        alt=""
        role="presentation"
        className="absolute z-20 left-0 w-full bottom-[-1px] max-1920:bottom-[-1vw]"
      />
    </section>
  );
};

export default HowToSection;
