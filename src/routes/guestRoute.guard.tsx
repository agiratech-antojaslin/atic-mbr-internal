import { Navigate, Outlet, useLocation } from 'react-router-dom'

const GuestRoute = (props: any) => {
  // const { auth } = useAuth()
  const auth = localStorage.getItem('at-docmatic-user')
    ? JSON.parse(localStorage.getItem('at-docmatic-user') || '')
    : null
  const token = localStorage.getItem('at-docmatic-token')
    ? JSON.parse(localStorage.getItem('at-docmatic-user') || '')
    : null
  const location = useLocation()
  return props?.roles?.includes(auth?.role) && !!token ? (
    <Navigate to={`/dashboard`} state={{ from: location }} replace />
  ) : (
    <Outlet />
  )
}

export default GuestRoute
