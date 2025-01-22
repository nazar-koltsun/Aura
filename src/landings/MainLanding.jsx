import { NavLink } from 'react-router-dom';
import PageH1 from '../components/landing/PageH1';
import Button from '../components/Button';

import MainBannerImage from '../assets/images/landing/main-banner.webp';
import MainBannerMobileImage from '../assets/images/landing/main-banner-mobile.webp';

import PlayVideoIcon from '../components/icons/PlayVideoIcon';

const MainLanding = () => {
  return (
    <section className="pt-20 px-14 bg-gradient-to-b from-white from-45%  via-[#E9B684] via-75% to-[#7CAB9B] to-100% max-1024:pt-7 max-1024:px-4 max-1024:from-20% max-700:from-30% max-520:from-50%">
      <div className="flex justify-center flex-col">
        <PageH1>
          <p>nowAURA. Szkolenia.</p>
          <p className="bg-gradient-to-r from-[var(--sandy-brown)] from-25%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent">
            Komunikacja.
          </p>
          <p>Sprzedaż. Etyka.</p>
        </PageH1>

        <p className="max-w-[560px] mx-auto mt-7 text-[18px] leading-[30px] text-center text-[var(--granite-gray)] max-1024:mt-4">
          Szkolenia komunikacyjne wspierane przez VR i AI - badania pokazują, że
          nauka dzięki immersji VR jest skuteczniejsza o 233%<sup>1</sup>
        </p>

        <Button
          path={'#'}
          className="inline-flex mx-auto min-w-[250px] mt-10 py-4 px-9 text-[17px] bg-[var(--sandy-brown)] hover:bg-[#DE8640] max-1024:mt-4 max-1024:min-w-[220px]"
        >
          Rozpocznij naukę
        </Button>
      </div>

      <div className="flex justify-center pt-20 max-1024:pt-5">
        <div className="inline-block mx-auto relative p-[18px] pb-0 bg-[var(--cultured)] rounded-[10px] max-1024:p-2.5 max-1024:pb-0">
          <NavLink
            to={'#'}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-1024:scale-75 hover:opacity-80  transition duration-200 ease-in-out"
          >
            <PlayVideoIcon />
          </NavLink>
          <picture>
            <source srcSet={MainBannerMobileImage} media="(max-width: 520px)" />
            <img
              src={MainBannerImage}
              height={456}
              className="min-h-[456px] w-[1045px] h-auto max-w-full object-cover max-1024:min-h-[250px] max-520:min-h-[150px]"
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default MainLanding;
