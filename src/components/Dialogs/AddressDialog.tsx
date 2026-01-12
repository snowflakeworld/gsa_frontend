import { COUNTRIES, STATES } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Close } from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  useColorScheme
} from '@mui/material'
import { FC, useState } from 'react'

export interface AddressData {
  country: string
  address1: string
  address2: string
  city: string
  state: string
  zip: string
  phone: string
  isDefault: boolean
}

export interface DialogProps {
  open: boolean
  onClose: () => void
  onSave?: (_: AddressData) => void
}

const defaultAddress: AddressData = {
  country: 'United States',
  address1: '',
  address2: '',
  city: '',
  state: 'California',
  zip: '',
  phone: '',
  isDefault: false
}

export const AddressDialog: FC<DialogProps> = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState<AddressData>(defaultAddress)
  const { mode } = useColorScheme()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  const handleChange =
    (key: keyof AddressData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
      const value = event?.target?.value
      setForm(prev => ({ ...prev, [key]: value }))
    }

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, isDefault: event.target.checked }))
  }

  const handleSave = () => {
    // Basic validation example
    if (!form.address1 || !form.city || !form.zip) {
      alert('Please fill Address, City and Zip code.')

      return
    }
    if (onSave) onSave(form)
    onClose()
    setForm(defaultAddress)
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
          p: !isScreenSmall ? 4 : 3,
          bgcolor: 'background.dialog'
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 0,
            fontSize: 18,
            fontWeight: 600,
            mb: !isScreenSmall ? 3 : 2
          }}
        >
          Add new address
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
            {/* Country: use TextField with select so label notch isn't cut */}
            <TextField
              select
              label='Country'
              value={form.country}
              onChange={handleChange('country')}
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

            <TextField
              variant='filled'
              label='Address or po box'
              value={form.address1}
              onChange={handleChange('address1')}
              size='small'
              fullWidth
              slotProps={{ input: { disableUnderline: true } }}
            />

            <TextField
              variant='filled'
              label='Suit, Apartment etc'
              value={form.address2}
              onChange={handleChange('address2')}
              size='small'
              fullWidth
              slotProps={{ input: { disableUnderline: true } }}
            />

            <TextField
              variant='filled'
              label='City'
              value={form.city}
              onChange={handleChange('city')}
              size='small'
              fullWidth
              slotProps={{ input: { disableUnderline: true } }}
            />

            <TextField
              select
              label='States/Province'
              value={form.state}
              onChange={handleChange('state')}
              size='small'
              fullWidth
              variant='filled'
              slotProps={{ input: { disableUnderline: true } }}
            >
              {STATES.map(c => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              variant='filled'
              label='Zip code'
              value={form.zip}
              onChange={handleChange('zip')}
              size='small'
              fullWidth
              slotProps={{ input: { disableUnderline: true } }}
            />

            <TextField
              variant='filled'
              label='Phone number'
              value={form.phone}
              onChange={handleChange('phone')}
              size='small'
              fullWidth
              slotProps={{ input: { disableUnderline: true } }}
            />

            <FormControlLabel
              control={<Checkbox checked={form.isDefault} onChange={handleCheckbox} />}
              label='Make it my default address'
              sx={{ alignItems: 'center', mt: 0.5 }}
            />

            <Box pt={1} pb={1}>
              <Button
                variant='contained'
                fullWidth
                sx={{ gap: 2, px: 3 }}
                className='button--red button--small'
                onClick={handleSave}
              >
                Save address
              </Button>
            </Box>
          </Stack>
        </DialogContent>
      </Paper>
    </Dialog>
  )
}
