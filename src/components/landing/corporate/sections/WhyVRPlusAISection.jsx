import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import VRPlusAIFeatures from '../VRPlusAIFeatures';

const WhyVRPlusAISection = () => {
  return (
    <section className="relative pt-6 px-4 flex flex-col items-center max-1024:pt-8">
      <Subtitle title="Co Robimy?" isShort />
      <SectionTitle title="Dlaczego VR + AI?" className="mt-3.5" />

      <p className="mt-4 max-w-[940px] text-[var(--granite-gray)] text-[22px] leading-[30px] max-1024:text-lg max-1024:mt-5 max-1024:text-center">
        Dostarczamy szkolenia podnoszące kwalifikacje komunikacyjne i
        sprzedażowe wspierane przez VR i AI - badania pokazują, że nauka dzięki
        immersji VR jest skuteczniejsza o 233%.<sup>1</sup>
      </p>

      <VRPlusAIFeatures />
    </section>
  );
};

export default WhyVRPlusAISection;
