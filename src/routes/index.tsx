import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'

import { AccountLayout, MainLayout } from '@/layout'
import { DashboardLayout } from '@/layout/Content/Dashboard'
import { store } from '@/store'
import PrivateRoute from './PrivateRoute'

import { ThemedToastContainer } from '@/components/Common/ThemeToastContainer'
import { AccountRoutes } from './Account'
import { MainRoutes } from './Main'
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
      <ThemedToastContainer />
    </Provider>
  )
}

export default AppRouter
