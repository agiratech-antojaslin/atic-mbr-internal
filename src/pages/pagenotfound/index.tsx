import React from 'react'
// import Pagenotfound from '../../asset/images/404.png'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'store/store'
import { Roles } from 'utils/constant.utils'
import { Box, Toolbar } from '@mui/material'
import Logo from 'component/ui-component/Logo'
const PageNotFound = () => {
  const auth = useAppSelector((state) => state.user.user)
  return (
    <div>
      <Box sx={{ boxShadow: 'rgb(17 17 26 / 10%) 0px 1px 0px' }}>
        <Toolbar sx={{ p: '0!important', mx: { sm: '2.5%', xs: '2%' } }}>
          {/* header */}
          <Box sx={{ pt: 1 }}>
            <Logo width="120" />
          </Box>
        </Toolbar>
      </Box>
      <div className="page-not-found">
        {/* <img src={Pagenotfound} alt="404" /> */}
        <Link
          to={auth?.mail ? `/${Roles[auth?.mail]}/dashboard` : '/login'}
          style={{
            color: 'white',
            background: '#4D44A1',
            width: '15rem',
            padding: '18px',
            fontSize: '18px',
            letterSpacing: '2px',
            textDecoration: 'none',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          {auth?.mail ? 'Go to dashboard' : 'Go to login'}
        </Link>
      </div>
    </div>
  )
}
export default PageNotFound
