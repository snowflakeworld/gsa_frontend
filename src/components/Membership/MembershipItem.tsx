import { type FC } from 'react'

import { Button, Card, List, Stack, Typography } from '@mui/material'

import { useDeviceType } from '@/hooks'
import { gsaColors } from '@/theme'
import { BonusItem } from '../Common'

interface MembershipItemPros {
  index: number
  type: string
  policy: string
  description: string
  items: string[]
  isFree: boolean
  period?: string
}

export const MembershipItem: FC<MembershipItemPros> = ({
  index,
  type,
  policy,
  description,
  items,
  isFree,
  period = 'year'
}) => {
  const { isLargeScreen } = useDeviceType()

  const isSelected = index === 0

  const handleSelect = () => {}

  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        border: '1px solid',
        borderColor: isSelected ? 'border.red' : 'divider',
        backgroundColor: isSelected ? gsaColors.background.red.alpha : 'background.card',
        boxShadow: 'none',
        p: 4,
        '&:hover': {
          backgroundColor: isSelected ? gsaColors.background.red.alphaMedium : 'background.overlay'
        },
        cursor: 'pointer'
      }}
      onClick={handleSelect}
    >
      <Stack gap={4}>
        <Stack direction='row' alignItems='flex-end' justifyContent='space-between'>
          <Typography variant='h5' fontSize='1.5rem' lineHeight='2rem' {...(isSelected ? { color: 'text.red' } : {})}>
            {type}
          </Typography>
          <Stack direction='row'>
            {!isNaN(Number(policy)) && (
              <Typography variant='h6' {...(isSelected && { color: 'text.red' })} alignContent='flex-start'>
                $
              </Typography>
            )}
            <Typography variant='h5' fontSize='2rem' lineHeight='2rem' {...(isSelected && { color: 'text.red' })}>
              {period === 'year' ? policy : !isNaN(Number(policy)) ? Number(policy) / 10 : policy}
            </Typography>
            <Typography
              variant='caption'
              fontSize='0.875rem'
              lineHeight='0.9rem'
              color={isSelected ? 'text.red' : 'text.normal'}
              alignContent='flex-end'
            >
              {`/ ${period}`}
            </Typography>
          </Stack>
        </Stack>

        <Typography
          variant='caption'
          color={isSelected ? 'text.red' : 'text.normal'}
          fontWeight={400}
          fontSize='0.875rem'
          lineHeight='1rem'
          minHeight='2rem'
        >
          {description}
        </Typography>

        <Button
          variant='contained'
          sx={{
            height: 40,
            gap: 2,
            px: isLargeScreen ? 2 : 3
          }}
          className={isSelected ? 'button--red-medium button--small' : 'button--red button--small'}
          onClick={handleSelect}
        >
          {isSelected ? 'Your current plan' : isFree ? 'Select' : 'Upgrade'}
        </Button>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
          {items.map((val, index) => (
            <BonusItem key={'membership-bonus-' + index} isSelected={isSelected} isNormalColor={true}>
              {val}
            </BonusItem>
          ))}
        </List>
      </Stack>
    </Card>
  )
}
