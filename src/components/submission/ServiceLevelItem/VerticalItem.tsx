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

export const VerticalItem: FC<ServiceLevelItemPros> = ({ index, title, comment, minCards, turnaround, price }) => {
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
        <Stack gap={1.5}>
          <Stack flexDirection='row' gap={1}>
            <Typography
              minWidth='4.5rem'
              variant='caption'
              fontWeight={500}
              fontSize='0.75rem'
              lineHeight='1.25rem'
              color={isSelected ? 'text.red' : 'text.normal'}
            >
              ServiceLevel
            </Typography>
            <Typography
              variant='h6'
              fontSize='0.75rem'
              lineHeight='1.25rem'
              {...(isSelected ? { color: 'text.red' } : {})}
            >
              {title}
            </Typography>
          </Stack>
          <Stack flexDirection='row' gap={1}>
            <Typography
              minWidth='4.5rem'
              variant='caption'
              fontWeight={500}
              fontSize='0.75rem'
              lineHeight='1.25rem'
              color={isSelected ? 'text.red' : 'text.normal'}
            >
              Min card
            </Typography>
            <Typography
              variant='h6'
              fontSize='0.75rem'
              lineHeight='1.25rem'
              {...(isSelected ? { color: 'text.red' } : {})}
            >
              {minCards}
            </Typography>
          </Stack>
          <Stack flexDirection='row' gap={1}>
            <Typography
              minWidth='4.5rem'
              variant='caption'
              fontWeight={500}
              fontSize='0.75rem'
              lineHeight='1.25rem'
              color={isSelected ? 'text.red' : 'text.normal'}
            >
              Turnaround
            </Typography>
            <Typography
              variant='h6'
              fontSize='0.75rem'
              lineHeight='1.25rem'
              {...(isSelected ? { color: 'text.red' } : {})}
            >
              {turnaround}
            </Typography>
          </Stack>
          <Stack flexDirection='row' gap={1}>
            <Typography
              minWidth='4.5rem'
              variant='caption'
              fontWeight={500}
              fontSize='0.75rem'
              lineHeight='1.25rem'
              color={isSelected ? 'text.red' : 'text.normal'}
            >
              Price
            </Typography>
            <Typography
              variant='h6'
              fontSize='0.75rem'
              lineHeight='1.25rem'
              {...(isSelected ? { color: 'text.red' } : {})}
            >
              {price}
            </Typography>
          </Stack>
          <Stack flexDirection='row' gap={1}>
            <Typography
              minWidth='4.5rem'
              variant='caption'
              fontWeight={500}
              fontSize='0.75rem'
              lineHeight='1.25rem'
              color={isSelected ? 'text.red' : 'text.normal'}
              sx={{ textWrap: 'nowrap', flexWrap: 'nowrap' }}
            >
              Ideal for
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
        </Stack>
      </Stack>
    </Card>
  )
}
