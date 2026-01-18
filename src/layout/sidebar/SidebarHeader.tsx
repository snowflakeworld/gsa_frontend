import { type FC } from 'react'

import { Close } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'

import { Logo } from '@/components/Common'

interface SidebarHeaderPros {
  onClose: () => void
}

export const SidebarHeader: FC<SidebarHeaderPros> = ({ onClose }) => {
  return (
    <Stack direction='row' py={2.5} justifyContent='space-between' alignItems='center'>
      <Logo place='header' />
      <IconButton aria-label='close' onClick={onClose}>
        <Close />
      </IconButton>
    </Stack>
  )
}
