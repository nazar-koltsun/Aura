import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import VRPlusAIFeatures from '../VRPlusAIFeatures';

const WhyVRPlusAISection = () => {
  return (
    <section className="relative pt-6 px-4 flex flex-col items-center max-1024:pt-8">
      <Subtitle title="Co Robimy?" isShort />
      <SectionTitle title="Dlaczego VR + AI?" className="mt-3.5" />

      <p className="mt-4 max-w-[800px] text-[var(--granite-gray)] text-lg text-center max-1024:mt-5">
        Dostarczamy szkolenia podnoszące kwalifikacje komunikacyjne i
        sprzedażowe, wspierane przez VR i AI. Badania pokazują, że nauka dzięki
        immersji VR jest o 233% skuteczniejsza.(1)
      </p>

      <VRPlusAIFeatures />
    </section>
  );
};

export default WhyVRPlusAISection;
