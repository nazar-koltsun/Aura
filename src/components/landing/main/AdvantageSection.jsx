import { useState } from 'react';
import { cn } from '../../../lib/utils';
import Button from '../../Button';

import ArrowDownSecondIcon from '../../icons/ArrowDownSecondIcon';

const AdvantageSection = ({ advantage, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      key={index}
      className={cn(
        'py-10 px-24 flex gap-[218px] bg-gradient-to-br rounded-[30px] shadow-blockShadow max-1440:px-16 max-1440:gap-40 max-1240:gap-28 max-1024:px-10 max-1024:gap-10 max-700:flex-col',
        index % 2 === 0
          ? 'pl-[195px] from-[var(--jungle-green)] to-[var(--sandy-brown)] max-1440:pl-28 max-1240:pl-20'
          : 'pr-[229px] from-[var(--sandy-brown)] to-[var(--jungle-green)] flex-row-reverse max-1440:pr-36 max-1240:pr-24'
      )}
    >
      <div className="shrink-0 mt-[40px] max-1440:mt-[80px] max-1024:mt-0">
        <picture>
          <source media="(max-width: 700px)" srcSet={advantage.image.mobile} />
          <img src={advantage.image.desktop} alt="" />
        </picture>
      </div>
      <div>
        <h2 className="text-[36px] leading-[50px] text-white font-bold max-1024:text-[28px] max-1024:leading-[34px]">
          {advantage.title}
        </h2>
        <div className="text-white">{advantage.description}</div>

        <Button
          variant="flat"
          className="text-xs text-white mt-3 gap-[3px]"
          onClick={toggleExpand}
        >
          <ArrowDownSecondIcon /> Czytaj więcej
        </Button>

        <div
          className={cn(
            'mt-3 text-white leading-[27px] hidden',
            isExpanded && 'block'
          )}
        >
          {advantage.add_desctiption}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
