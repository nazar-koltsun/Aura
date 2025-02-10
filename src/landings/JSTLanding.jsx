import ContactSection from '../components/landing/general-sections/ContactSection';
import VideoWidget from '../components/landing/VideoWidget';

import MainSection from '../components/landing/jst/sections/MainSection';
import WhatIsNowAURASection from '../components/landing/jst/sections/WhatIsNowAURASection';

import WhatDoYouGetSection from '../components/landing/general-sections/WhatDoYouGetSection';
import RaportInfoSection from '../components/landing/general-sections/RaportInfoSection';
import CommonQuestionsSection from '../components/landing/general-sections/CommonQuestionsSection';
import PlansCardsSection from '../components/landing/jst/sections/PlansCardsSection';

import WhatYouGetBg from '../assets/images/landing/what-get-jst-bg.webp';
import ProtectWorldIcon from '../components/icons/ProtectWorldIcon';
import TabletPhoneLearnIcon from '../components/icons/TabletPhoneLearnIcon';
import WorkingStationIcon from '../components/icons/WorkingStationIcon';

const BENEFITS = {
  banner: {
    image: WhatYouGetBg,
    text: 'Praktyczny trening bez RYZYKA RZECZYWISTYCH KONSEKWENCJI bo wszyscy wiemy, że w teoria nie zawsze sprawdza się w praktyce.',
  },
  items: [
    {
      icon: <ProtectWorldIcon className='mt-3' />,
      text: (
        <div>
          <strong className="font-semibold block">
            Zmniejsz ilość nieporozumień
          </strong>
          <p className="mt-4">
            Dobrze zadawane pytania eliminują nieporozumienia i pomagają w
            precyzyjnym zrozumieniu potrzeb mieszkańców.<sup>1</sup>
          </p>
        </div>
      ),
      shadow: 'cardGreen',
    },

    {
      icon: <TabletPhoneLearnIcon className='mt-3' />,
      text: (
        <div>
          <strong className="font-semibold block">
            Buduj wizerunek profesjonalisty
          </strong>
          <p className="mt-4">
            Dostosowanie języka oraz przekazywanie trudnych, urzędowych tematów
            w sposób przystępny i zrozumiały buduje postrzeganie urzędnika jako{' '}
            <b>profesjonalisty.</b>
            <sup>2</sup>
          </p>
        </div>
      ),
      shadow: 'cardOrange',
    },

    {
      icon: <WorkingStationIcon className='mt-3' />,
      text: (
        <div>
          <strong className="font-semibold block">Zmniejsz ilość pracy</strong>
          <p className="mt-4">
            Skuteczna komunikacja minimalizuje błędy, co prowadzi do finalizacji
            sprawy już za pierwszym razem obniżając ryzyko powtarzania procesu
            od nowa.
          </p>
        </div>
      ),
    },
  ],
};

const JSTLanding = () => {
  return (
    <>
      <MainSection />
      <WhatIsNowAURASection />
      <WhatDoYouGetSection benefits={BENEFITS} isBannerLarge />
      <PlansCardsSection />

      <RaportInfoSection isSecondary hasBottomSeparator />

      <CommonQuestionsSection />
      <ContactSection />
      <VideoWidget videoUrl="https://www.youtube.com/embed/8V8oX3pWdxY?si=WkCK-56ToJF4Z47a" />
    </>
  );
};

export default JSTLanding;
