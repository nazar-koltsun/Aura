import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget';
import MainSection from '../components/landing/about/sections/MainSection';
import CommonQuestionsSection from '../components/landing/general-sections/CommonQuestionsSection';
import WhatDoWeOfferSection from '../components/landing/about/sections/WhatDoWeOfferSection';
import FollowUsSection from '../components/landing/about/sections/FollowUsSection';

const AboutLanding = () => {
  return (
    <>
      <MainSection />
      <WhatDoWeOfferSection />
      <FollowUsSection />
      <CommonQuestionsSection />
      <ContactSection />
      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default AboutLanding;
 