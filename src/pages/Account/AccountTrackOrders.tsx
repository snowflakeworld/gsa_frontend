import { NormalTextInput } from '@/components'
import { routers } from '@/configs'
import { useDeviceType } from '@/hooks'
import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AccountTrackOrdersPage = () => {
  const [inputNumber, setInputNumber] = useState('')
  const { isMobile, isTablet } = useDeviceType()
  const navigate = useNavigate()

  const isScreenSmall = isMobile || isTablet

  const onViewDetail = (inputNumber: string) => {
    navigate(routers.Account.OrderDetail.replace(':orderId', inputNumber))
  }
  const onInputChange = (val: string) => {
    setInputNumber(val)
  }

  return (
    <Stack gap={!isScreenSmall ? 4 : 2}>
      <Stack gap={!isScreenSmall ? 1.5 : 1}>
        <Typography variant='h4'>Track Orders</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Track your order status
        </Typography>
      </Stack>
      <Stack flexDirection='row' sx={{ maxWidth: !isScreenSmall ? '37.5rem' : '100%' }} gap={1.5} alignItems='flex-end'>
        <NormalTextInput
          label='Tracking or insurance number'
          placeHolder='ex. 123456789'
          type='number'
          listener={onInputChange}
          flex={1}
        />
        <Button
          variant='contained'
          sx={{ gap: 1, width: 'auto', px: 2, mb: 1.5 }}
          className='button--red button--small'
          onClick={() => onViewDetail(inputNumber)}
        >
          Find
        </Button>
      </Stack>
    </Stack>
  )
}
