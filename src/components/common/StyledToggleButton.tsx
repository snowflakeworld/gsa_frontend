import { styled, ToggleButton } from '@mui/material'

import { gsaColors } from '@/theme'

export const StyledToggleButton = styled(ToggleButton)(() => ({
  border: 'none',
  color: gsaColors.text.normal,
  borderRadius: '8px',
  '&.Mui-selected': {
    backgroundColor: 'var(--template-palette-background-default)',
    color: 'var(--template-palette-text-primary)'
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'var(--template-palette-background-default)'
  },
  '&.MuiToggleButton-root': {
    borderRadius: '8px !important'
  }
}))
