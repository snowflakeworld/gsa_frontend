import { gsaColors } from '@/theme'
import { Stack, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

type RedChipSizeType = 'small' | 'medium'

interface RedChipProps {
  size?: RedChipSizeType
  children: ReactNode
}

export const RedChip: FC<RedChipProps> = ({ size = 'medium', children }) => (
  <Stack
    sx={{
      width: 'fit-content',
      backgroundColor: gsaColors.background.red.alpha,
      py: size === 'medium' ? 1 : 0.5,
      px: size === 'medium' ? 1.5 : 0.75,
      color: gsaColors.text.red,
      gap: 1.25,
      borderRadius: 0.5
    }}
  >
    {size === 'medium' ? (
      <Typography variant='h5'>{children}</Typography>
    ) : (
      <Typography variant='caption' fontSize='0.75rem' lineHeight='100%'>
        {children}
      </Typography>
    )}
  </Stack>
)
