import { FC, ReactNode, useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { colorSchemes, typography } from "./themePrimitives";
import { customizations } from "./customization";

interface AppThemeProps {
  children: ReactNode;
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
      borderRadius: 8,
    },

    defaultColorScheme: 'light'

  })

export const AppTheme: FC<AppThemeProps> = (({ children }) => {
  const theme = useMemo(() => createAppTheme(), []);

  return (
    <ThemeProvider defaultMode='dark' theme={theme} >
      <CssBaseline />
      {children}
    </ThemeProvider>);
});