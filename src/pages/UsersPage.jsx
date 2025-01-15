import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabs from '../components/Tabs';

const TABS_ITEMS = ['Profil', 'Hasło', 'Usuń konto', 'Język'];

const UsersPage = () => {
  const [activeTab, setActiveTab] = useState(TABS_ITEMS[0]);

  console.log('activeTab', activeTab);

  return (
    <>
      <PageTitle title="Użytkownicy" />
      <Card className="mt-9"> 
        <Tabs className="mt-4" items={TABS_ITEMS} onClick={setActiveTab} activeTab={activeTab} />
      </Card>
    </>
  );
};

export default UsersPage;