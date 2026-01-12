import { CustomIcon } from '@/components'
import { SummaryItem } from '@/components/Submission'
import { SUMMARY_SHIPPING_BILLING } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Button, List, Paper, Stack, Typography, useColorScheme } from '@mui/material'

export const ShippingBilling = () => {
  const { mode } = useColorScheme()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Paper
      sx={{
        width: !isScreenSmall ? 400 : '100%',
        maxWidth: !isScreenSmall ? 400 : '100%',
        display: 'block',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: 'none',
        padding: 2
      }}
    >
      <Stack gap={1}>
        <Stack flexDirection='row' alignItems='center'>
          <Typography variant='h6' flexGrow={1}>
            Shipping & Billing
          </Typography>
          <Button variant='contained' className='button--tiny' sx={{ width: '2rem' }}>
            <CustomIcon
              name='edit'
              colorMode='fill'
              width={12}
              height={12}
              viewBoxWidth={10}
              viewBoxHeight={12}
              color={mode === 'dark' ? 'secondary' : 'prime'}
            />
          </Button>
        </Stack>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 0 }}>
          {SUMMARY_SHIPPING_BILLING.map((item, index) => (
            <SummaryItem key={index} {...item} />
          ))}
        </List>
      </Stack>
    </Paper>
  )
}
