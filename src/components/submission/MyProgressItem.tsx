import { gsaShadows } from '@/theme'
import { Button, Card, Stack, Typography, useColorScheme } from '@mui/material'
import { FC } from 'react'
import { CustomIcon } from '../Common'

interface MyProgressItemProps {
  count: number
  date: string
  level: string
}

export const MyProgressItem: FC<MyProgressItemProps> = ({ count, date, level }) => {
  const { mode } = useColorScheme()

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: `${gsaShadows.card}`,
        padding: 2
      }}
    >
      <Stack flexDirection='row' gap={2} alignItems='center'>
        <Stack flexGrow={1} gap={0.5}>
          <Typography variant='h6' fontSize='0.875rem' lineHeight='1.25rem'>{`${count} Items`}</Typography>
          <Stack flexDirection='row' gap={0.5}>
            <Typography component='span' fontSize='0.75rem' fontWeight={400} lineHeight='100%' color='text.normal'>
              Date created:
            </Typography>
            <Typography variant='caption' fontSize='0.75rem' fontWeight={600} lineHeight='100%' color='text.normal'>
              {date}
            </Typography>
          </Stack>
          <Stack flexDirection='row' gap={0.5}>
            <Typography component='span' fontSize='0.75rem' fontWeight={400} lineHeight='100%' color='text.normal'>
              Service Level:
            </Typography>
            <Typography variant='caption' fontSize='0.75rem' fontWeight={600} lineHeight='100%' color='text.normal'>
              {level}
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection='row' gap={1.25}>
          <Button variant='contained' className='button--tiny'>
            <CustomIcon
              name='edit'
              colorMode='fill'
              width={14}
              height={14}
              viewBoxWidth={10}
              viewBoxHeight={12}
              color={mode === 'dark' ? 'secondary' : 'prime'}
            />
          </Button>
          <Button variant='contained' className='button-alpha--red button--tiny'>
            <CustomIcon
              name='delete'
              colorMode='stroke'
              width={16}
              height={16}
              viewBoxWidth={11}
              viewBoxHeight={14}
              color='tertiary'
            />
          </Button>
        </Stack>
      </Stack>
    </Card>
  )
}
