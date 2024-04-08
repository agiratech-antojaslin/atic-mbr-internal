// react
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// material-ui
import {
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  useTheme,
  ListItemButton,
  Collapse,
  List,
  Box,
  Menu,
  MenuItem
} from '@mui/material'
import { ExpandLess, ExpandMore, MoreVert } from '@mui/icons-material'

// project imports
import { useLocation } from 'react-router-dom'
import { IMenuItems } from 'atic-common-helpers/helpers/interface.helper'

// assets
import Assets from 'helpers/assets.helper'

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, isMainMenu, handleClick }: NavItemTypes) => {
  
  const theme = useTheme()
  const location = useLocation()
  const { id } = useParams()
  const [moreOpen, setMoreOpen] = useState(false)
  const Icon = Assets[item.icon]
  const itemIcon = Icon ? <Icon sx={{ fontSize: '28px' }} /> : <></>
  const pathname = id
    ? location.pathname.replace(`/${id}`, '')
    : location.pathname
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [parentMenuEl, setParentMenuEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const childOpen = Boolean(parentMenuEl)

  const handleMoreMenuClick = (hasChildren: boolean, item: any) => {
    if (hasChildren) {
      setMoreOpen(!moreOpen)
    } else {
      setAnchorEl(null)
      handleClick(item, false, true)
    }
  }

  const handleMoreClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget)
    event.stopPropagation()
  }

  const handleParentMenuClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setParentMenuEl(event.currentTarget)
    event.stopPropagation()
  }

  const handleMoreClose = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(null)
    event.stopPropagation()
  }

  const handleChildMenuClose = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setParentMenuEl(null)
    event.stopPropagation()
  }

  return (
    <>
      {item.id === 'more' ? (
        <MenuItem className={'main-menu'}>
          <ListItemIcon
            className="side-menu-icon-list"
            sx={{ my: 'auto', marginLeft: '.5rem' }}
          >
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleMoreClick}
              disableRipple
            >
              <MoreVert />
            </IconButton>

            <Menu
              sx={{
                borderRadius: `${theme.shape.borderRadius}px`,
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              elevation={2}
              onClose={handleMoreClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {item.children?.map((subItem: any) => {
                const SubIcon = Assets[subItem.icon]
                const subItemIcon = <SubIcon sx={{ fontSize: '20px' }} />
                return (
                  <MenuItem
                    key={subItem.id}
                    sx={{
                      display: 'block',
                      minWidth: '240px',
                      padding: '0px',
                    }}
                  >
                    <ListItemButton
                      onClick={() =>
                        handleMoreMenuClick(
                          subItem.children ? true : false,
                          subItem
                        )
                      }
                    >
                      <ListItemIcon
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {subItemIcon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant={'h5'}
                            fontWeight={500}
                            color="inherit"
                          >
                            {subItem.title}
                          </Typography>
                        }
                      />

                      {subItem.children ? (
                        <Box>{open ? <ExpandMore /> : <ExpandLess />}</Box>
                      ) : (
                        <></>
                      )}
                    </ListItemButton>
                    <Collapse
                      in={moreOpen}
                      timeout="auto"
                      unmountOnExit
                      sx={{
                        px: 0,
                      }}
                    >
                      {subItem.children?.map((child: any) => {
                        return (
                          <List
                            key={`child_${child.id}`}
                            component="div"
                            disablePadding
                            sx={{
                              backgroundColor: '#F9FAFB',
                              borderTop: `1px solid ${theme.palette.grey[400]}`,
                            }}
                          >
                            <ListItemButton
                              sx={{ textAlign: 'center' }}
                              onClick={() => {
                                setAnchorEl(null)
                                handleClick(subItem, false, true)
                              }}
                            >
                              <ListItemText
                                primary={
                                  <Typography
                                    variant={'h5'}
                                    fontWeight={500}
                                    color="inherit"
                                  >
                                    {child.title}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          </List>
                        )
                      })}
                    </Collapse>
                  </MenuItem>
                )
              })}
            </Menu>
          </ListItemIcon>
        </MenuItem>
      ) : (
        <MenuItem
          onClick={() => {
            handleClick(item, true, false)
          }}
          className={'main-menu'}
          selected={
            isMainMenu
              ? item?.activeItem
                ? item?.activeItem?.includes(pathname)
                : `/${item.url}` === pathname
              : item?.activeItem
              ? item?.activeItem?.includes(pathname)
              : `/${item.url}` === pathname
          }
        >
          <ListItemIcon
            className="side-menu-icon-list"
            sx={{ my: 'auto', marginLeft: '.5rem' }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText
            sx={{ marginLeft: '0rem' }}
            primary={
              <Typography variant={'h5'} color="inherit">
                {item.title}
              </Typography>
            }
          />
          {item.children && (
            <ListItemIcon
              className="side-menu-icon-list"
              sx={{ my: 'auto', marginLeft: '.5rem' }}
            >
              <IconButton onClick={handleParentMenuClick}>
                {childOpen ? <ExpandLess /> : <ExpandMore />}
              </IconButton>

              <Menu
                sx={{
                  borderRadius: `${theme.shape.borderRadius}px`,
                }}
                id="basic-menu"
                anchorEl={parentMenuEl}
                open={childOpen}
                elevation={2}
                onClose={handleChildMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {item.children?.map((subItem: any) => {
                  return (
                    <MenuItem
                      key={subItem.id}
                      sx={{
                        display: 'block',
                        minWidth: '240px',
                        padding: '0px',
                      }}
                    >
                      <ListItemButton>
                        <ListItemText
                          primary={
                            <Typography
                              variant={'h5'}
                              fontWeight={500}
                              color="inherit"
                            >
                              {subItem.title}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </MenuItem>
                  )
                })}
              </Menu>
            </ListItemIcon>
          )}
        </MenuItem>
      )}
    </>
  )
}

type NavItemTypes = {
  item: any
  isMainMenu: boolean
  handleClick: (
    navItem: IMenuItems,
    isMainMenu: boolean,
    isHiddenItem: boolean
  ) => any
}

export default NavItem


