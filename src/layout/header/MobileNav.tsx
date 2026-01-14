import { Divider } from '@mui/material'
import { memo } from 'react'
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
