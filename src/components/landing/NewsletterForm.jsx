import { cn } from '../../lib/utils';
import FormInput from '../FormInput';
import Button from '../Button';

import MailIcon from '../icons/MailIcon';

const NewsletterForm = ({ className }) => {
  return (
    <form className={cn('flex gap-3.5', className)}>
      <FormInput
        placeholder="Wpisz swój e-mail"
        type="email"
        className="text-sm border-[#BFE2DD]"
      />
      <Button className='px-5 rounded-lg'>
        <MailIcon />
      </Button>
    </form>
  );
};

export default NewsletterForm;
