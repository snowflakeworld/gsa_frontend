import { type FC, useState } from 'react'

import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputBase,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Stack,
  Typography
} from '@mui/material'

import { CustomIcon, StyledImage } from '@/components/Common'
import { ADD_ITEM_TYPES } from '@/constants'
import { useDeviceType } from '@/hooks'

interface AddItemProps {
  img: string
  name: string
}

export const AddItem: FC<AddItemProps> = ({ img, name }) => {
  const [cardServiceOption, setCardServiceOption] = useState<string>(ADD_ITEM_TYPES[0])
  const { isLargeScreen } = useDeviceType()

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'table.header.background',
        boxShadow: 'none'
      }}
    >
      <Stack>
        <Card
          sx={{
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.cardItem',
            boxShadow: 'none',
            py: 1.5,
            pl: 1.5,
            pr: isLargeScreen ? 2 : 1.5
          }}
        >
          <Stack direction='row' gap={1}>
            <Stack direction='row' alignItems='center' gap={1} flex={42}>
              <StyledImage
                src={`/assets/images/${img}`}
                width='1.875rem'
                height='2.5rem'
                alt='Item Image'
                loading='lazy'
                borderRadius='4px'
              />
              <Typography variant='caption' fontWeight={600} fontSize='0.875rem' lineHeight='1.25rem' flexGrow={42}>
                {name}
              </Typography>
            </Stack>
            <FormControl sx={{ flex: 31 }}>
              <Select
                variant='outlined'
                displayEmpty
                value={cardServiceOption}
                onChange={e => setCardServiceOption(e.target.value)}
                input={<OutlinedInput sx={{ py: 0 }} />}
                inputProps={{ 'aria-label': 'Select Card Service' }}
                sx={{
                  height: '2.5rem',
                  '& .MuiSelect-select': { py: 0 },
                  borderColor: 'divider'
                }}
              >
                <MenuItem disabled value=''>
                  Select Card Service
                </MenuItem>
                {ADD_ITEM_TYPES.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Stack direction='row' gap={1} flex={22} alignItems='center'>
              <Paper
                component='form'
                sx={{
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'background.cardItem',
                  boxShadow: 'none',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, pr: 1 }}
                  placeholder='0'
                  inputProps={{ 'aria-label': '0' }}
                  startAdornment={
                    <InputAdornment position='start'>
                      <Typography variant='caption' fontSize='0.875rem' color='text.normal'>
                        $
                      </Typography>
                    </InputAdornment>
                  }
                />
              </Paper>
              {isLargeScreen ? (
                <Button variant='contained' className='button-alpha--red button--small'>
                  <CustomIcon
                    name='delete'
                    colorMode='stroke'
                    width={16}
                    height={16}
                    viewBoxWidth={11}
                    viewBoxHeight={14}
                    color='tertiary'
                  />
                </Button>
              ) : (
                <></>
              )}
            </Stack>
          </Stack>
        </Card>
        <Stack gap={isLargeScreen ? 3 : 2} px={1.5} py={1}>
          <Stack direction='row' alignItems={isLargeScreen ? 'center' : 'flex-start'} gap={isLargeScreen ? 3 : 2}>
            <Typography
              variant='caption'
              fontSize='0.625rem'
              lineHeight='100%'
              color='text.normal'
              pt={isLargeScreen ? 0 : 1}
            >
              Adv. Options:
            </Typography>
            <Stack direction={isLargeScreen ? 'row' : 'column'} gap={isLargeScreen ? 2 : 0.5}>
              <FormControlLabel
                control={<Checkbox size='small' name='encapsulate' />}
                label='Encapsulate all if altered'
              />
              <FormControlLabel control={<Checkbox size='small' name='oversize' />} label='Oversized item' />
              <FormControlLabel control={<Checkbox size='small' name='authentic' />} label='Authentic' />
            </Stack>
          </Stack>
          {!isLargeScreen && (
            <Button
              variant='contained'
              className='button-alpha--red'
              startIcon={
                <CustomIcon
                  name='delete'
                  colorMode='stroke'
                  width={16}
                  height={16}
                  viewBoxWidth={11}
                  viewBoxHeight={14}
                  color='tertiary'
                />
              }
              sx={{ gap: 0.5 }}
            >
              Remove
            </Button>
          )}
        </Stack>
      </Stack>
    </Card>
  )
}
