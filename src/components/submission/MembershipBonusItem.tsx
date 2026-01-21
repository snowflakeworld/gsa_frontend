import { type FC } from 'react'

import { Done } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import parse from 'html-react-parser'

import { gsaIconColors } from '@/theme'

interface MemberShipBonusItemProps {
  isSelected: boolean
  children: string
}

export const MembershipBonusItem: FC<MemberShipBonusItemProps> = ({ isSelected, children }) => {
  return (
    <Stack direction='row' gap={1}>
      <Done fontSize='small' sx={{ fill: gsaIconColors.customRed }} />
      <Typography
        variant='h6'
        fontWeight={400}
        fontSize='0.75rem'
        lineHeight='1rem'
        {...(isSelected && { color: 'text.red' })}
      >
        {parse(children)}
      </Typography>
    </Stack>
  )
}
