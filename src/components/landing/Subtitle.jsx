import { cn } from '../../lib/utils';

const Subtitle = ({ title, isWhite, className }) => {
  return (
    <div
      className={cn(
        'px-8 py-1 bg-[var(--cultured)] rounded-[4px]',
        isWhite && 'bg-white',
        className
      )}
    >
      <p
        className="inline-block font-semibold tracking-[0.5px]
      bg-gradient-to-r from-[var(--sandy-brown)] from-0%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent"
      >
        {title}
      </p>
    </div>
  );
};

export default Subtitle;
