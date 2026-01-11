import { HorizontalItem } from '@/components/Submission/ServiceLevelItem'
import { VerticalItem } from '@/components/Submission/ServiceLevelItem/VerticalItem'
import { SERVICE_LEVELS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Card, List, Stack, Typography } from '@mui/material'

export const SelectLevel = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack gap={3}>
      <Stack gap={0.5}>
        <Typography variant='h5'>Select Service Level</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          Select the service you want to take
        </Typography>
      </Stack>

      <Stack gap={1}>
        {!isScreenSmall ? (
          <Card
            sx={{
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'table.header.background',
              boxShadow: 'none',
              px: 1.5,
              py: 0.5
            }}
          >
            <Stack gap={1} sx={{ paddingLeft: 3, paddingRight: 1 }}>
              <Stack flexDirection='row'>
                <Typography variant='caption' fontSize='0.75rem' lineHeight='100%' color='text.normal' flex={278}>
                  Service Level
                </Typography>
                <Typography
                  variant='caption'
                  fontSize='0.75rem'
                  lineHeight='100%'
                  color='text.normal'
                  flex={100}
                  textAlign='center'
                >
                  Min Cards/Sub
                </Typography>
                <Typography
                  variant='caption'
                  fontSize='0.75rem'
                  lineHeight='100%'
                  color='text.normal'
                  flex={100}
                  textAlign='center'
                >
                  Turnaround
                </Typography>
                <Typography
                  variant='caption'
                  fontSize='0.75rem'
                  lineHeight='100%'
                  color='text.normal'
                  flex={60}
                  textAlign='center'
                >
                  Price
                </Typography>
              </Stack>
            </Stack>
          </Card>
        ) : (
          <></>
        )}
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 0 }}>
          {SERVICE_LEVELS.map((item, index) =>
            !isScreenSmall ? (
              <HorizontalItem key={item.title} index={index} {...item} />
            ) : (
              <VerticalItem key={index} index={index} {...item} />
            )
          )}
        </List>
      </Stack>
    </Stack>
  )
}
