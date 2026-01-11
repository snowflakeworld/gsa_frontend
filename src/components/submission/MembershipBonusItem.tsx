import { gsaIconColors } from '@/theme'
import { Done } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import parse from 'html-react-parser'
import { FC, ReactNode } from 'react'

interface MemberShipBonusItemProps {
  isSelected: boolean
  children: ReactNode
}

export const MembershipBonusItem: FC<MemberShipBonusItemProps> = ({ isSelected, children }) => {
  return (
    <Stack flexDirection='row' gap={1}>
      <Done fontSize='small' sx={{ fill: gsaIconColors.customRed }} />
      <Typography
        variant='h6'
        fontWeight={400}
        fontSize='0.75rem'
        lineHeight='1rem'
        {...(isSelected ? { color: 'text.red' } : {})}
      >
        {parse(children as string)}
      </Typography>
    </Stack>
  )
}
