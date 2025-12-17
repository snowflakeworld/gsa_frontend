import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import { IconButton, useColorScheme } from '@mui/material'
import { useCallback, useMemo } from 'react'

const ColorModeButton = () => {
  const { mode, systemMode, setMode } = useColorScheme()
  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  const handleClick = useCallback(() => {
    setMode(resolvedMode === 'dark' ? 'light' : 'dark')
  }, [resolvedMode, setMode])

  const icon = useMemo(
    () =>
      resolvedMode === 'dark' ? (
        <LightModeOutlined className='size--big' />
      ) : (
        <DarkModeOutlined className='size--big' />
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

export default ColorModeButton
