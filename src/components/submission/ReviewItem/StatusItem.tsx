import { Circle } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface StatusItemProps {
  index: number
  value: string
}

export const StatusItem: FC<StatusItemProps> = ({ index, value }) => {
  return (
    <Stack flexDirection='row' gap={0.8} alignItems='center'>
      {index ? (
        <Circle
          sx={{
            fontSize: '0.2rem',
            color: 'text.normal'
          }}
        />
      ) : (
        <></>
      )}
      <Typography variant='caption' fontWeight={500} fontSize='0.625rem' lineHeight='100%' color='text.normal'>
        {value}
      </Typography>
    </Stack>
  )
}
