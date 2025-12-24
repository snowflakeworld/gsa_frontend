import { gsaColors } from '@/theme'
import { Box, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

interface RedChipProps {
  children: ReactNode
}

export const RedChip: FC<RedChipProps> = ({ children }) => (
  <Box
    sx={{
      width: 'fit-content',
      backgroundColor: gsaColors.background.red.alpha,
      py: 1,
      px: 1.5,
      color: gsaColors.text.red,
      gap: 1.25,
      borderRadius: 0.5
    }}
  >
    <Typography variant='h5'>{children}</Typography>
  </Box>
)
