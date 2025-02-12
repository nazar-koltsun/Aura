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
    text: 'Some text 1',
  },
  {
    left: '0.5%',
    top: '40.5%',
    icon: <ThreePeoplesIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: 'Some text 2',
  },
  {
    left: '9.1%',
    top: '17.7%',
    icon: <VRGlassesIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: 'Some text 3',
  },
  {
    left: '40.6%',
    top: '7.6%',
    icon: <BrainSettingsIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--jungle-green)',
    text: 'Some text 4',
  },
  {
    right: '8.9%',
    top: '17.7%',
    icon: <MicIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: 'Some text 5',
  },
  {
    right: '0.1%',
    top: '40.5%',
    icon: <LabIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: 'Some text 6',
  },
  {
    right: '1.6%',
    bottom: '22%',
    icon: <HumanHeadIcon className="max-w-[75%] max-700:max-w-[60%]" />,
    bg: 'var(--sandy-brown)',
    text: 'Some text 7',
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
          animate={{
            scale: [1, 1.08, 1],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className={cn(
            'absolute w-[19%] h-[14.769%] p-1 flex justify-center items-center gap-1 rounded-full text-xs text-white cursor-pointer',
            (hoveredIndex === index || activeIndex === index) && 'z-10'
          )}
          style={{ backgroundColor: circle.bg, ...circle }}
          onMouseEnter={() => !isTouchDevice && setHoveredIndex(index)}
          onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
          onClick={() => handleToggle(index)}
        >
          {/* Circle Animation (Smooth Scaling) */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="absolute w-full h-full rounded-full z-10"
          ></motion.div>

          {/* Icon Animation (Subtle Growing) */}
          <motion.div
            animate={{
              scale: [1, 1.07, 1],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="flex justify-center items-center"
          >
            {circle.icon}
          </motion.div>

          {/* Text - Appears instantly with no animation */}
          <span
            className={cn(
              'absolute bottom-full mb-2 text-black bg-white px-2 py-1 rounded text-sm shadow-cardGreen text-center hidden max-1024:text-xs max-1024:p-1',
              (hoveredIndex === index || activeIndex === index) && 'block'
            )}
          >
            {circle.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default VRPlusAIFeatures;
