import { Box, Container, Stack, Typography } from '@mui/material'

import { SearchBox } from '@/components'
import { useDeviceType } from '@/hooks'

const Search = () => {
  const { isLargeScreen } = useDeviceType()

  return (
    <Box sx={{ minHeight: '100vh' }} mt={{ xs: 9, md: 9 }} position='relative'>
      <Box
        component='img'
        src='/assets/images/decorator.svg'
        sx={{
          position: 'absolute',
          width: 'clamp(21.875rem, 15.2729rem + 28.169vw, 40.625rem)'
        }}
      />
      <Container>
        <Stack pt={6} alignItems='center' gap={4}>
          <Stack alignItems='center' gap={1.5}>
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
            <Typography variant='h1' textAlign='center' maxWidth={isLargeScreen ? '80%' : '100%'}>
              Find Your Card on Grading Specialists Authority Collectors Holdings
            </Typography>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal' fontSize='1.25rem'>
              Find you card listed here
            </Typography>
          </Stack>

          <SearchBox placeHolder='Search for cards' />
        </Stack>
      </Container>
    </Box>
  )
}

export default Search
