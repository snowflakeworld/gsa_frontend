import { type FC } from 'react'

import { Circle } from '@mui/icons-material'
import { Card, Stack, Typography } from '@mui/material'

import { BpRadio } from '@/components/Common'
import { useCreateSubmissionSelectContext, useDeviceType } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'

interface AddressItemProps {
  index: number
  address: string
  city: string
  contact: string
}

export const AddressItem: FC<AddressItemProps> = ({ index, address, city, contact }) => {
  const { shippingAddressIdx, selectAddressIdx } = useCreateSubmissionSelectContext()
  const { isLargeScreen } = useDeviceType()

  const isSelected = shippingAddressIdx === index

  const handleSelect = () => {
    selectAddressIdx(index)
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
        pl: 1,
        pr: 2,
        py: 1.5,
        '&:hover': {
          backgroundColor: isSelected ? gsaColors.background.red.alphaMedium : 'background.overlay'
        },
        cursor: 'pointer'
      }}
      onClick={handleSelect}
    >
      <Stack direction='row' alignItems='center' gap={1}>
        <Stack gap={0.25} flexGrow={1}>
          <Typography variant='h6' fontSize='0.875rem' lineHeight='1.25rem' {...(isSelected && { color: 'text.red' })}>
            {address}
          </Typography>
          <Stack direction={isLargeScreen ? 'row' : 'column'} gap={1} alignItems='center'>
            <Typography
              variant='caption'
              fontWeight={400}
              fontSize='0.75rem'
              lineHeight='100%'
              color={isSelected ? 'text.red' : 'text.normal'}
            >
              {city}
            </Typography>
            <Stack direction='row' gap={1} alignItems={isLargeScreen ? 'center' : ''}>
              <Circle
                sx={{
                  ml: isLargeScreen ? 0 : 1,
                  fontSize: '0.3rem',
                  color: isSelected ? 'text.red' : 'text.normal'
                }}
              />
              <Typography
                variant='caption'
                fontWeight={400}
                fontSize='0.75rem'
                lineHeight='100%'
                color={isSelected ? 'text.red' : 'text.normal'}
              >
                {contact}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <BpRadio checked={isSelected} onClick={handleSelect} />
      </Stack>
    </Card>
  )
}
