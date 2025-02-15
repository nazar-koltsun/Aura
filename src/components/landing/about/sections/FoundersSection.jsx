import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';

import SeparatorTopImg from '../../../../assets/images/landing/separator-top.svg';
import FounderOneImage from '../../../../assets/images/landing/founder-1.webp';
import FounderTwoImage from '../../../../assets/images/landing/founder-2.webp';

import LinkedinIcon from '../../../icons/LinkedInIcon';
import FacebookIcon from '../../../icons/FacebookIcon';
import XIcon from '../../../icons/XIcon';
import LocationIcon from '../../../icons/LocationIcon';

const socialNetworksBaseClasses =
  'group-hover:fill-[var(--sandy-brown)] transition duration-200 ease-in-out';

const founders = [
  {
    name: 'Aaron Griffin',
    role: 'UI/UX Designer',
    image: FounderOneImage,
    socials: [
      {
        title: 'facebook',
        href: 'https://facebook.com',
        icon: (
          <FacebookIcon
            fill="white"
            width={10}
            height={15}
            className={socialNetworksBaseClasses}
          />
        ),
      },
      {
        title: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
          <LinkedinIcon
            fill="white"
            width={13}
            height={15}
            className={socialNetworksBaseClasses}
          />
        ),
      },
      {
        title: 'X',
        href: 'https://x.com',
        icon: (
          <XIcon
            fill="white"
            width={13}
            height={15}
            className={socialNetworksBaseClasses}
          />
        ),
      },
    ],
  },
  {
    name: 'John Doe',
    role: 'Co-founder',
    image: FounderTwoImage,
    socials: [
      {
        title: 'facebook',
        href: 'https://facebook.com',
        icon: (
          <FacebookIcon
            fill="white"
            width={10}
            height={15}
            className={socialNetworksBaseClasses}
          />
        ),
      },
      {
        title: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
          <LinkedinIcon
            fill="white"
            width={13}
            height={15}
            className={socialNetworksBaseClasses}
          />
        ),
      },
      {
        title: 'X',
        href: 'https://x.com',
        icon: (
          <XIcon
            fill="white"
            width={13}
            height={15}
            className={socialNetworksBaseClasses}
          />
        ),
      },
    ],
  },
];

const FoundersSection = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      <img
        className="w-full"
        alt=""
        role="presentation"
        src={SeparatorTopImg}
      />

      <div className="px-10 pt-2.5 pb-4 w-full flex flex-col items-center mx-auto max-1024:max-w-full max-1024:pt-6 max-1240:px-6 max-1024:px-4">
        <Subtitle title="Poznaj Nas" isShort />
        <SectionTitle title="Założyciele" className="mt-4 max-w-[660px]" />

        <p className="mt-2 text-[22px] leading-[30px] max-w-[950px] text-center text-[var(--granite-gray)] max-1024:text-lg">
          Dostarczamy szkolenia podnoszące kwalifikacje komunikacyjne i
          sprzedażowe wspierane przez VR i AI - badania pokazują, że nauka
          dzięki immersji VR jest skuteczniejsza o 233%.<sup>1</sup>
        </p>

        <div className="mt-10 w-full max-w-[860px] max-1024:mt-8">
          <div className="flex items-center gap-8 w-full max-1024:gap-4 max-700:flex-col">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="relative flex min-h-[500px] max-w-[500px] w-full rounded-2xl overflow-hidden shadow-cardGray"
              >
                <div className="relative flex flex-col justify-between w-full z-10">
                  <ul className="flex items-center p-6 gap-2">
                    {founder.socials.map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.title}
                          className="group flex justify-center items-center w-4 h-4"
                        >
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="px-6 pb-10 bg-gradient-to-b from-[rgb(0,0,0,0)] from-35% to-[#2A9D8F] to-100% w-full h-full flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">
                      {founder.name}
                    </h3>
                    <p className="text-sm leading-[34px] text-white">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <img
                  src={founder.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 px-10 py-4 flex items-center gap-10 rounded-xl shadow-blockShadow text-[var(--granite-gray)] text-[18px] max-1024:mt-7 max-700:gap-5 max-700:px-5">
            <LocationIcon />
            <div>
              <b className='text-[var(--eerie-black)] leading-[22px]'>nowAURA Sp. z o.o.</b>
              <p className='mt-1 leading-[31px]'>ul. Warszawska 40, 40-008 Katowice</p>
              <p className='leading-[31px]'>NIP 9542878235</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
