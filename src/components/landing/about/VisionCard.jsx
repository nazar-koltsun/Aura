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
        'w-[500px] relative z-0 flex-shrink-0 rounded-[30px] group overflow-hidden bg-white transform transition duration-200 ease-in shadow-blockShadow max-1400:w-[450px] max-1240:w-[450px] max-1024:w-[300px] max-700:w-[225px] max-520:w-[180px] max-520:rounded-[15px]',
        isActive && '-translate-y-12 z-10 max-520:-translate-y-6',
        !isActive && 'opacity-60 hover:opacity-100 hover:-translate-y-4 hover:z-20 max-520:hover:-translate-y-2',
        isFirst && '-mr-[250px] max-1400:-mr-[230px] max-1024:-mr-[150px] max-700:-mr-32 max-520:-mr-[110px]',
        isLast && '-ml-[250px] max-1400:-ml-[230px] max-1024:-ml-[150px] max-700:-ml-32 max-520:-ml-[110px]'
      )}
    >
      <div className="relative rounded-[30px] overflow-hidden max-520:rounded-[15px]">
        <img src={data.img} alt="" className="w-full h-[400px] object-cover max-1400:h-[250px] max-700:h-[180px] max-520:h-[150px]" />
        <div
          className={cn(
            'absolute inset-0 opacity-80',
            isActive &&
              'bg-gradient-to-b from-[var(--sandy-brown)] to-[var(--jungle-green)]',
            !isActive && 'bg-[#9e9e9e] opacity-60 group-hover:bg-gradient-to-b group-hover:from-[var(--sandy-brown)] group-hover:to-[var(--jungle-green)] group-hover:opacity-80'
          )}
        ></div>
      </div>

      <div className="px-5 pt-5 pb-6 text-[var(--granite-gray)] max-1400:p-4">
        <h2 className="text-2xl font-bold max-1240:text-xl max-1400:text-[20px] leading-5 max-700:text-lg max-700:leading-4 max-520:text-base max-520:leading-3">{data.title}</h2>

        <div className="mt-2 text-lg max-1400:text-base max-700:text-sm max-520:text-[10px] max-520:leading-4">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
