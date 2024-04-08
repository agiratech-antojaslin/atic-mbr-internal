// material-ui
import { Typography, ButtonBase, Avatar, useTheme, Icon } from '@mui/material'

// project imports
import NavGroup from './NavGroup'
import { useSelector } from 'react-redux'
import { role } from 'features/theme/constant'
import { useAppSelector } from 'store/store'
import { Box } from '@mui/system'
import { IconMenu2 } from '@tabler/icons'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface MenuListProps {
  handleDrawerCloseClick: (isClose: boolean) => void
}

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = ({ handleDrawerCloseClick }: MenuListProps) => {
  // const userDetail = useAppSelector((state) => state.user.user);
  // const menuRole = role.find(r=> r === userDetail?.role);
  const theme = useTheme()
  const menuList = useAppSelector((state) => state.user.menuItems)
  const navItems = menuList.map((item: any) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        )
    }
  })

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonBase disableRipple sx={{ overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              transition: 'all .2s ease-in-out',
              background: 'transparent',
              color: theme.palette.text.secondary,
            }}
            onClick={() => {
              handleDrawerCloseClick(true)
            }}
          >
            <CloseRoundedIcon />
          </Avatar>
        </ButtonBase>
      </Box>
      <Box>{navItems}</Box>
    </>
  )
}

export default MenuList
