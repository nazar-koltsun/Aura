import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

import Logo from '../../assets/images/logo.png';
import NewsletterForm from './NewsletterForm';
import SocialMedia from './SocialMedia';

import TiktokIcon from '../icons/TiktokIcon';
import ThreadsIcon from '../icons/ThreadsIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedinIcon from '../icons/LinkedInIcon';
import FacebookIcon from '../icons/FacebookIcon';

import SeparatorTopImg from '../../assets/images/landing/separator-top.svg';
import FooterAnimationLineImage from '../../assets/images/landing/footer-line-anim.svg';

const socialNetworksBaseClasses =
  'group-hover:fill-[var(--sandy-brown)] transition duration-200 ease-in-out';

const socialNetworks = [
  {
    title: 'TikTok',
    href: 'https://tiktok.com',
    icon: <TiktokIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Threads',
    href: 'https://threads.com',
    icon: <ThreadsIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: <InstagramIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Linkedin',
    href: 'https://linkedin.com',
    icon: <LinkedinIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: <FacebookIcon className={socialNetworksBaseClasses} />,
  },
];

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.6 }); //

  const titleBaseClasses =
    'text-[var(--eerie-black)] font-medium text-base leading-[22px] tracking-[1px]';
  const linkBaseClasses =
    'text-[var(--granite-gray)] text-xs hover:text-[var(--sandy-brown)] transition duration-200 ease-in-out';

  return (
    <footer ref={ref}>
      <img
        className="w-full"
        src={SeparatorTopImg}
        alt=""
        role="presentation"
      />

      <div className="py-5 px-14 max-1024:px-4 max-1024:pt-7 max-1024:pb-12">
        <div className="flex flex-col justify-center items-center">
          <img
            className='max-1024:w-[180px] max-1024:h-auto"'
            src={Logo}
            width={216}
            height={110}
            alt="nowAura logo"
          />

          <p className="text-[var(--granite-gray)] text-center mt-4 text-xl max-1024:mt-3">
            Zbuduj AURĘ wokół siebie i odkryj jak komunikacja może być <br />{' '}
            Twoim najpotężniejszym narzędziem.
          </p>
        </div>

        <div
          className="relative h-[2px] mt-14 max-1024:mt-10 overflow-hidden"
          style={{
            background:
              'linear-gradient(to right, #000000 0%, #FFFFFF 0%, rgba(42, 157, 143, 0.6) 50%, rgba(0, 0, 0, 0) 100%)',
          }}
          role="presentation"
        >
          <img
            className={cn(
              'transform transition translate-x-0 duration-100 ease-in',
              inView && 'translate-x-[100vw] duration-[5000ms]'
            )}
            src={FooterAnimationLineImage}
            alt=""
          />
        </div>

        <div className="flex justify-between flex-wrap gap-8 pt-12 px-14 max-1024:px-0 max-1024:pt-7 max-960:grid max-960:grid-cols-4 max-700:grid-cols-3 max-520:grid-cols-2">
          <div className="max-w-[285px] max-960:col-span-2 max-700:col-span-3 max-700:max-w-[500px] max-520:col-span-2 max-520:max-w-[300px]">
            <h3 className={titleBaseClasses}>Newsletter</h3>

            <p className="mt-4 text-[var(--granite-gray)] text-sm">
              Zapisz się na nasz newsletter, <br className="max-960:hidden" />{' '}
              żeby być na bieżąco.
            </p>

            <NewsletterForm className="mt-8 max-1024:mt-3" />
          </div>

          <div>
            <h3 className={titleBaseClasses}>O Nas</h3>

            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  Jak to Działa?
                </NavLink>
              </li>

              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  O Nas
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={titleBaseClasses}>Produkty</h3>

            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  Klient Firmowy
                </NavLink>
              </li>

              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  Klient Indywidualny
                </NavLink>
              </li>
              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  Klient JST
                </NavLink>
              </li>
              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  Regulamin
                </NavLink>
              </li>
              <li>
                <NavLink to={'#'} className={linkBaseClasses}>
                  Polityka Prywatności
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={titleBaseClasses}>Kontakt</h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:info@nowaura.com" className={linkBaseClasses}>
                  info@nowaura.com
                </a>
              </li>
              <li>
                <a href="#s" className={linkBaseClasses}>
                  nowAURA Sp. z o.o.
                </a>
              </li>
              <li>
                <span className="text-[var(--granite-gray)] text-xs">
                  ul. Warszawska 40
                </span>
              </li>
              <li>
                <span className="text-[var(--granite-gray)] text-xs">
                  40-008 Katowice
                </span>
              </li>
              <li>
                <span className="text-[var(--granite-gray)] text-xs">
                  NIP 9542878235
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={titleBaseClasses}>Social Media</h3>

            <span className="block mt-4 text-[var(--granite-gray)] text-xs">
              Obserwuj Nas
            </span>
            <SocialMedia
              networks={socialNetworks}
              className="mt-2 max-1024:mt-3.5"
            />
          </div>
        </div>

        <p className="mt-12 text-[var(--granite-gray)] text-center text-xs">
          Copyright © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
