import React from 'react'
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import Logo from '@/components/ui/logo/logo'

export function Header() {
  return (
    <>
      <header className='bg-primary text-white backdrop-blur-lg h-[74px]  z-30 dark:bg-card/70 sticky top-0 left-0 w-full '>
        <nav className='container mx-auto max-w-screen-xl flex justify-between items-center py-3 px-6'>
          <div className='navbar-left'>
            <Link href='/' className='logo'>
              <div className='bg-white p-2 rounded-md'>
                <Logo />
              </div>
            </Link>
          </div>
          <div className='navbar-center'>
            <ul className='menu flex space-x-8 '>
              <li>
                <Link
                  href='/productos'
                  className='text-white hover:text-gray-900'>
                  Ver productos
                </Link>
              </li>
              <li>
                <a href='about.html' className='text-white hover:text-gray-900'>
                  Quienes somos
                </a>
              </li>
              <li>
                <a
                  href='discount.html'
                  className='text-white hover:text-gray-900'>
                  Recibir descuento
                </a>
              </li>
            </ul>
          </div>
          <div className='navbar-right'>
            <ul className='user-options flex space-x-6'>
              <li>
                <a
                  href='cart.html'
                  className='text-gray-700 hover:text-primary'>
                  <ShoppingCart size={25} className='text-white' />
                </a>
              </li>
              <li>
                <a
                  href='account.html'
                  className='text-gray-700 hover:text-primary '>
                  <User size={25} className='text-white' />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
