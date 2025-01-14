import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[310px_1fr]">
        <header className="col-span-2">Header</header>
        <aside>Sidebar</aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
