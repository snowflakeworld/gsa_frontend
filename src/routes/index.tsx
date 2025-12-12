import { createBrowserRouter } from "react-router-dom";

import MainLayout from '@/layout'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  }
]);

export default routes;