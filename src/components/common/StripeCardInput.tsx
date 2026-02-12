import { useColorScheme } from '@mui/material'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementOptions } from '@stripe/stripe-js'

import { gsaIconColors } from '@/theme'

export const StripeCardInput = () => {
  const { mode } = useColorScheme()

  const cardStyle: StripeCardElementOptions = {
    style: {
      base: {
        color: '#15b52e',
        fontSize: '1rem',
        iconColor: mode === 'dark' ? gsaIconColors.starModeLight : gsaIconColors.starModeDark
      }
    }
  }

  return <CardElement className='stripe-input' options={cardStyle} />
}
