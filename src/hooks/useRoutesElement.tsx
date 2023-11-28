import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from '../layouts/RegisterLayout/RegisterLayout'
import MainLayout from '../layouts/MainLayout'
import Profile from '../pages/Profile'
import ProductList from '../pages/ProductList'
import Login from '../pages/Login'
import Register from '../pages/Register'

const ProtectedRoute = () => {
  const isAuthenticated = true
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

const RejectedRoute = () => {
  const isAuthenticated = false
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRoutesElement() {
  const routeElements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
