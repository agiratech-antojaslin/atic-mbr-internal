// material-ui
import { styled } from '@mui/material/styles'
import Loading from 'container/loading'

// styles
const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
})

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <LoaderWrapper>
    <Loading />
  </LoaderWrapper>
)

export default Loader
