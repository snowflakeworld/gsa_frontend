import { SvgIcon } from '@mui/material'
import { FC, memo } from 'react'

import LogoIcon from '&/assets/images/logo.svg'
import MoonIcon from '&/assets/images/moon.svg'
import SubmitIcon from '&/assets/images/submit.svg'
import SunIcon from '&/assets/images/sun.svg'
import { gsaIconColors } from '@/theme/themePrimitives'

export const ICONS_MAP = {
  logo: LogoIcon,
  submit: SubmitIcon,
  sun: SunIcon,
  moon: MoonIcon
}

export type IconType = keyof typeof ICONS_MAP

export type IconColor = keyof typeof gsaIconColors

export interface AppIconProps {
  name: IconType
  width?: number | string
  height?: number | string
  color?: IconColor
}

const AppIcon: FC<AppIconProps> = ({ name, width = 'auto', height = 'auto', color = undefined }) => {
  const IconComponent = ICONS_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <SvgIcon
      component={IconComponent}
      fontSize='inherit'
      sx={{
        width: width,
        height: height,
        '& path': {
          fill: color && gsaIconColors[color]
        }
      }}
    />
  )
}

export default memo(AppIcon)
