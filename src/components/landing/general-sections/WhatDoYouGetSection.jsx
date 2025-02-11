import { cn } from '../../../lib/utils';
import Subtitle from '../Subtitle';
import SectionTitle from '../SectionTitle';
import Benefits from '../Benefits';
import Button from '../../Button';

import SeparatorTopImg from '../../../assets/images/landing/separator-top.svg';

const WhatDoYouGetSection = ({ benefits, isBannerLarge, className }) => {
  return (
    <section className={cn("relative px-4", className)}>
      <img
        className="w-full"
        alt=""
        role="presentation"
        src={SeparatorTopImg}
      />

      <div className='pt-7 pb-10 flex flex-col justify-center items-center max-w-[950px] mx-auto'>
        <Subtitle title="Jak to działa?" isShort />

        <SectionTitle
          title="Co zyskujesz dzięki treningowi z nowAURA?"
          className='mt-4 max-w-[660px]'
        />

        <Benefits className='mt-8 max-1024:mt-8' benefits={benefits} isBannerLarge={isBannerLarge} />

        <div className='mt-12 flex justify-center items-center gap-6 max-1024:mt-8 max-1024:gap-4 max-700:flex-col'>
          <Button path='#' className='text-[17px] min-w-[250px] min-h-[60px] tracking-wider'>Rozpocznij naukę</Button>
          <Button path='#' variant='bordered' className='text-[17px] min-w-[262px] min-h-[60px] border-2 tracking-wider max-700:min-w-[250px]'>Zobacz wideo</Button>
        </div>
      </div>
    </section>
  );
};

export default WhatDoYouGetSection;
