// material-ui
// import { useTheme } from '@mui/material/styles';
import { List, Typography } from '@mui/material'

// project imports
import NavItem from '../NavItem'
import NavCollapse from '../NavCollapse'

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }: NavGroupTypes) => {
  // const theme = useTheme();

  // menu list collapse & items
  const items = item.children.map((menu: any) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        )
    }
  })

  return (
    <>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {items}
      </List>
    </>
  )
}

type NavGroupTypes = {
  item: {
    children: any
  }
}

export default NavGroup
