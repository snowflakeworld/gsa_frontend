export const gsaColors = {
  background: {
    primary: {
      dark: '#19191B',
      light: '#FFFFFF'
    },
    secondary: {
      dark: '#262628',
      light: '#F1F1F1'
    },
    tertiary: {
      dark: '#424244',
      light: '#c9c9c9'
    },
    default: {
      dark: '#19191B',
      light: '#FFFFFF'
    },
    paper: {
      dark: '#272729',
      light: '#F1F1F1'
    },
    appBar: {
      dark: '#1D1D1F',
      light: '#FFFFFF'
    },
    input: {
      dark: '#1D1D1F',
      light: '#FAFAFA'
    },
    tableHeader: {
      dark: '#1D1D1F',
      light: '#F3F3F3'
    },
    button: {
      dark: '#28282A',
      light: '#F1F1F1'
    },
    footer: {
      dark: '#3A3A3A',
      light: '#ECECEC'
    },
    red: {
      normal: '#E24744',
      light: '#f35855',
      dark: '#bb2a28'
    }
  },

  border: {
    dark: '#262628',
    light: '#ECECEC'
  },

  backdrop: {
    dark: 'rgba(25, 25, 27, 0.7)',
    light: 'rgba(241, 241, 241, 0.7)'
  },

  baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',

  text: {
    primary: {
      dark: '#FFFFFF',
      light: '#1D1D1F'
    },
    secondary: {
      dark: '#797979',
      light: '#414141'
    },
    disabled: '#94A3B8',
    accent: {
      dark: '#797979',
      light: '#414141'
    },
    normal: '#797979',
    red: '#E24744'
  },

  primary: {
    dark: '#19191B',
    light: '#FFFFFF'
  },

  secondary: {
    dark: '#28282A',
    light: '#F1F1F1'
  },

  accent: {
    dark: '#ECECEC',
    light: '#797979'
  },

  link: {
    dark: {
      normal: '#797979',
      hover: '#E24744'
    },
    light: {
      normal: '#414141',
      hover: '#E24744'
    }
  }
}

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        main: gsaColors.primary.light,
        contrastText: gsaColors.text.primary.light
      },
      secondary: {
        main: gsaColors.secondary.light,
        contrastText: gsaColors.text.secondary.light
      },
      background: {
        default: gsaColors.background.default.light,
        paper: gsaColors.background.paper.light,
        red: gsaColors.background.red
      },
      text: {
        primary: gsaColors.text.primary.light,
        secondary: gsaColors.text.secondary.light,
        disabled: gsaColors.text.disabled,
        normal: gsaColors.text.normal,
        red: gsaColors.text.red
      },
      divider: gsaColors.border.light,
      backdrop: gsaColors.backdrop.light,
      footer: gsaColors.background.footer.light
    }
  },
  dark: {
    palette: {
      primary: {
        main: gsaColors.primary.dark,
        contrastText: gsaColors.text.primary.dark
      },
      secondary: {
        main: gsaColors.secondary.dark,
        contrastText: gsaColors.text.secondary.dark
      },
      background: {
        default: gsaColors.background.default.dark,
        paper: gsaColors.background.paper.dark,
        red: gsaColors.background.red
      },
      text: {
        primary: gsaColors.text.primary.dark,
        secondary: gsaColors.text.secondary.dark,
        disabled: gsaColors.text.disabled,
        normal: gsaColors.text.normal,
        red: gsaColors.text.red
      },
      divider: gsaColors.border.dark,
      backdrop: gsaColors.backdrop.dark,
      footer: gsaColors.background.footer.dark
    }
  }
}

export const typography = {
  h1: {
    fontSize: '50px',
    fontWeight: 700
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em'
  },
  h3: {
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '30px'
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.4
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.4
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4
  }
}

export const gsaIconColors = {
  prime: '#000000',
  secondary: '#FFFFFF',
  tertiary: '#E24744',
  grey: '#797979',
  logo1: '#0066CC',
  logo2: '#E24744',
  logo3: '#0066CC'
}

export const gsaShadows = {
  none: 'none',
  xs: '0 1px 2px rgba(0, 0, 0, 0.5)',
  sm: '0 2px 4px rgba(0, 0, 0, 0.5)',
  md: '0 4px 8px rgba(0, 0, 0, 0.5)',
  medium: '0 4px 8px rgba(0, 0, 0, 0.5)',
  lg: '0 6px 12px rgba(0, 0, 0, 0.5)',
  xl: '0 8px 16px rgba(0, 0, 0, 0.5)',
  '2xl': '0 12px 24px rgba(0, 0, 0, 0.5)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
  innerLg: 'inset 0 3px 6px rgba(0, 0, 0, 0.5)',
  glow: 'none',
  glowSuccess: 'none',
  glowDanger: 'none',
  glowWarning: 'none',
  premium: '0 4px 8px rgba(0, 0, 0, 0.5)',
  elevated: '0 2px 4px rgba(0, 0, 0, 0.5)',
  floating: '0 4px 8px rgba(0, 0, 0, 0.5)'
}

export const gsaSpacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '3rem',
  '5xl': '4rem'
}

export const gsaRadius = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '1.25rem',
  xl: '0.625rem',
  '2xl': '0.75rem',
  full: '9999px'
}

export const gsaTypography = {
  fontFamily: {
    primary: 'Manrope, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"SF Pro Display", "Droid Sans Mono", monospace',
    display: 'Manrope, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  fontSize: {
    xs: '0.6875rem',
    sm: '0.8125rem',
    base: '0.875rem',
    md: '0.9375rem',
    lg: '1rem',
    xl: '1.125rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
    '4xl': '2rem'
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    heavy: 800
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.1em'
  }
}

// export const createTradingHover = (_options?: {
//   borderColor?: string
//   shadow?: string
//   transform?: string
//   scale?: number
//   glow?: boolean
// }) => ({})

export const modernColors = gsaColors
export const modernShadows = gsaShadows
export const modernBorderRadius = gsaRadius

// export const createHoverState = createTradingHover
