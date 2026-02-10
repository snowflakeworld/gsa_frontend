import { type FC } from 'react'

import { useDeviceType } from '@/hooks'
import { Divider, List, Stack, Typography } from '@mui/material'
import { StyledImage } from '../../Common'
import { StatusItem } from './StatusItem'

interface ReviewItemProps {
  index: number
  img: string
  name: string
  encapsulate: boolean
  oversized: boolean
  authentic: boolean
  cardService: string
  declValue: string
  itemFlex?: number
}

export const ReviewItem: FC<ReviewItemProps> = ({
  index,
  img,
  name,
  encapsulate,
  oversized,
  authentic,
  cardService,
  declValue,
  itemFlex = 329
}) => {
  const { isLargeScreen } = useDeviceType()

  const statusList = []
  if (encapsulate) statusList.push('Encapsulate')
  if (oversized) statusList.push('Oversized item')
  if (authentic) statusList.push('Authentic')

  return (
    <Stack>
      {!!index && <Divider />}
      <Stack direction='row' gap={1} py={1} alignItems='center'>
        <StyledImage
          src={`/assets/images/${img}`}
          width='1.875rem'
          height='2.5rem'
          alt='Item Image'
          loading='lazy'
          borderRadius='4px'
          margin='0'
        />
        <Stack
          direction={isLargeScreen ? 'row' : 'column'}
          alignItems={isLargeScreen ? 'center' : 'normal'}
          gap={1}
          flex={1}
        >
          <Stack flex={itemFlex}>
            <Typography
              variant='h6'
              fontWeight={600}
              fontSize='0.875rem'
              lineHeight='1.25rem'
              sx={{
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {name}
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'row', gap: 0.8, py: 0, flex: 1 }}>
              {statusList
                .filter((_, index) => index < 2)
                .map((item, index) => (
                  <StatusItem key={'status-item-' + index} index={index} value={item} />
                ))}
            </List>
          </Stack>
          <Stack flex={140} direction='row' justifyContent='space-between' alignItems='center'>
            {!isLargeScreen && (
              <Typography
                variant='caption'
                fontWeight={500}
                fontSize='0.625rem'
                lineHeight='100%'
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
            )}
            <Typography
              variant='h6'
              fontWeight={600}
              fontSize='0.75rem'
              lineHeight='1.25rem'
              sx={{
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {cardService}
            </Typography>
          </Stack>
          <Stack flex={62} direction='row' justifyContent='space-between' alignItems='center'>
            {!isLargeScreen && (
              <Typography variant='caption' fontWeight={500} fontSize='0.625rem' lineHeight='100%' color='text.normal'>
                Decl. Value
              </Typography>
            )}
            <Typography
              variant='h6'
              fontWeight={600}
              fontSize='0.75rem'
              lineHeight='1.25rem'
              sx={{
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {declValue}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
