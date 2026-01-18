import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Close } from '@mui/icons-material'
import { Button, FormControl, IconButton, Stack, TextField, Typography } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Logo } from '@/components/Common'
import { ROUTERS } from '@/configs'
import { dispatch, login } from '@/store'
import { CreateInfo } from '@/types'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('form.firstName-required')
    .matches(/^[a-zA-Z0-9._-]{3,20}$/, 'form.firstName-invalid'),
  lastName: yup
    .string()
    .required('form.lastName-required')
    .matches(/^[a-zA-Z0-9._-]{3,20}$/, 'form.lastName-invalid'),
  email: yup.string().required('form.email-required').email('form.email-invalid'),
  password: yup
    .string()
    .required('form.password-required')
    .min(8, 'form.password-least')
    .matches(/[A-Z]/, 'form.password-uppercase')
    .matches(/[0-9]/, 'form.password-number')
    .matches(/[!@#$%^&*]/, 'form.password-special'),
  confirmPassword: yup
    .string()
    .required('form.confirmPassword-required')
    .oneOf([yup.ref('password')], 'form.confirmPassword-unmatched')
})

export const SignUp = () => {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<CreateInfo>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    navigate(ROUTERS.Home)
  }

  const onSubmit = async (data: CreateInfo) => {
    dispatch(
      login({
        user: { _id: '123123', email: data.email, username: '123123', createdAt: '123123', updatedAt: '123123' },
        token: '123123123'
      })
    )
    navigate(ROUTERS.Home)
  }

  return (
    <Stack component='form' gap={{ xs: 3, md: 4 }} onSubmit={handleSubmit(onSubmit)}>
      <Stack position='relative' gap={1.2} alignItems='center'>
        <Typography variant='h5' fontSize='1rem' lineHeight='1rem'>
          Create an Account
        </Typography>
        <Logo place='signin' />
        <Typography
          variant='caption'
          fontSize='0.875rem'
          lineHeight='1.2rem'
          color='text.caption'
          fontWeight={500}
          width={285}
          textAlign='center'
        >
          Add your information and create a password below
        </Typography>

        <IconButton aria-label='close' onClick={handleClose} sx={{ position: 'absolute', right: 0 }}>
          <Close />
        </IconButton>
      </Stack>
      <Stack direction='row' gap={1.5}>
        <FormControl sx={{ flexGrow: 1 }}>
          <Controller
            name='firstName'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                variant='filled'
                autoComplete='firstName'
                label='First Name'
                size='medium'
                slotProps={{ input: { disableUnderline: true } }}
                error={Boolean(error)}
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ flexGrow: 1 }}>
          <Controller
            name='lastName'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                variant='filled'
                autoComplete='lastName'
                label='Last Name'
                size='medium'
                slotProps={{ input: { disableUnderline: true } }}
                error={Boolean(error)}
                {...field}
              />
            )}
          />
        </FormControl>
      </Stack>
      <FormControl>
        <Controller
          name='email'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant='filled'
              type='email'
              autoComplete='email'
              label='Email'
              size='medium'
              slotProps={{ input: { disableUnderline: true } }}
              error={Boolean(error)}
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl>
        <Controller
          name='password'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant='filled'
              type='password'
              autoComplete='current-password'
              label='Password'
              size='medium'
              slotProps={{ input: { disableUnderline: true } }}
              error={Boolean(error)}
              {...field}
            />
          )}
        />
      </FormControl>
      <FormControl>
        <Controller
          name='confirmPassword'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant='filled'
              type='password'
              autoComplete='current-password'
              label='Confirm Password'
              size='medium'
              slotProps={{ input: { disableUnderline: true } }}
              error={Boolean(error)}
              {...field}
            />
          )}
        />
      </FormControl>
      <Button type='submit' variant='contained' sx={{ width: '100%', gap: 2, px: 3 }} className='button--red'>
        Sign Up
      </Button>
    </Stack>
  )
}
