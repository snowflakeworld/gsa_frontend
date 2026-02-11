import { type FC } from 'react'

import { Done } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import parse from 'html-react-parser'

import { gsaIconColors } from '@/theme'

interface BonusItemProps {
  isSelected: boolean
  children: string
  isNormalColor?: boolean
}

export const BonusItem: FC<BonusItemProps> = ({ isSelected, children, isNormalColor = false }) => {
  return (
    <Stack direction='row' gap={1}>
      <Done fontSize='small' sx={{ fill: gsaIconColors.customRed }} />
      <Typography
        variant={isNormalColor ? 'caption' : 'h6'}
        fontWeight={400}
        fontSize='0.75rem'
        lineHeight='1rem'
        {...(isNormalColor && { color: 'text.normal' })}
        {...(isSelected && { color: 'text.red' })}
      >
        {parse(children)}
      </Typography>
    </Stack>
  )
}
