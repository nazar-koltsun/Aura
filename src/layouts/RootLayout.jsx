import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[310px_1fr]">
        <Header />
        <aside>Sidebar</aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
