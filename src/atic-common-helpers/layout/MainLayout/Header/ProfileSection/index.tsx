// react
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// material-ui
import {
  useTheme,
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from '@mui/material'

// project imports
import MainCard from 'component/ui-component/cards/MainCard'
import Transitions from 'component/ui-component/Transitions'

// assets
import deleteAlert from 'component/HOC/deleteAlert'
import { useAppSelector } from 'store/store'
import { clearStore } from 'utils/redux.utils'
import Assets from 'helpers/assets.helper'
import { stringAvatar } from 'atic-common-helpers/helpers/function.helper'

// ==============================|| PROFILE MENU ||====================== ======== //

const ProfileSection = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const userDetail = useAppSelector((state) => state.user.user)
  const [profileItems, setProfileItems] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef<any>(null)

  const logout = () => {
    clearStore()
    localStorage.clear()
    sessionStorage.clear()
    navigate('/login')
  }

  const handleLogout = async () => {
    deleteAlert({
      title:
        '<h3 style="font-size: 1.125rem; font-weight: 600; color: #101828">Logout</h3>',
      message:
        '<div style="font-size: .875rem; font-weight: 400; color: #; margin-top: 0px">Are you sure you want to logout?<br /> Click yes to confirm</div>',
      confirmButtonText: 'Yes',
      showCancel: true,
      onConfirmed: logout,
    })
  }

  const handleClose = (
    event:
      | MouseEvent
      | TouchEvent
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const prevOpen = useRef(open)

  useEffect(() => {
    const profile: any = [
      {
        title: userDetail.displayName,
        icon: 'userIcon',
      },
      {
        title: userDetail.mail,
        icon: 'mailIcon',
      },
      {
        title: userDetail.role == 'ADMIN' ? 'Admin' : 'Examiner',
        icon: 'usersIcon',
      },
      {
        title: 'Logout',
        icon: 'logoutIcon',
      },
    ]
    setProfileItems(profile)
  }, [])

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const handlePathClick = (path: string) => {
    setOpen(false)
    navigate(path)
  }
  return (
    <>
      <Chip
        clickable={false}
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '0px',
          transition: 'all .2s ease-in-out',
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          color: theme.palette.primary?.tableHead,
          '&.MuiChip-clickable': {
            ':hover': {
              borderColor: 'transparent',
              background: 'transparent',
            },
            ':active': {
              boxShadow: 'none',
            },
          },
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: 'transparent',
            background: 'transparent',
          },
          '& .MuiChip-label': {
            lineHeight: 0,
            display: 'none',
          },
        }}
        icon={
          <Avatar
            {...stringAvatar(userDetail.displayName!)}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color={theme.palette.primary?.tableHead}
          />
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      />
      {open && (
        <Popper
          placement="bottom-end"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 14],
                },
              },
            ],
          }}
        >
          {({ TransitionProps }) => (
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MainCard
                    border={false}
                    elevation={2}
                    content={false}
                    boxShadow
                    shadow={theme.shadows[2]}
                  >
                    <Box>
                      <List
                        component="nav"
                        sx={{
                          width: '100%',
                          maxWidth: 300,
                          minWidth: 250,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '8px',
                          px: 1,
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%',
                          },
                          '& .MuiListItemButton-root': {
                            mt: 0.5,
                            '& .MuiListItemIcon-root': {
                              color: theme.palette.primary?.tableHead,
                            },
                          },
                          '& .MuiListItemText-root': {
                            '& .MuiTypography-root': {
                              color: theme.palette.text.dark,
                              fontSize: '.875rem',
                            },
                          },
                        }}
                      >
                        {profileItems.map((item, index) => {
                          const { title, icon } = item
                          const MenuIcon = Assets[icon]

                          return (
                            <ListItemButton
                              key={title + index}
                              sx={{
                                // borderRadius: `${customization.borderRadius}px`,
                                paddingTop: '5px',
                                paddingBottom: '5px',
                                marginBottom:
                                  title === 'Logout' ? '5px' : '0px',
                                borderTop:
                                  title === 'Logout'
                                    ? `1px solid ${theme.palette.grey[300]}`
                                    : 'none',
                              }}
                              selected={selectedIndex === index}
                              onClick={() => {
                                if (title === 'Logout') {
                                  handleLogout()
                                }
                              }}
                            >
                              <ListItemIcon>
                                <MenuIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Typography fontSize={'.875rem'}>
                                    {title}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          )
                        })}
                      </List>
                    </Box>
                  </MainCard>
                </ClickAwayListener>
              </Paper>
            </Transitions>
          )}
        </Popper>
      )}
    </>
  )
}

export default ProfileSection
