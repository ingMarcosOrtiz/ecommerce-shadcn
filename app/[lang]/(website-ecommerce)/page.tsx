import ThemeChange from '@/components/landing-page/color-schemas/theme-change'
import Header from '@/components/landing-page/header'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* <ThemeChange /> */}
      <br />
      <br />
      <br />
      <br />
      <Link href='/auth/login'>ir al Login</Link>
      <br />
      <br />
      <br />
      <Link href='/productos'>ir todos los productos</Link>
      <br />
      <br />
      <Link href='/dashboard'>ir al Dashboard</Link>
    </div>
  )
}
