import { Button, Stack } from '@mui/material'
import { FC } from 'react'

interface StepButtonGroupProps {
  backTitle?: string
  backVisible?: boolean
  backEnabled?: boolean
  nextTitle?: string
  nextVisible?: boolean
  nextEnabled?: boolean
  onBack?: () => void
  onNext?: () => void
}

export const StepButtonGroup: FC<StepButtonGroupProps> = ({
  backTitle = 'Back',
  backVisible = true,
  backEnabled = true,
  nextTitle = 'Continue',
  nextVisible = true,
  nextEnabled = true,
  onBack,
  onNext
}) => {
  return (
    <Stack flexDirection='row' justifyContent='space-between'>
      <Button
        variant='contained'
        sx={{
          height: 40,
          gap: 1,
          px: 2,
          width: 'fit-content',
          textWrap: 'nowrap',
          flexWrap: 'nowrap',
          minWidth: '6.875rem',
          visibility: backVisible ? 'visible' : 'hidden'
        }}
        className='button--secondary button--small'
        disabled={!backEnabled}
        onClick={onBack}
      >
        {backTitle}
      </Button>
      <Button
        variant='contained'
        sx={{
          height: 40,
          gap: 1,
          px: 2,
          width: 'fit-content',
          textWrap: 'nowrap',
          flexWrap: 'nowrap',
          minWidth: '6.875rem',
          visibility: nextVisible ? 'visible' : 'hidden'
        }}
        className={nextEnabled ? 'button--red button--small' : 'button-disabled--red button--small'}
        disabled={!nextEnabled}
        onClick={onNext}
      >
        {nextTitle}
      </Button>
    </Stack>
  )
}
