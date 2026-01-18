import { InfoOutlineRounded } from '@mui/icons-material'
import { Paper, Stack, Typography } from '@mui/material'

import { useDeviceType } from '@/hooks'
import { gsaColors } from '@/theme'

export const SummaryDescription = () => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Paper
      sx={{
        width: isLargeScreen ? 400 : '100%',
        maxWidth: isLargeScreen ? 400 : '100%',
        display: 'block',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'table.header.background',
        boxShadow: 'none',
        padding: 1
      }}
    >
      <Stack direction='row' padding={1} gap={1}>
        <InfoOutlineRounded fontSize='small' sx={{ color: 'text.normal' }} />
        <Stack gap={0.5}>
          <Typography variant='h6' fontSize='0.875rem' lineHeight='1.25rem' color='text.normal'>
            What's the Total Declared Value?
          </Typography>
          <Typography variant='caption' fontWeight={400} fontSize='0.75rem' lineHeight='1rem' color='text.normal'>
            The maximum amount per item you may claim as compensation in the event of loss or damage. Actual
            compensation depends on the nature and extent of loss or damage and market value, in accordance with the PSA
            Terms and Conditions.
          </Typography>
          <Typography
            variant='caption'
            fontWeight={600}
            fontSize='0.875rem'
            lineHeight='1.5rem'
            sx={{
              color: gsaColors.text.red,
              cursor: 'pointer',
              '&:hover': { color: gsaColors.text.redAlpha }
            }}
          >
            Learn more
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
