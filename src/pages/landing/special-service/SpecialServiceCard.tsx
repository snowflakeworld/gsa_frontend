import { StyledImage } from '@/components'
import { useDeviceType } from '@/hooks/useDeviceType'
import { gsaShadows } from '@/theme'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { FC, memo } from 'react'

interface SpecialServiceCardProps {
  title: string
  content: string
  img: string
  gradient: string
}

const SpecialServiceCardComponent: FC<SpecialServiceCardProps> = ({ title, content, img, gradient }) => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card
        sx={{
          borderRadius: 3,
          border: 'divider',
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
            paddingTop: 5,
            backgroundImage: gradient,
            maxHeight: !isScreenSmall ? 368 : 328,
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
            padding: !isScreenSmall ? 4 : 3,
            backgroundColor: 'background.card',
            zIndex: 1
          }}
        >
          <Typography variant='h4' alignContent='center' minHeight={!isScreenSmall ? 80 : 64}>
            {title}
          </Typography>
          <Typography variant='caption' color='text.normal' lineHeight={!isScreenSmall ? '2rem' : '1.75rem'}>
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
