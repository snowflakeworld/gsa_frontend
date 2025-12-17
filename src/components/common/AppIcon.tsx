import { SvgIcon } from '@mui/material'
import { FC, memo } from 'react'

import { gsaIconColors } from '@/theme/themePrimitives'

import LogoIcon from '&/assets/images/logo.svg'
import MoonIcon from '&/assets/images/moon.svg'
import SubmitIcon from '&/assets/images/submit.svg'
import SunIcon from '&/assets/images/sun.svg'
import StarBig from '&/assets/images/star-big.svg'
import StarSmall from '&/assets/images/star-small.svg'

export const ICONS_MAP = {
  logo: LogoIcon,
  submit: SubmitIcon,
  sun: SunIcon,
  moon: MoonIcon,
  starBig: StarBig,
  starSmall: StarSmall
}

export type IconType = keyof typeof ICONS_MAP

export type IconColor = keyof typeof gsaIconColors

export interface AppIconProps {
  name: IconType
  position?: string
  width?: number | string
  height?: number | string
  viewBoxWidth: number
  viewBoxHeight: number
  color?: IconColor
  rotate?: number | string
  top?: number | string | undefined
  left?: number | string | undefined
  right?: number | string | undefined
  bottom?: number | string | undefined
}

const InitAppIcon: FC<AppIconProps> = ({ name, position = 'initial', width = 'auto', height = 'auto', viewBoxWidth, viewBoxHeight, color = undefined, rotate = 0, top = undefined, left = undefined, right = undefined, bottom = undefined }) => {
  const IconComponent = ICONS_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  let posParams = {}

  if (position === 'absolute') {
    if (top !== undefined)
      posParams = { ...posParams, ...{ top: top } }
    if (left !== undefined)
      posParams = { ...posParams, ...{ left: left } }
    if (right !== undefined)
      posParams = { ...posParams, ...{ right: right } }
    if (bottom !== undefined)
      posParams = { ...posParams, ...{ bottom: bottom } }
  }

  return (
    <SvgIcon
      component={IconComponent}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fontSize='inherit'
      sx={{
        ...{
          width: width,
          height: height,
          position: position,
          rotate: rotate,
          '& path': {
            fill: color && gsaIconColors[color]
          }
        },
        ...posParams
      }}
    />
  )
}

export const AppIcon = memo(InitAppIcon)
