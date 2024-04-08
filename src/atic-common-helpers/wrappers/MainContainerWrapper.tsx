import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { SearchInputFiled } from 'atic-common-helpers/hoc/formfield'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { Close } from '@mui/icons-material'

const MainContainerWrapper = ({
  children,
  ...props
}: React.PropsWithChildren<MainContainerWrapperType>) => {
  const theme = useTheme()
  const {
    bgColor = theme.palette.background.paper,
    px = { sm: 3, xs: 2 },
    py = 2,
  } = props
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        //py: { xs: py },
        pt: '32px',
        pb: '8px',
        px: px,
        backgroundColor: bgColor,
        boxShadow:
          props?.bgColor === 'transparent'
            ? 'unset'
            : 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
      }}
    >
      <Box
        // mt={1}
        // mb={4}
        sx={{
          width: '100%',
          // minHeight: "calc(100vh - 102px)",
          // backgroundColor: theme.palette.background.paper,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

type MainContainerWrapperType = {
  bgColor?: string
  mt?: any
  px?: any
  py?: any
  headingText?: string
}

export default MainContainerWrapper
