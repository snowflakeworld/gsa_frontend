import { FC, memo } from 'react'

import { ArrowRightAltRounded } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'

import { HERO_DETAILS } from '@/constants'

interface HeroDetailsProps {
  currentIndex: number
}

const HeroDetailsComponent: FC<HeroDetailsProps> = ({ currentIndex }) => {

  const totalLen = HERO_DETAILS.length

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
          {HERO_DETAILS[currentIndex % totalLen][0]}
        </Typography>
        <Typography sx={{ color: 'text.normal' }}>
          {HERO_DETAILS[currentIndex % totalLen][1]}
        </Typography>
      </Stack>

      <Button variant='contained' className='button--red' sx={{ gap: 2, px: { xs: 2, md: 3 }, py: 1.25 }}>
        <Typography variant='button' color='white' sx={{ fontSize: '18px' }}>
          See Detail
        </Typography>
        <ArrowRightAltRounded className='icon--white size--big' fontSize='small' fill='white' />
      </Button>
    </Stack>
  )
}

export const HeroDetails = memo(HeroDetailsComponent)