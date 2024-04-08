import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from 'store/store'

const ProtectedRoute = (props: any) => {
  // const { auth }= useAuth();
  const auth = !!localStorage.getItem('at-docmatic-user')
    ? JSON.parse(localStorage.getItem('at-docmatic-user') || '')
    : null
  let location = useLocation()
  return props?.roles?.includes(auth?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default ProtectedRoute
