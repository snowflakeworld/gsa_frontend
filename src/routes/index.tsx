import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'

import { AccountLayout, MainLayout } from '@/layout'
import { DashboardLayout } from '@/layout/Content/Dashboard'
import { store } from '@/store'
import PrivateRoute from './PrivateRoute'

import { ThemedToastContainer } from '@/components/Common/ThemeToastContainer'
import { AccountRoutes } from './Account'
import { LandingRoutes, MainRoutes, MyRoutes } from './Main'
import { SubmissionRoutes } from './Submission'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [...LandingRoutes]
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [...SubmissionRoutes, ...MyRoutes]
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <AccountLayout />
      </PrivateRoute>
    ),
    children: [...AccountRoutes]
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [...MainRoutes]
  }
])

const AppRouter = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
      <ThemedToastContainer />
    </Provider>
  )
}

export default AppRouter
