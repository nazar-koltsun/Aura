import { cn } from '../../lib/utils';

const PageH1 = ({ className, children }) => {
  return (
    <h1 className={cn('text-center text-[70px] leading-[89px] font-bold text-black', className)}>{children}</h1>
  )
};

export default PageH1;
