import Logo from '../assets/images/logo.png';
import Button from '../components/Button';
import HeaderNav from './HeaderNav';

import UserIcon from './icons/UserIcon';

const Header = ({ navItems = [] }) => {
  return (
    <header className="col-span-2 flex justify-between items-center gap-6 px-14 py-2.5 border-b border-[var(--bright-gray)] max-1024:px-6 max-1024:gap-4 bg-white z-20">
      <img className='max-1024:w-[180px] max-1024:h-auto"' src={Logo} width={216} height={110} alt="nowAura logo" />

      { navItems.length > 0 && <HeaderNav navItems={navItems} /> }

      <Button className="justify-center w-10 h-10 p-1 rounded-full">
        <UserIcon />
      </Button>
    </header>
  );
};

export default Header;
