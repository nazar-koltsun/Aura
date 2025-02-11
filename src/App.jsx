import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import LandingLayout from './layouts/LandingLayout';

import UsersPage from './pages/UsersPage';
import ConversationPage from './pages/ConversationPage';
import MainLanding from './landings/MainLanding';
import CorporateLanding from './landings/CorporateLanding';
import IndividualLanding from './landings/IndividualLanding';
import JSTLanding from './landings/JSTLanding';
import HowAreThingsLanding from './landings/HowAreThingsLanding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <UsersPage />,
      },
      {
        path: '/conversations',
        element: <ConversationPage />,
      },
    ],
  },
  {
    path: '/landings',
    element: <LandingLayout />,
    children: [
      {
        path: '/landings/main',
        element: <MainLanding />,
      },
      {
        path: '/landings/corporate',
        element: <CorporateLanding />,
      },
      {
        path: '/landings/individual',
        element: <IndividualLanding />,
      },
      {
        path: '/landings/jst',
        element: <JSTLanding />,
      },
      {
        path: '/landings/how-are-things',
        element: <HowAreThingsLanding />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
