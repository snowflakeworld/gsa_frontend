import { NEWS_ITEMS } from '@/constants'
import { LANDING_FEATURE_GRID_MAX_WIDTH } from '@/constants/numeric'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import { NewsCard } from './news'

const NewsSection = () => {
  return (
    <Container>
      <Stack gap={6.25} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
        <Stack flexDirection='row' gap={6.25} alignItems='flex-end' justifyContent='space-between'>
          <Stack gap={1}>
            <Typography variant='h2'>News</Typography>
            <Typography variant='subtitle2' lineHeight={{ xs: '1.75rem', md: '2rem' }}>
              Updates from Southentic HQ and select partners.
            </Typography>
          </Stack>
          <Button
            variant='contained'
            sx={{ gap: 1, px: 2, width: 'fit-content', textWrap: 'nowrap', flexWrap: 'nowrap' }}
            className='button--small'
          >
            View All
          </Button>
        </Stack>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {NEWS_ITEMS.map((news, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 6 }}>
              <NewsCard {...news} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default NewsSection
