import { type FC, ReactNode, useState } from 'react'

import { InputBase, Paper, Stack, Typography } from '@mui/material'

interface NormalTextInputProps {
  label: string
  placeHolder: string
  type?: string
  editable?: boolean
  defaultValue?: string
  flex?: number
  width?: string
  children?: ReactNode | undefined
  listener?: (_: string) => void
}

export const NormalTextInput: FC<NormalTextInputProps> = ({
  label,
  placeHolder,
  type = 'text',
  editable = true,
  defaultValue = '',
  flex = 0,
  width = undefined,
  children = undefined,
  listener = undefined
}) => {
  const [value, setValue] = useState<string>(defaultValue)

  const handleChange = (val: string) => {
    if (editable) {
      setValue(val)
      if (listener) listener(val)
    }
  }

  return (
    <Stack gap={1.5} py={1.5} sx={{ ...(flex && { flex }), ...(width && { width }) }}>
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
          sx={{ width: '100%', pl: 2.5, pr: 2, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
          placeholder={placeHolder}
          value={editable ? value : defaultValue}
          type={type}
          onChange={e => handleChange(e.target.value)}
          startAdornment={children}
        />
      </Paper>
    </Stack>
  )
}
