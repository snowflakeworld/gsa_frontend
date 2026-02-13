import { useEffect, useState } from 'react'

import { CheckOutlined, DriveFileRenameOutlineOutlined, UploadFile } from '@mui/icons-material'
import { Button, InputAdornment, Stack, Typography } from '@mui/material'

import { NormalTextInput, StyledImage } from '@/components'
import { useDeviceType } from '@/hooks'
import { getProfile, updateProfile } from '@/services'
import { uploadAvatar } from '@/services/fileUploadService'
import { AccountRes } from '@/types'
import { handleError, showToast } from '@/utils'

type CustomerInfoType = 'customerNumber' | 'username' | 'email' | 'phone' | 'country'

const AccountHomePage = () => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const { isLargeScreen } = useDeviceType()

  const [profile, setProfile] = useState<AccountRes | null>(null)
  const [customerNumber, setCustomerNumber] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [newAvatar, setNewAvatar] = useState<string>('default-avatar.png')
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    const profileData = await getProfile()
    setProfile(profileData)
    setCustomerNumber(profileData.uid)
    setUsername(profileData.username)
    setEmail(profileData.email)
    setPhone(profileData.phone)
    setCountry(profileData.country)
  }

  const handleDataChange = (type: CustomerInfoType, value: string) => {
    switch (type) {
      case 'customerNumber':
        setCustomerNumber(value)
        break
      case 'username':
        setUsername(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'country':
        setCountry(value)
        break
      default:
        break
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result) {
          setNewAvatar(reader.result as string)
        }
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleSave = async () => {
    if (editMode) {
      try {
        if (file) {
          // Implement the file upload logic here, e.g., using FormData and an API call
          const formData = new FormData()
          formData.append('file', file)

          const response = await uploadAvatar(formData)
          handleSaveProfile(response.avatar)
        } else {
          handleSaveProfile()
        }
      } catch (error) {
        handleError(error)
      } finally {
        // setLoading(false)
      }
    } else {
      setFile(null)
      setNewAvatar('')
    }
    setEditMode(editMode => !editMode)
  }

  const handleSaveProfile = async (avatar?: string) => {
    try {
      await updateProfile({ username, phone, country, avatar: avatar || null })
      showToast('Profile updated successfully', 'success')
    } catch (error) {
      handleError(error)
    } finally {
      //
    }
  }

  const handleBack = () => {
    if (profile) {
      setCustomerNumber(profile.uid)
      setUsername(profile.username)
      setEmail(profile.email)
      setPhone(profile.phone)
      setCountry(profile.country)
    }
    setEditMode(false)
  }

  return (
    <Stack gap={isLargeScreen ? 4 : 2}>
      <Stack gap={isLargeScreen ? 1.5 : 1}>
        <Typography variant='h4'>My Account</Typography>
        <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
          Personalize your account
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Stack>
          <Stack gap={1.5} py={isLargeScreen ? 1.5 : 0}>
            <Typography variant='caption' lineHeight='1.25rem' color='text.normal'>
              Profile picture
            </Typography>
            <Stack direction='row' gap={3} alignItems='center'>
              <StyledImage
                src={file && newAvatar ? newAvatar : `/assets/images/${profile?.avatar || 'default-avatar.png'}`}
                width='7.5rem'
                height='7.5rem'
                alt='Avatar Image'
                loading='lazy'
                margin='0'
                borderRadius='8px'
              />
              {editMode && (
                <>
                  <input
                    type='file'
                    accept='image/*'
                    id='upload-input'
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <label htmlFor='upload-input'>
                    <Button
                      variant='contained'
                      component='span'
                      sx={{ gap: 1, width: 'auto', px: 2 }}
                      startIcon={<UploadFile fontSize='small' />}
                      className='button--primary button--small'
                    >
                      Change Photo
                    </Button>
                  </label>
                </>
              )}
            </Stack>
          </Stack>
          <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 5 : 0}>
            <Stack flex={1}>
              <NormalTextInput
                label='Customer number'
                placeHolder='Customer number'
                dataType='customerNumber'
                defaultValue={customerNumber}
                editable={false}
                listener={handleDataChange}
              />
              <NormalTextInput
                label='Name'
                placeHolder='Name'
                dataType='username'
                defaultValue={username}
                flex={1}
                editable={editMode}
                listener={handleDataChange}
              />
            </Stack>
            <Stack flex={1}>
              <NormalTextInput
                label='Email'
                placeHolder='Email'
                type='email'
                dataType='email'
                defaultValue={email}
                editable={false}
                listener={handleDataChange}
              />
              <Stack direction='row' gap={1.25}>
                <NormalTextInput
                  label='Phone number'
                  placeHolder='Phone'
                  defaultValue={phone}
                  flex={1}
                  dataType='phone'
                  editable={editMode}
                  listener={handleDataChange}
                >
                  <InputAdornment position='start'>
                    <Typography variant='caption' fontSize='1rem' color='text.primary'>
                      +1
                    </Typography>
                  </InputAdornment>
                </NormalTextInput>
                <NormalTextInput
                  label='Country'
                  placeHolder='Country'
                  dataType='country'
                  defaultValue={country}
                  editable={editMode}
                  listener={handleDataChange}
                  width={isLargeScreen ? '10rem' : '6.25rem'}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent={editMode ? 'space-between' : 'flex-end'}>
          {editMode && (
            <Button
              variant='contained'
              sx={{ gap: 1, width: 'auto', px: 4 }}
              className='button--primary button--small'
              onClick={handleBack}
            >
              Back
            </Button>
          )}
          <Button
            variant='contained'
            sx={{ gap: 1, width: 'auto', px: 2 }}
            startIcon={
              editMode ? <CheckOutlined fontSize='small' /> : <DriveFileRenameOutlineOutlined fontSize='small' />
            }
            className='button--red button--small'
            onClick={handleSave}
          >
            {editMode ? 'Save changes' : 'Edit'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AccountHomePage
