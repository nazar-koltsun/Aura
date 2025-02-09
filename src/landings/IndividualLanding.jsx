import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget';
import MainSection from '../components/landing/individual/sections/MainSection';
import SoftSkillsDevelopSection from '../components/landing/individual/sections/SoftSkillsDevelopSection';
import WhatDoYouGetSection from '../components/landing/general-sections/WhatDoYouGetSection';
import RaportInfoSection from '../components/landing/general-sections/RaportInfoSection';
import CommonQuestionsSection from '../components/landing/general-sections/CommonQuestionsSection';
import PlansCardsSection from '../components/landing/individual/sections/PlansCardsSection';
import ChooseThePriceSection from '../components/landing/individual/sections/ChooseThePriceSection';
import WriteToUsSection from '../components/landing/individual/sections/WriteToUsSection';

import WhatYouGetBg from '../assets/images/landing/what-you-get-individual-bg.webp';
import MindsetThinkingIcon from '../components/icons/MindsetThinkingIcon';
import TimeIdeaHumanIcon from '../components/icons/TimeIdeaHumanIcon';
import DataAnalysisIcon from '../components/icons/DataAnalysisIcon';

const BENEFITS = {
  banner: {
    image: WhatYouGetBg,
    text:
      'Praktyczny trening bez RYZYKA RZECZYWISTYCH KONSEKWENCJI bo wszyscy wiemy, że w teoria nie zawsze sprawdza się w praktyce.',
  },
  items: [
    {
      icon: <MindsetThinkingIcon />,
      text: <p>Przygotowanie do rozmowy kwalifikacyjnej zwiększa prawdopodobieństwo zatrudnienia</p>
    },

    {
      icon: <TimeIdeaHumanIcon />,
      text: <p>Umiejętność improwizacji podczas spotkania sprzedażowego powoduje wzrost sprzedaży o 50%<sup>1</sup></p>
    },

    {
      icon: <DataAnalysisIcon />,
      text: <p>42% badanych uważa skuteczną komunikację z pracownikami za kluczową dla efektywności biznesowej<sup>2</sup></p>
    },
  ]
};

const IndividualLanding = () => {
  return (
    <>
      <MainSection />
      <SoftSkillsDevelopSection />
      <WhatDoYouGetSection benefits={BENEFITS} isBannerLarge /> 
      <PlansCardsSection />
      <ChooseThePriceSection />
      <WriteToUsSection />

      <RaportInfoSection isSecondary hasBottomSeparator />

      <CommonQuestionsSection />
      <ContactSection />
      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default IndividualLanding;
 