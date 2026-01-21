import { Divider, List, Paper, Stack, Typography } from '@mui/material'

import { SummaryItem } from '@/components/Submission'
import { SUMMARY_STATISTICS } from '@/constants'
import { useDeviceType } from '@/hooks'

export const Checkout = () => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Paper
      sx={{
        width: isLargeScreen ? 400 : '100%',
        maxWidth: isLargeScreen ? 400 : '100%',
        display: 'block',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: 'none',
        padding: 2
      }}
    >
      <Stack gap={1}>
        <Typography variant='h6' flexGrow={1}>
          Checkout Summary
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 0 }}>
          {SUMMARY_STATISTICS.map((item, index) => (
            <SummaryItem key={'summary-' + index} {...item} />
          ))}
        </List>
        <Divider />
        <SummaryItem label='Estimated Total' value='$219.97' size='big' />
      </Stack>
    </Paper>
  )
}
