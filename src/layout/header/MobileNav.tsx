import { Box, Divider } from '@mui/material'
import { memo } from 'react'
import { NavList } from './NavList'

const MobileNavComponent = () => {
  return (
    <Box>
      <Divider />
      <NavList />
    </Box>
  )
}

export const MobileNav = memo(MobileNavComponent)
