import { Container, Grid, Stack, Typography } from "@mui/material"

import { FEATURE_CONTENTS } from "@/constants"
import { Blog } from "./feature/Blog"

const FeatureSection = () => {
  return (
    <Container sx={{
      px: { xs: 2.5, md: 25 },
      py: { xs: 5, md: 12.5 }
    }}>

      <Stack gap={6.25}>
        <Typography variant='h2' textAlign='center'>
          Innovations in Grading Technology
        </Typography>

        <Grid container spacing={5}>
          {
            FEATURE_CONTENTS.map(({ icon, title, content }, idx: number) => (
              <Blog key={idx} icon={icon} title={title} content={content} />
            ))
          }

        </Grid>
      </Stack>
    </Container>
  )
}

export default FeatureSection
