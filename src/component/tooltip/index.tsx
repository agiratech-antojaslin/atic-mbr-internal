import styled from '@emotion/styled'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

export const InfoTooltip = styled(({ className, ...props }: TooltipProps) => {
  return (
    <Tooltip
      {...props}
      arrow
      classes={{ popper: className }}
      PopperProps={{
        disablePortal: true,
      }}
    />
  )
})(({ theme }: any) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#00498F',
  },
  [`& .MuiTooltip-tooltipPlacementTop`]: {
    marginLeft: '-14px',
  },
  [`& .MuiTooltip-tooltipPlacementTop .${tooltipClasses.arrow}`]: {
    left: '8px !important',
    //bottom: '1px !important',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#00498F',
    color: '#fff',
    borderRadius: '8px',
    maxWidth: 330,
    fontSize: '12px',
    marginBottom: '2px !important',
  },
}))
