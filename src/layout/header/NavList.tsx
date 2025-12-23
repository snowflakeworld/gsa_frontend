import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link, Stack } from '@mui/material'
import { memo } from 'react'

import { HEADER_NAV_LINKS } from '@/constants'
import { useDeviceType } from '@/hooks/useDeviceType'

const NavListComponent = ({ ...props }) => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack
      overflow='auto'
      direction={!isScreenSmall ? 'row' : 'column'}
      gap={3}
      ml={{ xs: 3, sm: 0 }}
      mt={!isScreenSmall ? 0 : 3}
      mb={!isScreenSmall ? 0 : 3}
      {...props}
    >
      {HEADER_NAV_LINKS.map(nav => (
        <Link
          key={nav.title}
          href={nav.path}
          sx={{ display: 'flex', textAlign: 'center', gap: '2px', alignItems: 'center' }}
        >
          <span>{nav.title}</span>
          {nav.menu && (
            <KeyboardArrowDownIcon className='nav-icon-header' sx={{ width: '1.125rem', height: '1.125rem' }} />
          )}
        </Link>
      ))}
    </Stack>
  )
}

export const NavList = memo(NavListComponent)
