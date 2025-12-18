import { Box, Container, Grid, Typography } from "@mui/material"

const FeatureSection = () => {
  return (
    <Box>
      <Container sx={{
        px: { md: '20px', lg: '200px' },
        py: { md: '40px', lg: '100px' }
      }} >

        <Typography component='h2' gap={1.5}>
          Innovations in Grading Technology
        </Typography>

        <Grid container spacing={6.25}>
          <Grid size={6}>
            <Typography>Sample text</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Sample text</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Sample text</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default FeatureSection
