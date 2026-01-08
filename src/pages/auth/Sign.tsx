import { useDeviceType } from '@/hooks/useDeviceType'
import { Logo } from '@/layout/Logo'
import { Email } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Card, Container, FormControl, Stack, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const defaultValues = {
  email: ''
}

const schema = yup.object().shape({
  email: yup.string().required('form.email-required').email('form.email-invalid')
})

const onSubmit = async (data: Email) => {}

export const Sign = () => {
  const { isMobile } = useDeviceType()

  const { control, handleSubmit } = useForm<Email>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  return (
    <Box
      sx={{
        backgroundColor: 'background.overlay',
        minHeight: '100vh'
      }}
    >
      <Container sx={{ height: '100vh', paddingTop: 10, paddingBottom: 0 }}>
        <Stack width='100%' height='100%'>
          <Card
            sx={{
              minWidth: !isMobile ? '31.25rem' : '100%',
              borderRadius: 3,
              border: 'none',
              backgroundColor: 'background.card',
              boxShadow: 'none',
              padding: { xs: 3, md: 4 },
              margin: 'auto'
            }}
          >
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
              </Stack>
              <FormControl>
                <Controller
                  name='email'
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      variant='filled'
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
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
