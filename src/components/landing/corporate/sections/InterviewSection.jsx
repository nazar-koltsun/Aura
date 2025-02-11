import { useState } from 'react';
import FormSelect from '../../../FormSelect';
import FormInput from '../../../FormInput';
import Button from '../../../Button';
import NewsletterPopup from '../../NewsletterPopup';

import InterviewBgMob from '../../../../assets/images/landing/interview-bg-mobile.webp';
import InterviewBg from '../../../../assets/images/landing/interview-bg.webp';

const INTERVIEW_TOPICS = [
  { value: 'speaking', label: 'Speaking' },
  { value: 'listening', label: 'Listening' },
];

const InterviewSection = () => {
  const [formData, setFormData] = useState({topic: ''});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const onFormChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <section className="pt-10 pb-7 px-4 max-1024:pt-[45px] max-1024:pb-10">
      <div className="relative overflow-hidden px-[73px] py-[30px] max-w-[1082px] mx-auto rounded-[30px] shadow-cardGray max-1024:px-5">
        <div className="relative z-10 max-w-[360px]">
          <h2 className="text-white text-[44px] leading-[54px] font-semibold max-1024:text-[28px] max-1024:leading-[34px]">
            Personalizacja
          </h2>

          <p className="mt-3 text-lg text-white max-1024:text-base leading-[27px]">
            Stworzymy każdy scenariusz rozmowy dostosowany do potrzeb <br /> i
            branży!
          </p>

          <div className='relative'>
            <form onSubmit={onFormSubmit} className='mt-[30px]'>
              <FormSelect
                id="topic"
                name="topic"
                value={formData['topic']}
                options={INTERVIEW_TOPICS}
                placeholder="Wybierz temat"
                onChange={(e) => onFormChange(e, 'topic')}
                className='rounded-full min-h-[60px]'
              />

              <FormInput
                id="email"
                name="email"
                placeholder="E-mail"
                type="email"
                onChange={(e) => onFormChange(e, 'email')}
                className='mt-2.5 rounded-full min-h-[60px]'
              />

              <Button className="w-full mt-3 min-h-[60px]">Skontaktuj się</Button>
            </form>

            <NewsletterPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} className='top-0 ring-0 left-[105%] bottom-0 max-1024:left-0' />
          </div>
        </div>

        <picture>
          <source srcSet={InterviewBgMob} media="(max-width: 520px)" />
          <img
            src={InterviewBg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default InterviewSection;
