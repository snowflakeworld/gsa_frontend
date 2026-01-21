import { Container, Grid, Stack, Typography } from '@mui/material'

import { FEATURE_CONTENTS, LANDING_FEATURE_GRID_MAX_WIDTH } from '@/constants'

import { FeatureBlog } from './Feature'

const FeatureSection = () => {
  return (
    <Container>
      <Stack gap={6.25} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto'>
        <Typography variant='h2' textAlign='center'>
          Innovations in Grading Technology
        </Typography>

        <Grid container spacing={5}>
          {FEATURE_CONTENTS.map((blog, idx: number) => (
            <FeatureBlog key={'feature-blog-' + idx} {...blog} />
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default FeatureSection
