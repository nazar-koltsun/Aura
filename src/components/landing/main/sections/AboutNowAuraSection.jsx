import Button from '../../../Button';
import WhatAreNowAuraImage from '../../../../assets/images/landing/about-aura.webp';
import WhatAreNowAuraMobileImage from '../../../../assets/images/landing/about-aura-mobile.webp';

const AboutNowAuraSection = () => {
  return (
    <section className="pl-20 pr-24 py-28 flex justify-center items-center gap-[131px] max-1240:gap-[80px] max-1024:px-6 max-1024:py-12 max-960:flex-col max-960:gap-9 max-700:py-10">
      <div>
        <picture>
          <source
            srcSet={WhatAreNowAuraMobileImage}
            media="(max-width: 700px)"
          />
          <img
            src={WhatAreNowAuraImage}
            width={1120}
            height={563}
            alt=""
            className="max-w-[620px] w-full"
          />
        </picture>
      </div>
      <div className="max-w-[500px] w-[55%] max-960:w-full">
        <h2 className="text-[var(--eerie-black)] font-bold text-4xl leading-[50px] max-1024:text-[28px] max-1024:leading-[34px] max-960:text-center">
          Czym są szkolenia nowAura?
        </h2>

        <div className="flex flex-col">
          <p className="hidden max-960:block max-700:pl-4 mt-8 leading-[27px] text-[var(--granite-gray)]">
            System oferuje scenariusze treningowe zaprojektowane specjalnie dla
            trzech grup:
          </p>
          <p className="mt-8 leading-[27px] text-[var(--granite-gray)] max-960:hidden">
            Nowoczesna platforma szkoleniowa oparta na sztucznej inteligencji,
            która pozwala użytkownikom rozwijać umiejętności komunikacji w
            formie interaktywnych symulacji rozmów. System oferuje scenariusze
            treningowe zaprojektowane specjalnie dla trzech grup:
          </p>

          <ol className="mt-7 space-y-3 list-decimal max-1024:mt-5 max-700:pl-4">
            <li className="text-lg font-bold leading-[30px] text-[var(--granite-gray)] max-1024:text-base">
              Sprzedawców{' '}
              <span className="font-normal">
                – ćwiczących rozmowy sprzedażowe z klientem, od nawiązywania
                relacji po rozwiązywanie obiekcji
              </span>
            </li>
            <li className="text-lg font-bold leading-[30px] text-[var(--granite-gray)] max-1024:text-base">
              Menedżerów{' '}
              <span className="font-normal">
                – symulujących trudne rozmowy z pracownikiem, takie jak
                udzielanie informacji zwrotnej czy rozwiązywanie konfliktów
              </span>
            </li>
            <li className="text-lg font-bold leading-[30px] text-[var(--granite-gray)] max-1024:text-base">
              Przygotowujących się do rozmowy o pracę{' '}
              <span className="font-normal">
                – ćwiczących rozmowę kwalifikacyjną z wirtualnym rekruterem
              </span>
            </li>
          </ol>
          <p className="hidden max-960:block max-700:pl-4 mt-8 leading-[27px] text-[var(--granite-gray)]">
            Nowoczesna platforma szkoleniowa oparta na sztucznej inteligencji,
            która pozwala użytkownikom rozwijać umiejętności komunikacji w
            formie interaktywnych symulacji rozmów.
          </p>
        </div>

        <Button to="#" className="mt-11 max-960:mx-auto">
          Dowiedz się więcej
        </Button>
      </div>
    </section>
  );
};

export default AboutNowAuraSection;
