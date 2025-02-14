import { useState } from 'react';
import SectionTitle from './SectionTitle';
import Button from '../../Button';

import ArrowDownSecondIcon from '../../icons/ArrowDownSecondIcon';

const ContentItem = ({ id, title, descriptions, sectionRef }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let descriptionsToShow = showFullDescription
    ? descriptions
    : descriptions.slice(0, 2);

  return (
    <div id={id} ref={sectionRef} className="pt-6">
      <SectionTitle title={title} />

      {descriptionsToShow.map((description, index) => (
        <div
          key={index}
          className="inline-flex gap-1 mt-4 text-[var(--granite-gray)]"
        >
          {index + 1}. {description}
        </div>
      ))}
      {descriptions.length >= 2 && (
        <Button
          variant="flat"
          className="inline-flex text-xs text-[var(--jungle-green)] flex items-center mt-3 gap-[3px] font-normal"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          <ArrowDownSecondIcon width={18} height={18} fill='#2A9D8F' className={showFullDescription ? 'rotate-180' : ''} />
          {showFullDescription ? 'Schowaj' : 'Czytaj więcej'}
        </Button>
      )}
    </div>
  );
};

export default ContentItem;
