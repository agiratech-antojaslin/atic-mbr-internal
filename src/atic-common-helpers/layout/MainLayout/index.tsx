import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

// material-ui
import { styled, useTheme } from '@mui/material/styles'
import { AppBar, Box, CssBaseline, useMediaQuery } from '@mui/material'

// project imports
import Sidebar from './Sidebar'
import { SET_MENU } from '../../../features/theme/actions'
import Header from './Header'
import { useAppSelector } from 'store/store'

// styles
// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({
    theme,
    open,
    submenulist,
  }: {
    theme: any
    open: any
    submenulist: boolean
  }) => ({
    ...theme.typography.mainContent,
    ...(submenulist && {
      minHeight: `calc(100vh - ${118}px)`,
      marginTop: '118px',
    }),
    // [theme.breakpoints.down('md')]: {

    // },
    [theme.breakpoints.down('sm')]: {
      marginRight: '2%',
      marginLeft: '2%',
    },
  })
)

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))
  // Handle left drawer
  const leftDrawerOpened = useSelector(
    (state: any) => state.customization.opened
  )
  const subMenuList: any[] = []
  const dispatch = useDispatch()
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened })
  }

  return (
    <Box
      sx={{
        display: '-webkit-box',
        backgroundColor: theme.palette.primary.main_div,
      }}
    >
      <CssBaseline />
      {/* drawer */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
          bgcolor: theme.palette.background.paper,
          transition: leftDrawerOpened
            ? theme.transitions.create('width')
            : 'none',
        }}
      >
        {/* <Toolbar> */}
        <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        {/* </Toolbar> */}
      </AppBar>
      {matchDownMd && (
        <Sidebar
          window={window}
          drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
          drawerToggle={handleLeftDrawerToggle}
        />
      )}
      {/* main content */}
      {/* <Main theme={theme} open={leftDrawerOpened}> */}
      <Main
        theme={theme}
        open={!!subMenuList?.length}
        submenulist={!!subMenuList?.length}
      >
        {/* breadcrumb */}
        <Outlet />
      </Main>
    </Box>
  )
}

export default MainLayout
