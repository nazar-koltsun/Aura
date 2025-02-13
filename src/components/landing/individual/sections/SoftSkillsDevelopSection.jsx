import { cn } from '../../../../lib/utils';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';

import SoftSkillsImage from '../../../../assets/images/landing/soft-skills-develop.webp';

import HeadHearthSettingsIcon from '../../../icons/HeadHearthSettingsIcon';
import HumanToDoListIcon from '../../../icons/HumanToDoListIcon';
import ReactivityIcon from '../../../icons/ReactivityIcon';
import TwoHeadsExpirianceIcon from '../../../icons/TwoHeadsExpirianceIcon';
import MicIcon from '../../../icons/MicIcon';
import BrainSettingsIcon from '../../../icons/BrainSettingsIcon';

const circlesData = [
  {
    left: '4%',
    top: '42%',
    icon: <HeadHearthSettingsIcon className="max-w-[65%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Title 1</b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eaque, eos voluptate magni cum quasi ab, doloribus laborum perspiciatis
        quibusdam, fugit possimus quo eligendi iure?
      </p>
    ),
  },
  {
    left: '14%',
    top: '30%',
    icon: <HumanToDoListIcon className="max-w-[65%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Title 2</b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eaque, eos voluptate magni cum quasi ab, doloribus laborum perspiciatis
        quibusdam, fugit possimus quo eligendi iure?
      </p>
    ),
  },
  {
    left: '40%',
    top: '34%',
    icon: <ReactivityIcon className="max-w-[65%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Title 3</b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eaque, eos voluptate magni cum quasi ab, doloribus laborum perspiciatis
        quibusdam, fugit possimus quo eligendi iure?
      </p>
    ),
  },
  {
    left: '32%',
    top: '16%',
    icon: <TwoHeadsExpirianceIcon className="max-w-[65%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Title 4</b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eaque, eos voluptate magni cum quasi ab, doloribus laborum perspiciatis
        quibusdam, fugit possimus quo eligendi iure?
      </p>
    ),
  },
  {
    left: '63%',
    top: '20%',
    icon: <MicIcon className="max-w-[65%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Title 5</b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eaque, eos voluptate magni cum quasi ab, doloribus laborum perspiciatis
        quibusdam, fugit possimus quo eligendi iure?
      </p>
    ),
  },
  {
    left: '78%',
    top: '35%',
    icon: <BrainSettingsIcon className="max-w-[65%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: (
      <p>
        <b className="block text-lg mb-1 max-700:text-base">Title 6</b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        eaque, eos voluptate magni cum quasi ab, doloribus laborum perspiciatis
        quibusdam, fugit possimus quo eligendi iure?
      </p>
    ),
  },
];

const SoftSkillsDevelopSection = () => {
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
    <section className="relative pt-6 px-4 flex flex-col items-center max-1024:pt-8 max-700:pb-6">
      <Subtitle title="Co Robimy?" isShort />
      <SectionTitle title="Rozwijamy umiejętności miękkie" className="mt-3.5" />

      <p className="mt-3 max-w-[940px] text-center text-[var(--granite-gray)] text-lg max-1024:mt-5 max-1024:text-center">
        Dostarczamy szkolenia podnoszące kompetencje komunikacyjne i sprzedażowe
        wspierane przez AI - badania pokazują, że 81% firm twierdzi, że
        wydajność wzrosłaby dzięki lepszym procesom, umiejętnościom i szkoleniom
        kompetencyjnym.
      </p>

      <div className="relative w-full max-w-[350px] mx-auto ">
        <img
          src={SoftSkillsImage}
          width={561}
          height={721}
          alt="Soft Skills Develop"
          className="mt-6"
        />

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
              'absolute w-[16%] h-[11.8%] p-1 flex justify-center items-center gap-1 rounded-full text-xs text-white cursor-pointer',
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
                'absolute bottom-full w-[300px] mb-2 text-[var(--granite-gray)] bg-white px-3 py-4 rounded-[20px] text-sm shadow-cardGreen text-center hidden max-700:left-0 max-700:w-[200px] max-700:text-xs max-700:rounded-[15px] max-700:px-2 max-700:py-3',
                (hoveredIndex === index || activeIndex === index) && 'block',
                (index === 3 || index === 2) && 'max-700:left-auto',
                index > 3 && 'max-700:right-0 max-700:left-auto'
              )}
            >
              {circle.text}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkillsDevelopSection;
