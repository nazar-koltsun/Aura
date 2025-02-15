import { useState, useEffect } from 'react';
import { debounce } from '../../../../lib/utils';
import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import Button from '../../../Button';

import SeparatorTopImg from '../../../../assets/images/landing/separator-top.svg';
import FollowUsBannerBg from '../../../../assets/images/landing/follow-us-bg.webp';
import FacebookSdadowIcon from '../../../icons/FacebookSdadowIcon';
import InstagramSdadowIcon from '../../../icons/InstagramSdadowIcon';
import TictokSdadowIcon from '../../../icons/TictokSdadowIcon';
import WhatsUpSdadowIcon from '../../../icons/WhatsUpSdadowIcon';
import LinkedInSdadowIcon from '../../../icons/LinkedInSdadowIcon';
import XSdadowIcon from '../../../../assets/images/landing/x-shadow-icon.webp';

const socials = [
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: <FacebookSdadowIcon />,
    position: {
      desktop: { top: '20%', left: '44%' },
      mobile: { top: '30%', left: '5%' },
    }
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: <InstagramSdadowIcon />,
    position: {
      desktop: { top: '8%', left: '60%' },
      mobile: { top: '20%', left: '35%' },
    }
  },
  {
    title: 'Tictok',
    href: 'https://tiktok.com',
    icon: <TictokSdadowIcon />,
    position: {
      desktop: { top: '18%', left: '70%' },
      mobile: { top: '17%', left: '65%' },
    }
  },
  {
    title: 'WhatsUp',
    href: 'https://whatsapp.com',
    icon: <WhatsUpSdadowIcon />,
    position: {
      desktop: { top: '16%', left: '85%' },
      mobile: { top: '45%', left: '80%' },
    }
  },
  {
    title: 'Linkedin',
    href: 'https://linkedin.com',
    icon: <LinkedInSdadowIcon />,
    position: {
      desktop: { top: '45%', left: '77%' },
      mobile: { top: '45%', left: '50%' },
    }
  },
  {
    title: 'X',
    href: 'https://x.com',
    icon: <img src={XSdadowIcon} alt='' className='max-w-[94px] max-1024:max-w-[70px]' />,
    position: {
      desktop: { top: '45%', left: '55%' },
      mobile: { top: '55%', left: '25%' },
    }
  },
];

const MOBILE_BREAKPOINT = 960;

const FollowUsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const handleResizeDebounced = debounce(handleResize, 200);

    window.addEventListener('resize', handleResizeDebounced);
    return () => window.removeEventListener('resize', handleResizeDebounced);
  }, []);

  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      <img className="w-full" alt="" role="presentation" src={SeparatorTopImg} />

      <div className="px-10 pt-2.5 pb-8 w-full flex flex-col items-center mx-auto max-1024:max-w-full max-1024:pt-6 max-1240:px-6 max-1024:px-4">
        <Subtitle title="Social Media" isShort />
        <SectionTitle title="Obserwuj nas" className="mt-4 max-w-[660px]" />

        <p className="mt-2 text-[22px] leading-[30px] max-w-[950px] text-center text-[var(--granite-gray)] max-1024:text-lg">
          Dostarczamy szkolenia podnoszące kwalifikacje komunikacyjne i sprzedażowe wspierane przez VR i AI - badania pokazują, że nauka dzięki immersji VR jest skuteczniejsza o 233%.<sup>1</sup>
        </p>

        <div className='relative mt-10 rounded-[30px] max-w-[1200px] w-full min-h-[400px] shadow-blockShadow overflow-hidden max-1024:mt-6 max-1024:min-h-[350px]'>
          {socials.map((social, index) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="absolute z-10 w-[100px] h-[100px] flex justify-center items-center transform duration-200 ease-in hover:scale-105 max-1024:w-[70px] max-1024:h-[70px]"
              style={{
                top: isMobile ? social.position.mobile.top : social.position.desktop.top,
                left: isMobile ? social.position.mobile.left : social.position.desktop.left,
              }}
            >
              <span className='sr-only'>{social.title}</span>
              {social.icon}
            </a>
          ))}

          <Button
            path="#"
            className="absolute bottom-8 left-1/2 z-10 mt-10 text-[17px] min-w-[262px] min-h-[60px] border-2 tracking-wider max-700:min-w-[250px] border-transparent max-960:-translate-x-1/2"
          >
            Skontaktuj się
          </Button>

          <img src={FollowUsBannerBg} alt="" className="absolute inset-0 w-full h-full object-cover max-1024:object-left" />
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
