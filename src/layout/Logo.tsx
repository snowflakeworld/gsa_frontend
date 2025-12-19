import { FC, memo } from 'react'

import { Link } from '@mui/material'

import { StyledImage } from '@/components'
import { useDeviceType } from '@/hooks/useDeviceType'
import { LogoProps } from '@/types'

const LogoComponent: FC<LogoProps> = ({ place }) => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Link href='/' aria-label='Home-page' textAlign={place === 'footer' && isScreenSmall ? 'center' : 'initial'}>
      <StyledImage
        src='/assets/images/logo.svg'
        height={place === 'header' ? 20 : isScreenSmall ? 40 : 50}
        alt='Logo Image'
      />
    </Link>
  )
}

export const Logo = memo(LogoComponent)
