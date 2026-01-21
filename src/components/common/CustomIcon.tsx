import { type FC, lazy, memo } from 'react'

import { SvgIcon } from '@mui/material'

import { gsaIconColors } from '@/theme/themePrimitives'

const Add = lazy(() => import('&/assets/images/icons/add.svg'))
const EmptyProgressLight = lazy(() => import('&/assets/images/empty-progress-light.svg'))
const EmptyProgressDark = lazy(() => import('&/assets/images/empty-progress-dark.svg'))
const EmptyOrderLight = lazy(() => import('&/assets/images/empty-order-light.svg'))
const EmptyOrderDark = lazy(() => import('&/assets/images/empty-order-dark.svg'))
const EmptyItemLight = lazy(() => import('&/assets/images/empty-item-light.svg'))
const EmptyItemDark = lazy(() => import('&/assets/images/empty-item-dark.svg'))
const LogoIcon = lazy(() => import('&/assets/images/logo.svg'))
const SMarkIcon = lazy(() => import('&/assets/images/smark.svg'))
const BulkSubmission = lazy(() => import('&/assets/images/icons/bulk-submission.svg'))
const Chain = lazy(() => import('&/assets/images/icons/chain.svg'))
const ChevronDownOutline = lazy(() => import('&/assets/images/icons/chevron-down-outline.svg'))
const Close = lazy(() => import('&/assets/images/icons/close.svg'))
const Delete = lazy(() => import('&/assets/images/icons/delete.svg'))
const DetailGrading = lazy(() => import('&/assets/images/icons/detail-grading.svg'))
const Detail = lazy(() => import('&/assets/images/icons/detail.svg'))
const Edit = lazy(() => import('&/assets/images/icons/edit.svg'))
const Eye = lazy(() => import('&/assets/images/icons/eye.svg'))
const Menu = lazy(() => import('&/assets/images/icons/menu.svg'))
const MoonIcon = lazy(() => import('&/assets/images/icons/moon.svg'))
const PersonCircle = lazy(() => import('&/assets/images/icons/person-circle.svg'))
const SecurePackaging = lazy(() => import('&/assets/images/icons/secure-packaging.svg'))
const StarBig = lazy(() => import('&/assets/images/icons/star-big.svg'))
const StarSmall = lazy(() => import('&/assets/images/icons/star-small.svg'))
const SubmissionGradingComic = lazy(() => import('&/assets/images/icons/submission-grading-comic.svg'))
const SubmissionGradingStandard = lazy(() => import('&/assets/images/icons/submission-grading-standard.svg'))
const SubmissionGradingTcg = lazy(() => import('&/assets/images/icons/submission-grading-tcg.svg'))
const SubmissionGradingTopps = lazy(() => import('&/assets/images/icons/submission-grading-topps.svg'))
const Submit = lazy(() => import('&/assets/images/icons/submit.svg'))
const SunIcon = lazy(() => import('&/assets/images/icons/sun.svg'))
const TwoStars = lazy(() => import('&/assets/images/icons/two-stars.svg'))
const Uv = lazy(() => import('&/assets/images/icons/uv.svg'))
const VerifiedIcon = lazy(() => import('&/assets/images/icons/verified.svg'))

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

interface CustomIconProps {
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
