import { type FC } from 'react'

import { Card, InputBase, Paper, Stack, Typography } from '@mui/material'

import { BpRadio } from '@/components/Common'
import { useDeviceType, useShippingPaymentSelectContext } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'

interface PaymentItemProps {
  index: number
  name: string
  allowInput?: boolean
}

export const PaymentItem: FC<PaymentItemProps> = ({ index, name, allowInput }) => {
  const { shippingPaymentIdx, selectIdx } = useShippingPaymentSelectContext()
  const { isLargeScreen } = useDeviceType()

  const isSelected = shippingPaymentIdx === index

  const handleSelect = () => {
    selectIdx(index)
  }

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: isSelected ? 'border.red' : 'border.card',
        backgroundColor: isSelected ? gsaColors.background.red.alpha : 'background.card',
        boxShadow: gsaShadows.xs,
        gap: 1,
        paddingLeft: 2,
        paddingRight: 1,
        py: 1.5,
        '&:hover': {
          backgroundColor: isSelected ? gsaColors.background.red.alphaMedium : 'background.overlay'
        },
        cursor: 'pointer',
        flex: 1
      }}
      onClick={handleSelect}
    >
      <Stack direction='row' alignItems='center' gap={2}>
        <Stack
          direction={isLargeScreen ? 'row' : 'column'}
          flex={1}
          gap={isLargeScreen ? 2 : 1}
          alignItems={isLargeScreen ? 'center' : 'flex-start'}
        >
          <Typography
            variant='h6'
            fontSize='0.875rem'
            lineHeight='1.25rem'
            {...(isSelected ? { color: 'text.red' } : {})}
            flexGrow={1}
          >
            {name}
          </Typography>
          {allowInput ? (
            <Paper
              component='form'
              sx={{
                width: '12.5rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: 1,
                border: '1px solid',
                borderColor: isSelected ? 'border.red' : 'divider'
              }}
            >
              <InputBase
                sx={{ width: '100%', padding: 1, fontSize: '0.75rem' }}
                placeholder='Input account number'
                inputProps={{ 'aria-label': 'Input account number' }}
              />
            </Paper>
          ) : (
            <></>
          )}
        </Stack>

        <BpRadio checked={isSelected ? true : false} onClick={handleSelect} />
      </Stack>
    </Card>
  )
}
