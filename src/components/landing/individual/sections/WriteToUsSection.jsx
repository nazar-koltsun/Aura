import { useState } from 'react';
import FormInput from '../../../FormInput';
import Button from '../../../Button';
import NewsletterPopup from '../../NewsletterPopup';
import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';

import WriteToUsBg from '../../../../assets/images/landing/write-us-bg.webp';

const WriteToUsSection = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onFormChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section className="pt-7 pb-8 px-4 flex flex-col items-center max-1024:pt-8 max-1024:pb-10">
      <Subtitle title="Wdrażaj Nowocześność" isShort />
      <SectionTitle
        title="Zaproponuj nowAURA jako narzędzie rozwoju w firmie!"
        className="mt-3.5 max-w-[830px]"
      />

      <p className="mt-4 max-w-[645px] text-center text-[var(--granite-gray)] leading-[27px] max-1024:mt-5 max-1024:text-center">
        nowAURA rozwija Twoje kompetencje, z pewnością przyniesie korzyści
        całemu zespołowi! Jako polecający, możesz liczyć na bonus za każdą
        podpisaną umowę!
      </p>

      <div className="mt-9 relative overflow-hidden px-16 pt-6 pb-10 w-full max-w-[1082px] mx-auto rounded-[30px] shadow-cardGray max-1024:px-5 max-1024:pb-[30px]">
        <div className="relative z-10">
          <h3 className="text-white text-[44px] leading-[54px] font-semibold max-1024:text-[28px] max-1024:leading-[34px]">
            Poleć nas swojej firmie i zyskaj % <br /> od podpisanej umowy!
          </h3>

          <p className="mt-3 max-w-[310px] text-lg text-white max-1024:text-base leading-[27px]">
            Mamy listę gotowych wartości dla Twojego przełożonego, które
            pokazują korzyści jakie nowAura daje pracownikom i firmom! Napisz do
            nas.
          </p>

          <div>
            <form onSubmit={onFormSubmit} className="mt-7 flex justify-start gap-5 max-700:flex-col">
              <FormInput
                id="email"
                name="email"
                placeholder="E-mail"
                type="email"
                onChange={(e) => onFormChange(e, 'email')}
                className="py-2.5 rounded-full min-h-[58px] w-[360px] max-w-full max-700:w-full"
              />

              <Button className="min-h-[60px] min-w-[265px]">
                Skontaktuj się
              </Button>
            </form>

            <NewsletterPopup
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              className="top-10 ring-0 left-[40%] max-1024:left-0 max-1024:-top-1"
            />
          </div>
        </div>

        <picture>
          {/* <source srcSet={InterviewBgMob} media="(max-width: 520px)" /> */}
          <img
            src={WriteToUsBg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default WriteToUsSection;
