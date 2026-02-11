import { type FC } from 'react'

import { Button, Card, List, Stack, Typography } from '@mui/material'

import { BonusItem, RedChip } from '@/components/Common'
import { useDeviceType } from '@/hooks'

interface ServiceItemPros {
  index: number
  title: string
  comment: string
  price: string
  minCards: string
  turnaround: string
  popular?: boolean
  callback: (_: number) => void
}

export const ServiceItem: FC<ServiceItemPros> = ({
  index,
  title,
  comment,
  price,
  minCards,
  turnaround,
  callback,
  popular = false
}) => {
  const { isLargeScreen } = useDeviceType()

  const handleSelect = () => {
    callback(index)
  }

  return (
    <Card
      sx={{
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.card',
        boxShadow: 'none',
        p: 4,
        '&:hover': {
          borderColor: 'border.red'
        },
        transition: 'border-color 0.3s ease'
      }}
    >
      <Stack gap={4}>
        <Stack direction='row' alignItems='flex-end' justifyContent='space-between'>
          <Stack direction='row' alignItems='center' spacing={0.5}>
            <Typography variant='h5' fontSize='1.5rem' lineHeight='2rem'>
              {title}
            </Typography>
            {popular && <RedChip size='small'>Popular</RedChip>}
          </Stack>
          <Stack direction='row'>
            <Typography variant='h6' alignContent='flex-start'>
              $
            </Typography>
            <Typography variant='h5' fontSize='2rem' lineHeight='2rem'>
              {price.substring(1)}
            </Typography>
          </Stack>
        </Stack>

        <Typography
          variant='caption'
          color='text.normal'
          fontWeight={400}
          fontSize='0.875rem'
          lineHeight='1rem'
          minHeight='3rem'
        >
          {comment}
        </Typography>

        <Button
          variant='contained'
          sx={{
            height: 40,
            gap: 2,
            px: isLargeScreen ? 2 : 3
          }}
          className='button--red button--small'
          onClick={handleSelect}
        >
          Submit now
        </Button>

        <Stack gap={1.5}>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
            {[minCards, turnaround].map((val, index) => (
              <BonusItem key={'service-bonus-' + index} isSelected={false} isNormalColor={true}>
                {val}
              </BonusItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Card>
  )
}
