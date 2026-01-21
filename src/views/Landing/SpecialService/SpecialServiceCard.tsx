import { type FC, memo } from 'react'

import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import { StyledImage } from '@/components'
import { useDeviceType } from '@/hooks'
import { gsaShadows } from '@/theme'

interface SpecialServiceCardProps {
  title: string
  content: string
  img: string
  gradient: string
}

const SpecialServiceCardComponent: FC<SpecialServiceCardProps> = ({ title, content, img, gradient }) => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card
        sx={{
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.card',
          boxShadow: `${gsaShadows.card}`,
          mb: 3
        }}
      >
        <CardMedia
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 5,
            backgroundImage: gradient,
            maxHeight: isLargeScreen ? 368 : 328,
            zIndex: 0,
            overflow: 'hidden'
          }}
        >
          <StyledImage
            src={`/assets/images/cards/${img}`}
            width={320}
            height={445}
            alt='Special Service Card Image'
            loading='lazy'
            borderRadius='0.75rem'
          />
        </CardMedia>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            p: isLargeScreen ? 4 : 3,
            backgroundColor: 'background.card',
            zIndex: 1
          }}
        >
          <Typography variant='h4' alignContent='center' minHeight={isLargeScreen ? 80 : 64}>
            {title}
          </Typography>
          <Typography variant='caption' color='text.normal' lineHeight={isLargeScreen ? '2rem' : '1.75rem'}>
            {content}
          </Typography>
          <Button variant='contained' sx={{ width: '100%', gap: 2, px: 3 }} className='button--red'>
            Start Now
          </Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

export const SpecialServiceCard = memo(SpecialServiceCardComponent)
