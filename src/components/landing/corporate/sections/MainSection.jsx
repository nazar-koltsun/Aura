import PageH1 from '../../PageH1';
import Button from '../../../Button';

import MainImage from '../../../../assets/images/landing/corporate-main-bg.webp';
import MainImageMob from '../../../../assets/images/landing/corporate-main-bg-mob.webp';
import SeparatorBottomSimpleImage from '../../../../assets/images/landing/separator-bottom-simple.svg';

const MainSection = () => {
  return (
    <section className="relative px-10 pt-14 pb-24 max-1024:pt-14 max-1024:pb-[75px] max-1024:px-4">
      <div className='relative z-10 max-w-[50vw] ml-auto flex flex-col justify-center items-center max-700:max-w-full max-700:ml-0'>
        <PageH1 className='max-520:text-white'>
          <p>Platforma</p>
          <p className="inline-block bg-gradient-to-r from-[var(--sandy-brown)] from-0%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent">
            kompetencji
          </p>
          <p>miękkich dla firm.</p>
        </PageH1>

        <p className="mt-8 text-[18px] leading-[30px] text-center text-[var(--granite-gray)] font-medium max-1024:mt-6 max-520:text-white">
          Odkryj nowy wymiar szkoleń interpersonalnych, które zbudują realną&nbsp;przewagę&nbsp;rynkową Twojej firmy.
        </p>

        <Button
          path={'#'}
          className="inline-flex min-w-[250px] mt-12 py-4 px-9 text-[17px] bg-[var(--sandy-brown)] hover:bg-[#DE8640] max-1024:mt-4 max-1024:min-w-[220px]"
        >
          Rozpocznij naukę
        </Button>
      </div>

      <picture>
        <source srcSet={MainImageMob} media="(max-width: 520px)" />
        <img src={MainImage} className='absolute top-0 left-0 w-full h-full object-cover max-520:object-bottom' alt="" />
      </picture>

      <img
        className="absolute bottom-[-1px] left-0 w-full max-1920:bottom-[-1vw]'"
        src={SeparatorBottomSimpleImage}
        alt=""
        role="presentation"
      />
    </section>
  );
};

export default MainSection;
