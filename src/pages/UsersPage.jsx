import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabs from '../components/Tabs';
import ProfileForm from '../components/ProfileForm';

import UserAvatar from '../assets/images/user-avatar.png';

const TABS_ITEMS = ['Profil', 'Hasło', 'Usuń konto', 'Język'];

const USER_DATA = {
  name: 'Trent',
  'last-name': 'Adam',
  email: 'trent@gmail.com',
  phone: '+12025550174',
  city: 'New York',
  zip: '12345',
  street: '123 Main Street',
  'house-number': '123',
  'corporate-client': false,
  "industry": "e-commerce",
  avatar: UserAvatar,
}

const UsersPage = () => {
  const [activeTab, setActiveTab] = useState(TABS_ITEMS[0]);

  let tabContent;

  switch (activeTab) {
    case 'Hasło':
      tabContent = <div>Hasło</div>;
      break;
    case 'Usuń konto':
      tabContent = <div>Usuń konto</div>;
      break;
    case 'Język':
      tabContent = <div>Język</div>;
      break;
    default:
      tabContent = <ProfileForm userData={USER_DATA} />;
  }

  return (
    <>
      <PageTitle title="Użytkownicy" />
      <Card className="mt-9">
        <Tabs
          className="mt-4"
          items={TABS_ITEMS}
          onClick={setActiveTab}
          activeTab={activeTab}
        />
        <div className='mt-7'>
          {tabContent}
        </div>
      </Card>
    </>
  );
};

export default UsersPage;
