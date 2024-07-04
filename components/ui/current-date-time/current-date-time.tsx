import React, { useEffect, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale/es'
registerLocale('es', es)

export function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer) // Limpia el intervalo cuando el componente se desmonta
  }, [])
  return (
    <>
      <DatePicker
        className='bg-transparent capitalize text-default-700 font-medium'
        disabled
        locale={'es'}
        selected={currentDateTime}
        onChange={(date) => {
          if (date) setCurrentDateTime(date)
        }}
        showTimeSelect
        dateFormat='MMMM d, yyyy h:mm aa'
      />
    </>
  )
}
