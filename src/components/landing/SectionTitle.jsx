import { cn } from '../../lib/utils';

const SectionTitle = ({ title, className }) => {
  return (
    <h2 className={cn('text-[44px] text-center leading-[54px] text-[var(--eerie-black)] font-semibold max-1024:text-[28px] max-1024:leading-[34px]', className)}>{title}</h2>
  )
}

export default SectionTitle;