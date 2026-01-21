import { type FC, ReactNode } from 'react'

import { Paper, Stack, Typography, useColorScheme } from '@mui/material'

import { useDeviceType } from '@/hooks'
import { StyledImage } from './StyledImage'

type NoDataType = 'item' | 'progress' | 'order'
type NoDataSize = 'small' | 'medium' | 'large'

interface NoDataPaperProps {
  type: NoDataType
  size?: NoDataSize
  children: ReactNode
}

export const NoDataPaper: FC<NoDataPaperProps> = ({ type, size = 'medium', children }) => {
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

  return (
    <Paper
      variant='outlined'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: isLargeScreen ? '31.25rem' : '13.65rem',
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: 'border.paper',
        boxShadow: 'none',
        p: 3
      }}
    >
      <Stack m='auto' gap={3} justifyContent='center' alignItems='center'>
        <StyledImage
          src={`/assets/images/${imgName}`}
          width='auto'
          height={isLargeScreen ? '5rem' : '3.125rem'}
          alt='Empty Image'
          loading='lazy'
        />
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          {children}
        </Typography>
      </Stack>
    </Paper>
  )
}
