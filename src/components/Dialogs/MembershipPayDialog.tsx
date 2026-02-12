import { type FC } from 'react'

import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  useColorScheme
} from '@mui/material'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import { useDeviceType } from '@/hooks'
import { MembershipType } from '@/types'
import { showToast } from '@/utils'
import { StripeCardElement } from '@stripe/stripe-js'
import { StripeCardInput } from '../Common/StripeCardInput'

interface DialogProps {
  type: MembershipType | null
  open: boolean
  onClose: () => void
  onSave: (_: string) => void
}

export const MembershipPayDialog: FC<DialogProps> = ({ type, open, onClose, onSave }) => {
  const { mode } = useColorScheme()
  const { isLargeScreen } = useDeviceType()
  const stripe = useStripe()
  const elements = useElements()

  const handleSave = async () => {
    if (!stripe || !elements) return

    const card = elements.getElement(CardElement) as StripeCardElement

    const { token, error } = await stripe.createToken(card)

    if (error) {
      if (error.message) showToast(error.message, 'error')

      return
    }

    if (!token) return

    console.log('Stripe token:', token.id)

    onSave(token.id)
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
      fullWidth
      slotProps={{
        paper: {
          elevation: 8,
          sx: {
            borderRadius: 3,
            overflow: 'visible',
            p: 0
          }
        },
        backdrop: {
          sx: {
            backgroundColor: mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          }
        }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          borderRadius: 3,
          p: isLargeScreen ? 4 : 3,
          bgcolor: 'background.dialog'
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 0,
            fontSize: 18,
            fontWeight: 600,
            mb: isLargeScreen ? 3 : 2
          }}
        >
          {`Pay for ${type}`}
        </DialogTitle>

        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
            color: 'grey.600',
            backgroundColor: 'transparent',
            '&:hover': { backgroundColor: 'transparent' }
          }}
          size='small'
        >
          <Close />
        </IconButton>
        <DialogContent sx={{ p: 0 }}>
          <Stack spacing={1}>
            <StripeCardInput />
            <Box pt={1} pb={1}>
              <Button
                variant='contained'
                fullWidth
                sx={{ gap: 2, px: 3 }}
                className='button--red button--small'
                onClick={handleSave}
              >
                Pay
              </Button>
            </Box>
          </Stack>
        </DialogContent>
      </Paper>
    </Dialog>
  )
}
