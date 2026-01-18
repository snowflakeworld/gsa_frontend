import { Button, Divider, InputBase, List, Paper, Stack, Typography, useColorScheme } from '@mui/material'

import { NoDataView } from '@/components'
import { SummaryDescription, SummaryItem } from '@/components/Submission'
import { SUMMARY_BASE_INFO, SUMMARY_SHIPPING_BILLING, SUMMARY_STATISTICS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { gsaColors } from '@/theme'

const inputStyle = {
  dark: {
    color: gsaColors.text.primary.dark
  },
  light: {
    color: gsaColors.text.primary.light
  }
}

export const Summary = () => {
  const { mode } = useColorScheme()
  const { isLargeScreen } = useDeviceType()

  return (
    <Stack gap={2}>
      <Paper
        sx={{
          width: isLargeScreen ? 400 : '100%',
          maxWidth: isLargeScreen ? 400 : '100%',
          display: 'block',
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.cardItem',
          boxShadow: 'none',
          padding: isLargeScreen ? 3 : 2
        }}
      >
        <Stack gap={isLargeScreen ? 2 : 1}>
          <Typography variant='h5'>Summary</Typography>
          <NoDataView type='order'>Order summary will shown here</NoDataView>

          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
            {SUMMARY_BASE_INFO.map((item, index) => (
              <SummaryItem key={index} {...item} />
            ))}
          </List>

          <Divider />

          <Stack gap={1.5}>
            <Typography variant='h6'>Shipping & Billing</Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
              {SUMMARY_SHIPPING_BILLING.map((item, index) => (
                <SummaryItem key={index} {...item} />
              ))}
            </List>
          </Stack>

          <Divider />

          <Stack direction='row' gap={1} alignItems='center'>
            <InputBase
              id='input-promotion-code'
              placeholder='Add Promotion Code'
              sx={{
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.secondary',
                px: 2,
                py: 0.75,
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: '1.25rem',
                flexGrow: 1
              }}
              style={mode === 'dark' ? inputStyle.dark : inputStyle.light}
            />

            <Button
              variant='contained'
              sx={{ gap: 1, px: 3, borderColor: 'transparent !important', width: 'fit-content', textWrap: 'nowrap' }}
              className={mode === 'dark' ? 'button--blacklight' : 'button--black'}
            >
              Apply
            </Button>
          </Stack>

          <Divider />

          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
            {SUMMARY_STATISTICS.map((item, index) => (
              <SummaryItem key={index} {...item} />
            ))}
          </List>

          <Divider />

          <SummaryItem label='Estimated Total' value='$219.97' size='big' />
        </Stack>
      </Paper>
      <SummaryDescription />
    </Stack>
  )
}
