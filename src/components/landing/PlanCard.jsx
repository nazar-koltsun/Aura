import { cn } from '../../lib/utils';
import Button from '../Button';

import GradientCheckIcon from '../icons/GradientCheckIcon';

const PlanCard = ({
  planData,
  index,
  activeIndex = 1,
  isVertical = false,
  hasTightDescription = false,
  handleActiveIndex = () => {},
  className,
}) => {
  const isActive = index === activeIndex;
  const onBtnEnter = (e) => {
    e.target.style.backgroundColor = planData.color;
    e.target.style.color = 'white';
  };

  const onBtnLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = planData.color;
  };

  console.log('activeIndex', activeIndex);

  return (
    <div
      className={cn(
        'pr-10 pl-[55px] pt-[18px] pb-6 flex justify-between gap-10 w-full bg-[#F5F8FA] bg-opacity-70 rounded-[30px] hover:bg-opacity-100 transition ease-out duration-200 transform hover:-translate-y-2 max-1024:flex-col max-1024:px-4 max-1024:pb-6 max-1024:gap-5 max-700:max-w-[500px] max-700:mx-auto',
        isVertical && 'flex-col items-center px-9 max-1400:gap-6 max-1200:px-[50px] max-1200:pl-[60px] max-1200:items-stretch',
        isActive && 'bg-opacity-100 hover:-translate-y-0 max-1024:bg-opacity-70 max-1024:hover:-translate-y-2',
        className
      )}
      onMouseEnter={() => {
        console.log('mouse enter');
        handleActiveIndex(index);
      }}
      onMouseLeave={() => handleActiveIndex(1)}
    >
      <div
        className={cn(
          'w-[44%] pt-4 pb-2 flex flex-col items-center max-1024:w-full',
          isVertical && 'w-full h-full max-1400:pt-0 max-1024:w-full max-1024:pt-4'
        )}
      >
        <div className="w-[45px] h-[45px] flex justify-center items-center">
          {planData.icon}
        </div>

        <h3 className="mt-3 text-2xl text-[var(--eerie-black)] font-semibold">
          {planData.title}
        </h3>

        <ul
          className={cn(
            'mt-5 mb-6 flex flex-col gap-6 list-disc max-1024:pl-4 max-1024:mb-7 max-1024:max-w-[600px]',
            isVertical && 'max-w-[400px] mx-auto max-1400:gap-1 max-1400:mt-2 max-1400:mb-3 max-1024:gap-6',
            hasTightDescription && 'gap-0'
          )}
        >
          {planData.description_items.map((item, index) => (
            <li
              key={index}
              className={
                cn("text-lg leading-[30px] text-[var(--granite-gray)] max-1024:text-base max-1024:leading-[28px]", 
                  isVertical && 'max-1400:text-sm',
                )}
            >
              {item}
            </li>
          ))}
        </ul>

        <Button
          variant="bordered"
          path={planData.href}
          style={{
            borderColor: planData.color,
            color: planData.color,
          }}
          onMouseEnter={onBtnEnter}
          onMouseLeave={onBtnLeave}
          className={cn('mt-auto text-[17px] min-w-[262px] min-h-[60px]', isVertical && 'max-1400:mt-0')}
        >
          Zamów demo
        </Button>
      </div>

      <div
        className={cn(
          'w-[56%] flex flex-col gap-5 max-1024:w-full max-1024:flex-row max-1024:justify-between max-1024:gap-3 max-700:flex-col max-700:items-center',
          isVertical && 'w-full'
        )}
      >
        {planData.items.map((item, index) => (
          <div
            key={index}
            className={cn("w-full pt-8 pb-7 pr-2.5 pl-7 items-center flex gap-8 bg-[#F5F8FA] bg-opacity-70 rounded-[30px] shadow-cardGray max-1024:p-4 max-1024:gap-5 max-700:w-full", isVertical && 'max-1400:gap-4')}
          >
            <div className="w-[65px] h-[65px] flex justify-center items-center max-1024:w-[40px] max-1024:h-[40px]">
              {item.icon}
            </div>
            <div>
              <div className="inline-block">
                <h4 className="text-[21px] text-[var(--eerie-black)] leading-[24px] font-medium">
                  {item.title}
                </h4>

                <div className="mt-[2px] w-full h-[2px] bg-gradient-to-r from-transparent via-[#79BCB3] via-[50%] to-transparent to-[100%]"></div>
              </div>

              <ul className="mt-2.5">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className={cn("flex items-start gap-2.5 text-[15px] leading-[25px] text-[var(--granite-gray)] max-1024:text-[12px] max-1024:leading-6", isVertical && 'max-1400:text-sm')}
                  >
                    <GradientCheckIcon className='mt-2' /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
