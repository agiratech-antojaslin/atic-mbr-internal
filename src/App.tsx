import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import './App.css'
import RoutePath from './routes'
import themes from './asset/themes'
import { setAxiosDefauls } from 'helpers/interceptor'
import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { useAppSelector } from 'store/store'
import Loader from 'component/ui-component/Loader'

function App() {
  const customization = useAppSelector((state: any) => state.customization)

  // Set default Axios configurations
  useEffect(() => {
    setAxiosDefauls()
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <Suspense fallback={<Loader />}>
            <RouterProvider router={RoutePath} />
          </Suspense>
        </ThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  )
}

export default App
