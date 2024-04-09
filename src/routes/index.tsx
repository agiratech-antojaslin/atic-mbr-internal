import { lazy, Suspense } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
  createBrowserRouter,
} from 'react-router-dom'
import { useAppSelector } from 'store/store'
import { Roles, IRoles } from 'utils/constant.utils'
import MainLayout from '../atic-common-helpers/layout/MainLayout'
import GuestRoute from './guestRoute.guard'
import ProtectedAdminRoute from './protectedAdminRoute.guard'
import ProtectedRoute from './protectedRoute.guard'
const Loader = lazy(() => import('component/ui-component/Loader'))
const PageNotFound = lazy(() => import('../pages/pagenotfound'))
const Login = lazy(() => import('../pages/authentication/Login'))

const Layout = lazy(() => import('../atic-common-helpers/layout/MainLayout'))
const { ADMIN, EXAMINER } = IRoles
import config from '../constant/config'

const Dashboard = lazy(() => import('../pages/dashboard/dashboard'))
const AAACases = lazy(() => import('../pages/aaaCases/index'))

const appLoader = () => {
  return <Loader />
}

const RoutePath = createBrowserRouter(
  [
    {
      path: '/',
      element: <GuestRoute roles={[ADMIN, EXAMINER]} />,
      loader: appLoader,
      children: [
        {
          path: '',
          element: <Navigate to="login" replace />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    {
      path: '/',
      element: <ProtectedRoute roles={[ADMIN, EXAMINER]} />,
      children: [
        {
          path: '/dashboard',
          element: <MainLayout />,
          children: [
            {
              path: '',
              element: <Dashboard />,
            },
          ],
        },
        {
          path: '/aaa-cases',
          element: <MainLayout />,
          children: [
            {
              path: '',
              element: <AAACases />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
    {
      path: '404',
      element: <PageNotFound />,
    },
  ],
  {
    basename: config.basename,
  }
)

export default RoutePath
