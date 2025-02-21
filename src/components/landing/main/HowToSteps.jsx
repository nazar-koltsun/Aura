import { cn } from '../../../lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const steps = [
  '1. Określ obszar do rozwoju',
  '2. Wybierz temat rozmowy',
  '3. Rozmawiaj swobodnie',
  '4. Otrzymaj szczegółowy raport z pozytywnym i konstruktywnym feedbackiem',
];

const STEP_CHANGE_TIME = 1400;

const HowToSteps = ({ isInView, activeIndex, setActiveIndex, isDesktop }) => {
  const scrollContainerRef = useRef(null);
  const dotRef = useRef(null);
  
  useEffect(() => {
    if (!isDesktop) {
      if (isInView) {
        steps.forEach((_, index) => {
          setTimeout(() => {
            setActiveIndex(index);
          }, index * STEP_CHANGE_TIME);
        });
      } else {
        setActiveIndex(null);
      }
    }
  }, [isInView, isDesktop, setActiveIndex]);

  return (
    <div
      ref={scrollContainerRef}
      className="relative max-w-[510px] mt-7 bg-[var(--cultured)] p-7 pl-[65px] rounded-[30px] shadow-blockShadow max-700:pt-12
      max-700:pb-12 max-700:px-7"
    >
      <div className="relative">
        {/* Moving dot tracker */}
        {isDesktop && (
          <motion.div
            ref={dotRef}
            className="absolute z-30 flex justify-center items-center left-0 top-0 w-7 h-7 bg-[var(--jungle-green)] rounded-full"
            animate={{
              top: `${activeIndex * 84}px`,
            }}
            initial={{ top: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <span className="absolute w-3 h-3 bg-white rounded-full"></span>
          </motion.div>
        )}

        <ol className="relative space-y-14 before:w-1.5 before:h-[275px] before:bg-[var(--light-silver)] before:absolute before:top-0 before:left-[11px] max-700:before:hidden max-700:space-y-5">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              className="relative flex items-start gap-[31px] text-[20px] leading-[25px] font-medium max-700:text-center max-700:flex-col-reverse max-700:gap-5 max-700:items-center"
              animate={{
                color:
                  index === activeIndex
                    ? 'var(--jungle-green)'
                    : 'var(--eerie-black)',
              }}
              transition={{
                color: { duration: 0.5, ease: 'easeInOut' },
              }}
            >
              <div
                className={cn(
                  'flex shrink-0 justify-center items-center w-7 h-7 rounded-full bg-[var(--light-silver)]',
                  index === activeIndex && 'max-1024:bg-[var(--jungle-green)]'
                )}
                role="presentation"
              >
                <motion.div
                  className={cn(
                    'w-3 h-3 rounded-full bg-[var(--cultured)]',
                    index === activeIndex && 'max-1024:bg-[var(--jungle-green)]'
                  )}
                  animate={{
                    backgroundColor:
                      index === activeIndex
                        ? 'var(--cultured)'
                        : 'var(--jungle-green)',
                  }}
                  transition={{
                    backgroundColor: { duration: 0.5, ease: 'easeInOut' },
                  }}
                ></motion.div>
              </div>
              {step}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default HowToSteps;
