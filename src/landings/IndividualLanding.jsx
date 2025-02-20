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
    text: (
      <p>Praktyczny trening bez <b>ryzyka rzeczywistych konsekwencji</b> bo wszyscy wiemy, że w teoria nie zawsze sprawdza się w praktyce.</p>
    )
  },
  items: [
    {
      icon: <MindsetThinkingIcon />,
      text: <p className='w-full'>Przygotowanie do rozmowy kwalifikacyjnej zwiększa prawdopodobieństwo zatrudnienia</p>,
    },

    {
      icon: <TimeIdeaHumanIcon />,
      text: (
        <p>Umiejętność improwizacji podczas spotkania sprzedażowego powoduje wzrost sprzedaży o 50% <button className='benefit-info-index relative -ml-2 -top-1 w-4 h-4 inline-flex justify-center items-center text-xs'>1</button></p>
      ),
      info_index: 0,
      info_text: (
        <a target='_blank' rel="nofollow noreferrer" href='https://www.improimpro.com/en/blog/improwizacja-w-sprzedazy-jak-poprawic-efektywnosc-rozmow-sprzedazowych-i-zwiekszyc-wyniki'>https://www.improimpro.com/en/blog/improwizacja-w-sprzedazy-jak-poprawic-efektywnosc-rozmow-sprzedazowych-i-zwiekszyc-wyniki</a>
      ),
    },

    {
      icon: <DataAnalysisIcon />,
      text: (
        <p>42% badanych uważa skuteczną komunikację z pracownikami za kluczową dla efektywności biznesowej <button className='benefit-info-index relative -ml-2 -top-1 w-4 h-4 inline-flex justify-center items-center text-xs'>2</button></p>
      ),
      info_index: 1,
      info_text: (
        <a target='_blank' rel="nofollow noreferrer" href='https://hrstandard.pl/2017/07/05/komunikacja-wewnetrzna-a-wyniki-firmy-raport/'>https://hrstandard.pl/2017/07/05/komunikacja-wewnetrzna-a-wyniki-firmy-raport/</a>
      ),
    },
  ]
};

const IndividualLanding = () => {
  return (
    <>
      <MainSection />
      <SoftSkillsDevelopSection />
      <WhatDoYouGetSection benefits={BENEFITS} isBannerLarge isCarouselOnMobile /> 
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
 