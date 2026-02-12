import { ToggleButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1.5),
  border: '1px solid',
  borderColor: 'var(--template-palette-divider)',
  backgroundColor: 'var(--template-palette-background-secondary)'
}))
