import { type FC, ReactNode, useMemo } from 'react'

import { createTheme, CssBaseline, ThemeProvider, useColorScheme } from '@mui/material'

import { customizations } from './customization'
import { colorSchemes, typography } from './themePrimitives'

interface AppThemeProps {
  children: ReactNode
}

const createAppTheme = () =>
  createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-mui-color-scheme',
      cssVarPrefix: 'template'
    },
    colorSchemes,
    typography,
    components: customizations,

    spacing: 8,

    shape: {
      borderRadius: 8
    },

    defaultColorScheme: 'light'
  })

export const AppTheme: FC<AppThemeProps> = ({ children }) => {
  const { mode, systemMode } = useColorScheme()
  const resolvedMode = (systemMode || mode) as 'light' | 'dark'
  const theme = useMemo(() => createAppTheme(), [resolvedMode])

  return (
    <ThemeProvider defaultMode='dark' theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
