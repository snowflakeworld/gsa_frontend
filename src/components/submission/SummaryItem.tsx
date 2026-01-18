import { type FC } from 'react'

import { Stack, Typography } from '@mui/material'

type SIZE = 'small' | 'medium' | 'big'

interface SummaryItemProps {
  label: string
  value: string
  size?: SIZE
}

export const SummaryItem: FC<SummaryItemProps> = ({ label, value, size = 'medium' }) => {
  let fontSize = '0rem'
  let lineHeight = '0rem'

  switch (size) {
    case 'small':
      fontSize = '0.75rem'
      lineHeight = '1rem'
      break
    case 'medium':
      fontSize = '0.875rem'
      lineHeight = '1.25rem'
      break
    case 'big':
      fontSize = '1rem'
      lineHeight = '1.5rem'
      break
    default:
      break
  }

  return (
    <Stack direction='row' gap={0.5} justifyContent='space-between' alignItems='center'>
      <Typography variant='caption' fontWeight={600} fontSize={fontSize} lineHeight={lineHeight} color='text.normal'>
        {label}
      </Typography>
      <Typography variant='caption' fontWeight={600} fontSize={fontSize} lineHeight={lineHeight} color='text.primary'>
        {value}
      </Typography>
    </Stack>
  )
}
