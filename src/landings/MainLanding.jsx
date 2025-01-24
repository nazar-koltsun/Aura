import ProposaltSection from '../components/landing/main/sections/ProposaltSection';
import AdvantagesSections from '../components/landing/main/sections/AdvantagesSections';
import AboutNowAuraSection from '../components/landing/main/sections/AboutNowAuraSection';
import HowToSection from '../components/landing/main/sections/HowToSection';
import ClientCardsSection from '../components/landing/main/sections/ClientCardsSection';
import MainSection from '../components/landing/main/sections/MainSection';


const MainLanding = () => {
  return (
    <>
      <MainSection />
      <ClientCardsSection />
      <HowToSection />
      <AboutNowAuraSection />
      <div>
        <ProposaltSection />
        <AdvantagesSections />
      </div>
    </>
  );
};

export default MainLanding;
