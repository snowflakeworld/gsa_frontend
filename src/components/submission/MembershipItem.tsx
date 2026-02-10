import { type FC } from 'react'

import { Button, Card, List, Stack, Typography, useColorScheme } from '@mui/material'

import { useCreateSubmissionSelectContext, useDeviceType } from '@/hooks'
import { gsaColors } from '@/theme'
import { MembershipBonusItem } from './MembershipBonusItem'

interface MembershipItemPros {
  index: number
  type: string
  policy: string
  items: string[]
  isFree: boolean
}

export const MembershipItem: FC<MembershipItemPros> = ({ index, type, policy, items, isFree }) => {
  const { mode } = useColorScheme()
  const { isLargeScreen } = useDeviceType()
  const { membershipIdx, selectMembershipIdx } = useCreateSubmissionSelectContext()

  const isSelected = membershipIdx === index

  const handleSelect = () => {
    selectMembershipIdx(index)
  }

  const leftItemListCount = items.length < 4 ? items.length : Math.floor((items.length + 1) / 2)
  const rightItemListCount = items.length < 4 ? 0 : items.length - leftItemListCount

  return (
    <Card
      sx={{
        borderRadius: 3,
        border: '1px solid',
        borderColor: isSelected ? 'border.red' : 'border.card',
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
              {policy}
            </Typography>
            <Typography
              variant='caption'
              fontSize='0.875rem'
              lineHeight='0.9rem'
              color={isSelected ? 'text.red' : 'text.normal'}
              alignContent='flex-end'
            >
              / year
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={1.5} direction={isLargeScreen ? 'row' : 'column'}>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
            {items
              .filter((_, index) => index < leftItemListCount)
              .map((val, index) => (
                <MembershipBonusItem key={'membership-bonus-' + index} isSelected={isSelected}>
                  {val}
                </MembershipBonusItem>
              ))}
          </List>
          {!!rightItemListCount && (
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, py: 0 }}>
              {items
                .filter((_, index) => index >= leftItemListCount)
                .map((val, index) => (
                  <MembershipBonusItem key={'membership-bonus-' + index} isSelected={isSelected}>
                    {val}
                  </MembershipBonusItem>
                ))}
            </List>
          )}
        </Stack>

        <Button
          variant={isSelected && mode === 'dark' ? 'outlined' : 'contained'}
          sx={{
            height: 40,
            gap: 2,
            px: isLargeScreen ? 2 : 3
          }}
          className={isSelected ? 'button--red button--small' : 'button--small'}
          onClick={handleSelect}
        >
          {isSelected ? 'Selected' : isFree ? 'Your current plan' : 'Select plan'}
        </Button>
      </Stack>
    </Card>
  )
}
