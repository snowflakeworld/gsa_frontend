import { type FC } from 'react'

import { Radio, RadioProps, styled } from '@mui/material'

import { gsaColors } from '@/theme'

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow: 'inset 0 0 0 1px rgba(170, 170, 170, 0.4)',
  backgroundColor: gsaColors.radio.normal.light,
  'input:hover ~ &': {
    backgroundColor: gsaColors.radio.normal.light,
    ...theme.applyStyles('dark', {
      backgroundColor: gsaColors.radio.normal.dark
    })
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: gsaColors.radio.disabled.light,
    ...theme.applyStyles('dark', {
      background: gsaColors.radio.disabled.dark
    })
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 0 1px rgb(38 38 38 / 60%)',
    backgroundColor: gsaColors.radio.normal.dark
  })
}))

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: gsaColors.background.red.normal,
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: gsaColors.background.red.normal
  },
  ...theme.applyStyles('dark', {
    backgroundColor: gsaColors.background.red.normal
  })
}))

export const BpRadio: FC<RadioProps> = ({ ...props }) => {
  return <Radio disableRipple color='default' checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />
}
