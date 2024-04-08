import { createTheme, ThemeOptions } from '@mui/material/styles'

// assets
import colors from '../scss/_themes-vars.module.scss'

// project imports
import componentStyleOverrides from './compStyleOverride'
import themePalette from './palette'
import themeTypography from './typography'
/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

declare module '@mui/material/styles' {
  interface TypographyVariants {
    label: React.CSSProperties
    a: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    label?: React.CSSProperties
    a?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true
    a: true
  }
}

export const theme = (customization: any) => {
  const color = colors

  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    //textDark: color.grey500,
    menuSelected: color.paper,
    menuSelectedBack: color.buttonColor,
    inputBoxBgColor: color.inputBoxBgColor,
    divider: color.grey300,
    customization,
    buttonColor: color.buttonColor,
    main_div: color.main_div,
    tableHeadColor: color.tableHeadColor,
    createButtonColor: color.createButtonColor,
    iconColor: color.primaryDark,
    hyperlinkColor: color.primaryDark,
    menuColor: color.grey400,
    labelColor: color.labelColor,
    secondaryBtnColor: color.secondaryBtnColor,
    secondaryBtnBgColor: color.secondaryBtnBgColor,

    textPrimary: color.textPrimary,
    textSecondary: color.textSecondary,
    textDark: color.textDark,
    textLight: color.textLight,
    textLabel: color.textLabel,
    textError: color.textError,
    textSuccess: color.textSuccess,

    borderMain: color.borderMain,
    borderLight: color.borderLight,

    logoMain: color.logoMain,
    logoLight: color.logoLight,
  }

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1536,
      },
    },
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: themeTypography(themeOption),
  } as ThemeOptions

  const themes = createTheme(themeOptions)
  themes.components = componentStyleOverrides(themeOption)

  return themes
}

export default theme
