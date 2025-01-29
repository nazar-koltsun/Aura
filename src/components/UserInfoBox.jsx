import { cn } from '../lib/utils';
import Button from './Button';

const UserInfoBox = ({ user, className }) => {
  return (
    <div className={cn('p-2.5 bg-[var(--seashell)] rounded-[10px]', className)}>
      <div className="p-2.5 flex flex-wrap justify-center gap-2.5 items-center max-1024:p-0">
        <div className="relative shrink-0 w-10 h-10">
          <img src={user.avatar} className="rounded-full" alt="" />
          <div
            className={cn(
              'w-2.5 h-2.5 bg-transparent rounded-full absolute bottom-[5px] right-[5px]',
              user.isOnline && 'bg-[var(--medium-sea-green)]'
            )}
          ></div>
        </div>

        <div className='grow'>
          <p className="font-medium text-[var(--eerie-black)] leading-tight">
            {user.name} {user['last-name']}
          </p>
          <p className="text-[var(--granite-gray)] leading-[27px]">
            {user.email}
          </p>
        </div>

        <span className="self-start flex justify-center items-center min-w-[35px] px-[2px] text-xs text-white leading-[20px] bg-[var(--jungle-green)] rounded">
          {user['conversations-count']}
        </span>
      </div>

      <Button
        className="mt-3 px-6 py-2 min-h-[50px] rounded-lg border-2 border-[#D1CCC7] text-[var(--eerie-black)] text-[19px] font-medium tracking-[0.5px]  hover:bg-[#D1CCC7] hover:text-[var(--eerie-black)] max-1024:text-base"
        variant="bordered"
        path="#"
      >
        Rozpocznij rozmowę
      </Button>
    </div>
  );
};

export default UserInfoBox;
