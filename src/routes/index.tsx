import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from '@/layout'
import { DashboardLayout } from '@/layout/Dashboard'
import { LandingPage } from '@/pages'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <LandingPage /> }]
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [{ path: '/', element: <LandingPage /> }]
  }
])

const AppRouter = () => {
  return <RouterProvider router={routes} />
}

export default AppRouter
