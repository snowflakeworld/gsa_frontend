import { useEffect, useState } from 'react'

import { Grid } from '@mui/material'

import { AddressItem } from '@/components/Account'
import { useDeviceType } from '@/hooks'
import { getAddressList } from '@/services/addressService'
import { AddressRes } from '@/types/address'
import { handleError } from '@/utils'

export const AddressList = () => {
  const { isLargeScreen } = useDeviceType()
  const [addressList, setAddressList] = useState<AddressRes[]>([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const res = await getAddressList()
      setAddressList(res)
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <Grid container spacing={isLargeScreen ? 2 : 1}>
      {addressList.map(item => (
        <Grid key={item._id} size={{ xs: 12, md: 6 }}>
          <AddressItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
