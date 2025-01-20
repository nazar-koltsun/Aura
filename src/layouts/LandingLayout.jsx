import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

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
    <>
      <Header navItems={HEADER_NAV_LINKS} />
      <main><Outlet /></main>
      <footer>footer</footer>
    </>
  );
};

export default LandingLayout;
