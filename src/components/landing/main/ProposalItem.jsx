import { useState } from 'react';
import { cn } from '../../../lib/utils';
import HighlightBox from '../HighlightBox';
import InfoIcon from '../../icons/InfoIcon';

const ProposalItem = ({ proposal }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.preventDefault(); // Prevent <a> from navigating
    e.stopPropagation(); // Stop event from bubbling further
    setShowMore((prevValue) => !prevValue);
  };

  return (
    <li className="transform duration-200 ease-in hover:-translate-y-2">
      <a href={proposal.link}>
        <HighlightBox
          color="var(--metallic-silver)"
          className="flex h-full rounded-[30px]"
        >
          <div className="relative flex flex-col items-center bg-[var(--cultured)] pt-8 pb-11 px-8 rounded-[30px] shadow-cardGray">
            <div
              onClick={toggleShowMore}
              className="absolute top-3 right-10 flex justify-center items-center cursor-pointer w-8 h-8 max-700:right-7"
            >
              <InfoIcon className="pointer-events-none" />
            </div>

            <p
              className={cn(
                'hidden absolute left-8 top-11 right-11 px-9 pt-9 pb-5 text-lg text-[var(--granite-gray)] rounded-[30px] bg-white pointer-events-none',
                showMore && 'block'
              )}
            >
              {proposal.add_info}
            </p>
            <div className="flex justify-center items-center w-[45px] h-[45px]">
              {proposal.icon}
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--eerie-black)] pointer-events-none">
              {proposal.title}
            </h3>
            <ul className="mt-5 space-y-7 list-disc pl-6 pointer-events-none">
              {proposal.description_items.map((item, index) => (
                <li key={index} className="text-lg text-[var(--granite-gray)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </HighlightBox>
      </a>
    </li>
  );
};

export default ProposalItem;
