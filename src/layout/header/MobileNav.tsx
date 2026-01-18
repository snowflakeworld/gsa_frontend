import { memo } from 'react'

import { Divider } from '@mui/material'

import { NavList } from './NavList'

const MobileNavComponent = () => {
  return (
    <>
      <Divider />
      <NavList />
    </>
  )
}

export const MobileNav = memo(MobileNavComponent)
