import { useState } from 'react';
import FormInput from '../FormInput';
import PhoneNumberField from '../PhoneNumberField';
import FormAgreementCheckbox from '../FormAgreementCheckbox';
import Button from '../Button';

const ContactForm = () => {
  const [contact, setContact] = useState({
    email: '',
    phone: '',
    topic: '',
    message: '',
    agreementOne: false,
    agreementTwo: false,
  });

  const onFormChange = (e, key) => {
    setContact((prevContact) => ({ ...prevContact, [key]: e.target.value }));
  };

  const onPhoneChange = (newPhone) => {
    setContact((prevContact) => ({ ...prevContact, phone: newPhone }));
  };

  const onAggreementChange = (e, key) => {
    setContact((prevContact) => ({ ...prevContact, [key]: e.target.checked }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <form onSubmit={onFormSubmit} className="w-[750px] max-w-full mt-8 max-1024:mt-6">
      <div className="space-y-5">
        <FormInput
          id="email"
          type="email"
          name="email"
          placeholder="E-mail"
          value={contact.email}
          onChange={(e) => onFormChange(e, 'email')}
          className="h-[70px]"
        />

        <PhoneNumberField
          id="phone"
          name="phone"
          phone={contact.phone}
          onChange={onPhoneChange}
          className="h-[70px]"
        />

        <FormInput
          id="topic"
          type="text"
          name="topic"
          placeholder="Temat"
          value={contact.topic}
          onChange={(e) => onFormChange(e, 'topic')}
          className="h-[70px]"
        />

        <FormInput
          id="message"
          type="text"
          name="message"
          placeholder="Wiadomość"
          value={contact.message}
          onChange={(e) => onFormChange(e, 'message')}
          className="min-h-[193px]"
          isTextarea
        />
      </div>
      <div className="mt-4 pl-4 space-y-2.5">
        <FormAgreementCheckbox
          name="agreementOne"
          checked={contact.agreementOne}
          label="Wyrażam zgodę na kontakt telefoniczny i elektroniczny w celu obsługi niniejszego zapytania."
          onChange={(e) => onAggreementChange(e, 'agreementOne')}
        />

        <FormAgreementCheckbox
          name="agreementTwo"
          checked={contact.agreementTwo}
          label={<span>Wyrażam zgodę na otrzymywanie informacji handlowych środkami komunikacji elektronicznej 
            wysyłanymi przez www.nowaura.com oraz na wykorzystanie komunikacji email w celach marketingowych  
            <b> (Polityka Prywatności)</b></span>} 
          onChange={(e) => onAggreementChange(e, 'agreementTwo')}
        />
      </div>

      <Button className="mt-4 mx-auto px-6 text-[17px] min-h-[60px] max-1024:min-h-[50px]">Wyślij Wiadomość</Button>
    </form>
  );
};

export default ContactForm;
