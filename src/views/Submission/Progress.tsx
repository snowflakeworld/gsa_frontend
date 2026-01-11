import { NoDataPaper } from '@/components'
import { MyProgressItem } from '@/components/Submission'
import { MY_PROGRESS_SUBMISSION } from '@/constants'
import { List, Stack, Typography } from '@mui/material'

export const Progress = () => {
  // const progressCount = undefined

  const progressCount = MY_PROGRESS_SUBMISSION.length

  return (
    <Stack flexGrow={1} gap={2}>
      <Stack gap={0.5}>
        <Typography variant='h5'>In Progress</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          Submissions that are incomplete
        </Typography>
      </Stack>
      {!progressCount && <NoDataPaper type='progress'>You have no in-progress submissions</NoDataPaper>}
      {progressCount && (
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {MY_PROGRESS_SUBMISSION.map((item, index) => (
            <MyProgressItem key={index} {...item} />
          ))}
        </List>
      )}
    </Stack>
  )
}
