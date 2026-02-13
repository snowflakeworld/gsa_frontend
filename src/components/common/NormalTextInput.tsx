import { type FC, ReactNode } from 'react'

import { InputBase, Paper, Stack, Typography } from '@mui/material'

export type InputTypes =
  | 'customerNumber'
  | 'username'
  | 'email'
  | 'phone'
  | 'country'
  | 'password'
  | 'confirmPassword'
  | 'normal'
  | 'street'
  | 'state'
  | 'city'
  | 'code'

interface NormalTextInputProps {
  label: string
  placeHolder: string
  type?: string
  editable?: boolean
  defaultValue?: string
  flex?: number
  width?: string
  children?: ReactNode | undefined
  dataType?: InputTypes
  listener?: (type: InputTypes, __: string) => void
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
  dataType = 'customerNumber',
  listener = undefined
}) => {
  const handleChange = (val: string) => {
    if (editable && listener) {
      listener(dataType, val)
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
          value={defaultValue}
          type={type}
          onChange={e => handleChange(e.target.value)}
          startAdornment={children}
          autoFocus={false}
          readOnly={!editable}
        />
      </Paper>
    </Stack>
  )
}
