import { type FC } from 'react'

import { Card, Stack, Typography, useColorScheme } from '@mui/material'

import { useCreateSubmissionSelectContext } from '@/hooks'
import { gsaColors, gsaShadows } from '@/theme'
import { BpRadio, CustomIcon, type IconColorType } from '../Common'

interface GradingTypeItemProps {
  index: number
  title: string
  content: string
  icon: string
  viewBoxWidth: number
  viewBoxHeight: number
  colorMode: string
  onSelect: () => void
}

export const GradingTypeItem: FC<GradingTypeItemProps> = ({
  index,
  title,
  content,
  icon,
  viewBoxWidth,
  viewBoxHeight,
  colorMode,
  onSelect
}) => {
  const { mode } = useColorScheme()
  const { gradingIdx, selectGradingIdix } = useCreateSubmissionSelectContext()

  const isSelected = gradingIdx === index

  const handleSelect = () => {
    selectGradingIdix(index)
    onSelect()
  }

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: '1px solid',
        borderColor: isSelected ? 'border.red' : 'border.card',
        backgroundColor: isSelected ? gsaColors.background.red.alpha : 'background.card',
        boxShadow: gsaShadows.xs,
        gap: 1,
        paddingLeft: 1,
        paddingRight: 2,
        py: 1.5,
        '&:hover': {
          backgroundColor: isSelected ? gsaColors.background.red.alphaMedium : 'background.overlay'
        },
        cursor: 'pointer'
      }}
      onClick={handleSelect}
    >
      <Stack direction='row' alignItems='center' gap={1}>
        <Stack width='2.25rem' height='2.25rem' alignItems='center' justifyContent='center'>
          <CustomIcon
            name={icon}
            {...(!isSelected ? { color: mode === 'dark' ? 'secondary' : 'dark' } : { color: 'tertiary' })}
            colorMode={colorMode as IconColorType}
            width='1rem'
            height='1rem'
            viewBoxWidth={viewBoxWidth}
            viewBoxHeight={viewBoxHeight}
          />
        </Stack>
        <Stack gap={0.25} flexGrow={1}>
          <Typography
            variant='h6'
            fontSize='0.875rem'
            lineHeight='1.25rem'
            {...(isSelected ? { color: 'text.red' } : {})}
          >
            {title}
          </Typography>
          <Typography
            variant='caption'
            fontWeight={400}
            fontSize='0.75rem'
            lineHeight='100%'
            color={isSelected ? 'text.red' : 'text.normal'}
          >
            {content}
          </Typography>
        </Stack>
        <BpRadio checked={index === gradingIdx ? true : false} onClick={handleSelect} />
      </Stack>
    </Card>
  )
}
