import { useDeviceType } from '@/hooks'
import { Paper, Stack, Typography, useColorScheme } from '@mui/material'
import { FC, ReactNode } from 'react'
import { StyledImage } from './StyledImage'

type EmptyType = 'item' | 'progress' | 'order'

interface EmptyPaperProps {
  type: EmptyType
  children: ReactNode
}

export const EmptyPaper: FC<EmptyPaperProps> = ({ type, children }) => {
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
    <Paper
      variant='outlined'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: !isScreenSmall ? '31.25rem' : '13.65rem',
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: 'border.paper',
        boxShadow: 'none',
        padding: 3
      }}
    >
      <Stack margin='auto' gap={3} justifyContent='center' alignItems='center'>
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
    </Paper>
  )
}
