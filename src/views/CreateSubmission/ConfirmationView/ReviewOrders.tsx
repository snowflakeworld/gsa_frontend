import { type FC } from 'react'

import { Button, Divider, List, Paper, Stack, Typography, useColorScheme } from '@mui/material'

import { CustomIcon } from '@/components'
import { ReviewItem } from '@/components/Submission/ReviewItem'
import { REVIEW_ITEMS } from '@/constants'
import { useDeviceType } from '@/hooks'

interface ReviewOrdersProps {
  headerFlex?: number
  itemFlex?: number
}

export const ReviewOrders: FC<ReviewOrdersProps> = ({ headerFlex = 366, itemFlex = 329 }) => {
  const { mode } = useColorScheme()
  const { isLargeScreen } = useDeviceType()

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
      <Stack gap={isLargeScreen ? 2 : 1}>
        <Stack direction='row' alignItems='center'>
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
          {isLargeScreen ? (
            <Stack>
              <Stack direction='row' gap={1}>
                <Typography
                  variant='caption'
                  flex={headerFlex}
                  fontSize='0.75rem'
                  color='text.normal'
                  sx={{
                    WebkitLineClamp: 1,
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  Items
                </Typography>
                <Typography
                  variant='caption'
                  flex={140}
                  fontSize='0.75rem'
                  color='text.normal'
                  sx={{
                    WebkitLineClamp: 1,
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  Card Service
                </Typography>
                <Typography
                  variant='caption'
                  flex={62}
                  fontSize='0.75rem'
                  color='text.normal'
                  sx={{
                    WebkitLineClamp: 1,
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
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
              <ReviewItem key={index} index={index} {...item} itemFlex={itemFlex} />
            ))}
          </List>
        </Stack>
      </Stack>
    </Paper>
  )
}
