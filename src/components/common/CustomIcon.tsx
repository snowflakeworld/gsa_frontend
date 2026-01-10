import { SvgIcon } from '@mui/material'
import { FC, memo } from 'react'

import { gsaIconColors } from '@/theme/themePrimitives'

import EmptyItemDark from '&/assets/images/empty-item-dark.svg'
import EmptyItemLight from '&/assets/images/empty-item-light.svg'
import EmptyOrderDark from '&/assets/images/empty-order-dark.svg'
import EmptyOrderLight from '&/assets/images/empty-order-light.svg'
import EmptyProgressDark from '&/assets/images/empty-progress-dark.svg'
import EmptyProgressLight from '&/assets/images/empty-progress-light.svg'
import Add from '&/assets/images/icons/add.svg'
import BulkSubmission from '&/assets/images/icons/bulk-submission.svg'
import Chain from '&/assets/images/icons/chain.svg'
import ChevronDownOutline from '&/assets/images/icons/chevron-down-outline.svg'
import Close from '&/assets/images/icons/close.svg'
import Delete from '&/assets/images/icons/delete.svg'
import DetailGrading from '&/assets/images/icons/detail-grading.svg'
import Detail from '&/assets/images/icons/detail.svg'
import Edit from '&/assets/images/icons/edit.svg'
import Eye from '&/assets/images/icons/eye.svg'
import Menu from '&/assets/images/icons/menu.svg'
import MoonIcon from '&/assets/images/icons/moon.svg'
import PersonCircle from '&/assets/images/icons/person-circle.svg'
import SecurePackaging from '&/assets/images/icons/secure-packaging.svg'
import StarBig from '&/assets/images/icons/star-big.svg'
import StarSmall from '&/assets/images/icons/star-small.svg'
import SubmissionGradingComic from '&/assets/images/icons/submission-grading-comic.svg'
import SubmissionGradingStandard from '&/assets/images/icons/submission-grading-standard.svg'
import SubmissionGradingTcg from '&/assets/images/icons/submission-grading-tcg.svg'
import SubmissionGradingTopps from '&/assets/images/icons/submission-grading-topps.svg'
import Submit from '&/assets/images/icons/submit.svg'
import SunIcon from '&/assets/images/icons/sun.svg'
import TwoStars from '&/assets/images/icons/two-stars.svg'
import Uv from '&/assets/images/icons/uv.svg'
import VerifiedIcon from '&/assets/images/icons/verified.svg'
import LogoIcon from '&/assets/images/logo.svg'
import SMarkIcon from '&/assets/images/smark.svg'

export const ICONS_MAP = {
  add: Add,
  bulkSubmission: BulkSubmission,
  chevronDownOutline: ChevronDownOutline,
  chain: Chain,
  close: Close,
  delete: Delete,
  detail: Detail,
  detailGrading: DetailGrading,
  edit: Edit,
  emptyItemDark: EmptyItemDark,
  emptyItemLight: EmptyItemLight,
  emptyOrderDark: EmptyOrderDark,
  emptyOrderLight: EmptyOrderLight,
  emptyProgressDark: EmptyProgressDark,
  emptyProgressLight: EmptyProgressLight,
  eye: Eye,
  logo: LogoIcon,
  menu: Menu,
  moon: MoonIcon,
  personCircle: PersonCircle,
  securePackaging: SecurePackaging,
  smark: SMarkIcon,
  starBig: StarBig,
  starSmall: StarSmall,
  submissionGradingComic: SubmissionGradingComic,
  submissionGradingStandard: SubmissionGradingStandard,
  submissionGradingTcg: SubmissionGradingTcg,
  submissionGradingTopps: SubmissionGradingTopps,
  submit: Submit,
  sun: SunIcon,
  twoStars: TwoStars,
  uv: Uv,
  verified: VerifiedIcon
}

export type IconType = keyof typeof ICONS_MAP | string

export type IconColor = keyof typeof gsaIconColors

export type IconColorType = 'fill' | 'stroke'

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
  colorMode?: IconColorType | undefined
}

const CustomIconComponent: FC<CustomIconProps> = ({
  name,
  position = 'initial',
  width = '18px',
  height = '18px',
  viewBoxWidth = '14',
  viewBoxHeight = '14',
  color = undefined,
  colorMode = 'fill',
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
      sx={{
        ...{
          width: { width },
          height: { height },
          position: position,
          rotate: rotate,
          '& path': {
            ...(colorMode === 'stroke'
              ? { stroke: color && gsaIconColors[color], fill: 'none' }
              : { fill: color && gsaIconColors[color] })
          }
        },
        ...posParams
      }}
    />
  )
}

export const CustomIcon = memo(CustomIconComponent)
