import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AccountLayout, MainLayout } from '@/layout'
import { DashboardLayout } from '@/layout/Content/Dashboard'
import { store } from '@/store'
import { Provider } from 'react-redux'
import { AccountRoutes } from './Account'
import { MainRoutes } from './Main'
import PrivateRoute from './PrivateRoute'
import { SubmissionRoutes } from './Submission'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [...MainRoutes]
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [...SubmissionRoutes]
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <AccountLayout />
      </PrivateRoute>
    ),
    children: [...AccountRoutes]
  }
])

const AppRouter = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default AppRouter
