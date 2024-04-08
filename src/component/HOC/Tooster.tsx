import Snackbar from '@mui/material/Snackbar'
import { Alert } from '@mui/material'

type SnackbarHOCProps = {
  isOpen: boolean
  status: AlertColor
  message: string
}

type AlertColor = 'success' | 'info' | 'warning' | 'error'

export default function SnackbarHOC({
  isOpen,
  status,
  message,
}: SnackbarHOCProps) {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        open={isOpen}
      >
        <Alert severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}
