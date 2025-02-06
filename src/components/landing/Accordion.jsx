import { useState } from "react";
import { Collapse } from 'react-collapse';
import { cn } from "../../lib/utils";
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("flex flex-col rounded-[10px] transition easy-in duration-200", isOpen && 'shadow-blockShadow')}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("w-full px-7 py-[18px] text-left text-lg text-[var(--eerie-black)] bg-[var(--cultured)] rounded-[10px] max-1024:text-base max-1024:py-3 max-1024:px-4", isOpen && 'rounded-b-none')}
      >
        <div className="flex justify-between items-center gap-4">
          <span>{title}</span>
          <span>{isOpen ? <MinusIcon fill="#181818" /> : <PlusIcon fill="#181818" />}</span>
        </div>
      </button>

      <Collapse isOpened={isOpen}>
        <div className="py-7 pl-5 pr-14 leading-[27px] text-[var(--granite-gray)] bg-[var(--cultured)] border-t border-t-[var(--light-silver)] rounded-b-[10px] max-1024:px-4 max-1024:py-5">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;