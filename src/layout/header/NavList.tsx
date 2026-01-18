import { memo } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link, Stack } from '@mui/material'

import { HEADER_NAV_LINKS } from '@/constants'
import { useDeviceType } from '@/hooks'

const NavListComponent = ({ ...props }) => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Stack
      overflow='auto'
      direction={isLargeScreen ? 'row' : 'column'}
      gap={3}
      ml={{ xs: 3, sm: 0 }}
      mt={isLargeScreen ? 0 : 3}
      mb={isLargeScreen ? 0 : 3}
      {...props}
    >
      {HEADER_NAV_LINKS.map(nav => (
        <Link
          key={nav.title}
          href={nav.path}
          sx={{ display: 'flex', textAlign: 'center', gap: '2px', alignItems: 'center', justifyContent: 'center' }}
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
