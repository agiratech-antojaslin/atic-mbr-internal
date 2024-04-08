import axios from 'axios'
import deleteAlert from 'component/HOC/deleteAlert'
import { clearStore } from 'utils/redux.utils'

axios.defaults.baseURL = process.env.REACT_APP_END_URL

// Add a flag to track if the 401 alert has been shown
let isAlertShown = false
export const setAxiosDefauls = () => {
  axios.interceptors.request.use(onRequestFulfilled, onRequestRejected)

  axios.interceptors.response.use(onResponseFulfilled, onResponseRejected)
}

export const resetSession = () => {
  localStorage.remove('at-docmatic-auth')
  // history.push('/');
}

const onRequestFulfilled = (config: any) => {
  const token = JSON.parse(localStorage.getItem('at-docmatic-token')!)
  if (config.url === '/auth/access-token') {
    return config
  } else {
    if (token && token !== 'undefined') {
      config.headers = {
        Authorization: 'Bearer ' + token.accessToken,
      }
    }
  }

  return Promise.resolve(config)
}

const onRequestRejected = (error: any) => {
  return Promise.reject(error)
}

const onResponseFulfilled = (config: any) => {
  return Promise.resolve(config)
}

const onResponseRejected = async (error: any) => {
  const originalRequest = error.config

  // If the error status is 401 and there is no originalRequest._retry flag,
  // it means the token has expired and we need to refresh it
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true

    try {
      const token = JSON.parse(localStorage.getItem('at-docmatic-token')!)
      const response = await axios.get('/auth/access-token', {
        headers: {
          Authorization: `Bearer ${token.refreshToken}`,
        },
      })
      const newToken = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      }

      localStorage.setItem('at-docmatic-token', JSON.stringify(newToken))
      originalRequest.headers.Authorization = `Bearer ${token}`
      return axios(originalRequest)
    } catch (error) {
      localStorage.clear()
      deleteAlert({
        title:
          '<h3 style="font-size: 1.125rem; font-weight: 600; color: #101828">Session Expired</h3>',
        message:
          '<div style="font-size: .875rem; font-weight: 400; color: #; margin-top: 0px">Your session is expired! Please logout.</div>',
        confirmButtonText: 'OK',
        onConfirmed: logout,
        showCancel: false,
      })

      isAlertShown = true
    }
  } else {
    if (error?.response?.status === 403 && !isAlertShown) {
      localStorage.clear()
      alert('Session Expired')
      window.location.href = '/'
      // Set the flag to true after showing the alert
      isAlertShown = true
    }
    if (error?.response?.status === 405 && !isAlertShown) {
      localStorage.clear()
      alert('Your account is inactive. Please contact the admin for help.')
      window.location.href = '/'
      // Set the flag to true after showing the alert
      isAlertShown = true
    }
  }

  return Promise.reject(error)
}

const logout = () => {
  clearStore()
  localStorage.clear()
  sessionStorage.clear()
  window.location.href = '/login'
}
