import { NavLink } from 'react-router-dom';
import PageH1 from '../components/landing/PageH1';
import Button from '../components/Button';
import Subtitle from '../components/landing/Subtitle';
import SectionTitle from '../components/landing/SectionTitle';
import ClientCards from '../components/landing/main/ClientCards';
import HowToSteps from '../components/landing/main/HowToSteps';
import ProposalList from '../components/landing/main/ProposalList';

import MainBannerImage from '../assets/images/landing/main-banner.webp';
import MainBannerMobileImage from '../assets/images/landing/main-banner-mobile.webp';
import SeparatorTopImg from '../assets/images/landing/separator-top.svg';
import SeparatorBottomSimpleImage from '../assets/images/landing/separator-bottom-simple.svg';
import SeparatorTopSimpleImage from '../assets/images/landing/separator-top-simple.svg';
import HowToBg from '../assets/images/landing/how-to-bg.webp';
import HowToBgMobile from '../assets/images/landing/how-to-bg-mobile.webp';
import WhatAreNowAuraImage from '../assets/images/landing/about-aura.webp';
import WhatAreNowAuraMobileImage from '../assets/images/landing/about-aura-mobile.webp';

import PlayVideoIcon from '../components/icons/PlayVideoIcon';

const MainLanding = () => {
  return (
    <>
      {/* Main Section */}
      <section className="relative pt-20 px-14 bg-gradient-to-b from-white from-45%  via-[#E9B684] via-75% to-[#7CAB9B] to-100% max-1024:pt-7 max-1024:px-4 max-1024:from-20% max-700:from-30% max-520:from-50%">
        <div className="flex justify-center flex-col">
          <PageH1>
            <p>nowAURA. Szkolenia.</p>
            <p className="inline-block bg-gradient-to-r from-[var(--sandy-brown)] from-0%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent">
              Komunikacja.
            </p>
            <p>Sprzedaż. Etyka.</p>
          </PageH1>

          <p className="max-w-[560px] mx-auto mt-7 text-[18px] leading-[30px] text-center text-[var(--granite-gray)] max-1024:mt-4">
            Szkolenia komunikacyjne wspierane przez VR i AI - badania pokazują,
            że nauka dzięki immersji VR jest skuteczniejsza o 233%<sup>1</sup>
          </p>

          <Button
            path={'#'}
            className="inline-flex mx-auto min-w-[250px] mt-10 py-4 px-9 text-[17px] bg-[var(--sandy-brown)] hover:bg-[#DE8640] max-1024:mt-4 max-1024:min-w-[220px]"
          >
            Rozpocznij naukę
          </Button>
        </div>

        <div className="flex justify-center pt-20 max-1024:pt-5">
          <div className="inline-block mx-auto relative p-[18px] pb-0 bg-[var(--cultured)] rounded-t-[10px] max-1024:p-2.5 max-1024:pb-0">
            <NavLink
              to={'#'}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-1024:scale-75 hover:opacity-80 transition duration-200 ease-in-out"
            >
              <PlayVideoIcon />
            </NavLink>
            <picture>
              <source
                srcSet={MainBannerMobileImage}
                media="(max-width: 520px)"
              />
              <img
                src={MainBannerImage}
                height={456}
                className="min-h-[456px] w-[1045px] h-auto max-w-full object-cover max-1024:min-h-[250px] max-520:min-h-[150px]"
                alt=""
              />
            </picture>
          </div>
        </div>

        <img
          className="absolute bottom-[-1px] left-0 w-full max-1920:bottom-[-1vw]'"
          src={SeparatorBottomSimpleImage}
          alt=""
          role="presentation"
        />
      </section>

      {/* Client Cards Section */}
      <section className="flex flex-col items-center pt-11 px-[70px] pb-[170px] max-1024:pt-7 max-1024:pb-7 max-1024:px-0">
        <div className="flex flex-col items-center max-1024:px-4">
          <Subtitle title="Rozpocznij za Darmo" />

          <SectionTitle title="Co możemy dla Ciebie zrobić?" className="mt-3" />

          <p className="mt-5 text-[18px] leading-[30px] text-[var(--granite-gray)]">
            Sprawdź, które rozmowy są dla Ciebie.
          </p>

          <p className="mt-7 max-w-[435px] leading-[27px] text-[var(--granite-gray)] text-center max-1024:hidden">
            Przykładowy tekst.Przykładowy tekst.Przykładowy tekst.Przykładowy
            tekst.Przykładowy tekst.Przykładowy tekst.Przykładowy tekst.
          </p>
        </div>

        <ClientCards />
      </section>

      {/* How to Section */}
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
              className="min-w-[262px] min-h-[60px] bg-white text-[var(--eerie-black)] max-700:min-w-[247px]"
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

      {/* What are nowAura section */}
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
              System oferuje scenariusze treningowe zaprojektowane specjalnie
              dla trzech grup:
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

      {/* Proposalt section */}
      <section className="flex flex-col items-center px-[70px] max-1024:px-4">
			<img class="w-full" alt="" role="presentation" src={SeparatorTopImg} />
        <Subtitle title="Oferta" className='mt-[52px] max-1024:mt-9' />

        <SectionTitle
          title="Wybierz ofertę dla siebie"
          className="mt-3"
        />

				<ProposalList className='mt-9 max-1024:mt-14' />

				<div className='mt-[82px] mb-[77px] flex flex-col items-center max-1024:mt-9 max-1024:mb-9'>
					<p className='text-center text-[var(--eerie-black)] text-[26px] leading-[30px] max-1024:text-xl'>Sprawdź, spersonalizowaną ofertę dla Twoich potrzeb.</p>

					<div className='mt-6 flex justify-center gap-8 max-1024:gap-3 max-1024:flex-col'>
						<Button to="#" className='min-w-[193px] bg-[var(--sandy-brown)] hover:bg-[#DE8640]'>Klient firmowy</Button>
						<Button to="#" className='min-w-[193px] px-4'>Klient indywidualny</Button>
						<Button to="#" className='min-w-[193px] bg-[var(--rocket-metallic)] hover:bg-[var(--eerie-black)]'>Klient JST</Button>
					</div>
				</div>
      </section>
    </>
  );
};

export default MainLanding;
