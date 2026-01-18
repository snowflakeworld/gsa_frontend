import { StyledImage } from '@/components'
import { useDeviceType } from '@/hooks'
import { gsaShadows } from '@/theme'
import { Card, List, Stack, Typography } from '@mui/material'
import { FC, memo } from 'react'
import { PriceItemHoriz } from './PriceItemHoriz'
import { PriceItemVert } from './PriceItemVert'

interface ItemProps {
  content: string
  status: string
  highlight?: boolean
}
interface TrackingCardProps {
  title: string
  description: string
  content: string
  img: string
  itemDisplayMode: string
  items: ItemProps[]
}

const TrackingCardComponent: FC<TrackingCardProps> = ({ title, description, content, img, itemDisplayMode, items }) => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.card',
        boxShadow: `${gsaShadows.card}`,
        padding: isLargeScreen ? 4 : 3
      }}
    >
      {isLargeScreen ? (
        <Stack flexDirection='row' gap={3}>
          <Stack gap={3}>
            <Stack gap={3} flexGrow={1}>
              <Typography variant='caption' fontSize='1.5rem' lineHeight='2rem' fontWeight='400'>
                {content}
              </Typography>
              <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                {items.map((item, index) =>
                  itemDisplayMode === 'horizontal' ? (
                    <PriceItemHoriz key={index} {...item} />
                  ) : (
                    <PriceItemVert key={index} {...item} />
                  )
                )}
              </List>
            </Stack>
            <Stack gap={1}>
              <Typography variant='h4' fontSize='2rem' lineHeight='2.5rem'>
                {title}
              </Typography>
              <Typography fontSize='1.25rem' lineHeight='1.875rem' color='text.normal'>
                {description}
              </Typography>
            </Stack>
          </Stack>
          <StyledImage
            src={`/assets/images/cards/${img}`}
            width={200}
            height={330}
            alt='Tracking Card Image'
            loading='lazy'
            borderRadius='1rem'
          />
        </Stack>
      ) : (
        <Stack flexDirection='column' gap={2}>
          <Stack gap={2}>
            <Stack gap={2}>
              <Typography variant='caption' fontSize='1.5rem' lineHeight='2rem' fontWeight='400'>
                {content}
              </Typography>
              <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {items.map((item, index) =>
                  itemDisplayMode === 'horizontal' ? (
                    <PriceItemHoriz key={index} {...item} />
                  ) : (
                    <PriceItemVert key={index} {...item} />
                  )
                )}
              </List>
            </Stack>
          </Stack>
          <Stack gap={2} flexDirection='row'>
            <Stack gap={1}>
              <Typography variant='h4' fontSize='1.5rem' lineHeight='2rem'>
                {title}
              </Typography>
              <Typography fontSize='1rem' lineHeight='1.5rem' color='text.normal'>
                {description}
              </Typography>
            </Stack>
            <StyledImage
              src={`/assets/images/cards/${img}`}
              width={105}
              height={175}
              alt='Tracking Card Image'
              loading='lazy'
              borderRadius='1rem'
            />
          </Stack>
        </Stack>
      )}
    </Card>
  )
}

export const TrackingCard = memo(TrackingCardComponent)
