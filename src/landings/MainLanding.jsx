import ProposaltSection from '../components/landing/main/sections/ProposaltSection';
import AdvantagesSections from '../components/landing/main/sections/AdvantagesSections';
import AboutNowAuraSection from '../components/landing/main/sections/AboutNowAuraSection';
import HowToSection from '../components/landing/main/sections/HowToSection';
import ClientCardsSection from '../components/landing/main/sections/ClientCardsSection';
import MainSection from '../components/landing/main/sections/MainSection';
import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget'


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
      <ContactSection />

      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default MainLanding;
