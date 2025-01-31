import AdminSectionTitle from './AdminSectionTitle';
import Table from './Table';
import Button from './Button';

import DownloadIcon from './icons/DownloadIcon';

const CONVERSATIONS_HISTORY_DATA = [
  {
    'Data Rozmowy': '13/12/2024',
    'Czas Trwania': '25:34 min',
    Raport: 'Pobierz',
    Podgląd: true,
  },
  {
    'Data Rozmowy': '13/12/2024',
    'Czas Trwania': '25:34 min',
    Raport: 'Pobierz',
    Podgląd: true,
  },
  {
    'Data Rozmowy': '13/12/2024',
    'Czas Trwania': '25:34 min',
    Raport: 'Pobierz',
    Podgląd: false,
  },
  {
    'Data Rozmowy': '13/12/2024',
    'Czas Trwania': '25:34 min',
    Raport: 'Pobierz',
    Podgląd: true,
  },
];

const ConversationsHistory = ({ className }) => {
  return (
    <div className={className}>
      <AdminSectionTitle title="Historia rozmów" />

      <Table
        className="mt-3"
        data={CONVERSATIONS_HISTORY_DATA}
        hasActions
        isHistoryTable
      />
      <Button variant="flat" className="mt-3 text-sm text-[var(--taupe-gray)]">
        Pobierz wybrane <DownloadIcon />
      </Button>
    </div>
  );
};

export default ConversationsHistory;
