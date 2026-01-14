import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { IconButton, InputAdornment, InputBase, Paper, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'

interface NormalPasswordInputProps {
  label: string
  placeHolder: string
  type?: string
  editable?: boolean
  defaultValue?: string
  flex?: number
  width?: string
}

export const NormalPasswordInput: FC<NormalPasswordInputProps> = ({
  label,
  placeHolder,
  type = 'password',
  editable = true,
  defaultValue = '',
  flex = 0,
  width = undefined
}) => {
  const [password, setPassword] = useState(defaultValue)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (val: string) => {
    if (editable) setPassword(val)
  }

  return (
    <Stack
      gap={1.5}
      py={1.5}
      sx={{
        ...(flex && { flex }),
        ...(width && { width })
      }}
    >
      <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
        {label}
      </Typography>
      <Paper
        component='form'
        sx={{
          height: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'background.paperSummary',
          boxShadow: 'none',
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <InputBase
          sx={{ width: '100%', paddingLeft: 2.5, paddingRight: 2, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
          placeholder={placeHolder}
          value={editable ? password : defaultValue}
          type={showPassword ? 'text' : type}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton size='small' onClick={() => setShowPassword(state => !state)}>
                {!showPassword ? (
                  <VisibilityOutlined fontSize='inherit' />
                ) : (
                  <VisibilityOffOutlined fontSize='inherit' />
                )}
              </IconButton>
            </InputAdornment>
          }
          onChange={e => handleChange(e.target.value)}
        />
      </Paper>
    </Stack>
  )
}
