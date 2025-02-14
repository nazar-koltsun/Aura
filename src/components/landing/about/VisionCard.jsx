import { cn } from '../../../lib/utils';

const VisionCard = ({
  data,
  isActive = false,
  isFirst = false,
  isLast = false,
}) => {
  return (
    <div
      className={cn(
        'w-[600px] relative z-0 flex-shrink-0 rounded-[30px] group overflow-hidden bg-white transform transition duration-200 ease-in shadow-blockShadow max-1400:w-[500px] max-1240:w-[450px] max-1024:w-[300px] max-700:w-full max-700:max-w-[500px]',
        isActive && '-translate-y-12 z-10 max-700:translate-y-0 max-700:hover:-translate-y-4',
        !isActive && 'opacity-60 hover:opacity-100 hover:-translate-y-4 hover:z-20',
        isFirst && '-mr-[295px] max-1400:-mr-[250px] max-1240:-mr-[220px] max-1024:-mr-[150px] max-700:mr-0',
        isLast && '-ml-[295px] bg-[#E8E8E8] hover:bg-white max-1400:-ml-[250px] max-1240:-ml-[220px] max-1024:-ml-[150px] max-700:ml-0'
      )}
    >
      <div className="relative rounded-[30px] overflow-hidden">
        <img src={data.img} alt="" className="w-full h-full object-cover max-1400:h-[300px]" />
        <div
          className={cn(
            'absolute inset-0 opacity-80',
            isActive &&
              'bg-gradient-to-b from-[var(--sandy-brown)] to-[var(--jungle-green)]',
            !isActive && 'bg-[#9e9e9e] opacity-60 group-hover:bg-gradient-to-b group-hover:from-[var(--sandy-brown)] group-hover:to-[var(--jungle-green)] group-hover:opacity-80'
          )}
        ></div>
      </div>

      <div className="px-12 pt-11 pb-16 text-[var(--granite-gray)] max-1400:px-8 max-1400:pt-7 max-1400:pb-12 max-1240:px-4
      max-1240:pt-5 max-1240:pb-8">
        <h2 className="text-[32px] leading-[30px] font-bold max-1400:text-[28px] max-1240:text-xl">{data.title}</h2>

        <div className="mt-10 text-[26px] leading-[39px] max-1400:mt-6 max-1400:text-xl max-1400:leading-[26px] max-1240:text-lg 
        max-1240:mt-4">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
