import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/landing/Footer';

const HEADER_NAV_LINKS = [
  {
    title: 'O Nas',
    path: '/landings/about',
  },
  {
    title: 'Jak to działa?',
    path: '/landings/how-are-things',
  },
  {
    title: 'Cennik',
    path: 'price',
    submenu: {
      title: 'Wybierz cennik',
      items: [
        {
          title: 'Klient firmowy',
          path: '/landings/corporate',
        },
        {
          title: 'Klient indywidualny',
          path: '/landings/individual',
        },
        {
          title: 'Klient JST',
          path: '/landings/jst',
        },
      ],
    }
  },
  {
    title: 'Kontakt',
    path: 'contact',
  },
  {
    title: 'Doładuj',
    path: 'top-up',
  }
]

const CORPORATE_PAGES_LINKS = [
  '/landings/corporate',
  '/landings/individual',
  '/landings/jst',
  '/landings/how-are-things',
  '/landings/about',
]

const LandingLayout = () => {
  const location = useLocation();
  const isCorporate = CORPORATE_PAGES_LINKS.includes(location.pathname);
  
  return (
    <div className='grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen m-auto'>
      <Header className="col-span-1 max-1024:px-4" navItems={HEADER_NAV_LINKS} isCorporate={isCorporate} />
      <main className='max-w-[2560px] w-full mx-auto'><Outlet /></main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
