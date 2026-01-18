import { ROUTERS } from '@/configs'
import { Logo } from '@/layout/Logo'
import { Email } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Close } from '@mui/icons-material'
import { Button, FormControl, IconButton, Stack, TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { StepContext } from '..'

const defaultValues = {
  email: ''
}

const schema = yup.object().shape({
  email: yup.string().required('form.email-required').email('form.email-invalid')
})

export const SignIn = () => {
  const navigate = useNavigate()
  const { setStep } = useContext(StepContext)!

  const { control, handleSubmit } = useForm<Email>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    navigate(ROUTERS.Home)
  }

  const onSubmit = async (data: Email) => {
    // dispatch(
    //   login({
    //     user: { _id: '123123', email: data.email, username: '123123', createdAt: '123123', updatedAt: '123123' },
    //     token: '123123123'
    //   })
    // )
    setStep(1)
  }

  return (
    <Stack component='form' gap={{ xs: 3, md: 4 }} onSubmit={handleSubmit(onSubmit)}>
      <Stack position='relative' gap={1.2} alignItems='center'>
        <Typography variant='h5' fontSize='1rem' lineHeight='1rem'>
          Welcome To
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
          Sign in or create an account by entering your email below
        </Typography>

        <IconButton aria-label='close' onClick={handleClose} sx={{ position: 'absolute', right: 0 }}>
          <Close />
        </IconButton>
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
      <Button type='submit' variant='contained' sx={{ width: '100%', gap: 2, px: 3 }} className='button--red'>
        Continue
      </Button>
    </Stack>
  )
}
