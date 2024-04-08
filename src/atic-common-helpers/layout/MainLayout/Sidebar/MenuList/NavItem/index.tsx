import { forwardRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material'
// project imports
import { MENU_OPEN, SET_MENU } from '../../../../../../features/theme/actions'
import { useLocation } from 'react-router-dom'
import Assets from 'helpers/assets.helper'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: NavItemTypes) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const [moreOpen, setMoreOpen] = useState(false)
  const customization = useSelector((state: any) => state?.customization)
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'))
  const Icon = Assets[item.icon]
  const itemIcon = <Icon sx={{ fontSize: '28px' }} />
  let itemTarget = '_self'
  if (item.target) {
    itemTarget = '_blank'
  }

  let listItemProps = {
    component: forwardRef((props: any, ref: React.ForwardedRef<unknown>) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  }
  if (item?.external) {
    listItemProps = {
      component: forwardRef((props: any, ref: React.ForwardedRef<unknown>) => (
        <Link ref={ref} {...props} to={item.url} target={itemTarget} />
      )),
    }
  }

  const itemHandler = (id: any) => {
    dispatch({ type: MENU_OPEN, id })
    if (matchesSM) dispatch({ type: SET_MENU, opened: false })
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id)
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id })
    }
    // eslint-disable-next-line
  }, [])
  const location = useLocation()
  const fileName = location.pathname.split('/')

  const handleMoreMenuClick = () => {
    setMoreOpen(!moreOpen)
  }

  const SubIcon = Assets.administrationIcon
  const subItemIcon = <SubIcon sx={{ fontSize: '20px' }} />

  return (
    <>
      {item.children?.length ? (
        <Box width={'100%'}>
          <ListItemButton onClick={handleMoreMenuClick}>
            <ListItemIcon sx={{ color: theme.palette.text.secondary }}>
              {subItemIcon}
            </ListItemIcon>
            <ListItemText
              sx={{ marginLeft: '1rem' }}
              primary={
                <Typography variant={'body1'} color="inherit">
                  {item.title}
                </Typography>
              }
            />
            {moreOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={moreOpen} timeout="auto" unmountOnExit>
            {item.children.map((childItem: any) => {
              return (
                <List component="div" key={childItem.id} disablePadding>
                  <ListItemButton sx={{ textAlign: 'right' }}>
                    <ListItemText
                      primary={
                        <Typography
                          variant={'body1'}
                          fontWeight={500}
                          color="inherit"
                        >
                          {childItem.title}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
              )
            })}
          </Collapse>
        </Box>
      ) : (
        <ListItemButton
          {...listItemProps}
          disabled={item.disabled}
          sx={{
            borderRadius: `${customization.borderRadius}px`,
            // mb: 0.5,
            width: '100%',
            backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
            my: '5px',
            py: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
          selected={
            item?.activeItem && item?.activeItem.length
              ? fileName[2]
                ? item?.activeItem?.includes(`/${fileName[1]}/${fileName[2]}`)
                : item?.activeItem?.includes(`/${fileName[1]}`)
              : `/${item.url}` === location.pathname
          }
          onClick={() => itemHandler(item.id)}
        >
          <ListItemIcon className="side-menu-icon-list" sx={{ my: 'auto' }}>
            {itemIcon}
          </ListItemIcon>
          <ListItemText
            sx={{ marginLeft: '1rem' }}
            primary={
              <Typography
                variant={
                  customization.isOpen.findIndex((id: any) => id === item.id) >
                  -1
                    ? 'h5'
                    : 'body1'
                }
                color="inherit"
              >
                {item.title}
              </Typography>
            }
          />
        </ListItemButton>
      )}
    </>
  )
}

type NavItemTypes = {
  item: any
  level: number
}

export default NavItem
