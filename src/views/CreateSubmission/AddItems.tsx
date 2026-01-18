import { NoDataView, SearchBox } from '@/components'
import { AddItem, StepButtonGroup } from '@/components/Submission'
import { ADD_ITEMS } from '@/constants'
import { ActiveStepContext } from '@/pages'
import { gsaColors } from '@/theme'
import { Card, Checkbox, FormControlLabel, List, Stack, Typography } from '@mui/material'
import { useContext } from 'react'

export const AddItems = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext)!

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Stack gap={3}>
      <Stack gap={0.5}>
        <Typography variant='h5'>Add Your Items</Typography>
        <Typography variant='caption' color='text.normal' fontSize='0.875rem' lineHeight='100%'>
          Add items you want to submit to GSA for grading
        </Typography>
      </Stack>
      <Stack gap={1}>
        <SearchBox placeHolder='Search for cards' />
        <Typography
          variant='caption'
          fontWeight={400}
          fontSize='0.75rem'
          lineHeight='0.9rem'
          sx={{ color: 'text.normal', wordWrap: 'break-word' }}
        >
          Start with the player name and card number. Then add any inserts and/or parallels, if applicable. It doesn't
          matter if your card doesn't show up in the search results. Simply enter the year, manufacturer, card number,
          player name, insert and/or parallel to your ability. Then select the "Click Here To Add Your Card" link below.
          Please note, during processing, SGC will correct any inaccuracies so that all cards are labeled correctly.
        </Typography>
        <Typography
          variant='caption'
          fontWeight={500}
          fontSize='0.75rem'
          lineHeight='1.125rem'
          sx={{
            color: gsaColors.text.red,
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': { color: gsaColors.text.redAlpha }
          }}
        >
          Show Pricing Table
        </Typography>
      </Stack>
      <Stack gap={1}>
        <Card
          sx={{
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'table.header.background',
            boxShadow: 'none',
            px: 1.5,
            py: 0.5
          }}
        >
          <Stack gap={1}>
            <Stack direction='row'>
              <Typography variant='caption' fontSize='0.75rem' lineHeight='100%' color='text.normal' flex={42}>
                Items
              </Typography>
              <Typography variant='caption' fontSize='0.75rem' lineHeight='100%' color='text.normal' flex={31}>
                Card Service
              </Typography>
              <Typography variant='caption' fontSize='0.75rem' lineHeight='100%' color='text.normal' flex={22}>
                Decl. Value
              </Typography>
            </Stack>
          </Stack>
        </Card>

        <NoDataView type='item' size='small'>
          No item added
        </NoDataView>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 0 }}>
          {ADD_ITEMS.map((item, index) => (
            <AddItem key={index} {...item} />
          ))}
        </List>

        <FormControlLabel
          control={<Checkbox size='small' name='encapsulate-all' />}
          label='Encapsulate all if altered'
        />
      </Stack>
      <StepButtonGroup onBack={handlePrev} onNext={handleNext} />
    </Stack>
  )
}
