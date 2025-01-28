import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';
import Tabs from '../components/Tabs';

const TABS_ITEMS = ['Doładuj konto', 'Użytkownicy'];

const ConversationPage = () => {
  const [activeTab, setActiveTab] = useState(TABS_ITEMS[0]);

  let tabContent;

  switch (activeTab) {
    case 'Użytkownicy':
      tabContent = <div>Użytkownicy</div>;
      break;
    default:
      tabContent = 'Doładuj konto';
  }

  return (
    <>
      <PageTitle title="Rozmowy" />
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

export default ConversationPage;
