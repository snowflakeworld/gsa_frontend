import { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Close } from '@mui/icons-material'
import { Button, FormControl, IconButton, Stack, TextField, Typography } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Logo } from '@/components/Common'
import { ROUTERS } from '@/configs'
import { StepContext } from '@/context/SignStep'
import { checkEmail, signIn } from '@/services'
import { dispatch, login } from '@/store'
import { EmailPassword } from '@/types'
import { handleError } from '@/utils'

const defaultValues = {
  email: '',
  password: ''
}

const schema = yup.object().shape({
  email: yup.string().required('form.email-required').email('form.email-invalid'),
  password: yup.string().default('')
})

export const SignIn = () => {
  const navigate = useNavigate()
  const { setStep } = useContext(StepContext)!
  const [emailChecked, setEmailChecked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const { control, handleSubmit } = useForm<EmailPassword>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    navigate(ROUTERS.Home)
  }

  const onSubmit = async (data: EmailPassword) => {
    setLoading(true)
    try {
      if (emailChecked) {
        // Check Email and Password
        const result = await signIn(data)
        dispatch(login(result))
        navigate(ROUTERS.Home)
      } else {
        // Check Email
        const result = await checkEmail({ email: data.email })
        if (!result?.status) {
          setStep(1)
        } else {
          setEmailChecked(true)
        }
      }
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Stack component='form' gap={{ xs: 3, md: 4 }} onSubmit={handleSubmit(onSubmit)}>
      <Stack position='relative' gap={1.2} alignItems='center'>
        <Typography variant='h5' fontSize='1rem' lineHeight='1rem'>
          {emailChecked ? 'Enter Password' : 'Welcome To'}
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
          {emailChecked
            ? 'Enter your password to login to your account'
            : 'Sign in or create an account by entering your email below'}
        </Typography>

        <IconButton aria-label='close' onClick={handleClose} sx={{ position: 'absolute', right: 0 }}>
          <Close />
        </IconButton>
      </Stack>

      <FormControl sx={{ display: emailChecked ? 'none' : 'inline-flex' }}>
        <Controller
          name='email'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant='filled'
              type='email'
              label='Email'
              size='medium'
              slotProps={{ input: { disableUnderline: true } }}
              error={Boolean(error)}
              {...field}
            />
          )}
        />
      </FormControl>

      <FormControl sx={{ display: emailChecked ? 'inline-flex' : 'none' }}>
        <Controller
          name='password'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant='filled'
              type='password'
              label='Password'
              size='medium'
              slotProps={{ input: { disableUnderline: true } }}
              error={Boolean(error)}
              {...field}
            />
          )}
        />
      </FormControl>

      <Button
        fullWidth
        type='submit'
        variant='contained'
        sx={{ gap: 2, px: 3 }}
        className='button--red'
        loading={loading}
        loadingPosition='start'
      >
        {emailChecked ? 'Verify' : 'Continue'}
      </Button>
    </Stack>
  )
}
