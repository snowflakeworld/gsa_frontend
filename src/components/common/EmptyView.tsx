import { useDeviceType } from '@/hooks'
import { Paper } from '@mui/material'
import { FC, ReactNode } from 'react'

type EmptyType = 'item' | 'progress' | 'order'

interface EmptyViewProps {
  type: EmptyType
  children: ReactNode
}

export const EmptyView: FC<EmptyViewProps> = ({ type, children }) => {
  const { isMobile, isTablet } = useDeviceType()

  const isScreenSmall = isMobile || isTablet

  return <Paper sx={{ minHeight: !isScreenSmall ? '31.25rem' : '13.65rem' }}></Paper>
}
