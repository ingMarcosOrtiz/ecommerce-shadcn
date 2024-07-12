import { Header } from '@/components/website-ecommerce'
import React from 'react'

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className='main-layout'>
        <Header />
        {children}
      </main>
    </>
  )
}
