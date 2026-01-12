import { BpRadio, StyledImage } from '@/components/Common'
import { useDeviceType, useShippingMethodSelectContext } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'
import { Card, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface MethodItemProps {
  index: number
  icon: string
  name: string
  price: string
}

export const MethodItem: FC<MethodItemProps> = ({ index, icon, name, price }) => {
  const { shippingMethodIdx, selectIdx } = useShippingMethodSelectContext()
  const { isMobile, isTablet } = useDeviceType()

  const isSelected = shippingMethodIdx === index
  const isScreenSmall = isMobile || isTablet

  const handleSelect = () => {
    selectIdx(index)
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
        <Stack flexDirection='row' justifyContent='space-between' alignItems='flex-start'>
          <StyledImage
            src={`/assets/images/${icon}`}
            width='auto'
            height='2rem'
            alt='Method Image'
            loading='lazy'
            margin='none'
          />
          <BpRadio checked={isSelected ? true : false} onClick={handleSelect} />
        </Stack>
        <Stack flexDirection={!isScreenSmall ? 'row' : 'column'} gap={0.5}>
          <Typography
            flexGrow={1}
            variant='h6'
            fontSize='0.875rem'
            lineHeight='1.25rem'
            {...(isSelected ? { color: 'text.red' } : {})}
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
