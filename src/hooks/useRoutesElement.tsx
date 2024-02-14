import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import RegisterLayout from '@/layouts/RegisterLayout/RegisterLayout'
import MainLayout from '@/layouts/MainLayout'
import CartLayout from '@/layouts/CartLayout'
// import ProductDetails from '@/pages/ProductDetails'
// import Login from '@/pages/Login'
// import Profile from '@/pages/User/pages/Profile'
// import ProductList from '@/pages/ProductList'
// import Register from '@/pages/Register'
// import Cart from '@/pages/Cart'
// import ChangePassword from '@/pages/User/pages/ChangePassword'
// import HistoryPurchase from '@/pages/User/pages/HistoryPurchase'
// import NotFound from '@/pages/User/pages/NotFound'
import { useContext, lazy, Suspense } from 'react'
import { AppContext } from '@/contexts/app.context'
import path from '@/constants/path'
import UserLayout from '@/pages/User/layouts/UserLayout'

const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))
const ProductList = lazy(() => import('@/pages/ProductList'))
const Profile = lazy(() => import('@/pages/User/pages/Profile'))
const ProductDetails = lazy(() => import('@/pages/ProductDetails'))
const Cart = lazy(() => import('@/pages/Cart'))
const ChangePassword = lazy(() => import('@/pages/User/pages/ChangePassword'))
const HistoryPurchase = lazy(() => import('@/pages/User/pages/HistoryPurchase'))
const NotFound = lazy(() => import('@/pages/NotFound'))
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
      path: '*',
      element: (
        <MainLayout>
          <Suspense>
            <NotFound />
          </Suspense>
        </MainLayout>
      )
    },
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Suspense>
            <ProductList />
          </Suspense>
        </MainLayout>
      )
    },
    {
      path: path.productDetails,
      element: (
        <MainLayout>
          <Suspense>
            <ProductDetails />
          </Suspense>
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
              element: (
                <Suspense>
                  <Profile />
                </Suspense>
              )
            },
            {
              path: path.changePassword,
              element: (
                <Suspense>
                  <ChangePassword />
                </Suspense>
              )
            },
            {
              path: path.historyPurchase,
              element: (
                <Suspense>
                  <HistoryPurchase />
                </Suspense>
              )
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
              <Suspense>
                <Login />
              </Suspense>
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Suspense>
                <Register />
              </Suspense>
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
