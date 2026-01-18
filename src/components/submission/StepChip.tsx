import { type FC, memo } from 'react'

import { Avatar, Chip } from '@mui/material'

import { useDeviceType } from '@/hooks'

type StepType = 'initial' | 'active' | 'completed'

interface StepChipProps {
  idx: number
  title: string
  status?: StepType
}

const StepChipComponent: FC<StepChipProps> = ({ idx, title, status = 'initial' }) => {
  const { isSmallScreen } = useDeviceType()

  let backgroundColor = 'chip.background.primary'
  let borderColor = 'chip.border.primary'
  let textColor = 'chip.text.primary'
  let avatarBackgroundColor = 'chip.avatar.background.primary'
  let avatarTextColor = 'chip.avatar.text.primary'

  switch (status) {
    case 'initial':
      backgroundColor = 'chip.background.primary'
      borderColor = 'chip.border.primary'
      textColor = 'chip.text.primary'
      avatarBackgroundColor = 'chip.avatar.background.primary'
      avatarTextColor = 'chip.avatar.text.primary'
      break
    case 'active':
      backgroundColor = 'chip.background.secondary'
      borderColor = 'chip.border.secondary'
      textColor = 'chip.text.secondary'
      avatarBackgroundColor = 'chip.avatar.background.secondary'
      avatarTextColor = 'chip.avatar.text.secondary'
      break
    case 'completed':
    default:
      backgroundColor = 'chip.background.secondary'
      borderColor = 'chip.border.tertiary'
      textColor = 'chip.text.tertiary'
      avatarBackgroundColor = 'chip.avatar.background.tertiary'
      avatarTextColor = 'chip.avatar.text.tertiary'
      break
  }

  return isSmallScreen && status !== 'active' ? (
    <Chip
      avatar={<Avatar>{idx + 1}</Avatar>}
      variant='filled'
      sx={{
        width: 26,
        height: 26,
        borderRadius: '50%',
        border: '1px solid',
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        '& .MuiChip-avatar': {
          width: 18,
          height: 18,
          margin: 0,
          backgroundColor: avatarBackgroundColor,
          color: avatarTextColor
        },
        '& .MuiChip-label': {
          paddingLeft: 0, // remove label padding
          paddingRight: 0
        }
      }}
    />
  ) : (
    <Chip
      avatar={<Avatar>{idx + 1}</Avatar>}
      variant='filled'
      label={title}
      sx={{
        height: 26,
        backgroundColor: backgroundColor,
        borderRadius: '20px',
        border: '1px solid',
        borderColor: borderColor,
        '& .MuiChip-avatar': {
          width: 18,
          height: 18,
          backgroundColor: avatarBackgroundColor,
          color: avatarTextColor
        },
        '& .MuiChip-label': {
          color: textColor,
          fontSize: '0.75rem',
          lineHeight: '1.125rem'
        }
      }}
    />
  )
}

export const StepChip = memo(StepChipComponent)
