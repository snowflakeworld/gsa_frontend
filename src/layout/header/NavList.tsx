import { Link, Stack } from '@mui/material'

import { HEADER_NAV_LINKS } from '@/constants'
import { useDeviceType } from '@/hooks/useDeviceType'

export const NavList = ({ ...props }) => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack
      overflow='auto'
      direction={!isScreenSmall ? 'row' : 'column'}
      gap={3.5}
      ml={{ xs: 3, sm: 0 }}
      mt={!isScreenSmall ? 0 : 3}
      mb={!isScreenSmall ? 0 : 3}
      {...props}
    >
      {HEADER_NAV_LINKS.map(nav => (
        <Link key={nav.title} href={nav.path} textAlign='center'>
          {nav.title}
        </Link>
      ))}
    </Stack>
  )
}
