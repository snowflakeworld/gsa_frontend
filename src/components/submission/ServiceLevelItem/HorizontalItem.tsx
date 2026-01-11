import { useServiceLevelSelectContext } from '@/hooks/useServiceLevelSelect'
import { gsaColors, gsaShadows } from '@/theme'
import { Card, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { BpRadio } from '../../Common'

interface ServiceLevelItemPros {
  index: number
  title: string
  comment: string
  minCards: string
  turnaround: string
  price: string
}

export const HorizontalItem: FC<ServiceLevelItemPros> = ({ index, title, comment, minCards, turnaround, price }) => {
  const { serviceLevelIdx, selectIdx } = useServiceLevelSelectContext()

  const isSelected = serviceLevelIdx === index

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
        gap: 1,
        paddingLeft: 1,
        paddingRight: 2,
        py: 1.5,
        '&:hover': {
          backgroundColor: isSelected ? gsaColors.background.red.alphaMedium : 'background.overlay'
        },
        cursor: 'pointer'
      }}
      onClick={handleSelect}
    >
      <Stack flexDirection='row' alignItems='center' gap={1}>
        <BpRadio checked={index === serviceLevelIdx ? true : false} onClick={handleSelect} />
        <Stack gap={0.25} flex={258}>
          <Typography
            variant='h6'
            fontSize='0.875rem'
            lineHeight='1.25rem'
            {...(isSelected ? { color: 'text.red' } : {})}
          >
            {title}
          </Typography>
          <Typography
            variant='caption'
            fontWeight={400}
            fontSize='0.75rem'
            lineHeight='0.9rem'
            color={isSelected ? 'text.red' : 'text.normal'}
          >
            {comment}
          </Typography>
        </Stack>
        <Typography
          variant='h6'
          fontSize='0.875rem'
          lineHeight='1.25rem'
          {...(isSelected ? { color: 'text.red' } : {})}
          flex={100}
          textAlign='center'
        >
          {minCards}
        </Typography>
        <Typography
          variant='h6'
          fontSize='0.875rem'
          lineHeight='1.25rem'
          {...(isSelected ? { color: 'text.red' } : {})}
          flex={100}
          textAlign='center'
        >
          {turnaround}
        </Typography>
        <Typography
          variant='h6'
          fontSize='0.875rem'
          lineHeight='1.25rem'
          {...(isSelected ? { color: 'text.red' } : {})}
          flex={60}
          textAlign='center'
        >
          {price}
        </Typography>
      </Stack>
    </Card>
  )
}
