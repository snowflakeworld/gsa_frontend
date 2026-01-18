import { useDeviceType } from '@/hooks'
import { Stack, Typography, useColorScheme } from '@mui/material'
import { FC, ReactNode } from 'react'
import { StyledImage } from './StyledImage'

type NoDataType = 'item' | 'progress' | 'order'
type NoDataSize = 'small' | 'medium' | 'large'

interface NoDataViewProps {
  type: NoDataType
  size?: NoDataSize
  children: ReactNode
}

export const NoDataView: FC<NoDataViewProps> = ({ type, size = 'medium', children }) => {
  const { mode } = useColorScheme()
  const { isLargeScreen } = useDeviceType()

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

  let imgSize = undefined
  switch (size) {
    case 'small':
      imgSize = '3.125rem'
      break
    case 'medium':
      imgSize = '5rem'
      break
    case 'large':
      imgSize = '6.875rem'
      break
  }

  return (
    <Stack sx={{ py: 3 }} gap={2} alignItems='center' justifyContent='center'>
      <StyledImage
        src={`/assets/images/${imgName}`}
        width='auto'
        height={isLargeScreen ? imgSize : '3.125rem'}
        alt='Empty Image'
        loading='lazy'
      />
      <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
        {children}
      </Typography>
    </Stack>
  )
}
