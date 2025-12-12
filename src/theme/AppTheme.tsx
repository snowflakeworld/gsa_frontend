import { ReactNode, useMemo } from 'react'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

interface AppThemeProps {
  children: ReactNode
}

export const AppTheme = (props: AppThemeProps) => {
  const { children } = props
  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: 'data-mui-color-scheme',
          cssVarPrefix: 'template'
        },
        defaultColorScheme: 'dark'
      }),
    []
  )

  return (
    <ThemeProvider defaultMode='dark' theme={theme} disableTransitionOnChange>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
