import { SvgIcon } from '@mui/material'
import { FC, memo } from 'react'

import { gsaIconColors } from '@/theme/themePrimitives'

import Chain from '&/assets/images/chain.svg'
import ChevronDownOutline from '&/assets/images/chevron-down-outline.svg'
import Eye from '&/assets/images/eye.svg'
import LogoIcon from '&/assets/images/logo.svg'
import MoonIcon from '&/assets/images/moon.svg'
import StarBig from '&/assets/images/star-big.svg'
import StarSmall from '&/assets/images/star-small.svg'
import SubmitIcon from '&/assets/images/submit.svg'
import SunIcon from '&/assets/images/sun.svg'
import TwoStars from '&/assets/images/two-stars.svg'
import Uv from '&/assets/images/uv.svg'

export const ICONS_MAP = {
  logo: LogoIcon,
  submit: SubmitIcon,
  sun: SunIcon,
  moon: MoonIcon,
  starBig: StarBig,
  starSmall: StarSmall,
  chevronDownOutline: ChevronDownOutline,
  chain: Chain,
  eye: Eye,
  twoStars: TwoStars,
  uv: Uv
}

export type IconType = keyof typeof ICONS_MAP | string

export type IconColor = keyof typeof gsaIconColors

export interface CustomIconProps {
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
  className?: string | undefined
}

const CustomIconComponent: FC<CustomIconProps> = ({
  name,
  position = 'initial',
  width = 'auto',
  height = 'auto',
  viewBoxWidth,
  viewBoxHeight,
  color = undefined,
  rotate = 0,
  top = undefined,
  left = undefined,
  right = undefined,
  bottom = undefined,
  className = undefined
}) => {
  const IconComponent = ICONS_MAP[name as keyof typeof ICONS_MAP]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  let posParams = {}

  if (position === 'absolute') {
    posParams = top ? { ...posParams, ...{ top: top } } : posParams
    posParams = left ? { ...posParams, ...{ left: left } } : posParams
    posParams = right ? { ...posParams, ...{ right: right } } : posParams
    posParams = bottom ? { ...posParams, ...{ bottom: bottom } } : posParams
  }

  return (
    <SvgIcon
      className={className}
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

export const CustomIcon = memo(CustomIconComponent)
