import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget';
import MainSection from '../components/landing/individual/sections/MainSection';
import InterviewSection from '../components/landing/individual/sections/InterviewSection';
import RaportInfoSection from '../components/landing/general-sections/RaportInfoSection';
import CommonQuestionsSection from '../components/landing/general-sections/CommonQuestionsSection';

const IndividualLanding = () => {
  return (
    <>
      <MainSection />


      <InterviewSection />
      <RaportInfoSection />

      <CommonQuestionsSection />
      <ContactSection />
      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default IndividualLanding;
 