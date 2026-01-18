import { type FC, memo } from 'react'

import { Link } from '@mui/material'

import { StyledImage } from '@/components'
import { useDeviceType } from '@/hooks'

interface LogoProps {
  place: string
}

const LogoComponent: FC<LogoProps> = ({ place }) => {
  const { isSmallScreen } = useDeviceType()

  return (
    <Link
      href='/'
      aria-label='Home-page'
      textAlign={place === 'footer' && isSmallScreen ? 'center' : 'left'}
      display='flex'
      alignItems='center'
      justifyContent={place === 'footer' && isSmallScreen ? 'center' : 'left'}
    >
      <StyledImage
        src='/assets/images/logo.svg'
        height={place === 'header' ? 24 : isSmallScreen || place !== 'footer' ? 40 : 50}
        alt='Logo Image'
        loading='lazy'
        margin='0'
      />
    </Link>
  )
}

export const Logo = memo(LogoComponent)
