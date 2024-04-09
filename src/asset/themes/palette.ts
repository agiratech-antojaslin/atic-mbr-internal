/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */
export default function themePalette(theme: any) {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: theme.colors?.darkPaper,
      white: theme.colors?.white,
    },
    violet: {
      main: theme.secondaryBtnColor,
      light: theme.secondaryBtnBgColor,
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.buttonColor,
      dark: theme.colors?.primaryDark,
      primary200: theme.colors?.primary200,
      primary800: theme.colors?.primary800,
      primary700: theme.colors?.primary700,
      buttonColor: theme.colors?.buttonColor,
      main_div: theme.colors?.main_div,
      cancelButtonColor: theme.colors?.cancelButtonColor,
      tableHead: theme.colors?.tableHeadColor,
      createButtonColor: theme.colors?.createButtonColor,
      iconColor: theme.iconColor,
      darkBackgroundColor: theme.colors.primaryDark,
      menuColor: theme.colors.menuColor,
      gradient1: theme.colors.gradient1,
      gradient2: theme.colors.gradient2,
    },
    secondary: {
      light: theme.logoLight,
      main: theme.logoMain,
      secondary200: theme.colors?.darkPrimaryMain,
      secondary600: theme.colors?.darkPrimaryDark,
      dark: theme.colors?.secondaryDark,
      200: theme.colors?.secondary200,
      800: theme.colors?.secondary800,
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark,
    },
    orange: {
      light: theme.colors?.orangeLight,
      main: theme.colors?.orangeMain,
      dark: theme.colors?.orangeDark,
    },
    surface: {
      main: theme.colors.blue300,
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
    },
    success: {
      light: theme.colors?.successLight,
      200: theme.colors?.success200,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.inputBoxBgColor,
      300: theme.colors.grey300,
      400: theme.colors?.borderLight,
      500: theme.darkTextSecondary,
      600: theme.heading,
      700: theme.darkTextPrimary,
      900: theme.textDark,
    },
    dark: {
      light: theme.colors?.darkTextPrimary,
      main: theme.colors?.darkLevel1,
      dark: theme.colors?.darkLevel2,
      800: theme.colors?.darkBackground,
      900: theme.colors?.darkPaper,
    },
    text: {
      primary: theme.textPrimary,
      secondary: theme.textSecondary,
      label: theme.textLabel,
      dark: theme.textDark,
      light: theme.textLight,
      error: theme.textError,
      success: theme.textSuccess,
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault,
    },
    border: {
      main: theme.borderMain,
    },
    blue: {
      main: theme.logoMain,
      light: theme.logoLight,
    },
  }
}
