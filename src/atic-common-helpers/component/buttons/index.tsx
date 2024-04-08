import { Box, Button, Typography } from '@mui/material'

interface IButton {
  label: string
  icon: string
  handleClick: () => void
}

const ContainedIconButton = ({ label, icon, handleClick }: IButton) => {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          color: 'rgba(96, 100, 104, 1)',
          backgroundColor: 'rgba(40, 56, 145, 0.1)',
          padding: '.5rem 1.5rem',
          '&:hover': {
            backgroundColor: 'rgb(40 56 145 / 20%)',
          },
        }}
        onClick={handleClick}
      >
        <img src={icon} alt="Reprice" />
        <Typography sx={{ ml: 1 }}>{label}</Typography>
      </Button>
    </Box>
  )
}

export default ContainedIconButton
