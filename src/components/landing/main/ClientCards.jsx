import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import styles from './ClientCards.module.css';

import { cn, debounce } from '../../../lib/utils';
import HighlightBox from '../HighlightBox';

import Button from '../../Button';
import CompanyIcon from '../../icons/CompanyIcon';
import MessageIcon from '../../icons/MessageIcon';
import ClientIcon from '../../icons/ClientIcon';

const clientCards = [
  {
    title: 'Klient Firmowy',
    icon: <CompanyIcon />,
    description:
      'Odkryj potencjał talentów w swojej firmie, aby zwiększać przychody, podnosić efektywność i obniżać koszty.',
  },
  {
    title: 'Klient Indywidualny',
    icon: <MessageIcon />,
    description:
      'Zbuduj umiejętności komunikacyjne i sprzedażowe, które zmienią Twoje życie.',
  },
  {
    title: 'Klient JST',
    icon: <ClientIcon />,
    description:
      'Wykorzystaj potencjał kadry w urzędzie, by usprawnić działania i podnieść jakość obsługi.',
  },
];

const ClientCards = ({ data = clientCards, className }) => {
  const glideRef = useRef(null);
  const glideInstanceRef = useRef(null);

  useEffect(() => {
    const initializeCarousel = () => {
      if (window.innerWidth <= 1024 && !glideInstanceRef.current) {
        // Initialize Glide.js for mobile
        glideInstanceRef.current = new Glide(glideRef.current, {
          type: 'carousel',
          perView: 2,
          focusAt: 'center',
          gap: 20,
          // autoplay: 3000,
          breakpoints: {
            660: {
              perView: 1.2,
              gap: 15,
            },
          },
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

  const renderActions = (index) => {
    if (index === 0) {
      return (
        <>
          <Button
            to="#"
            variant="bordered"
            className="px-7 border-[var(--sandy-brown)] text-[var(--sandy-brown)]"
          >
            Zarezerwuj darmowe demo
          </Button>
          <Button
            to="#"
            className="px-5 bg-[var(--sandy-brown)] hover:bg-[#DE8640]"
          >
            Dowiedz się więcej
          </Button>
        </>
      );
    }

    if (index === 1) {
      return (
        <>
          <Button to="#" variant="bordered" className="px-7 min-w-[194px]">
            Zadaj pytanie
          </Button>
          <Button to="#" className="px-5 min-w-[194px]">
            Dowiedz się więcej
          </Button>
        </>
      );
    }

    return (
      <>
        <Button
          to="#"
          variant="bordered"
          className="px-7 min-w-[194px] text-[var(--rocket-metallic)] border-[var(--rocket-metallic)]"
        >
          Zadaj pytanie
        </Button>
        <Button
          to="#"
          className="px-5 min-w-[194px] bg-[var(--rocket-metallic)] hover:bg-[var(--eerie-black)]"
        >
          Dowiedz się więcej
        </Button>
      </>
    );
  };

  return (
    <div ref={glideRef} className="glide">
      <div
        className={cn('glide__track', styles.slidesTrack)}
        data-glide-el="track"
      >
        <div
          className={cn(
            'glide__slides grid grid-cols-3 max-1240:grid-cols-2',
            styles.slides,
            className
          )}
        >
          {data.map((cardData, index) => (
            <HighlightBox
              key={cardData.title}
              color={
                index === 0
                  ? 'var(--sandy-brown)'
                  : index === 1
                  ? 'var(--jungle-green)'
                  : 'var(--rocket-metallic)'
              }
              className="rounded-[30px] flex transform duration-200 ease-in hover:-translate-y-2"
            >
              <div
                className={cn(
                  'glide__slide flex flex-col items-center bg-[var(--cultured)] px-8 py-7 rounded-[30px] max-1024:py-5 max-1024:px-4',
                  styles.slide,
                  index === 0 && 'shadow-cardOrange',
                  index === 1 && 'shadow-cardGreen',
                  index === 2 && 'shadow-cardGray'
                )}
              >
                <div className="flex justify-center items-center w-[42px] h-[42px] pointer-events-none">
                  {cardData.icon}
                </div>

                <h3 className="mt-8 text-[24px] text-center leading-[30px] text-[var(--eerie-black)] font-semibold max-1024:mt-4 max-1024:text-[20px] max-1024:leading-[25px] pointer-events-none">
                  {cardData.title}
                </h3>

                <p className="mt-7 mb-7 text-[18px] text-center leading-[30px] text-[var(--granite-gray)] max-1024:mt-6 max-1024:mb-5 pointer-events-none">
                  {cardData.description}
                </p>

                <div className="mt-auto flex flex-col items-center gap-5">
                  {renderActions(index)}
                </div>
              </div>
            </HighlightBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCards;
