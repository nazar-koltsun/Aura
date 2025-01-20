import { Outlet } from 'react-router-dom';


const LandingLayout = () => {
  return (
    <>
      <header>header</header>
      <main><Outlet /></main>
      <footer>footer</footer>
    </>
  );
};

export default LandingLayout;
