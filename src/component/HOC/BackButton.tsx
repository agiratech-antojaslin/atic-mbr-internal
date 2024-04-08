import { Button, useTheme } from '@mui/material'
import React from 'react'

type TBackButton = {
    handeleBackButton : () => void
}

const BackButton = ({handeleBackButton} : TBackButton) => {
  const theme = useTheme()  
  return (
    <Button
    disableElevation
    disableRipple
    variant="contained"
    sx={{ background: theme.palette.secondary.secondary200 ,'&:hover': {
        background: theme.palette.secondary.secondary600
    }}}
    onClick={handeleBackButton}
  >
    Back
  </Button>
  )
}

export default BackButton
