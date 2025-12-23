import { Components, Theme } from '@mui/material/styles'

import { gsaColors } from './themePrimitives'
import { Widgets } from '@mui/icons-material'

export const customizations: Components<Theme> = {
  MuiLink: {
    defaultProps: {
      underline: 'hover'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: '0.875rem',
        color: gsaColors.link.light.normal,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        '&.footer-link__main': {
          color: gsaColors.text.primary.light
        },
        '&.footer-link__sub': {
          color: gsaColors.text.normal
        },
        '&:hover': {
          color: gsaColors.link.light.hover
        },
        ...theme.applyStyles('dark', {
          color: gsaColors.link.dark.normal,
          '&.footer-link__main': {
            color: gsaColors.text.primary.dark
          },
          '&:hover': {
            color: gsaColors.link.dark.hover
          }
        })
      })
    }
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: '1rem',
        height: '1rem',
        fill: gsaColors.text.primary.light,
        '&.icon--white': {
          fill: gsaColors.text.primary.dark
        },
        '&.fill-none': {
          fill: 'none'
        },
        ...theme.applyStyles('dark', {
          fill: gsaColors.text.primary.dark
        })
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        border: `1px solid ${gsaColors.border.normal.light}`,
        color: gsaColors.text.primary.light,
        boxShadow: 'none',
        transition: 'all 0.5s ease',
        padding: 1.25,
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          color: gsaColors.text.primary.light
        },
        ...theme.applyStyles('dark', {
          border: `1px solid ${gsaColors.border.normal.dark}`,
          color: gsaColors.text.primary.dark,
          '&:hover': {
            color: gsaColors.text.primary.dark
          }
        })
      }),
      contained: ({ theme }) => ({
        borderColor: gsaColors.border.normal.light,
        backgroundColor: gsaColors.background.button.light,
        minHeight: '2.5rem',
        minWidth: '2.5rem',

        '&:hover': {
          backgroundColor: gsaColors.background.tertiary.light,
          boxShadow: `0 4px 8px ${gsaColors.baseShadow}`
        },

        '&.button--red': {
          color: 'white',
          backgroundColor: gsaColors.background.red.normal,

          '&:hover': {
            backgroundColor: gsaColors.background.red.dark
          }
        },

        ...theme.applyStyles('dark', {
          borderColor: gsaColors.border.normal.dark,
          backgroundColor: gsaColors.background.button.dark,
          '&:hover': {
            backgroundColor: gsaColors.background.tertiary.dark
          }
        })
      }),

      outlined: ({ theme }) => ({
        borderColor: gsaColors.border.normal.light,
        color: gsaColors.text.primary.light,
        '&:hover': {
          backgroundColor: gsaColors.background.tertiary.light
        },
        ...theme.applyStyles('dark', {
          borderColor: gsaColors.border.normal.dark,
          color: gsaColors.text.primary.dark,
          '&:hover': {
            backgroundColor: gsaColors.background.tertiary.dark
          }
        })
      }),

      text: ({ theme }) => ({
        border: 'none',
        color: gsaColors.text.normal,
        '&:hover': {
          color: gsaColors.text.normal,
          boxShadow: 'none'
        },
        ...theme.applyStyles('dark', {
          border: 'none',
          color: gsaColors.text.normal,
          '&:hover': {}
        })
      }),

      endIcon: {
        marginLeft: 0,
        marginRight: 0
      },

      startIcon: {
        marginRight: 0,
        marginLeft: 0
      }
    }
  },

  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: gsaColors.background.paper.light,
        border: `1px solid ${gsaColors.border.normal.light}`,
        borderRadius: 12,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        ...theme.applyStyles('dark', {
          backgroundColor: gsaColors.background.paper.dark,
          border: `1px solid ${gsaColors.border.normal.dark}`
        })
      })
    }
  },

  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: gsaColors.background.paper.light,
        border: `1px solid ${gsaColors.border.normal.light}`,
        ...theme.applyStyles('dark', {
          backgroundColor: gsaColors.background.paper.dark,
          border: `1px solid ${gsaColors.border.normal.dark}`
        })
      })
    }
  },

  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: gsaColors.background.appBar.light,
        borderBottom: `1px solid ${gsaColors.border.normal.light}`,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        ...theme.applyStyles('dark', {
          background: gsaColors.background.appBar.dark,
          borderBottom: `1px solid ${gsaColors.border.normal.dark}`
        })
      })
    }
  },

  MuiTextField: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiOutlinedInput-root': {
          fontFamily: 'Poppins',

          // border: '#39393c',
          backgroundColor: gsaColors.background.input.light,
          borderRadius: 8,
          '& fieldset': {
            backgroundColor: gsaColors.background.input.light
          },
          '&:hover fieldset': {
            borderColor: gsaColors.border.normal.light
          },
          '&.Mui-focused fieldset': {
            borderColor: gsaColors.primary
          }
        },
        '& .MuiInputLabel-root': {
          color: gsaColors.text.accent.light,
          '&.Mui-focused': {
            color: gsaColors.primary.light
          }
        },
        '& .MuiOutlinedInput-input': {
          color: gsaColors.text.primary.light
        },
        ...theme.applyStyles('dark', {
          '& .MuiOutlinedInput-root': {
            // border: '#39393c',
            backgroundColor: gsaColors.background.input.dark,
            '& fieldset': {
              backgroundColor: gsaColors.background.input.dark
            },
            '&:hover fieldset': {
              borderColor: gsaColors.border.normal.dark
            },
            '&.Mui-focused fieldset': {
              borderColor: gsaColors.primary
            }
          },
          '& .MuiInputLabel-root': {
            color: gsaColors.text.accent.dark,
            '&.Mui-focused': {
              color: gsaColors.primary.dark
            }
          },
          '& .MuiOutlinedInput-input': {
            color: gsaColors.text.primary.dark
          }
        })
      })
    }
  },

  MuiContainer: {
    defaultProps: {
      disableGutters: true
    },
    styleOverrides: {
      root: ({ theme }) => ({
        paddingTop: '6.25rem',
        paddingBottom: '6.25rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        '&.py-none': {
          paddingTop: 0,
          paddingBottom: 0
        },
        [theme.breakpoints.down('md')]: {
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '&.py-none': {
            paddingTop: 0,
            paddingBottom: 0
          }
        },
        [theme.breakpoints.up('lg')]: {
          maxWidth: '1440px'
        }
      })
    }
  }
}
