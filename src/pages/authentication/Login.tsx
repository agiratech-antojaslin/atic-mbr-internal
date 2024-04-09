// material-ui
import { Grid, Box, Typography } from '@mui/material'

import Logo from 'component/ui-component/Logo'
import loginLogo from 'asset/images/login-foreground.png'
import AuthLogin from 'component/auth-forms/AuthLogin'
import { useEffect, useState } from 'react'
import Loader from 'component/ui-component/Loader'
import { commonService } from 'atic-common-helpers/helpers/common.service'
import popupItems from 'utils/popup.constant'
import {
  setMenuItemsRedux,
  setPopupItemsRedux,
  setUserRedux,
} from 'store/slice/user.slice'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store/store'
import AuthOTP from 'component/auth-forms/AuthOTP'
import './auth.scss'
import menuItemMBR from 'container/layout/menu-items'
import { Failed, Success } from 'atic-common-helpers/helpers/toast.helper'
import {
  capitalizeFirstLetter,
  errorMessage,
} from 'atic-common-helpers/helpers/function.helper'
import { IClient } from 'interfaces/common.interface'

const Login = () => {
  const [isLoading, setLoading] = useState(false)
  const [globalError, setGlobalError] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isLogin, setLogin] = useState(true)
  const [otpMail, setOtpMail] = useState('')
  const [error, setError] = useState('')
  const [entities, setEntities] = useState([])

  useEffect(() => {
    getLDAPClients()
  }, [])

  const handleSubmit = (values: any) => {
    setLoading(true)
    const payload = {
      username: values.username,
      password: values.password,
      client: values.client,
    }
    // commonService
    //   .postService(`/auth/send-otp`, payload)
    //   .then(async (res: any) => {
    //     const data = res.data
    //     setOtpMail(data.data.mail)
    const user = {
      displayName: 'gunasekar.k',
      sAMAccountName: 'Gunasekar',
      mail: 'gunasekar.k@agiratech.com',
      role: 'ADMIN',
    }
    localStorage.setItem('at-docmatic-user', JSON.stringify(user))
    localStorage.setItem('is-logged', 'true')
    dispatch(setUserRedux(user))
    const menus = menuItemMBR[user?.role]
    const popupItem = popupItems['EXAMINER']
    dispatch(setPopupItemsRedux(popupItem))
    dispatch(setMenuItemsRedux(menus))
    navigate(`/dashboard`)
    setLogin(false)
    setLoading(false)
    //Success(data.message, true)
    // })
    // .catch((error) => {
    //   setLoading(false)
    //   Failed(errorMessage(error, 'Something Went Wrong!'), true)
    // })
  }

  const handleOtpSubmit = (formData: any) => {
    commonService
      .postService(`/auth/login`, formData)
      .then(async (res: any) => {
        const data = res.data
        localStorage.setItem(
          'at-docmatic-token',
          JSON.stringify({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          })
        )
        const auth = localStorage.getItem('at-docmatic-user')
          ? JSON.parse(localStorage.getItem('at-docmatic-user') || '')
          : null
        const menus = menuItemMBR[auth?.role]
        console.log('menus', menus)
        const popupItem = popupItems['EXAMINER']
        dispatch(setPopupItemsRedux(popupItem))
        dispatch(setMenuItemsRedux(menus))
        navigate(`/dashboard`)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log('error', error)
        Failed(errorMessage(error, 'Something Went Wrong!'), true)
      })
  }

  const getLDAPClients = () => {
    setLoading(true)

    // commonService
    //   .getServices(`/auth/clients`)
    //   .then(async (res: any) => {
    const res: any = {
      status: 200,
      message: 'Data successfully retrived',
      data: [
        {
          id: 1,
          name: 'agiratech',
          isActive: true,
          createdAt: '2024-02-27T07:51:38.711Z',
          updatedAt: '2024-02-27T07:51:38.711Z',
          updatedBy: null,
        },
      ],
    }
    const data = res.data.map((client: IClient) => {
      return {
        name: capitalizeFirstLetter(client.name),
        value: client.name,
      }
    })
    setEntities(data)
    setLoading(false)
    // })
    // .catch((error) => {
    //   setLoading(false)
    //   Failed(errorMessage(error, 'Something Went Wrong!'), true)
    // })
  }

  return (
    <>
      {isLoading && <Loader />}
      <Box sx={{ width: '100%' }}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Box className="banner">
            <Box className="banner-wrapper">
              <img src={loginLogo} alt="Your Image" />
            </Box>
          </Box>
          <Box width={{ xs: '100%', md: '43.8%' }}>
            {isLogin ? (
              <Box>
                <Box sx={{ py: { xl: '8%', xs: '5%' } }}>
                  <Logo isAuth={true} />
                </Box>

                <Typography variant="h2" align="center">
                  Sign In
                </Typography>

                <Box
                  mt={1}
                  sx={{
                    pl: { md: '15.5%', xs: '5%' },
                    pr: { md: '19%', xs: '5%' },
                  }}
                >
                  <AuthLogin
                    handleSubmitLogin={handleSubmit}
                    setGlobalError={(e: string) => setGlobalError(e)}
                    globalError={globalError}
                    clients={entities}
                  />
                </Box>
              </Box>
            ) : (
              <Box>
                <Box sx={{ py: { md: '10%', xs: '5%' } }}>
                  <Logo isAuth={true} />
                </Box>
                <Typography variant="h2" align="center">
                  Two-Factor Authentication
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Enter the authentication code sent to <br />
                  {otpMail}
                </Typography>

                <Box
                  sx={{
                    pl: { md: '15.5%', xs: '5%' },
                    pr: { md: '19%', xs: '5%' },
                  }}
                >
                  <AuthOTP
                    handleSubmitVerify={handleOtpSubmit}
                    setError={(e: string) => setError(e)}
                    error={error}
                    url="/auth/reSend-otp"
                    handleCancel={() => setLogin(true)}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default Login
