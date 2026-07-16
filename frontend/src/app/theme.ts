import type { MantineThemeOverride } from '@mantine/core';

const solid = (hex: string) =>
  Array(10).fill(hex) as [string, string, string, string, string, string, string, string, string, string];

export const theme: MantineThemeOverride = {
  primaryColor: 'tgblue',
  primaryShade: { light: 5, dark: 5 },
  colors: {
    primary: solid('#111113'),
    secondary: solid('#2D3748'),
    muted: solid('#4A5568'),
    gray: [
      '#F8F9FB',
      '#F1F3F5',
      '#E9ECEF',
      '#DEE2E6',
      '#CED4DA',
      '#ADB5BD',
      '#868E96',
      '#495057',
      '#343A40',
      '#212529',
    ],
    tgblue: [
      '#E7F5FB',
      '#d0ebf9',
      '#9ddeed',
      '#5cc8e0',
      '#33b5d5',
      '#229ED9',
      '#1B87BC',
      '#1662a3',
      '#124f85',
      '#0f3d68',
    ],
    tgpurple: [
      '#faf9ff',
      '#f3f0ff',
      '#e6e0fb',
      '#d0bdf4',
      '#b699ec',
      '#9775e3',
      '#7c5cdb',
      '#7048e8',
      '#6741d9',
      '#5334b5',
    ],
    tggreen: [
      '#f4fbf6',
      '#e6fcf5',
      '#c3fae8',
      '#96f2d7',
      '#63e6be',
      '#38d9a9',
      '#20c997',
      '#12b886',
      '#0ca678',
      '#099268',
    ],
    tgred: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#f85149',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
    tgorange: [
      '#fff9f0',
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#f08c00',
      '#e8590c',
      '#d9480f',
      '#b35c00',
    ],
  },
  fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    sizes: {
      h1: { fontSize: '46px', fontWeight: '850', lineHeight: '1.15' },
      h2: { fontSize: '32px', fontWeight: '800', lineHeight: '1.3' },
      h3: { fontSize: '16px', fontWeight: '800', lineHeight: '1.4' },
      h4: { fontSize: '14px', fontWeight: '700', lineHeight: '1.4' },
    },
  },
  fontSizes: {
    xs: '11px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '20px',
  },
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '16px',
    xl: '99px',
  },
  shadows: {
    xs: '0 1px 2px rgba(16,18,22,.04)',
    sm: '0 1px 3px rgba(16,18,22,.06)',
    md: '0 4px 12px rgba(16,18,22,.08)',
    lg: '0 8px 24px rgba(16,18,22,.10)',
    xl: '0 24px 70px rgba(0,0,0,.3)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
        size: 'md',
        variant: 'primary',
      },
      styles: {
        root: {
          fontWeight: 600,
        },
      },
      variants: {
        primary: (theme) => ({
          root: {
            backgroundColor: theme.colors.tgblue[5],
            color: 'white',
            '&:hover': { backgroundColor: theme.colors.tgblue[6] },
          },
        }),
        secondary: (theme) => ({
          root: {
            border: `1px solid ${theme.colors.tgblue[3]}`,
            color: theme.colors.tgblue[7],
            backgroundColor: 'transparent',
            '&:hover': { backgroundColor: theme.colors.tgblue[0] },
          },
        }),
        ghost: (theme) => ({
          root: {
            color: theme.colors.tgblue[7],
            backgroundColor: 'transparent',
            '&:hover': { backgroundColor: theme.colors.tgblue[0] },
          },
        }),
        danger: (theme) => ({
          root: {
            backgroundColor: theme.colors.tgred[0],
            color: theme.colors.tgred[6],
            '&:hover': { backgroundColor: theme.colors.tgred[1] },
          },
        }),
        default: (theme) => ({
          root: {
            backgroundColor: theme.colors.gray[0],
            borderColor: theme.colors.gray[3],
            color: theme.colors.primary[5],
            '&:hover': { backgroundColor: theme.colors.gray[1] },
          },
        }),
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        padding: 'lg',
        withBorder: true,
      },
    },
    Container: {
      defaultProps: {
        size: 'xl',
      },
    },
    Stack: {
      defaultProps: {
        gap: 'md',
      },
    },
    Paper: {
      defaultProps: {
        withBorder: true,
        radius: 'md',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'sm',
        variant: 'light',
      },
    },
    ThemeIcon: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Text: {
      styles: {
        root: {
          lineHeight: '1.5',
        },
      },
    },
    SimpleGrid: {
      defaultProps: {
        spacing: 'lg',
      },
    },
    Group: {
      defaultProps: {
        gap: 'sm',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
};
