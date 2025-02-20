import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import CloseIconRounded from '../icons/CloseIconRounded';

const Benefit = ({ infoIndex, benefit, isCarouselOnMobile }) => {
  const [showIndexInfo, setShowIndexInfo] = useState(false);

  const showInfoBox = () => {
    setShowIndexInfo((lastValue) => !lastValue);
  };

  const closeInfoBox = () => {
    setShowIndexInfo(false);
  };

  useEffect(() => {
    const infoIndexBtn = document.querySelectorAll('.benefit-info-index')[
      infoIndex
    ];

    if (infoIndexBtn) {
      infoIndexBtn.addEventListener('click', showInfoBox);

      return () => {
        infoIndexBtn.removeEventListener('click', showInfoBox);
      };
    }
  }, [infoIndex, showIndexInfo]);

  const WrapperTag = benefit.linkUrl ? 'a' : 'div';
  const wrapperProps = benefit.linkUrl
    ? {
        href: benefit.linkUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <WrapperTag
      {...wrapperProps}
      className={cn(
        'relative pl-5 pr-4 pt-3 pb-5 min-h-[200px] rounded-[25px] bg-[var(--cultured)] shadow-cardGray transform transition duration-200 ease-in hover:-translate-y-1 hover:shadow-premiumShadow max-1024:px-5 max-1024:min-h-[165px]',
        isCarouselOnMobile && 'max-1024:shadow-smallShadow',
        benefit.shadow && `shadow-${benefit.shadow}`
      )}
    >
      <div className="flex justify-center items-center w-[65px] h-[65px] max-700:w-[33px] max-700:h-[33px]">
        {benefit.icon}
      </div>

      <div className="mt-4 text-[15px] flex gap-1 text-[var(--granite-gray)] leading-[22px] max-700:text-[12px] max-700:leading-[18px] whitespace-normal max-1024:mt-3">
        <span>•</span>
        {benefit.text}
        {showIndexInfo && (
          <div className="absolute right-0 max-w-[100%] bottom-0 px-3 pb-3 pt-5 rounded-xl rounded-b-[30px] rounded-t-none bg-white flex justify-center items-center text-xs shadow-smallShadow break-all">
            <button
              className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition duration-200 ease-in flex justify-center items-center hover:opacity-70"
              onClick={closeInfoBox}
            >
              <CloseIconRounded />
            </button>
            {benefit.info_text}
          </div>
        )}
      </div>
    </WrapperTag>
  );
};

export default Benefit;
