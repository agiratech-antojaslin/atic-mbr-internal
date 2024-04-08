import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedAdminRoute = (props: any) => {
  // const { auth }= useAuth();
  const auth = !!localStorage.getItem('at-docmatic-user')
    ? JSON.parse(localStorage.getItem('at-docmatic-user') || '')
    : null
  let location = useLocation()
  return props?.roles?.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.role == 'examiner' ? (
    <Navigate to={`/medical-bills`} state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default ProtectedAdminRoute
