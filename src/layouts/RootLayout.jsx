import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';

import BurgerIcon from '../components/icons/BurgerIcon';

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-[320px_1fr] grid-rows-[auto_1fr] min-h-screen max-768:grid-cols-[280px_1fr]">
        <Header />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main>
          { !isSidebarOpen && 
            <Button
              className="hidden max-768:flex ml-3 px-3 py-[18px] hover:opacity-50"
              variant="flat"
              onClick={openSidebar}
            >
              <BurgerIcon />
            </Button>
          } 
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
