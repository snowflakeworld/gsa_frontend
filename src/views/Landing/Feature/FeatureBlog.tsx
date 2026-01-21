import { Card, CardContent, Grid, Stack, Typography, useColorScheme } from '@mui/material'
import { type FC, memo } from 'react'

import { CustomIcon, IconType } from '@/components'
import { useDeviceType } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'

interface FeatureBlogProps {
  icon: IconType
  title: string
  content: string
}

const FeatureBlogComponent: FC<FeatureBlogProps> = ({ icon, title, content }) => {
  const { isLargeScreen } = useDeviceType()
  const { mode, systemMode } = useColorScheme()

  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card
        sx={{
          height: { xs: 'auto', md: '100%' },
          borderRadius: 2.25,
          padding: 5,
          border: `1px solid ${resolvedMode === 'dark' ? 'transparent' : gsaColors.border.normal.light}`,
          backgroundColor: 'background.card',
          boxShadow: `${gsaShadows.card}`
        }}
      >
        <CardContent
          sx={{
            height: '100%',
            padding: 0,
            '&:last-child': { paddingBottom: 0 }
          }}
        >
          <Stack gap={4}>
            <Stack direction={isLargeScreen ? 'row' : 'column'} alignItems={'center'} gap={2}>
              <Stack
                sx={{
                  borderRadius: 1,
                  minWidth: 52,
                  minHeight: 52,
                  backgroundColor: gsaColors.background.red['alpha']
                }}
                justifyContent='center'
                alignItems='center'
              >
                <CustomIcon
                  name={icon}
                  className='fill-none'
                  width={36}
                  height={36}
                  viewBoxWidth={36}
                  viewBoxHeight={36}
                />
              </Stack>
              <Typography
                variant='h4'
                textAlign={isLargeScreen ? 'initial' : 'center'}
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  lineHeight: { xs: '2rem', md: '2.25rem' },
                  letterSpacing: -0.125
                }}
              >
                {title}
              </Typography>
            </Stack>
            <Typography variant='caption' color='text.normal'>
              {content}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}

export const FeatureBlog = memo(FeatureBlogComponent)
