import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface SummaryItemProps {
  label: string
  value: string
}

export const SummaryItem: FC<SummaryItemProps> = ({ label, value }) => {
  return (
    <Stack flexDirection='row' gap={0.5} justifyContent='space-between' alignItems='center'>
      <Typography variant='caption' fontWeight={600} fontSize='0.875rem' lineHeight='1.25rem' color='text.normal'>
        {label}
      </Typography>
      <Typography variant='caption' fontWeight={600} fontSize='0.875rem' lineHeight='1.25rem' color='text.primary'>
        {value}
      </Typography>
    </Stack>
  )
}
