import { EmptyPaper } from '@/components'
import { MyRecentItem } from '@/components/Submission'
import { MY_RECENT_SUBMISSION } from '@/constants'
import { List, Stack, Typography } from '@mui/material'

export const Recent = () => {
  // const recentCount = undefined

  const recentCount = MY_RECENT_SUBMISSION.length

  return (
    <Stack flexGrow={1} gap={2}>
      <Stack gap={0.5}>
        <Typography variant='h5'>Recent</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          Submissions that you recently completed
        </Typography>
      </Stack>
      {!recentCount && <EmptyPaper type='item'>You have no recent submissions</EmptyPaper>}
      {recentCount && (
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {MY_RECENT_SUBMISSION.map((item, index) => (
            <MyRecentItem key={index} {...item} />
          ))}
        </List>
      )}
    </Stack>
  )
}
