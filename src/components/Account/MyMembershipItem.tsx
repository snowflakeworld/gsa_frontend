import { type FC } from 'react'

import { Card, Stack, Typography } from '@mui/material'

import { useDeviceType } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'
import { CustomIcon, RedChip } from '../Common'
import { SummaryItem } from '../Submission'

interface MyMembershipItemProps {
  title: string
  status: string
  duration: string
  nextPayment: string
  planStart: string
}

export const MyMembershipItem: FC<MyMembershipItemProps> = ({ title, status, duration, nextPayment, planStart }) => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: `${gsaShadows.card}`,
        p: 2
      }}
    >
      <Stack gap={2} direction='row'>
        <Stack
          sx={{
            width: isLargeScreen ? '6rem' : '4rem',
            height: isLargeScreen ? '6rem' : '4rem',
            borderRadius: 1.5,
            backgroundColor: gsaColors.background.red.normal
          }}
          alignItems='center'
          justifyContent='center'
        >
          <CustomIcon
            name='submissionGradingStandard'
            color='secondary'
            width={isLargeScreen ? '2.625rem' : '2rem'}
            height={isLargeScreen ? '3.625rem' : '2.25rem'}
            viewBoxWidth={14.67}
            viewBoxHeight={20.7}
          />
        </Stack>
        <Stack flex={1} gap={1.5}>
          <Stack gap={1.5} direction='row'>
            <Typography variant='h6' fontSize='1rem' lineHeight='1.25rem'>
              {title}
            </Typography>
            <RedChip size='small'>{status}</RedChip>
          </Stack>
          <Stack gap={1}>
            <SummaryItem label='Duration' value={duration} size='small' />
            <SummaryItem label='Next Payment' value={nextPayment} size='small' />
            <SummaryItem label='Plan Start' value={planStart} size='small' />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
