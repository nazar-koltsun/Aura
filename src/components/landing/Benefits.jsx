import { cn, debounce } from '../../lib/utils';
import { useEffect, useRef, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './Benefits.module.css';

const Benefits = ({
  benefits,
  isBannerLarge,
  className,
  isCarouselOnMobile = false,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const glideRef = useRef(null);
  const glideInstanceRef = useRef(null);

  useEffect(() => {
    if (!isCarouselOnMobile) return;

    const initializeCarousel = () => {
      if (window.innerWidth <= 1024 && !glideInstanceRef.current) {
        // Initialize Glide.js for mobile
        glideInstanceRef.current = new Glide(glideRef.current, {
          type: 'carousel',
          perView: 3,
          focusAt: 0,
          gap: 20,
          // autoplay: 7000,
          breakpoints: {
            700: {
              perView: 2,
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
  }, [isCarouselOnMobile]);

  const renderItems = (benefits) => {
    const renderLinks = () => {
      return (
        <>
          {benefits.items.map((item, index) => (
            <a
              key={index}
              className={cn(
                'pl-5 pr-4 pt-3 pb-5 min-h-[210px] rounded-[25px] bg-[var(--cultured)] shadow-cardGray transform transition duration-200 ease-in hover:-translate-y-1 hover:shadow-premiumSdadow max-1024:px-5 max-1024:min-h-[165px]',
                isCarouselOnMobile && 'max-1024:shadow-smallShadow',
                item.shadow && `shadow-${item.shadow}`
              )}
              href={item.linkUrl || null}
            >
              <div className="flex justify-center items-center w-[65px] h-[65px] max-700:w-[33px] max-700:h-[33px]">
                {item.icon}
              </div>

              <div className="mt-4 text-[15px] flex gap-1 text-[var(--granite-gray)] leading-[30px] max-700:text-[12px] max-700:leading-[22px] whitespace-normal max-1024:mt-3">
                <span>•</span>
                {item.text}
              </div>
            </a>
          ))}
        </>
      );
    };

    if (isCarouselOnMobile) {
      return (
        <div ref={glideRef} className={cn('glide col-span-3', styles.glide)}>
          <div
            className={cn('glide__track', styles.slidesTrack)}
            data-glide-el="track"
          >
            <div className={cn('glide__slides', styles.slides)}>
             {renderLinks()}
            </div>
            {/* Dots Navigation */}
            <div
              className={cn('glide__bullets', styles.bullets)}
              data-glide-el="controls[nav]"
            >
              {benefits.items.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'glide__bullet',
                    styles.bullet,
                    index === activeSlide && styles.bulletActive
                  )}
                  data-glide-dir={`=${index}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return renderLinks();
  };

  return (
    <div
      className={cn(
        'grid grid-cols-3 gap-5 w-full max-1024:grid-cols-2 max-1024:gap-4',
        isCarouselOnMobile && 'max-1024:gap-0',
        className
      )}
    >
      <div
        className={cn(
          'col-span-2 relative pl-24 pr-14 py-8 min-h-[210px] bg-[#A7AB86] flex justify-center items-center rounded-[25px] shadow-cardGray overflow-hidden max-1024:py-6 max-1024:px-11 max-1024:min-h-[197px]',
          isBannerLarge && 'col-span-3 max-1024:col-span-2'
        )}
      >
        <p className="relative z-10 max-w-[650px] text-[22px] text-white text-center leading-[30px] font-medium max-1024:text-[18px]">
          {benefits.banner.text}
        </p>

        <img
          src={benefits.banner.image}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover blur-[2px]"
        />
      </div>

      {renderItems(benefits)}
    </div>
  );
};

export default Benefits;
