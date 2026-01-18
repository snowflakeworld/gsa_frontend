import { StyledImage } from '@/components'
import { StepButtonGroup } from '@/components/Submission'
import { COUNTRIES } from '@/constants'
import { useDeviceType } from '@/hooks'
import { ActiveStepContext } from '@/pages'
import { Box, Checkbox, FormControlLabel, MenuItem, Stack, TextField, Typography } from '@mui/material'
import parse from 'html-react-parser'
import { useContext } from 'react'

export const Billing = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!
  const { isLargeScreen } = useDeviceType()

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Stack gap={3}>
      <Stack gap={0.5}>
        <Typography variant='h5'>Payment Method</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='0.9rem'>
          {parse(
            'To pay with a credit or debit card, fill in your credit card number, expiration, CVC, country and zip/postal code. When complete, a PAY NOW button will appear beneath your payment method.<br/><br/>Alternatively, you may checkout with a 3rd party Wallet like Apple Pay or Google Pay, if given the option.<br/><br/>If you want to retain your credit or debit card information so future checkouts are easier, click the Save Card Details checkbox under the Country dropdown.'
          )}
        </Typography>
      </Stack>

      <Stack gap={1}>
        <Box position='relative'>
          <TextField
            variant='filled'
            label='Card number'
            size='small'
            fullWidth
            slotProps={{ input: { disableUnderline: true } }}
          />
          <StyledImage
            src={`/assets/images/payments/paymodes.png`}
            width={isLargeScreen ? 'auto' : '4.5rem'}
            height={isLargeScreen ? '1.875rem' : 'auto'}
            alt='Method Image'
            loading='lazy'
            margin='0'
            extra={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}
          />
        </Box>
        <Stack flexDirection='row' gap={1}>
          <TextField
            variant='filled'
            label='Expiry'
            size='small'
            slotProps={{ input: { disableUnderline: true } }}
            sx={{ flex: 1 }}
          />
          <TextField
            type='password'
            variant='filled'
            label='Security Code'
            size='small'
            fullWidth
            slotProps={{ input: { disableUnderline: true } }}
            sx={{ flex: 1 }}
          />
        </Stack>
        <TextField
          select
          label='Country'
          size='small'
          fullWidth
          variant='filled'
          slotProps={{ input: { disableUnderline: true } }}
        >
          {COUNTRIES.map(c => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
        <FormControlLabel
          control={<Checkbox size='medium' />}
          label='Save payment method'
          className='label--medium'
          sx={{
            alignItems: 'center',
            '& .MuiFormControlLabel-label': {
              fontSize: '0.75rem'
            }
          }}
        />
      </Stack>
      <StepButtonGroup onBack={handlePrev} onNext={handleNext} nextTitle='Review Order' />
    </Stack>
  )
}
