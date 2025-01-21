import { useState } from 'react';

import { cn } from '../../lib/utils';
import FormInput from '../FormInput';
import Button from '../Button';
import NewsletterPopup from './NewsletterPopup';

import MailIcon from '../icons/MailIcon';

const NewsletterForm = ({ className }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <div className={cn('relative', className)}>
      <form className='flex gap-3.5' onSubmit={onFormSubmit}>
        <FormInput
          placeholder="Wpisz swój e-mail"
          type="email"
          className="text-sm border-[#BFE2DD]"
        />
        <Button className='px-5 rounded-lg'>
          <MailIcon />
        </Button>
      </form>

      <NewsletterPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default NewsletterForm;
