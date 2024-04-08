import { useMediaQuery, useTheme } from '@mui/material'

export const getRootFS = (): number | undefined => {
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('xl'))
  const tablet = useMediaQuery(theme.breakpoints.up('lg'))
  const mobile = useMediaQuery(theme.breakpoints.up('xs'))

  const sizes = () => {
    if (desktop) return 16
    if (tablet) return 14
    if (mobile) return 12
  }

  return sizes()
}
