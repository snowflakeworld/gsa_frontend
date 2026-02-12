import { type FC } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { STRIPE_PUBLISH_KEY } from './configs'
import AppRouter from './routes'

const App: FC = () => {
  const stripe = loadStripe(STRIPE_PUBLISH_KEY)

  return (
    <Elements stripe={stripe}>
      <AppRouter />
    </Elements>
  )
}

export default App
