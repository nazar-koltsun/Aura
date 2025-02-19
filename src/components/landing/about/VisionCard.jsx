import { cn } from '../../../lib/utils';

const VisionCard = ({ data, index, activeCardIndex, handleActiveIndex }) => {
  const isActive = index === activeCardIndex;
  const isFirst = index === 0;
  const isLast = index === 2;

  return (
    <div
      className={cn(
        'w-[500px] relative flex-shrink-0 rounded-[30px] group overflow-hidden bg-white transform transition duration-300 linear delay-100 shadow-blockShadow max-1400:w-[450px] max-1240:w-[450px] max-1024:w-[300px] max-700:w-[225px] max-520:w-[180px] max-520:rounded-[15px]',
        isActive && '-translate-y-12 z-20 max-520:-translate-y-0 max-520:scale-[120%]',
        index === 1 && 'z-10',
        !isActive && 'bg-[var(--cultured)] hover:-translate-y-4',
        isFirst && '-mr-[250px] max-1400:-mr-[230px] max-1024:-mr-[150px] max-700:-mr-32 max-520:-mr-[110px]',
        isLast && '-ml-[250px] max-1400:-ml-[230px] max-1024:-ml-[150px] max-700:-ml-32 max-520:-ml-[110px]',

        isActive && isFirst && 'max-520:translate-x-6',
        activeCardIndex === 0 && index === 1 && 'max-520:translate-x-6 max-520:scale-[108%]',
        activeCardIndex === 2 && index === 1 && 'max-520:-translate-x-6 max-520:scale-[108%]',
        isActive && isLast && 'max-520:-translate-x-6',
      )}
      onMouseEnter={() => handleActiveIndex(index)}
      onMouseLeave={() => handleActiveIndex(1)}
    >
      <div className="relative rounded-[30px] overflow-hidden max-520:rounded-[15px]">
        <img
          src={data.img}
          alt=""
          className={cn(
            'w-full opacity-50 h-[400px] object-cover max-1400:h-[250px] max-700:h-[180px] max-520:h-[150px]',
            isActive && 'opacity-100'
          )}
        />
        <div
          className={cn(
            'absolute inset-0 opacity-80 transition duration-500',
            isActive
              ? 'bg-gradient-to-b from-[var(--sandy-brown)] to-[var(--jungle-green)]'
              : 'bg-[#aeaeae] opacity-50 group-hover:bg-gradient-to-b group-hover:from-[var(--sandy-brown)] group-hover:to-[var(--jungle-green)] group-hover:opacity-80'
          )}
        ></div>
      </div>

      <div
        className={cn(
          'px-5 pt-5 pb-6 text-[var(--granite-gray)] opacity-70 max-1400:p-4',
          isActive && 'opacity-100'
        )}
      >
        <h2 className="text-2xl font-bold max-1240:text-xl max-1400:text-[20px] leading-5 max-700:text-lg max-700:leading-4 max-520:text-base max-520:leading-3">
          {data.title}
        </h2>

        <div className="mt-2 text-lg max-1400:text-base max-700:text-sm max-520:text-[10px] max-520:leading-4">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
