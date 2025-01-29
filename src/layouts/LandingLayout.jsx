import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/landing/Footer';

const HEADER_NAV_LINKS = [
  {
    title: 'O Nas',
    path: 'about-us',
  },
  {
    title: 'Jak to działa?',
    path: 'how-it-works',
  },
  {
    title: 'Cennik',
    path: 'price',
    submenu: {
      title: 'Wybierz cennik',
      items: [
        {
          title: 'Klient firmowy',
          path: 'price',
        },
        {
          title: 'Klient indywidualny',
          path: 'price',
        },
        {
          title: 'Klient JST',
          path: 'price',
        },
      ],
    }
  },
  {
    title: 'Kontakt',
    path: 'contact',
  },
  {
    title: 'Rozpocznij naukę',
    path: 'start-learning',
  }
]

const LandingLayout = () => {
  return (
    <div className='grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen m-auto'>
      <Header className="col-span-1 max-1024:px-4" navItems={HEADER_NAV_LINKS} />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
