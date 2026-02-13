import { type FC } from 'react'

import { Circle } from '@mui/icons-material'
import { Button, Card, Stack, Typography, useColorScheme } from '@mui/material'

import { gsaColors, gsaShadows } from '@/theme'
import { AddressRes } from '@/types'
import { CustomIcon } from '../Common'

export const AddressItem: FC<AddressRes> = ({ country, state, city, street, code, phone }) => {
  const { mode } = useColorScheme()

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.cardItem',
        boxShadow: `${gsaShadows.card}`,
        px: 2,
        py: 1.5
      }}
    >
      <Stack direction='row' gap={2} alignItems='center'>
        <Stack flexGrow={1} gap={0.5}>
          <Typography
            variant='h6'
            fontSize='0.875rem'
            lineHeight='1.25rem'
            sx={{
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {street}
          </Typography>
          <Typography
            variant='caption'
            fontSize='0.75rem'
            fontWeight={400}
            lineHeight='100%'
            color={mode === 'dark' ? gsaColors.text.normal : gsaColors.text.primary.light}
            sx={{
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {`${city}, ${state}, ${country} - ${code}`}
          </Typography>
          <Stack direction='row' gap={0.5} alignItems='center'>
            <Circle
              sx={{
                mx: 0.5,
                fontSize: '0.3rem',
                color: mode === 'dark' ? gsaColors.text.normal : gsaColors.text.primary.light
              }}
            />
            <Typography
              variant='caption'
              fontSize='0.75rem'
              fontWeight={400}
              lineHeight='100%'
              color={mode === 'dark' ? gsaColors.text.normal : gsaColors.text.primary.light}
              sx={{
                WebkitLineClamp: 1,
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {phone}
            </Typography>
          </Stack>
          {/* {isMain ? (
            <RedChip size='small'>Main Address</RedChip>
          ) : (
            <Typography
              variant='caption'
              fontWeight={400}
              fontSize='0.75rem'
              lineHeight='1rem'
              sx={{
                color: gsaColors.text.red,
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': { color: gsaColors.text.redAlpha }
              }}
            >
              Set as main address
            </Typography>
          )} */}
        </Stack>
        <Stack direction='row' gap={1.25}>
          {/* <Button variant='contained' className='button--tiny'>
            <CustomIcon
              name='edit'
              colorMode='fill'
              width={14}
              height={14}
              viewBoxWidth={10}
              viewBoxHeight={12}
              color={mode === 'dark' ? 'secondary' : 'prime'}
            />
          </Button> */}
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
