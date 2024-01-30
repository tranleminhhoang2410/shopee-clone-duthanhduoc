import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from '@/layouts/RegisterLayout/RegisterLayout'
import MainLayout from '@/layouts/MainLayout'
import CartLayout from '@/layouts/CartLayout'
import Profile from '@/pages/Profile'
import ProductList from '@/pages/ProductList'
import ProductDetails from '@/pages/ProductDetails'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Cart from '@/pages/Cart'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'
import path from '@/constants/path'
import UserLayout from '@/pages/User/layouts/UserLayout'
import ChangePassword from '@/pages/User/pages/ChangePassword'
import HistoryPurchase from '@/pages/User/pages/HistoryPurchase'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRoutesElement() {
  const routeElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: path.productDetails,
      element: (
        <MainLayout>
          <ProductDetails />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.cart,
          element: (
            <CartLayout>
              <Cart />
            </CartLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <UserLayout />
            </MainLayout>
          ),
          children: [
            {
              path: path.profile,
              element: <Profile />
            },
            {
              path: path.changePassword,
              element: <ChangePassword />
            },
            {
              path: path.historyPurchase,
              element: <HistoryPurchase />
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
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
