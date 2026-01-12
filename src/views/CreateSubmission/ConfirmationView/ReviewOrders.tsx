import { CustomIcon } from '@/components'
import { ReviewItem } from '@/components/Submission/ReviewItem'
import { REVIEW_ITEMS } from '@/constants'
import { useDeviceType } from '@/hooks'
import { Button, Divider, List, Paper, Stack, Typography, useColorScheme } from '@mui/material'

export const ReviewOrders = () => {
  const { mode } = useColorScheme()
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  const itemCount = REVIEW_ITEMS.length

  return (
    <Paper
      sx={{
        flex: 1,
        display: 'block',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: 'none',
        padding: 2
      }}
    >
      <Stack gap={!isScreenSmall ? 2 : 1}>
        <Stack flexDirection='row' alignItems='center'>
          <Typography variant='h6' flexGrow={1}>
            {`Items (${itemCount})`}
          </Typography>
          <Button variant='contained' className='button--tiny' sx={{ width: '2rem' }}>
            <CustomIcon
              name='edit'
              colorMode='fill'
              width={12}
              height={12}
              viewBoxWidth={10}
              viewBoxHeight={12}
              color={mode === 'dark' ? 'secondary' : 'prime'}
            />
          </Button>
        </Stack>
        <Stack>
          {!isScreenSmall ? (
            <Stack>
              <Stack flexDirection='row' gap={1}>
                <Typography variant='caption' flex={366} fontSize='0.75rem' color='text.normal'>
                  Items
                </Typography>
                <Typography variant='caption' flex={140} fontSize='0.75rem' color='text.normal'>
                  Card Service
                </Typography>
                <Typography variant='caption' flex={62} fontSize='0.75rem' color='text.normal'>
                  Decl. Value
                </Typography>
              </Stack>
              <Divider />
            </Stack>
          ) : (
            <></>
          )}
          <List sx={{ display: 'flex', flexDirection: 'column', py: 0 }}>
            {REVIEW_ITEMS.map((item, index) => (
              <ReviewItem key={index} index={index} {...item} />
            ))}
          </List>
        </Stack>
      </Stack>
    </Paper>
  )
}
