import AdminSectionTitle from './AdminSectionTitle';
import Button from './Button';
import Table from './Table';

import EditIconSecondary from './icons/EditIconSecondary';

const EditUser = ({ user, className }) => {
  return (
    <div className={className}>
      <AdminSectionTitle
        title="Szczegóły"
        className="justify-between items-end gap-4"
      >
        <Button
          variant="flat"
          className="mb-2.5 text-[var(--granite-gray)] text-sm max-520:text-[12px] max-520:gap-1"
        >
          Edytuj użytkownika <EditIconSecondary className='max-520:w-4 h-4' />
        </Button>
      </AdminSectionTitle>

      <Table data={user} editConversationNumber="true" className="mt-3" />

      <Button
        variant="flat"
        className="ml-auto mt-2.5 text-[var(--jungle-green)] text-sm tracking-wide"
      >
        + Dodaj rozmowę
      </Button>

      <div className="mt-4 flex flex-wrap gap-5 max-700:mt-8">
        <Button className="text-[15px] py-1 tracking-wide">Aktualizuj</Button>
        <Button
          variant="bordered"
          className="text-[15px] py-[3px] text-[var(--granite-gray)] border-[var(--granite-gray)] hover:bg-[var(--granite-gray)] tracking-wide"
        >
          Anuluj
        </Button>
        <Button className="text-[15px] px-6 py-1 bg-[#de5252] hover:bg-[#B53F3F] tracking-wide">
          Usuń użytkownika
        </Button>
      </div>
    </div>
  );
};

export default EditUser;
