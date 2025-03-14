import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget';
import MainSection from '../components/landing/corporate/sections/MainSection';
import WhyVRPlusAISection from '../components/landing/corporate/sections/WhyVRPlusAISection';
import WhatDoYouGetSection from '../components/landing/general-sections/WhatDoYouGetSection';
import PlansCardsSection from '../components/landing/corporate/sections/PlansCardsSection';
import InterviewSection from '../components/landing/corporate/sections/InterviewSection';
import RaportInfoSection from '../components/landing/general-sections/RaportInfoSection';
import FeaturesTableSection from '../components/landing/general-sections/FeaturesTableSection';
import CommonQuestionsSection from '../components/landing/general-sections/CommonQuestionsSection';

import FeaturesBanner from '../assets/images/landing/features-banner.webp';

import TeamPeopleThinkingIcon from '../components/icons/TeamPeopleThinkingIcon';
import MindsetThinkingIcon from '../components/icons/MindsetThinkingIcon';
import TimeIdeaHumanIcon from '../components/icons/TimeIdeaHumanIcon';
import DataAnalysisIcon from '../components/icons/DataAnalysisIcon';

const BENEFITS = {
  banner: {
    image: FeaturesBanner,
    text: (
      <span>
        Praktyczny trening <b>bez ryzyka rzeczywistych konsekwencji</b> bo
        wszyscy wiemy, że w teoria nie zawsze sprawdza się w praktyce.'
      </span>
    ),
  },
  items: [
    {
      icon: <TeamPeopleThinkingIcon />,
      text: (
        <span>
          Zmniejszona rotacja pracownicza prowadząca do obniżenia kosztów
          onboardingu
        </span>
      ),
    },
    {
      icon: <MindsetThinkingIcon />,
      text: (
        <span>
          Prawdopodobieństwo wykorzystania nowo nabytej wiedzy zwiększone o{' '}
          <b className="font-semibold">275%</b>
        </span>
      ),
    },
    {
      icon: <TimeIdeaHumanIcon />,
      text: (
        <span>
          <b className="font-semibold">4 x większe</b> skupienie podczas szkolenia, przekładające się na wykorzystanie wiedzy w praktyce
        </span>
      ),
    },
    {
      icon: <DataAnalysisIcon />,
      text: (
        <span>
          <span className="underline">93% CEOs,</span> którzy wprowadzili
          programy szkoleniowe zauważyli znaczący{' '}
          <b className="font-semibold">wzrost w produktywności</b>
        </span>
      ),
    },
  ],
};

const CorporateLanding = () => {
  return (
    <>
      <MainSection />
      <WhyVRPlusAISection />
      <WhatDoYouGetSection benefits={BENEFITS} className="-mt-10" />
      <PlansCardsSection />
      <InterviewSection />
      <RaportInfoSection />
      <FeaturesTableSection />
      <CommonQuestionsSection />
      <ContactSection />
      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default CorporateLanding;
