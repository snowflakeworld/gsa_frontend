import { type FC } from 'react'

import { Button, List, Paper, Stack, Typography, useColorScheme } from '@mui/material'

import { CustomIcon } from '@/components'
import { SummaryItem } from '@/components/Submission'
import { SUMMARY_BASE_INFO } from '@/constants'
import { useDeviceType } from '@/hooks'

interface GradingDetailsProps {
  canEdit?: boolean
}

export const GradingDetails: FC<GradingDetailsProps> = ({ canEdit = true }) => {
  const { mode } = useColorScheme()
  const { isLargeScreen } = useDeviceType()

  return (
    <Paper
      sx={{
        width: isLargeScreen ? 400 : '100%',
        maxWidth: isLargeScreen ? 400 : '100%',
        display: 'block',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: 'none',
        padding: 2
      }}
    >
      <Stack gap={1}>
        <Stack direction='row' alignItems='center'>
          <Typography variant='h6' flexGrow={1}>
            Grading Details
          </Typography>
          {canEdit && (
            <Button variant='contained' className='button--tiny' sx={{ width: '2rem' }}>
              <CustomIcon
                name='edit'
                colorMode='fill'
                width={12}
                height={12}
                viewBoxWidth={10}
                viewBoxHeight={12}
                color={mode === 'dark' ? 'secondary' : 'prime'}
              />
            </Button>
          )}
        </Stack>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 0 }}>
          {SUMMARY_BASE_INFO.map((item, index) => (
            <SummaryItem key={'summary-' + index} {...item} />
          ))}
        </List>
      </Stack>
    </Paper>
  )
}
