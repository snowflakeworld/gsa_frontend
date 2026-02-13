import { forwardRef, Ref, useImperativeHandle, useState } from 'react'

import { Grid } from '@mui/material'

import { NormalTextInput } from '@/components'
import { useDeviceType, useDialogs } from '@/hooks'
import { addAddress } from '@/services/addressService'
import { AddressRes } from '@/types'
import { handleError } from '@/utils'

export interface AddressEditRef {
  handleSave: () => Promise<AddressRes | undefined>
}

export const AddressEdit = forwardRef((_, ref: Ref<AddressEditRef>) => {
  const { isLargeScreen } = useDeviceType()

  const dialog = useDialogs()

  const [street, setStreet] = useState<string>('')
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [code, setCode] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const handleSave = async () => {
    try {
      if (!street || !state || !city || !country || !code || !phone) {
        await dialog.alert('Please fill in all address fields!')

        return undefined
      }

      const resp = await addAddress({ country, state, city, street, code, phone })

      return resp
    } catch (error) {
      handleError(error)
    }
  }

  useImperativeHandle(ref, () => ({
    handleSave
  }))

  const handleInputChange = (type: string, value: string) => {
    switch (type) {
      case 'street':
        setStreet(value)
        break
      case 'state':
        setState(value)
        break
      case 'city':
        setCity(value)
        break
      case 'country':
        setCountry(value)
        break
      case 'code':
        setCode(value)
        break
      case 'phone':
        setPhone(value)
        break
    }
  }

  return (
    <Grid container spacing={isLargeScreen ? 5 : 0}>
      <Grid size={isLargeScreen ? 6 : 12}>
        <NormalTextInput
          label='Street address'
          placeHolder='Street Address'
          defaultValue={street}
          dataType='street'
          listener={handleInputChange}
        />
        <NormalTextInput
          label='State'
          placeHolder='State'
          defaultValue={state}
          dataType='state'
          listener={handleInputChange}
        />
        <NormalTextInput
          label='Postal Code'
          placeHolder='Postal Code'
          defaultValue={code}
          dataType='code'
          listener={handleInputChange}
        />
      </Grid>
      <Grid size={isLargeScreen ? 6 : 12}>
        <NormalTextInput
          label='Country'
          placeHolder='Country'
          defaultValue={country}
          dataType='country'
          listener={handleInputChange}
        />
        <NormalTextInput
          label='City'
          placeHolder='City'
          defaultValue={city}
          dataType='city'
          listener={handleInputChange}
        />
        <NormalTextInput
          label='Phone'
          placeHolder='Phone number'
          defaultValue={phone}
          dataType='phone'
          listener={handleInputChange}
        />
      </Grid>
    </Grid>
  )
})
