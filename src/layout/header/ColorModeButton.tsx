import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import { IconButton, useColorScheme } from '@mui/material'
import { useCallback, useMemo } from 'react'

export const ColorModeButton = () => {
  const { mode, systemMode, setMode } = useColorScheme()
  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  const handleClick = useCallback(() => {
    setMode(resolvedMode === 'dark' ? 'light' : 'dark')
  }, [resolvedMode, setMode])

  const icon = useMemo(
    () =>
      resolvedMode === 'dark' ? (
        <LightModeOutlined sx={{ fontSize: '1.5rem' }} />
      ) : (
        <DarkModeOutlined sx={{ fontSize: '1.5rem' }} />
      ),
    [resolvedMode]
  )

  return (
    <IconButton
      data-screenshot='toggle-mode'
      size='small'
      aria-label={`Toggle ${resolvedMode === 'dark' ? 'light' : 'dark'} mode`}
      onClick={handleClick}
    >
      {icon}
    </IconButton>
  )
}
