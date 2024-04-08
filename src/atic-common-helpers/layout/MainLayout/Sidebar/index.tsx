// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material'

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar'
import { BrowserView, MobileView } from 'react-device-detect'

// project imports
import MenuList from './MenuList'
import LogoSection from '../LogoSection'
import { drawerWidth } from '../../../../features/theme/constant'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import './sidemenu.scss'
import signout from '../../../../asset/images/signout.png'
import { ButtonBase } from '@mui/material'
import { IconMenu2 } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import deleteAlert from 'component/HOC/deleteAlert'
import { useAppSelector } from 'store/store'
import { clearStore } from 'utils/redux.utils'
// import { Link } from 'react-router-dom';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }: SidebarTypes) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const matchUpMd = useMediaQuery(theme.breakpoints.up('lg'))

  const handleDrawerCloseClick = () => {
    drawerToggle()
  }
  const profileCard = (
    <Stack
      alignItems="center"
      justifyContent="space-evenly"
      direction="column"
      spacing={2}
      sx={{ height: '50px', px: '10px' }}
    >
      {/* <Box display={'flex'} flexDirection="column" alignItems='center' sx={{ width: '100%', marginBottom: '5px' }}>
                    <p className='v-name'> Dream Lighter </p>
                    <span className='v-version' > Version 1.0 </span>

            </Box> */}
      <Box
        display={'flex'}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100%', marginBottom: '5px' }}
      >
        <span className="v-name1"> {process.env?.REACT_APP_V_NAME} </span>
        &nbsp;
        <span className="v-version1"> {process.env?.REACT_APP_VERSION} </span>
      </Box>
    </Stack>
  )
  const drawer = (
    <>
      {/* <Box sx={{ display: { xs: 'block', md: 'block' } }}>
                <Box sx={{ display: 'flex', p: 1, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box> */}
      {/* <BrowserView> */}
      <PerfectScrollbar
        component="div"
        style={{
          // height: 'calc(100vh - 280px)',
          height: !matchUpMd ? 'calc(100vh - 50px)' : 'calc(100vh - 138px)',
          paddingTop: '.5rem',
        }}
      >
        <MenuList handleDrawerCloseClick={handleDrawerCloseClick} />
      </PerfectScrollbar>
      {/* {profileCard} */}
      {/* </BrowserView> */}
      {/* <MobileView>
                <Box sx={{ px: 2 }}  style={{
                        height: 'calc(100vh - 80px)',
                        padding: 0
                    }}>
                    <MenuList />
                </Box>
                {profileCard}
            </MobileView> */}
    </>
  )

  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders"
    >
      {/* <MobileView> */}
      {/* {!drawerOpen && 
             <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden', position: 'absolute', top: '2rem', left: '.8rem' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography?.commonAvatar,
                            ...theme.typography?.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={drawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>} */}
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="right"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            // padding: '0px 8px',
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            // boxShadow: '-3px 0px 5px 2px rgb(0 0 0 / 28%)',
            [theme.breakpoints.up('lg')]: {
              top: '88px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

type SidebarTypes = {
  drawerOpen: boolean
  drawerToggle: () => void
  window: Window
}

export default Sidebar
