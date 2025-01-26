import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import HowToSteps from '../HowToSteps';
import Button from '../../../Button';

import HowToBgMobile from '../../../../assets/images/landing/how-to-bg-mobile.webp';
import HowToBg from '../../../../assets/images/landing/how-to-bg.webp';
import SeparatorTopSimpleImage from '../../../../assets/images/landing/separator-top-simple.svg';
import SeparatorBottomSimpleImage from '../../../../assets/images/landing/separator-bottom-simple.svg';

const HowToSection = () => {
  return (
    <section className="relative p-[70px] px-[70px] max-1024:px-4 max-1024:p-[50px] max-700:py-[40px]">
      <div className="relative z-10 flex flex-col items-center">
        <Subtitle title="Jak to działa?" isShort />

        <SectionTitle
          title="Jak zacząć rozmowę?"
          className="mt-3 max-1024:mt-8"
        />

        <HowToSteps />

        <div className="mt-14 flex justify-center gap-6 max-700:mt-6 max-700:flex-col max-700:gap-2.5 max-700:items-center">
          <Button to="#" className="min-w-[247px] min-h-[60px]">
            Rozpocznij naukę
          </Button>
          <Button
            to="#"
            variant="bordered"
            className="min-w-[262px] min-h-[60px] bg-white max-700:min-w-[247px]"
          >
            Zobacz wideo
          </Button>
        </div>
      </div>

      <picture>
        <source srcSet={HowToBgMobile} media="(max-width: 700px)" />
        <img
          src={HowToBg}
          alt=""
          role="presentation"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </picture>

      <img
        src={SeparatorTopSimpleImage}
        alt=""
        role="presentation"
        className="absolute top-0 left-0 w-full"
      />
      <img
        src={SeparatorBottomSimpleImage}
        alt=""
        role="presentation"
        className="absolute left-0 w-full bottom-[-1px] max-1920:bottom-[-1vw]"
      />
    </section>
  );
};

export default HowToSection;
