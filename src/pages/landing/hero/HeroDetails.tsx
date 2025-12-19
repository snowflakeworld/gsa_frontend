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
          variant='h6'
          sx={{
            color: 'text.red',
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: { xs: '1.5rem', md: '1.875rem' }
          }}
        >
          🔥 Collectors Crossovers
        </Typography>
        <Typography variant='h1'>{HERO_DETAILS[currentIndex % totalLen][0]}</Typography>
        <Typography component='p' sx={{ color: 'text.normal', fontSize: { md: '1.25rem' } }}>
          {HERO_DETAILS[currentIndex % totalLen][1]}
        </Typography>
      </Stack>

      <Button variant='contained' className='button--red' sx={{ gap: 2, px: { xs: 2, md: 3 }, py: 1.25 }}>
        <Typography variant='button' color='white' sx={{ fontSize: '1.125rem' }}>
          See Detail
        </Typography>
        <ArrowRightAltRounded className='icon--white size--big' fontSize='small' fill='white' />
      </Button>
    </Stack>
  )
}

export const HeroDetails = memo(HeroDetailsComponent)
