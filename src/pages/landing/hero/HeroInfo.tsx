import { Stack } from '@mui/material'

import { Carousel, Details } from './info'

export const HeroInfo = () => {

  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'column' }}
      paddingBottom={{ xs: 0, md: '30px' }}
      gap={{ xs: 0, md: 10 }}>
      <Details />
      <Carousel />
    </Stack>
  )
}
