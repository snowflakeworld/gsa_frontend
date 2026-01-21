import { type FC, memo } from 'react'

import { Card, Stack, Typography } from '@mui/material'

import { StyledImage } from '@/components'
import { useDeviceType } from '@/hooks'
import { gsaShadows } from '@/theme'

interface NewsCardProps {
  title: string
  date: string
  img: string
}

const NewsCardComponent: FC<NewsCardProps> = ({ title, date, img }) => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Card
      sx={{
        minHeight: isLargeScreen ? '35rem' : '20rem',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.card',
        boxShadow: `${gsaShadows.card}`,
        padding: 2
      }}
    >
      <Stack gap={{ xs: 2, md: 3 }} alignItems='center'>
        <StyledImage
          src={`/assets/images/cards/${img}`}
          width={isLargeScreen ? '29.75rem' : '18.75rem'}
          height={isLargeScreen ? '25rem' : '13.75rem'}
          alt='Tracking Card Image'
          loading='lazy'
          borderRadius='1rem'
        />
        <Stack gap={1} width='100%'>
          <Typography
            variant='h6'
            fontSize={{ xs: '1rem', md: '1.5rem' }}
            lineHeight={{ xs: '1.5rem', md: '2rem' }}
            sx={{
              WebkitLineClamp: 2,
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {title}
          </Typography>
          <Typography
            color='text.normal'
            fontWeight={600}
            fontSize={{ xs: '0.875rem', md: '1rem' }}
            lineHeight={{ xs: '1.25rem', md: '1.5rem' }}
          >
            {date}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export const NewsCard = memo(NewsCardComponent)
