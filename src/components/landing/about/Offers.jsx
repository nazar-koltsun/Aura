import { cn, debounce } from '../../../lib/utils';
import { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './Offers.module.css';

const Offers = ({ offers }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const glideRef = useRef(null);
  const glideInstanceRef = useRef(null);

  useEffect(() => {
    const initializeCarousel = () => {
      if (window.innerWidth <= 1024 && !glideInstanceRef.current) {
        // Initialize Glide.js for mobile
        glideInstanceRef.current = new Glide(glideRef.current, {
          type: 'carousel',
          perView: 2,
          focusAt: 0,
          autoplay: 7000,
          breakpoints: {
            460: {
              perView: 1.5,
              gap: 15,
            },
          },
        });

        // Update activeSlide state on slide change
        glideInstanceRef.current.on('run.after', () => {
          setActiveSlide(glideInstanceRef.current.index);
        });

        glideInstanceRef.current.mount();
      } else if (window.innerWidth > 1024 && glideInstanceRef.current) {
        // Destroy Glide.js for larger viewports
        glideInstanceRef.current.destroy();
        glideInstanceRef.current = null;
      }
    };

    // Initialize carousel on mount
    const debouncedInitialize = debounce(initializeCarousel, 400);
    debouncedInitialize();

    // Re-initialize on resize
    window.addEventListener('resize', debouncedInitialize);

    return () => {
      // Cleanup event listener and Glide instance
      window.removeEventListener('resize', debouncedInitialize);
      if (glideInstanceRef.current) {
        glideInstanceRef.current.destroy();
      }
    };
  }, []);

  const renderItems = () => {
    return (
      <div ref={glideRef} className='glide col-span-3 mt-10 max-w-[1265px] mx-auto max-1024:mt-4'>
        <div className={cn('glide__track', styles.slidesTrack)} data-glide-el="track">
          <div className={cn('glide__slides', styles.slides)}>
            {offers.map((item, index) => (
              <div
                key={index}
                className="px-10 py-8 flex flex-col rounded-[30px] bg-white shadow-cardGray transform transition duration-200 ease-in hover:-translate-y-1 hover:shadow-premiumSdadow max-1024:px-4 max-1024:py-5"
              >
                <div className="self-center flex justify-center items-center w-[65px] h-[65px] max-700:w-[40px] max-700:h-[40px]">
                  {item.icon}
                </div>
                <div className="mt-10 text-[22px] text-[var(--granite-gray)] leading-[35px] whitespace-normal max-1024:text-base max-1024:leading-[30px] max-1024:mt-5">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className={cn('glide__bullets', styles.bullets)} data-glide-el="controls[nav]">
          {offers.map((_, index) => (
            <button
              key={index}
              className={cn('glide__bullet', styles.bullet, index === activeSlide && styles.bulletActive)}
              data-glide-dir={`=${index}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };

  return renderItems();
};

export default Offers;
