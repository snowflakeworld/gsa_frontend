import '@qpokychuk/sf-pro-display/index.css'

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
    header: {
      dark: '#1D1D1F',
      light: '#FFFFFF'
    },
    footer: {
      dark: '#262628',
      light: '#FAFAFA'
    },
    red: {
      normal: '#E24744',
      light: '#f35855',
      dark: '#bb2a28',
      alpha: 'rgba(226, 71, 68, 0.1)'
    },
    card: {
      dark: '#272729',
      light: '#FFFFFF'
    },
    overlay: {
      dark: '#19191B',
      light: '#F1F1F1'
    },
    profile: {
      dark: '#19191B',
      light: '#FBFBFB'
    }
  },

  border: {
    normal: {
      dark: '#262628',
      light: '#ECECEC'
    },
    footer: {
      dark: '#262628',
      light: '#ECECEC'
    },
    input: {
      normal: {
        dark: '#3A3A3A',
        light: '#D3D3D3'
      },
      focus: {
        dark: '#494949',
        light: '#adadad'
      }
    }
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
      light: '#1D1D1F'
    },
    disabled: '#94A3B8',
    accent: {
      dark: '#797979',
      light: '#414141'
    },
    normal: '#797979',
    subtitle2: {
      light: '#797979',
      dark: '#ECECEC'
    },
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
  },

  input: {
    white: '#FAFAFA'
  },

  caption: {
    dark: '#ECECEC',
    light: '#797979'
  },

  chip: {
    background: {
      dark: {
        primary: '#19191B',
        secondary: 'transparent'
      },
      light: {
        primary: 'transparent',
        secondary: 'transparent'
      }
    },
    border: {
      dark: {
        primary: '#262628',
        secondary: '#797979',
        tertiary: '#E24744'
      },
      light: {
        primary: '#F1F1F1',
        secondary: '#1D1D1F',
        tertiary: '#E24744'
      }
    },
    text: {
      dark: {
        primary: '#797979',
        secondary: '#FFFFFF',
        tertiary: '#E24744'
      },
      light: {
        primary: '#797979',
        secondary: '#1D1D1F',
        tertiary: '#E24744'
      }
    },
    avatar: {
      background: {
        dark: {
          primary: '#1D1D1F',
          secondary: '#F1F1F1',
          tertiary: '#E24744'
        },
        light: {
          primary: '#F1F1F1',
          secondary: '#F1F1F1',
          tertiary: '#E24744'
        }
      },
      text: {
        primary: '#797979',
        secondary: '#1D1D1F',
        tertiary: '#FFFFFF'
      }
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
        paper: gsaColors.background.paper.light,
        default: gsaColors.background.default.light,
        red: gsaColors.background.red.normal,
        header: gsaColors.background.header.light,
        footer: gsaColors.background.footer.light,
        card: gsaColors.background.card.light,
        deep: gsaColors.background.header.dark,
        overlay: gsaColors.background.overlay.light,
        profile: gsaColors.background.profile.light
      },
      text: {
        primary: gsaColors.text.primary.light,
        secondary: gsaColors.text.secondary.light,
        disabled: gsaColors.text.disabled,
        normal: gsaColors.text.normal,
        red: gsaColors.text.red,
        nav: gsaColors.link.light,
        black: gsaColors.text.primary.light,
        caption: gsaColors.caption.light
      },
      divider: gsaColors.border.normal.light,
      backdrop: gsaColors.backdrop.light,
      input: {
        white: gsaColors.input.white
      },
      chip: {
        background: {
          primary: gsaColors.chip.background.light.primary,
          secondary: gsaColors.chip.background.light.secondary
        },
        border: {
          primary: gsaColors.chip.border.light.primary,
          secondary: gsaColors.chip.border.light.secondary,
          tertiary: gsaColors.chip.border.light.tertiary
        },
        text: {
          primary: gsaColors.chip.text.light.primary,
          secondary: gsaColors.chip.text.light.secondary,
          tertiary: gsaColors.chip.text.light.tertiary
        },
        avatar: {
          background: {
            primary: gsaColors.chip.avatar.background.light.primary,
            secondary: gsaColors.chip.avatar.background.light.secondary,
            tertiary: gsaColors.chip.avatar.background.light.tertiary
          },
          text: {
            primary: gsaColors.chip.avatar.text.primary,
            secondary: gsaColors.chip.avatar.text.secondary,
            tertiary: gsaColors.chip.avatar.text.tertiary
          }
        }
      }
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
        red: gsaColors.background.red.normal,
        header: gsaColors.background.header.dark,
        footer: gsaColors.background.footer.dark,
        card: gsaColors.background.card.dark,
        deep: gsaColors.background.header.light,
        overlay: gsaColors.background.overlay.dark,
        profile: gsaColors.background.profile.dark
      },
      text: {
        primary: gsaColors.text.primary.dark,
        secondary: gsaColors.text.secondary.dark,
        disabled: gsaColors.text.disabled,
        normal: gsaColors.text.normal,
        red: gsaColors.text.red,
        nav: gsaColors.link.dark,
        black: gsaColors.text.primary.light,
        caption: gsaColors.caption.dark
      },
      divider: gsaColors.border.normal.dark,
      backdrop: gsaColors.backdrop.dark,
      input: {
        white: gsaColors.input.white
      },
      chip: {
        background: {
          primary: gsaColors.chip.background.dark.primary,
          secondary: gsaColors.chip.background.dark.secondary
        },
        border: {
          primary: gsaColors.chip.border.dark.primary,
          secondary: gsaColors.chip.border.dark.secondary,
          tertiary: gsaColors.chip.border.dark.tertiary
        },
        text: {
          primary: gsaColors.chip.text.dark.primary,
          secondary: gsaColors.chip.text.dark.secondary,
          tertiary: gsaColors.chip.text.dark.tertiary
        },
        avatar: {
          background: {
            primary: gsaColors.chip.avatar.background.dark.primary,
            secondary: gsaColors.chip.avatar.background.dark.secondary,
            tertiary: gsaColors.chip.avatar.background.dark.tertiary
          },
          text: {
            primary: gsaColors.chip.avatar.text.primary,
            secondary: gsaColors.chip.avatar.text.secondary,
            tertiary: gsaColors.chip.avatar.text.tertiary
          }
        }
      }
    }
  }
}

export const gsaTypography = {
  fontFamily: {
    primary: 'Manrope',
    mono: '"SF Pro Display", Roboto, "Droid Sans Mono"',
    display: 'Manrope, Roboto'
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

export const typography = {
  fontFamily: gsaTypography.fontFamily.primary,
  h1: {
    fontFamily: gsaTypography.fontFamily.mono,
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: '2.25rem',
    letterSpacing: 0,

    '@media (min-width:900px)': {
      fontSize: '3.125rem',
      lineHeight: '100%'
    }
  },
  h2: {
    fontFamily: gsaTypography.fontFamily.mono,
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: '3.5rem',
    letterSpacing: '-1.44px',

    '@media (min-width:900px)': {
      fontSize: '4.375rem',
      lineHeight: '5rem'
    }
  },
  h3: {
    fontFamily: gsaTypography.fontFamily.mono,
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: '3.5rem',
    letterSpacing: '-1.44px',

    '@media (min-width:900px)': {
      fontSize: '3.125rem',
      lineHeight: '100%'
    }
  },
  h4: {
    fontFamily: gsaTypography.fontFamily.primary,
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
    letterSpacing: 0,

    '@media (min-width:900px)': {
      fontSize: '2rem',
      lineHeight: '2.5rem'
    }
  },
  h5: {
    fontFamily: gsaTypography.fontFamily.primary,
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: '1.875rem',
    letterSpacing: 0
  },
  h6: {
    fontFamily: gsaTypography.fontFamily.primary,
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.5rem',
    letterSpacing: 0
  },
  button: {
    textTransform: undefined
  },
  caption: {
    fontFamily: gsaTypography.fontFamily.primary,
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.75rem',
    letterSpacing: 0
  },
  subtitle1: {
    fontFamily: gsaTypography.fontFamily.mono,
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2rem',
    letterSpacing: 0,

    '@media (min-width:900px)': {
      fontSize: '2rem',
      lineHeight: '2.5rem'
    }
  },
  subtitle2: {
    fontFamily: gsaTypography.fontFamily.primary,
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.5rem',
    letterSpacing: 0,

    '@media (min-width:900px)': {
      fontSize: '1.25rem',
      lineHeight: '2rem'
    }
  }
}

export const gsaIconColors = {
  prime: '#000000',
  secondary: '#FFFFFF',
  tertiary: '#E24744',
  grey: '#797979',
  customRed: '#E24744',
  starModeDark: '#28282A',
  starModeLight: '#F1F1F1'
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
  floating: '0 4px 8px rgba(0, 0, 0, 0.5)',
  card: '0 4px 16px rgba(12, 12, 13, 0.06)'
}

export const modernColors = gsaColors
export const modernShadows = gsaShadows
