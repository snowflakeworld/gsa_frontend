import { SvgIcon } from '@mui/material'
import { FC, memo } from 'react'

import { gsaIconColors } from '@/theme/themePrimitives'

import Chain from '&/assets/images/icons/chain.svg'
import ChevronDownOutline from '&/assets/images/icons/chevron-down-outline.svg'
import Close from '&/assets/images/icons/close.svg'
import Detail from '&/assets/images/icons/detail.svg'
import Eye from '&/assets/images/icons/eye.svg'
import Menu from '&/assets/images/icons/menu.svg'
import MoonIcon from '&/assets/images/icons/moon.svg'
import PersonCircle from '&/assets/images/icons/person-circle.svg'
import StarBig from '&/assets/images/icons/star-big.svg'
import StarSmall from '&/assets/images/icons/star-small.svg'
import Submit from '&/assets/images/icons/submit.svg'
import SunIcon from '&/assets/images/icons/sun.svg'
import TwoStars from '&/assets/images/icons/two-stars.svg'
import Uv from '&/assets/images/icons/uv.svg'
import LogoIcon from '&/assets/images/logo.svg'

export const ICONS_MAP = {
  logo: LogoIcon,
  sun: SunIcon,
  moon: MoonIcon,
  starBig: StarBig,
  starSmall: StarSmall,
  chevronDownOutline: ChevronDownOutline,
  chain: Chain,
  eye: Eye,
  twoStars: TwoStars,
  uv: Uv,
  close: Close,
  detail: Detail,
  menu: Menu,
  personCircle: PersonCircle,
  submit: Submit
}

export type IconType = keyof typeof ICONS_MAP | string

export type IconColor = keyof typeof gsaIconColors

export interface CustomIconProps {
  name: IconType
  position?: string
  width?: number | string
  height?: number | string
  viewBoxWidth?: number | string
  viewBoxHeight?: number | string
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
  width = '18px',
  height = '18px',
  viewBoxWidth = '14',
  viewBoxHeight = '14',
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
      width={width}
      height={height}
      sx={{
        ...{
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
