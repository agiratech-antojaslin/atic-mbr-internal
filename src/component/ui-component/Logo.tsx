import { useTheme } from '@mui/material'
import { Box } from '@mui/system'
import logo from 'asset/images/mbr_logo.png'
import { FC } from 'react'
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //
interface logoProps {
  width?: string
  isAuth?: boolean
}
const Logo: FC<logoProps> = ({ width = '114', isAuth = false }: logoProps) => {
  const theme = useTheme()
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img src={logo} alt="Berry" width={width} height={'50px'} />
        <Box ml={1}>
          <Box
            sx={{
              background: `linear-gradient(to right, ${theme.palette.primary.gradient1}, ${theme.palette.primary.gradient2})`,
              '-webkit-text-fill-color': 'transparent',
              '-webkit-background-clip': 'text',
              fontSize: isAuth ? '1.125rem' : '1.143rem',
              fontWeight: 500,
            }}
          >
            Docmatic
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Logo
