import { cn } from '../lib/utils';

const Card = ({ className, onClick, children }) => {
  return (
    <div className={cn('bg-white py-9 px-8 shadow-blockShadow rounded-xl max-1024:py-5 max-1024:px-4', className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;