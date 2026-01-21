import { CustomIcon } from '@/components'
import { gsaIconColors, gsaShadows } from '@/theme'
import { Box, Card, Stack, Typography } from '@mui/material'
import { type FC, memo } from 'react'

interface AdditionalCardProps {
  title: string
  content: string
  icon: string
  iconWidth: string
  iconHeight: string
  viewportWidth: number
  viewportHeight: number
}

const AdditionalCardComponent: FC<AdditionalCardProps> = ({
  title,
  content,
  icon,
  iconWidth,
  iconHeight,
  viewportWidth,
  viewportHeight
}) => {
  return (
    <Box position='relative'>
      <Stack
        bgcolor={gsaIconColors.customRed}
        padding={1}
        borderRadius={1.5}
        minWidth={80}
        minHeight={80}
        alignItems='center'
        justifyContent='center'
        position='absolute'
        left={40}
        top={-40}
      >
        <CustomIcon
          name={icon}
          width={iconWidth}
          height={iconHeight}
          viewBoxWidth={viewportWidth}
          viewBoxHeight={viewportHeight}
        />
      </Stack>

      <Card
        sx={{
          borderRadius: 2.25,
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.card',
          boxShadow: `${gsaShadows.card}`,
          gap: 4,
          px: 5,
          paddingTop: 7.5,
          paddingBottom: 5,
          minHeight: { xs: 'auto', md: '20rem' }
        }}
      >
        <Stack gap={4}>
          <Typography
            variant='h4'
            sx={{
              fontSize: { xs: '1.75rem', md: '1.75rem' },
              lineHeight: { xs: '2.25rem', md: '2.25rem' }
            }}
          >
            {title}
          </Typography>
          <Typography variant='caption' color='text.normal'>
            {content}
          </Typography>
        </Stack>
      </Card>
    </Box>
  )
}

export const AdditionalCard = memo(AdditionalCardComponent)
