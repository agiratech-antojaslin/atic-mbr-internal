import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = (props: any) => {
  // const { auth }= useAuth();
  const auth = localStorage.getItem('at-docmatic-user')
    ? JSON.parse(localStorage.getItem('at-docmatic-user') || '')
    : null

  return props?.roles?.includes(auth?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default ProtectedRoute
