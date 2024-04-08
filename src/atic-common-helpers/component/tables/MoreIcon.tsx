import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton, ListItemIcon, Typography, useTheme } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import viewIcon from 'asset/images/icons/view.svg'

type TMoreIcon = {
  selectedID: string
  moreItems?: any[]
  data: any
}

export default function MoreIcon({ selectedID, moreItems, data }: TMoreIcon) {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
    event.stopPropagation()
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          transform: 'translate(-40px, 10px) !important',
        }}
      >
        {moreItems?.map((item: any) => {
          return (
            <MenuItem
              key={item.id}
              onClick={(e) => {
                e.stopPropagation()
                item.handleClick(data)
                handleClose()
              }}
              sx={{ height: '40px' }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="inherit">{item.label}</Typography>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
