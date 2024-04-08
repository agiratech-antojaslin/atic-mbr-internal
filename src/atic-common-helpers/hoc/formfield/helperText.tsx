import React, { useState } from 'react'
import Popover from '@mui/material/Popover'
import InfoIcon from '@mui/icons-material/Info'

interface HoverImagePopoverProps {
  img: string
  width?: string
}

const HoverImagePopover = ({
  img,
  width = '300px',
}: HoverImagePopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <span onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
      <InfoIcon style={{ color: 'ffb300', fontSize: '1rem' }} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <img
          src={img}
          alt="Hovered Image"
          style={{ width: width, height: 'auto' }}
        />
      </Popover>
    </span>
  )
}

export default HoverImagePopover
