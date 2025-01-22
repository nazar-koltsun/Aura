import { NavLink } from 'react-router-dom';
import PageH1 from '../components/landing/PageH1';
import Button from '../components/Button';

import MainBannerImage from '../assets/images/landing/main-banner.webp';
import PlayVideoIcon from '../components/icons/PlayVideoIcon';

const MainLanding = () => {
  return (
    <section className="pt-20 bg-gradient-to-b from-white from-45%  via-[#E9B684] via-75% to-[#7CAB9B] to-100%">
      <div className="flex justify-center flex-col px-14">
        <PageH1>
          <p>nowAURA. Szkolenia.</p>
          <p className="bg-gradient-to-r from-[var(--sandy-brown)] from-25%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent">
            Komunikacja.
          </p>
          <p>Sprzedaż. Etyka.</p>
        </PageH1>

        <p className="max-w-[510px] mx-auto mt-7 text-center text-[var(--granite-gray)]">
          Szkolenia komunikacyjne wspierane przez VR i AI - badania pokazują, że
          nauka dzięki immersji VR jest skuteczniejsza o 233%
        </p>

        <Button
          path={'#'}
          className="inline-flex mx-auto min-w-[250px] mt-10 py-4 px-9 text-[17px] bg-[var(--sandy-brown)] hover:bg-[#DE8640]"
        >
          Rozpocznij naukę
        </Button>
      </div>

      <div className="flex justify-center pt-20">
        <div className="inline-block mx-auto relative p-[18px] pb-0 bg-[var(--cultured)] rounded-[10px] ">
          <NavLink
            to={'#'}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:opacity-80  transition duration-200 ease-in-out"
          >
            <PlayVideoIcon />
          </NavLink>
          <picture>
            {/* <source srcSet="/assets/images/desktop-image.jpg" media="(min-width: 768px)" /> */}
            <img
              src={MainBannerImage}
              className="w-[1045px] max-w-full"
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default MainLanding;
