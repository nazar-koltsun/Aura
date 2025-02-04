import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget';
import MainSection from '../components/landing/corporate/sections/MainSection';
import WhyVRPlusAISection from '../components/landing/corporate/sections/WhyVRPlusAISection';
import WhatDoYouGetSection from '../components/landing/general-sections/WhatDoYouGetSection';

import FeaturesBanner from '../assets/images/landing/features-banner.webp';

import TeamPeopleThinkingIcon from '../components/icons/TeamPeopleThinkingIcon';
import MindsetThinkingIcon from '../components/icons/MindsetThinkingIcon';
import TimeIdeaHumanIcon from '../components/icons/TimeIdeaHumanIcon';
import DataAnalysisIcon from '../components/icons/DataAnalysisIcon';

const BENEFITS = {
  banner: {
    image: FeaturesBanner,
    text:
      'Praktyczny trening bez RYZYKA RZECZYWISTYCH KONSEKWENCJI bo wszyscy wiemy, że w teoria nie zawsze sprawdza się w praktyce.',
  },
  items: [
    {
      icon: <TeamPeopleThinkingIcon />,
      text: <p>Zmniejszona rotacja <br /> pracownicza</p>
    },
    {
      icon: <MindsetThinkingIcon />,
      text: <p>Prawdopodobieństwo wykorzystania nowo nabytej wiedzy zwiększone o <b className='font-semibold'>275%</b></p>
    },
    {
      icon: <TimeIdeaHumanIcon />,
      text: <p><b className='font-semibold'>4 x większe</b>skupienie podczas szkolenia</p>
    },
    {
      icon: <DataAnalysisIcon />,
      text: <p><span className='underline'>93% CEOs,</span> którzy wprowadzili programy szkoleniowe zauważyli znaczący <b className='font-semibold'>wzrost w produktywności</b></p>
    },
  ]
};

const CorporateLanding = () => {
  return (
    <>
      <MainSection />
      <WhyVRPlusAISection />
      <WhatDoYouGetSection benefits={BENEFITS} />
      <ContactSection />
      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default CorporateLanding;
