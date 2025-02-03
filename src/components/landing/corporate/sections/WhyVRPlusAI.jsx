import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';

import VRPlusAIImage from '../../../../assets/images/landing/VRPlusAI.webp';

import TwoPeoplesIcon from '../../../icons/TwoPeoplesIcon';
import ThreePeoplesIcon from '../../../icons/ThreePeoplesIcon';
import VRGlassesIcon from '../../../icons/VRGlassesIcon';
import BrainSettingsIcon from '../../../icons/BrainSettingsIcon';
import MicIcon from '../../../icons/MicIcon';
// TODO: DELETE AFTER TEST
import ExampleImgage from '../../../../assets/images/landing/example-image.png';

const WhyVRPlusAI = () => {
  return (
    <section className="relative pt-6 pb-[760px] px-4 flex flex-col items-center">
      <Subtitle title="Co Robimy?" isShort />

      <SectionTitle title="Dlaczego VR + AI?" className="mt-3.5" />

      <p className="mt-4 max-w-[940px] text-[var(--granite-gray)] text-[22px] leading-[30px]">
        Dostarczamy szkolenia podnoszące kwalifikacje komunikacyjne i
        sprzedażowe wspierane przez VR i AI - badania pokazują, że nauka dzięki
        immersji VR jest skuteczniejsza o 233%.<sup>1</sup>
      </p>

      <img
        src={ExampleImgage}
        className="absolute w-[584px] left-1/2 bottom-0 transform -translate-x-1/2"
        alt=""
      />

      <div className="max-w-[584px] absolute -bottom-[80px] opacity-20">
        <img src={VRPlusAIImage} alt="" />

        {/* Circle 1 */}
        <div className="absolute left-[2.1%] bottom-[22%] w-[19%] h-[14.769%] p-1 flex justify-center items-center gap-1 rounded-full bg-[var(--jungle-green)] text-xs text-white">
          <TwoPeoplesIcon className='max-w-[70%]' />
          <span className='text-center hidden'>Some text</span>
        </div>

        {/* Circle 2 */}
        <div className="absolute left-[0.5%] top-[40.5%] w-[19%] h-[14.769%] p-1 flex justify-center items-center gap-1 rounded-full bg-[var(--jungle-green)] text-xs text-white">
          <ThreePeoplesIcon className='max-w-[70%]' />
          <span className='text-center hidden'>Some text</span>
        </div>
        
        {/* Circle 3 */}
        <div className="absolute left-[9.1%] top-[17.7%] w-[19%] h-[14.769%] p-1 flex justify-center items-center gap-1 rounded-full bg-[var(--jungle-green)] text-xs text-white">
          <VRGlassesIcon className='max-w-[70%]' />
          <span className='text-center hidden'>Some text</span>
        </div>
        
        {/* Circle 4 */}
        <div className="absolute left-[40.6%] top-[7.6%] w-[19%] h-[14.769%] p-1 flex justify-center items-center gap-1 rounded-full bg-[var(--jungle-green)] text-xs text-white">
          <BrainSettingsIcon className='max-w-[70%]' />
          <span className='text-center hidden'>Some text</span>
        </div>

        {/* Circle 5 */}
        <div className="absolute right-[8.9%] top-[17.7%] w-[19%] h-[14.769%] p-1 flex justify-center items-center gap-1 rounded-full bg-[var(--sandy-brown)] text-xs text-white">
          <MicIcon className='max-w-[70%]' />
          <span className='text-center hidden'>Some text</span>
        </div>

      </div>
    </section>
  );
};

export default WhyVRPlusAI;
