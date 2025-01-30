import { useState } from 'react';
import Table from '../Table';
import AccountStatus from '../AccountStatus';
import Button from '../Button';
import SearchInput from '../SearchInput';
import FormSelect from '../FormSelect';

const USERS_TABLE_DATA = [
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '1/5',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '2/10',
    Status: 'Nieaktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '0/2',
    Status: 'Nieaktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '1/4',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '4/14',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '1/5',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '2/10',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '3/5',
    Status: 'Nieaktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '1/5',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jon Doe',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jondoe@gmail.com',
    'Ilość rozmów': '2/10',
    Status: 'Nieaktywny',
  },
  {
    'Imię i Nazwisko': 'Jan Nowak',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jannowak@gmail.com',
    'Ilość rozmów': '1/2',
    Status: 'Nieaktywny',
  },
  {
    'Imię i Nazwisko': 'Jon Doe',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jondoe@gmail.com',
    'Ilość rozmów': '1/4',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jon Doe',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jondoe@gmail.com',
    'Ilość rozmów': '4/14',
    Status: 'Nieaktywny',
  },
  {
    'Imię i Nazwisko': 'Jon Doe',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jondoe@gmail.com',
    'Ilość rozmów': '4/5',
    Status: 'Aktywny',
  },
  {
    'Imię i Nazwisko': 'Jon Doe',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jondoe@gmail.com',
    'Ilość rozmów': '4/10',
    Status: 'Nieaktywny',
  },
  {
    'Imię i Nazwisko': 'Jon Doe',
    Stanowisko: 'Project Manager',
    'Data Dodania': '13/12/2024',
    'E-mail': 'jondoe@gmail.com',
    'Ilość rozmów': '1/5',
    Status: 'Aktywny',
  },
];

const USERS_SORT_OPTIONS = [
  {
    label: 'Data dodania',
    value: 'date_added'
  },
  {
    value: 'status',
    label: 'Status'
  },
]

const TableTopContent = () => {
  const [userSortValue, setUserSortValue] = useState(USERS_SORT_OPTIONS[0].value);

  return (
    <div className="flex flex-wrap items-start max-700:justify-between gap-4">
      <Button
        variant="bordered"
        className="px-4 py-1.5 font-medium text-xs tracking-tighter"
      >
        + Dodaj użytkownika
      </Button>

      <SearchInput className="ml-auto max-700:order-last max-700:w-full" />

      <div className='ml-4 pl-4 pr-1.5 flex items-center gap-1 bg-[var(--ghost-white)] rounded-[10px] max-700:ml-0'>
        <span className='text-xs text-[#7e7e7e] tracking-tighter'>Sortuj:</span>
        <FormSelect
          className='h-[38px] py-1 pl-0 pr-2.5 text-xs text-[#3d3c42] font-semibold tracking-tighter bg-transparent border-none outline-none'
          id="users_sort"
          name="users_sort"
          value={userSortValue}
          options={USERS_SORT_OPTIONS}
          onChange={(e) => setUserSortValue(e.target.value)}
        />
      </div>
    </div>
  );
};

const UsersTab = () => {
  return (
    <>
      <Table data={USERS_TABLE_DATA} topContent={<TableTopContent />} />
      <div>pagination</div>
      <AccountStatus className="mt-12" />
    </>
  );
};

export default UsersTab;
