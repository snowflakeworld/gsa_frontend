import { CircularProgress } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Suspense } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default Layout
