'use client'
import React from 'react'
import Image from 'next/image'

interface Props {
  width?: number
}

export default function Logo({ width = 110 }: Props) {
  return (
    <>
      <div
        className='relative w-full'
        style={{ minWidth: width, maxWidth: width }}>
        <Image
          priority
          alt='logo_marvihogar'
          src='/logo.svg'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto'
        />
      </div>
    </>
  )
}
