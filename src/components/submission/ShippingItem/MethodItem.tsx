import { type FC } from 'react'

import { Card, Stack, Typography } from '@mui/material'

import { BpRadio, StyledImage } from '@/components/Common'
import { useCreateSubmissionSelectContext, useDeviceType } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'

interface MethodItemProps {
  index: number
  icon: string
  name: string
  price: string
}

export const MethodItem: FC<MethodItemProps> = ({ index, icon, name, price }) => {
  const { shippingMethodIdx, selectMethodIdx } = useCreateSubmissionSelectContext()
  const { isLargeScreen } = useDeviceType()

  const isSelected = shippingMethodIdx === index

  const handleSelect = () => {
    selectMethodIdx(index)
  }

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: isSelected ? 'border.red' : 'border.card',
        backgroundColor: isSelected ? gsaColors.background.red.alpha : 'background.card',
        boxShadow: gsaShadows.xs,
        px: 2,
        py: 1.5,
        '&:hover': {
          backgroundColor: isSelected ? gsaColors.background.red.alphaMedium : 'background.overlay'
        },
        cursor: 'pointer',
        flex: 1
      }}
      onClick={handleSelect}
    >
      <Stack gap={2}>
        <Stack direction='row' justifyContent='space-between' alignItems='flex-start'>
          <StyledImage
            src={`/assets/images/${icon}`}
            width='auto'
            height='2rem'
            alt='Method Image'
            loading='lazy'
            margin='none'
          />
          <BpRadio checked={isSelected} onClick={handleSelect} />
        </Stack>
        <Stack direction={isLargeScreen ? 'row' : 'column'} gap={0.5}>
          <Typography
            flexGrow={1}
            variant='h6'
            fontSize='0.875rem'
            lineHeight='1.25rem'
            {...(isSelected && { color: 'text.red' })}
          >
            {name}
          </Typography>
          <Typography
            variant='caption'
            fontWeight={400}
            fontSize='0.875rem'
            lineHeight='1.25rem'
            color={isSelected ? 'text.red' : 'text.normal'}
          >
            {price}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}
