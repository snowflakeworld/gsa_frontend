import { useDeviceType } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'
import { Card, Stack, Typography } from '@mui/material'
import { FC } from 'react'
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
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: `${gsaShadows.card}`,
        padding: 2
      }}
    >
      <Stack gap={2} flexDirection='row'>
        <Stack
          sx={{
            width: !isScreenSmall ? '6rem' : '4rem',
            height: !isScreenSmall ? '6rem' : '4rem',
            borderRadius: 1.5,
            backgroundColor: gsaColors.background.red.normal
          }}
          alignItems='center'
          justifyContent='center'
        >
          <CustomIcon
            name='submissionGradingStandard'
            color='secondary'
            width={!isScreenSmall ? '2.625rem' : '2rem'}
            height={!isScreenSmall ? '3.625rem' : '2.25rem'}
            viewBoxWidth={18}
            viewBoxHeight={18.5}
          />
        </Stack>
        <Stack flex={1}>
          <Stack gap={1.5} flexDirection='row'>
            <Typography variant='h6' fontSize='1rem' lineHeight='1.25rem'>
              {title}
            </Typography>
            <RedChip size='small'>Free</RedChip>
          </Stack>
          <Stack gap={1.5}>
            <SummaryItem label='Duration' value='2 Month' size='small'/>
            <SummaryItem label='Next Payment' value='9 January 2024' size='small' />
            <SummaryItem label='Plan Start' value='9 November 2024' size='small' />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
