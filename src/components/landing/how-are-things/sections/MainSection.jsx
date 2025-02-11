import PageH1 from '../../PageH1';
import SeparatorTopSimpleImage from '../../../../assets/images/landing/separator-top-simple.svg';

const MainSection = () => {
  return (
    <section className="relative px-10 pt-14 pb-24 max-1024:pt-10 max-1024:pb-14 max-1024:px-4">
      <div className="max-w-[630px] mx-auto flex flex-col justify-center items-center max-700:max-w-full">
        <PageH1 className='text-[44px] leading-[54px]'>
          <p className="inline-block bg-gradient-to-r from-[var(--sandy-brown)] from-0%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent">
            Jak To Działa?
          </p>
        </PageH1>

        <p className="mt-8 text-[22px] leading-[30px] text-center text-[var(--granite-gray)] max-1024:mt-6 max-1024:text-lg">
          Nasza platforma jest prosta w użyciu i przeprowadzi Cię przez proces
          krok po kroku, abyś mógł jak najszybciej rozpocząć ćwiczenie rozmów z
          AI. Oto jak to działa:
        </p>
      </div>

      <img
        className="absolute bottom-[-1px] left-0 w-full max-1920:bottom-[-1vw]'"
        src={SeparatorTopSimpleImage}
        alt=""
        role="presentation"
      />
    </section>
  );
};

export default MainSection;
