import { useState } from 'react';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import PhoneNumberField from './PhoneNumberField';
import FormAgreementCheckbox from './FormAgreementCheckbox';
import FormSelect from './FormSelect';
import UserPhoto from './UserPhoto';
import Button from '../components/Button';

const INDUSTRY_OPTIONS = [
  { value: 'e-commerce', label: 'E-commerce' },
  { value: 'other', label: 'Other' },
];

const ProfileForm = ({ userData }) => {
  const [user, setUser] = useState(userData);

  const onUserChange = (e, key) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const onPhoneChange = (newPhone) => {
    setUser({ ...user, phone: newPhone });
  };

  const onCorporateClientChange = (e) => {
    setUser({ ...user, 'corporate-client': e.target.checked });
  };

  const onPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({ ...user, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form
      onSubmit={onFormSubmit}
    >
      <div className="grid grid-cols-4 max-1920:grid-cols-3 max-1440:grid-cols-2 max-620:grid-cols-1 gap-7">
        <div className="space-y-3">
          <FormLabel htmlFor="name">Imię</FormLabel>
          <FormInput
            id="name"
            placeholder="Enter your name"
            value={user?.name}
            onChange={(e) => onUserChange(e, 'name')}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="last-name">Nazwisko</FormLabel>
          <FormInput
            id="last-name"
            placeholder="Enter your last name"
            value={user['last-name']}
            onChange={(e) => onUserChange(e, 'last-name')}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput
            id="email"
            type="email"
            placeholder="Enter your email"
            value={user['email']}
            onChange={(e) => onUserChange(e, 'email')}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="phone">Numer telefonu</FormLabel>
          <PhoneNumberField
            id="phone"
            phone={user.phone}
            onChange={onPhoneChange}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="city">Miejscowość</FormLabel>
          <FormInput
            id="city"
            placeholder="Enter your Sity"
            value={user['city']}
            onChange={(e) => onUserChange(e, 'city')}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="zip">Kod Pocztowy</FormLabel>
          <FormInput
            id="zip"
            type="number"
            min={1}
            placeholder="Enter your zip code"
            value={user['zip']}
            onChange={(e) => onUserChange(e, 'zip')}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="street">Ulica</FormLabel>
          <FormInput
            id="street"
            placeholder="Enter your street"
            value={user['street']}
            onChange={(e) => onUserChange(e, 'street')}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="house-number">Numer domu / lokalu</FormLabel>
          <FormInput
            id="house-number"
            type="number"
            min={1}
            placeholder="Enter your house number"
            value={user['house-number']}
            onChange={(e) => onUserChange(e, 'house-number')}
          />
        </div>

        <div className="space-y-3">
          <FormLabel htmlFor="industry">Branża</FormLabel>
          <FormSelect
            id="industry"
            name="industry"
            value={user['industry']}
            options={INDUSTRY_OPTIONS}
            onChange={(e) => onUserChange(e, 'industry')}
          />
        </div>

        <div className="space-y-3">
          <p className="text-[var(--taupe-gray)] font-semibold">
            Zdjęcie profilowe (opcjonalne)
          </p>
          <UserPhoto photo={user.avatar} setPhoto={onPhotoChange} />
        </div>

        <div>
          <FormAgreementCheckbox
            checked={user['corporate-client']}
            label="Jestem klientem firmowym"
            onChange={(e) => onCorporateClientChange(e, 'corporate-client')}
          />
        </div>
      </div>

      <Button className='mt-10'>Aktualizuj</Button>
    </form>
  );
};

export default ProfileForm;
