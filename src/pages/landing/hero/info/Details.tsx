import { ArrowRightAltRounded } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

import { useDeviceType } from '@/hooks/useDeviceType'

export const Details = () => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack direction='column' alignItems='flex-start' gap={4}>
      <Stack direction='column' gap={1.5}>
        <Typography
          variant='h3'
          sx={{
            fontWeight: 600,
            color: 'text.red',
            fontSize: { xs: '16px', md: '20px' },
            lineHeight: { xs: '24px', md: '30px' }
          }}
        >
          🔥 Collectors Crossovers
        </Typography>
        <Typography
          variant='h1'
          sx={{
            fontWeight: 700,
            fontSize: { xs: '32px', md: '50px' },
            lineHeight: { xs: '36px', md: '100%' }
          }}
        >
          Donruss 90 - Juan Gongaley of Rangers
        </Typography>
        <Typography sx={{ color: 'text.normal' }}>
          Batter up-submit Baseball Cards 2020-Present at just $16.99/card.
        </Typography>
      </Stack>

      <Button variant='contained' className='button--red' sx={{ gap: 2, px: !isScreenSmall ? 3 : 2, py: 1.25 }}>
        <Typography variant='button' color='white' sx={{ fontSize: '18px' }}>
          See Detail
        </Typography>
        <ArrowRightAltRounded className='icon--white size--big' fontSize='small' fill='white' />
      </Button>
    </Stack>
  )
}
