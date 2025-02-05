import { useState } from 'react';
import { cn } from '../../lib/utils';
import FormAgreementCheckbox from '../FormAgreementCheckbox';
import Button from '../Button';

const NewsletterPopup = ({ isOpen, onClose, className }) => {
  const [agreements, setAgreements] = useState([
    {
      id: 'all',
      label: 'Akceptuję wszystkie',
      checked: false,
    },
    {
      id: 1,
      label: 'Zgoda 1',
      checked: false,
    },
    {
      id: 2,
      label: 'Zgoda 2',
      checked: false,
    },
    {
      id: 3,
      label: 'Zgoda 3',
      checked: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    if (id === 'all') {
      // Toggle "Select All" and set all other checkboxes
      const isAllChecked = agreements[0].checked;
      setAgreements((prev) =>
        prev.map((agreement) => ({
          ...agreement,
          checked: !isAllChecked,
        }))
      );
    } else {
      // Toggle the specific checkbox and check if all are selected
      setAgreements((prev) => {
        const updatedAgreements = prev.map((agreement) =>
          agreement.id === id
            ? { ...agreement, checked: !agreement.checked }
            : agreement
        );

        // Update "Select All" checkbox based on all other checkboxes
        const areAllChecked = updatedAgreements
          .slice(1) // Skip "Select All"
          .every((agreement) => agreement.checked);

        updatedAgreements[0].checked = areAllChecked; // Sync "Select All"
        return updatedAgreements;
      });
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={cn("absolute -top-[130px] -right-[80%] max-1024:-right-[80%] w-72 py-8 px-6 bg-white border border-[#DBEFEC] rounded-[30px] max-700:right-0", className)}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          {agreements.map((agreement) => (
            <FormAgreementCheckbox
              key={agreement.id}
              name={agreement.id}
              isSmall
              label={agreement.label}
              checked={agreement.checked}
              onChange={() => handleCheckboxChange(agreement.id)}
            />
          ))}
        </div>

        <div className='grid grid-cols-2 gap-2 mt-10'>
          <Button type="submit" className='text-[10px] px-5 py-2 min-h-[30px]'>
            Zapisz się
          </Button>

          <Button type="button" variant="bordered" className='text-[10px] px-5 py-[5px]' onClick={onClose}>
            Anuluj
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterPopup;
