// react
import { useEffect, useState } from 'react'

// material-ui
import {
  useTheme,
  useMediaQuery,
  Avatar,
  Box,
  ButtonBase,
  Toolbar,
  IconButton,
} from '@mui/material'
import { IconMenu2 } from '@tabler/icons'

// project imports
import ProfileSection from './ProfileSection'
import NavItem from './NavItem'
import { useAppSelector } from 'store/store'
import { IMenuItems } from 'atic-common-helpers/helpers/interface.helper'
import { useAppDispatch } from 'store/store'
import {
  setHiddenMenuItemsRedux,
  setVisibleMenuItemsRedux,
} from 'store/slice/user.slice'
import { matchPath, useNavigate, useLocation } from 'react-router-dom'
import { useIsHiddenRouteActive } from 'hooks/useIsHiddenRouteActive'
import Logo from 'component/ui-component/Logo'
import ApplicationsIcon from 'asset/images/menu/applications.svg'
import NotificationIcon from 'asset/images/menu/notification.svg'

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }: HeaderTypes) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  const matchDownXl = useMediaQuery(theme.breakpoints.down('xl'))
  const menuItems = useAppSelector((state) => state.user.menuItems)

  const [visibleMenus, setVisibleMenus] = useState<Array<IMenuItems>>([])
  const [hiddenMenus, setHiddenMenus] = useState<Array<IMenuItems>>([])
  const [moreItems, setMoreItems] = useState<IMenuItems>()

  const more: IMenuItems = {
    id: 'more',
    title: 'More',
    type: 'item',
    icon: 'moreIcon',
    url: '',
    children: [],
    breadcrumbs: false,
  }

  const isHiddenRouteActive = useIsHiddenRouteActive(
    menuItems[0]?.children?.slice(4)
  )

  useEffect(() => {
    if (matchDownXl) {
      const visibleMenusSlice = menuItems[0]?.children?.slice(0, 5)
      const hiddenMenusSlice = menuItems[0]?.children?.slice(5)
      setVisibleMenus(visibleMenusSlice)
      setHiddenMenus(hiddenMenusSlice)
      if (isHiddenRouteActive) {
        const { visibleSwap, hiddenSwap } = swapHiddenRoute(
          visibleMenusSlice,
          hiddenMenusSlice,
          isHiddenRouteActive
        )
        setVisibleMenus(visibleSwap)
        setHiddenMenus(hiddenSwap)
        more.children = [...hiddenSwap]
      } else {
        more.children = [...hiddenMenusSlice]
      }
      setMoreItems(more)
    } else {
      setVisibleMenus(menuItems[0]?.children)
      setHiddenMenus([])
    }
  }, [matchDownXl])

  useEffect(() => {
    dispatch(setVisibleMenuItemsRedux(visibleMenus))
    dispatch(setHiddenMenuItemsRedux(hiddenMenus))
  }, [visibleMenus, hiddenMenus])

  const handleNavigate = (
    item: IMenuItems,
    isMainMenu: boolean,
    isHidden: boolean
  ) => {
    if (isHidden) {
      const { visibleSwap, hiddenSwap } = swapHiddenRoute(
        visibleMenus,
        hiddenMenus,
        item
      )
      setVisibleMenus(visibleSwap)
      setHiddenMenus(hiddenSwap)
      more.children = [...hiddenSwap]
      setMoreItems(more)
    }
    navigate(item.url)
  }

  return (
    <>
      <Toolbar
        sx={{
          p: '0!important',
          mx: { sm: '2.5%', xs: '2%' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',

            [theme.breakpoints.down('md')]: {
              width: 'auto',
              flexDirection: 'row-reverse',
            },
          }}
        >
          <Box sx={{ pt: 1, pb: 1 }}>
            <Logo width="76" />
          </Box>
          {!matchDownMd && (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              {visibleMenus?.length > 0 &&
                visibleMenus.map((item: IMenuItems) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    isMainMenu={true}
                    handleClick={handleNavigate}
                  />
                ))}
              {hiddenMenus.length > 0 && (
                <NavItem
                  key={moreItems?.id}
                  item={moreItems}
                  isMainMenu={true}
                  handleClick={handleNavigate}
                />
              )}
            </Box>
          )}

          {!matchDownMd && (
            <Box
              width={'150px'}
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <IconButton aria-label="more" id="long-button">
                <img src={ApplicationsIcon} width="24" />
              </IconButton>
              <IconButton
                aria-label="more"
                id="long-button"
                sx={{ backgroundColor: theme.palette.primary.primary200 }}
              >
                <img src={NotificationIcon} width="19" />
              </IconButton>
              <ProfileSection />
            </Box>
          )}
        </Box>
        {matchDownMd && (
          <Box>
            <ProfileSection />
            <ButtonBase
              disableRipple
              sx={{ borderRadius: '12px', overflow: 'hidden' }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography?.commonAvatar,
                  ...theme.typography?.mediumAvatar,
                  transition: 'all .2s ease-in-out',
                  background: 'transparent',
                  color: theme.palette.primary?.tableHead,
                  '&:hover': {
                    background: theme.palette.primary.buttonColor,
                    color: theme.palette.secondary.light,
                  },
                }}
                onClick={handleLeftDrawerToggle}
                color="inherit"
              >
                <IconMenu2 stroke={1.5} size="1.5rem" />
              </Avatar>
            </ButtonBase>
          </Box>
        )}
      </Toolbar>
    </>
  )
}

type HeaderTypes = {
  handleLeftDrawerToggle: () => void
}

export default Header

export const isHiddenRouteActive = (hiddenArr: IMenuItems[]) => {
  const location = useLocation()
  const hiddenRoute = hiddenArr.find((route) =>
    matchPath(location.pathname, route.url)
  )
  return hiddenRoute ? true : false
}

export const swapHiddenRoute = (
  visibleArr: IMenuItems[],
  hiddenArr: IMenuItems[],
  activeItem: IMenuItems
): { visibleSwap: IMenuItems[]; hiddenSwap: IMenuItems[] } => {
  const visible = [...visibleArr]
  const hidden = [...hiddenArr]
  const temp = visible[visible.length - 1]
  visible[visible.length - 1] = activeItem
  hidden[hidden.length - 1] = temp
  return { visibleSwap: visible, hiddenSwap: hidden }
}
