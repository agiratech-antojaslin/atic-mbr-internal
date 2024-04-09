import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// material-ui
import { ButtonBase } from '@mui/material'

// project imports
import config from 'constant/config'
import Logo from 'component/ui-component/Logo'
import { MENU_OPEN } from 'features/theme/actions'

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state: any) => state.customization.defaultId)
  const dispatch = useDispatch()
  return (
    <ButtonBase
      disableRipple
      onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
      component={Link}
      to={config.defaultPath}
    >
      <Logo width="76" />
    </ButtonBase>
  )
}

export default LogoSection
