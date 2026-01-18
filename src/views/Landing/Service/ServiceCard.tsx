import { useDeviceType } from '@/hooks'
import { gsaShadows } from '@/theme'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { FC, memo } from 'react'
import { StyledImage } from '../../../components/Common'

interface ServiceCardProps {
  title: string
  button: string
  img: string
  rotate: string
}

const ServiceCardComponent: FC<ServiceCardProps> = ({ title, button, img, rotate }) => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Card
      sx={{
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.card',
        boxShadow: `${gsaShadows.card}`,
        maxHeight: isLargeScreen ? 455 : 330,
        mb: 3
      }}
    >
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', gap: isLargeScreen ? 3 : 2, padding: isLargeScreen ? 4 : 3 }}
      >
        <Typography variant='h4' textAlign='center' alignContent='center' minHeight={isLargeScreen ? 80 : 64}>
          {title}
        </Typography>
        <Button variant='contained' sx={{ width: '100%', gap: 2, px: 3 }} className='button--red'>
          {button}
        </Button>
      </CardContent>
      <CardMedia sx={{ rotate: rotate, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
        <StyledImage
          src={`/assets/images/cards/${img}`}
          width={isLargeScreen ? 210 : 140}
          height={isLargeScreen ? 297 : 198}
          alt='Service Card Image'
          loading='lazy'
          borderRadius='0.75rem'
        />
        {/* border='3px solid white' */}
        {/* borderRadius={'0.75rem' */}
      </CardMedia>
    </Card>
  )
}

export const ServiceCard = memo(ServiceCardComponent)
