import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget';
import MainSection from '../components/landing/corporate/sections/MainSection';
import WhyVRPlusAISection from '../components/landing/corporate/sections/WhyVRPlusAISection';

const CorporateLanding = () => {
  return (
    <>
      <MainSection />
      <WhyVRPlusAISection />
      <ContactSection />
      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default CorporateLanding;
