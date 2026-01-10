import { useDeviceType } from '@/hooks'
import { Stack, Typography, useColorScheme } from '@mui/material'
import { FC, ReactNode } from 'react'
import { StyledImage } from './StyledImage'

type EmptyType = 'item' | 'progress' | 'order'

interface EmptyViewProps {
  type: EmptyType
  children: ReactNode
}

export const EmptyView: FC<EmptyViewProps> = ({ type, children }) => {
  const { mode } = useColorScheme()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  let imgName = undefined

  switch (type) {
    case 'item':
      imgName = mode === 'dark' ? 'empty-item-dark.svg' : 'empty-item-light.svg'
      break
    case 'progress':
      imgName = mode === 'dark' ? 'empty-progress-dark.svg' : 'empty-progress-light.svg'
      break
    case 'order':
      imgName = mode === 'dark' ? 'empty-order-dark.svg' : 'empty-order-light.svg'
      break
  }

  return (
    <Stack sx={{ py: 3 }} gap={2} alignItems='center' justifyContent='center'>
      <StyledImage
        src={`/assets/images/${imgName}`}
        width='auto'
        height={!isScreenSmall ? '5rem' : '3.125rem'}
        alt='Empty Image'
        loading='lazy'
      />
      <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
        {children}
      </Typography>
    </Stack>
  )
}
