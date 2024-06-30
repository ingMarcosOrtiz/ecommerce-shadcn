'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import flag1 from '@/public/images/all-img/flag-1.png'
import flag4 from '@/public/images/all-img/flag4.png'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter, usePathname } from 'next/navigation'
import { useThemeStore } from '@/store'
const languages = [
  {
    name: 'en',
    flag: flag1,
  },
  {
    name: 'es',
    flag: flag4,
  },
]
const Language = () => {
  type Language = {
    name: string
    flag: any
    language?: string
  }

  const router = useRouter()
  const pathname = usePathname()
  // const { isRtl, setRtl } = useThemeStore()
  const found = pathname
    ? languages.find((lang) => pathname.includes(lang.name))
    : null
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    found ?? languages[0]
  )

  useEffect(() => {
    const nextLocaleCookie = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('NEXT_LOCALE='))

    if (nextLocaleCookie) {
      const nextLocaleValue = nextLocaleCookie.split('=')[1]
      const foundLanguage = languages.find(
        (lang) => lang.name === nextLocaleValue
      )
      if (foundLanguage) {
        setSelectedLanguage(foundLanguage)
      }
    }
  }, [])

  const handleSelected = (lang: string) => {
    setSelectedLanguage({
      ...selectedLanguage,
      name: lang,
      language: lang === 'en' ? 'En' : 'Es',
    })
    // setRtl(lang === 'ar')
    // console.log(`/${lang}/${pathname.split('/')[2]}/${pathname.split('/')[3]}`)

    if (pathname) {
      router.push(
        `/${lang}/${pathname.split('/')[2]}/${pathname.split('/')[3]}`
      )
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type='button' className='bg-transparent hover:bg-transparent'>
          <span className='w-6 h-6 rounded-full me-1.5'>
            <Image
              src={selectedLanguage ? selectedLanguage.flag : flag1}
              alt=''
              className='w-full h-full object-cover rounded-full'
            />
          </span>
          <span className='text-sm text-default-600 capitalize'>
            {selectedLanguage ? selectedLanguage.name : 'En'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='p-2'>
        {languages.map((item, index) => (
          <DropdownMenuItem
            key={`flag-${index}`}
            className={cn(
              'py-1.5 px-2 cursor-pointer dark:hover:bg-background mb-[2px] last:mb-0',
              {
                'bg-primary-100 ':
                  selectedLanguage && selectedLanguage.name === item.name,
              }
            )}
            onClick={() => handleSelected(item.name)}>
            <span className='w-6 h-6 rounded-full me-1.5'>
              <Image
                src={item.flag}
                alt=''
                className='w-full h-full object-cover rounded-full'
              />
            </span>
            <span className='text-sm text-default-600 capitalize'>
              {item.name}
            </span>
            {selectedLanguage && selectedLanguage.name === item.name && (
              <Check className='w-4 h-4 flex-none ltr:ml-auto rtl:mr-auto text-default-700' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Language