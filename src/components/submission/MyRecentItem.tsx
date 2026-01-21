import { type FC } from 'react'

import { Button, Card, Stack, Typography, useColorScheme } from '@mui/material'

import { gsaShadows } from '@/theme'
import { CustomIcon } from '../Common'

interface MyRecentItemProps {
  count: number
  date: string
  level: string
}

export const MyRecentItem: FC<MyRecentItemProps> = ({ count, date, level }) => {
  const { mode } = useColorScheme()

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: `${gsaShadows.card}`,
        p: 2
      }}
    >
      <Stack direction='row' gap={2} alignItems='center'>
        <Stack flexGrow={1} gap={0.5}>
          <Typography variant='h6' fontSize='0.875rem' lineHeight='1.25rem'>{`${count} Items`}</Typography>
          <Stack direction='row' gap={0.5}>
            <Typography component='span' fontSize='0.75rem' fontWeight={400} lineHeight='100%' color='text.normal'>
              Date created:
            </Typography>
            <Typography variant='caption' fontSize='0.75rem' fontWeight={600} lineHeight='100%' color='text.normal'>
              {date}
            </Typography>
          </Stack>
          <Stack direction='row' gap={0.5}>
            <Typography component='span' fontSize='0.75rem' fontWeight={400} lineHeight='100%' color='text.normal'>
              Service Level:
            </Typography>
            <Typography variant='caption' fontSize='0.75rem' fontWeight={600} lineHeight='100%' color='text.normal'>
              {level}
            </Typography>
          </Stack>
        </Stack>
        <Button variant='contained' className='button--tiny'>
          <CustomIcon
            name='eye'
            colorMode='stroke'
            width={20}
            height={20}
            viewBoxWidth={36}
            viewBoxHeight={36}
            color={mode === 'dark' ? 'secondary' : 'prime'}
          />
        </Button>
      </Stack>
    </Card>
  )
}
