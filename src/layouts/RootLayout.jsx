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
      <div className="grid grid-cols-[320px_1fr] grid-rows-[auto_1fr] min-h-screen max-1024:grid-cols-[280px_1fr]">
        <Header />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main className="py-14 px-11 max-1024:row-start-2 max-1024:row-end-3 max-1024:col-start-1 max-1024:col-end-4 max-1024:py-3 max-1024:px-6">
          <Button
            className="hidden max-1024:flex p-0 hover:opacity-50 mb-4"
            variant="flat"
            onClick={openSidebar}
          >
            <BurgerIcon width={40} height={40} />
          </Button>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
