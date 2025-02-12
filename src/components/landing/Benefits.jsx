import { cn } from '../../lib/utils';

const Benefits = ({ benefits, isBannerLarge, className }) => {
  return (
    <div className={cn('grid grid-cols-3 gap-5 w-full max-1024:grid-cols-2 max-1024:gap-4', className)}>

      <div className={cn("col-span-2 relative pl-24 pr-14 py-8 min-h-[210px] bg-[#A7AB86] flex justify-center items-center rounded-[25px] shadow-cardGray overflow-hidden max-1024:py-6 max-1024:px-11 max-1024:min-h-[197px]",
        isBannerLarge && 'col-span-3 max-1024:col-span-2'
      )}>
        <p className="relative z-10 max-w-[650px] text-[22px] text-white text-center leading-[30px] font-medium max-1024:text-[18px]">
          {benefits.banner.text}
        </p>

        <img
          src={benefits.banner.image}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover blur-[2px]"
        />
      </div>

      {benefits.items.map((item, index) => (
        <div
          key={index}
          className={cn("pl-5 pr-4 pt-3 pb-5 min-h-[210px] rounded-[25px] bg-[var(--cultured)] shadow-cardGray max-1024:px-5 max-1024:min-h-[165px]",
            item.shadow && `shadow-${item.shadow}`
          )}
        >
          <div className="flex justify-center items-center w-[65px] h-[65px] max-700:w-[33px] max-700:h-[33px]">
            {item.icon}
          </div>

          <div className="mt-4 text-[15px] flex gap-1 text-[var(--granite-gray)] leading-[30px] max-700:text-[12px] max-700:leading-[22px] max-1024:mt-3">
            <span>•</span>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
