import { StyledImage } from '@/components'
import { useDeviceType } from '@/hooks'
import { CheckOutlined, DriveFileRenameOutlineOutlined } from '@mui/icons-material'
import { Button, InputAdornment, InputBase, Paper, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export const AccountHomePage = () => {
  const [editMode, setEditMode] = useState(false)
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return (
    <Stack gap={!isScreenSmall ? 4 : 2}>
      <Stack gap={!isScreenSmall ? 1.5 : 1}>
        <Typography variant='h4'>My Account</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Personailze your account
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Stack>
          <Stack gap={1.5} py={!isScreenSmall ? 1.5 : 0}>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
              Profile picture
            </Typography>
            <StyledImage
              src={`/assets/images/avatar.png`}
              width='7.5rem'
              height='7.5rem'
              alt='Avatar Image'
              loading='lazy'
              margin='none'
              borderRadius='8px'
            />
          </Stack>
          <Stack flexDirection={!isScreenSmall ? 'row' : 'column'} gap={!isScreenSmall ? 5 : 0}>
            <Stack flex={1}>
              <Stack gap={1.5} py={1.5}>
                <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
                  Customer number
                </Typography>
                <Paper
                  component='form'
                  sx={{
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  <InputBase
                    sx={{ width: '100%', px: 2.5, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
                    placeholder='Customer number'
                    value='12345678'
                  />
                </Paper>
              </Stack>
              <Stack gap={1.5} py={1.5} flex={1}>
                <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
                  Name
                </Typography>
                <Paper
                  component='form'
                  sx={{
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  <InputBase
                    sx={{ width: '100%', px: 2.5, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
                    placeholder='Name'
                    value='irvan Wibowo'
                  />
                </Paper>
              </Stack>
            </Stack>
            <Stack flex={1}>
              <Stack gap={1.5} py={1.5}>
                <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
                  Email
                </Typography>
                <Paper
                  component='form'
                  sx={{
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  <InputBase
                    sx={{ width: '100%', px: 2.5, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
                    placeholder='Email'
                    value='irvanwibowo@gmail.com'
                  />
                </Paper>
              </Stack>
              <Stack flexDirection='row' gap={1.25}>
                <Stack gap={1.5} py={1.5} flex={1}>
                  <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
                    Phone number
                  </Typography>
                  <Paper
                    component='form'
                    sx={{
                      height: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <InputBase
                      sx={{ width: '100%', px: 2.5, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
                      placeholder='Phone'
                      startAdornment={
                        <InputAdornment position='start'>
                          <Typography variant='caption' fontSize='1rem' color='text.primary'>
                            +1
                          </Typography>
                        </InputAdornment>
                      }
                      value='769345180'
                    />
                  </Paper>
                </Stack>
                <Stack gap={1.5} py={1.5} width={!isScreenSmall ? '10rem' : '6.25rem'}>
                  <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
                    Country
                  </Typography>
                  <Paper
                    component='form'
                    sx={{
                      height: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <InputBase
                      sx={{ width: '100%', px: 2.5, py: 1.5, fontSize: '1rem', fontWeight: 500 }}
                      placeholder='Country'
                      value='USA'
                    />
                  </Paper>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack flexDirection='row' justifyContent={editMode ? 'space-between' : 'flex-end'}>
          {editMode ? (
            <Button
              variant='contained'
              sx={{ gap: 1, width: 'auto', px: 4 }}
              className='button--primary button--small'
              onClick={() => setEditMode(false)}
            >
              Back
            </Button>
          ) : (
            <></>
          )}
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 2 }}
            startIcon={
              editMode ? <CheckOutlined fontSize='small' /> : <DriveFileRenameOutlineOutlined fontSize='small' />
            }
            className='button--red button--small'
            onClick={() => setEditMode(state => !state)}
          >
            {editMode ? 'Save changes' : 'Edit'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
