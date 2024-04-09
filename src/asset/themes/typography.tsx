/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(theme: any) {
  return {
    fontFamily: theme?.customization?.fontFamily,

    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: '0.75rem',
    },
    h5: {
      fontSize: '0.875rem',
      color: theme.colors?.darkPaper,
      fontWeight: 600,
    },
    h4: {
      fontSize: '1rem',
      color: theme.colors?.darkPaper,
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      color: theme.colors?.darkPaper,
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.875rem',
      color: theme.textDark,
      fontWeight: 600,
    },
    h1: {
      fontSize: '2.125rem',
      color: theme.heading,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: theme.textSecondary,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.darkTextSecondary,
    },
    caption: {
      fontSize: '0.75rem',
      color: theme.darkTextSecondary,
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em',
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: theme.darkTextPrimary,
    },
    a: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      color: theme.textLight,
      textDecoration: 'none',
    },
    label: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      display: 'block',
      paddingTop: '.875rem',
      paddingBottom: '5px',
    },
    button: {
      textTransform: 'capitalize',
    },
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      '& > label': {
        top: '23 !important',
        left: 0,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      '& > div > input': {
        padding: '30.5px 14px 11.5px !important',
      },
      '& legend': {
        // display: 'none'
      },
      '& fieldset': {
        top: 0,
      },
    },
    customDatePicker: {
      marginTop: 1,
      marginBottom: 1,
      '& .MuiFormControl-root': {
        width: '100%',
      },
      // "& .MuiInputBase-root" : {
      //   background: 'inherit',
      //   outline: 'none',
      // },
      // "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      //   outline: 'none',
      //   border: 'none'
      // },
      '& > label': {
        top: '23 !important',
        left: 0,
        color: theme.grey500,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      '& input': {
        padding: '18px 14px',
        background: 'inherit',
      },
      '& legend': {
        // display: 'none'
      },
      '& fieldset': {
        top: 0,
        borderRadius: '5px',
        borderColor: '#8080808a !important',
      },
    },
    mainContent: {
      // backgroundColor: theme.main_div,
      width: '100%',
      minHeight: `calc(100vh - ${70}px)`,
      flexGrow: 1,
      marginRight: '2%',
      marginLeft: '2%',
      marginTop: '70px',
      // marginRight: '20px',
      // borderRadius: `${theme?.customization?.borderRadius}px`
    },
    menuCaption: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.heading,
      padding: '6px',
      textTransform: 'capitalize',
      marginTop: '10px',
    },
    subMenuCaption: {
      fontSize: '0.6875rem',
      fontWeight: 500,
      color: theme.darkTextSecondary,
      textTransform: 'capitalize',
    },
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px',
    },
    smallAvatar: {
      width: '22px',
      height: '22px',
      fontSize: '1rem',
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem',
    },
    largeAvatar: {
      width: '44px',
      height: '44px',
      fontSize: '1.5rem',
    },
  }
}
