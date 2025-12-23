import { FC, memo } from 'react'

import { Button, Stack, Typography } from '@mui/material'

import { CustomIcon } from '@/components'
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

      <Button
        variant='contained'
        sx={{ gap: 2, px: 3 }}
        endIcon={
          <CustomIcon
            name='detail'
            color='secondary'
            width={'1.5rem'}
            height={'auto'}
            viewBoxWidth={23.5}
            viewBoxHeight={13}
          />
        }
        className='button--red'
      >
        See Detail
      </Button>
    </Stack>
  )
}

export const HeroDetails = memo(HeroDetailsComponent)
