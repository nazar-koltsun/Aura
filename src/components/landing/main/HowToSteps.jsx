import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "../../../lib/utils";

const steps = [
  "1. Określ obszar do rozwoju",
  "2. Wybierz temat rozmowy",
  "3. Rozmawiaj swobodnie",
  "4. Otrzymaj szczegółowy raport z pozytywnym i konstruktywnym feedbackiem",
];

const HowToSteps = () => {
  const { ref, inView } = useInView({ threshold: 0.6 }); // Detect when the component is in view
  const [activeIndex, setActiveIndex] = useState(null); // Track the currently active item

  useEffect(() => {
    if (inView) {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setActiveIndex(index);
        }, index * 2000); // Stagger each item's activation by 500ms
      });
    } else {
      setActiveIndex(null); // Reset when the component goes out of view
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="max-w-[533px] mt-9 bg-[var(--cultured)] p-7 pl-[75px] rounded-[30px] shadow-blockShadow max-700:pt-12
      max-700:pb-12 max-700:px-7"
    >
      <ol
        className="relative space-y-[98px] 
      before:content-['']
      before:w-1.5
      before:h-[90%]
      before:bg-[var(--light-silver)]
      before:absolute
      before:top-0
      before:left-[11px]
      max-700:before:hidden
      max-700:space-y-5
      "
      >
        {steps.map((step, index) => (
          <motion.li
            key={index}
            className="relative flex items-center gap-[31px] text-[20px] leading-[25px] font-medium max-700:text-center max-700:flex-col-reverse max-700:gap-5"
            animate={{
              color:
                index === activeIndex ? "var(--jungle-green)" : "var(--eerie-black)",
            }}
            transition={{
              color: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <div
              className={cn('flex shrink-0 justify-center items-center w-7 h-7 rounded-full', 
                index === activeIndex
                ? "bg-[var(--jungle-green)]"
                : "bg-[var(--light-silver)]")}
              role="presentation"
            >
              <motion.div
                className={cn('w-3 h-3 rounded-full', index === activeIndex ? "bg-[var(--cultured)]" : "bg-[var(--jungle-green)]")}
                animate={{
                  backgroundColor:
                    index === activeIndex
                      ? "var(--cultured)"
                      : "var(--jungle-green)",
                }}
                transition={{
                  backgroundColor: { duration: 0.5, ease: "easeInOut" },
                }}
              ></motion.div>
            </div>
            {step}
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default HowToSteps;
