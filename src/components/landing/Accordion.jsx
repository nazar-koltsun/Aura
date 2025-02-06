import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { cn } from '../../lib/utils';
import HighlightBox from '../landing/HighlightBox';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HighlightBox color='var(--rocket-metallic)' className='rounded-[10px]'>
      <div
        className={cn(
          'flex flex-col rounded-[10px] transition easy-in duration-200',
          isOpen && 'shadow-blockShadow'
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full px-7 py-[18px] text-left text-lg text-[var(--eerie-black)] bg-[var(--cultured)] rounded-[10px] max-1024:text-base max-1024:py-3 max-1024:px-4',
            isOpen && 'rounded-b-none'
          )}
        >
          <div className="flex justify-between items-center gap-4">
            <span>{title}</span>
            <span>
              {isOpen ? (
                <MinusIcon fill="#181818" className='pointer-events-none' />
              ) : (
                <PlusIcon fill="#181818" className='pointer-events-none' />
              )}
            </span>
          </div>
        </button>

        <Collapse isOpened={isOpen}>
          <div className="py-7 pl-5 pr-14 leading-[27px] text-[var(--granite-gray)] bg-[var(--cultured)] 
          pointer-events-none border-t border-t-[var(--light-silver)] rounded-b-[10px] max-1024:px-4 max-1024:py-5">
            {children}
          </div>
        </Collapse>
      </div>
    </HighlightBox>
  );
};

export default Accordion;
