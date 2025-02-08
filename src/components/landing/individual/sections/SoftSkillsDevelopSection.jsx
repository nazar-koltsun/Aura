import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';

import SoftSkillsImage from '../../../../assets/images/landing/soft-skills-develop.webp';

const SoftSkillsDevelopSection = () => {
  return (
    <section className="relative pt-6 px-4 flex flex-col items-center max-1024:pt-8 max-700:pb-6">
      <Subtitle title="Co Robimy?" isShort />
      <SectionTitle title="Rozwijamy umiejętności miękkie" className="mt-3.5" />

      <p className="mt-3 max-w-[940px] text-center text-[var(--granite-gray)] text-[22px] leading-[30px] max-1024:text-lg max-1024:mt-5 max-1024:text-center">
        Dostarczamy szkolenia podnoszące kompetencje komunikacyjne i sprzedażowe
        wspierane przez AI - badania pokazują, że 81% firm twierdzi, że
        wydajność wzrosłaby dzięki lepszym procesom, umiejętnościom i szkoleniom
        kompetencyjnym
      </p>

      <img
        src={SoftSkillsImage}
        width={561}
        height={721}
        alt="Soft Skills Develop"
        className='mt-6'
      />
    </section>
  );
};

export default SoftSkillsDevelopSection;
