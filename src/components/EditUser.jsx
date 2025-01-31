import { useState } from 'react';
import AdminSectionTitle from './AdminSectionTitle';
import Button from './Button';
import Table from './Table';
import Modal from './Modal';

import EditIconSecondary from './icons/EditIconSecondary';
import DownloadIcon from './icons/DownloadIcon';

const EditUser = ({ user, className }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    document.body.style.overflow = 'auto';
  };

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
          Edytuj użytkownika <EditIconSecondary className="max-520:w-4 h-4" />
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
        <Button
          onClick={openDeleteModal}
          className="text-[15px] px-6 py-1 bg-[#de5252] hover:bg-[#B53F3F] tracking-wide"
        >
          Usuń użytkownika
        </Button>
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        className="max-w-[600px]"
      >
        <div>
          <div className="flex items-center gap-1.5">
            <div className="w-[22px] h-[22px] flex justify-center items-center rounded-md text-[#DE5252] bg-[#F8DCDC]">
              -
            </div>
            <h2 className="text-[var(--granite-gray)] text-xl font-medium">
              Usuń użytkownika
            </h2>
          </div>

          <div className="mt-8 space-y-3 font-medium text-xs text-[var(--granite-gray)]">
            <p>
              Użytkownik na podany adres e-mail otrzymał powiadomienie z
              instrukcją i hasłem do logowania.
            </p>
            <p>
              Użytkownik na podany adres e-mail otrzymał powiadomienie z
              instrukcją i hasłem do logowania.
            </p>
            <p>
              Użytkownik na podany adres e-mail otrzymał powiadomienie z
              instrukcją i hasłem do logowania.
            </p>
          </div>

          <Button
            variant="flat"
            className="mt-3 text-xs text-[var(--sandy-brown)] tracking-normal gap-2"
          >
            Pobierz wszystkie raporty <DownloadIcon fill="var(--sandy-brown)" />
          </Button>

          <Button
            onClick={openDeleteModal}
            className="mt-9 mx-auto text-[15px] px-6 py-1 bg-[#de5252] hover:bg-[#B53F3F] tracking-wide"
          >
            Usuń użytkownika
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditUser;
