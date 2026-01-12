import { gsaColors, gsaShadows } from '@/theme'
import { Button, Card, Stack, Typography, useColorScheme } from '@mui/material'
import { FC } from 'react'
import { CustomIcon, RedChip, StyledImage } from '../Common'

interface BillingItemProps {
  img: string
  imgWidth: string
  name: string
  cardNumber: string
  isMain: boolean
}

export const BillingItem: FC<BillingItemProps> = ({ img, imgWidth, name, cardNumber, isMain }) => {
  const { mode } = useColorScheme()

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: `${gsaShadows.card}`,
        px: 2,
        py: 1.5
      }}
    >
      <Stack flexDirection='row' gap={0.25} alignItems='center'>
        <Stack flexGrow={1} gap={0.25}>
          <StyledImage
            src={`/assets/images/${img}`}
            width={imgWidth}
            height='auto'
            alt='Method Image'
            loading='lazy'
            margin='8px 0px'
          />
          <Typography variant='h6' fontSize='0.875rem' lineHeight='1.25rem'>
            {name}
          </Typography>
          <Typography variant='caption' fontSize='0.75rem' lineHeight='0.9rem'>
            {cardNumber}
          </Typography>
        </Stack>
        <Stack flexDirection='row' gap={1.25} alignItems='center'>
          {isMain ? (
            <RedChip size='small'>Main Address</RedChip>
          ) : (
            <Typography
              variant='caption'
              fontWeight={400}
              fontSize='0.75rem'
              lineHeight='1rem'
              sx={{
                color: gsaColors.text.red,
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': { color: gsaColors.text.redAlpha }
              }}
            >
              Set as main address
            </Typography>
          )}
          <Button variant='contained' className='button--tiny'>
            <CustomIcon
              name='edit'
              colorMode='fill'
              width={14}
              height={14}
              viewBoxWidth={10}
              viewBoxHeight={12}
              color={mode === 'dark' ? 'secondary' : 'prime'}
            />
          </Button>
          <Button variant='contained' className='button-alpha--red button--tiny'>
            <CustomIcon
              name='delete'
              colorMode='stroke'
              width={16}
              height={16}
              viewBoxWidth={11}
              viewBoxHeight={14}
              color='tertiary'
            />
          </Button>
        </Stack>
      </Stack>
    </Card>
  )
}
