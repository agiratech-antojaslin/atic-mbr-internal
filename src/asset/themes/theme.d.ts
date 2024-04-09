import { createTheme } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    typography?: {
      customInput?: {
        [keys]?: any
      }
      customDatePicker?: {
        [keys]?: any
      }
      customFormInput?: {
        [keys]?: any
      }
      commonAvatar?: {
        [keys]?: any
      }
      mediumAvatar?: {
        [keys]?: any
      }
      largeAvatar?: {
        [keys]?: any
      }
    }
  }

  interface PaletteColor {
    primary200?: string
    primary800?: string
    primary700?: string
    secondary200?: string
    secondary600?: string
    light: string
    main: string
    dark: string
    contrastText: string
    buttonColor: string
    main_div: string
    cancelButtonColor: string
    tableHead: string
    createButtonColor: string
    borderColor: string
    iconColor: string
    darkBackgroundColor: string
    menuColor: string
    labelColor: string
    secondaryBtnColor: string
    secondaryBtnBgColor: string
    gradient1: string
    gradient2: string
  }

  interface TypeText {
    primary: string
    secondary: string
    disabled: string
    label: string
    dark: string
    light: string
  }
}
