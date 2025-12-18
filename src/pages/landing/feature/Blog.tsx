import { Card, CardContent, Grid, Stack, Typography, useColorScheme } from '@mui/material'
import { FC, memo } from 'react'

import { AppIcon, IconType } from '@/components/common'
import { useDeviceType } from '@/hooks/useDeviceType'
import { gsaColors, gsaShadows } from '@/theme'

interface BlogProps {
  icon: IconType
  title: string
  content: string
}

const BlogComponent: FC<BlogProps> = ({ icon, title, content }) => {
  const { isMobile, isTablet } = useDeviceType()
  const isScreenSmall = isMobile || isTablet

  const { mode, systemMode } = useColorScheme()
  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card
        sx={{
          height: { xs: 'auto', md: '100%' },
          borderRadius: 2.25,
          padding: 5,
          border: `1px solid ${resolvedMode === 'dark' ? '#00000000' : gsaColors.border.normal.light}`,
          backgroundColor: 'background.blog',
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
            <Stack direction={isScreenSmall ? 'column' : 'row'} alignItems={'center'} gap={2}>
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
                <AppIcon
                  name={icon}
                  className='fill-none'
                  width={24}
                  height={24}
                  viewBoxWidth={36}
                  viewBoxHeight={36}
                />
              </Stack>
              <Typography
                variant='h4'
                textAlign={!isScreenSmall ? 'initial' : 'center'}
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  lineHeight: { xs: '32px', md: '36px' },
                  letterSpacing: '-1px'
                }}
              >
                {title}
              </Typography>
            </Stack>
            <Typography component='p' color='text.normal'>
              {content}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}

export const Blog = memo(BlogComponent)
