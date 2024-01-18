import { ReactNode } from 'react'
import CartHeader from '@/components/CartHeader'
import Footer from '../../components/Footer'

interface CartLayoutProps {
  children?: ReactNode
}

export default function CartLayout({ children }: CartLayoutProps) {
  return (
    <div>
      <CartHeader />
      {children}
      <Footer />
    </div>
  )
}
