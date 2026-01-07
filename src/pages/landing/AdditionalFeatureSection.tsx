import { ADDITIONAL_FEATURES, LANDING_FEATURE_GRID_MAX_WIDTH } from '@/constants'
import { Container, Grid } from '@mui/material'
import { AdditionalCard } from './additional/AdditionalCard'

const AdditionalFeatureSection = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 15, md: 2 }} maxWidth={LANDING_FEATURE_GRID_MAX_WIDTH} m='auto' paddingTop={5}>
        {ADDITIONAL_FEATURES.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <AdditionalCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default AdditionalFeatureSection
