import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from '@/layout'
import { store } from '@/store'
import { Provider } from 'react-redux'
import { MainRoutes } from './Main'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [...MainRoutes]
  }

  // {
  //   path: '/',
  //   element: <DashboardLayout />,
  //   children: [{ path: '/', element: <LandingPage /> }]
  // }
])

const AppRouter = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default AppRouter
