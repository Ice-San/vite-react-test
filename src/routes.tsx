import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/home';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/signup",
      element: <SignUp />
    }
]);