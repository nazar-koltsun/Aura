import Logo from '../assets/images/logo.png';
import Button from '../components/Button';

import UserIcon from './icons/UserIcon';

const Header = () => {
  return (
    <header className="col-span-2 flex justify-between items-center gap-8 px-14 py-2.5 border-b border-[var(--bright-gray)] max-768:px-6 max-768:gap-4">
      <img className='max-768:w-[180px] max-768:h-auto"' src={Logo} width={216} height={110} alt="nowAura logo" />

      <Button className="justify-center w-10 h-10 p-1 rounded-full">
        <UserIcon />
      </Button>
    </header>
  );
};

export default Header;
