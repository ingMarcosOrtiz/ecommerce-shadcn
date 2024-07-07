'use client'
import React, { useState } from 'react'
import Card from '@/components/ui/card-snippet'
import { Label } from '@/components/ui/label'
import { InputGroup, InputGroupText } from '@/components/ui/input-group'
import { Icon } from '@iconify/react'
import { CleaveInput } from '@/components/ui/cleave'
import Flatpickr from 'react-flatpickr'

export default function BlankPage() {
  const [startDate, setStartDate] = useState<Date>(new Date())
  return (
    <>
      <Card title='Ejemplo de pagina en blanco'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit
          corrupti necessitatibus reprehenderit nihil! Delectus perspiciatis
          quos ducimus facilis voluptatibus consequatur odit magnam vel, numquam
          praesentium non maiores exercitationem aliquid!
        </p>

        <div className='flex flex-col gap-1 mt-5'>
          <Label htmlFor='costoenvio'>Costo Total de envio</Label>

          <InputGroup>
            <InputGroupText>
              <Icon className='text-xl' icon='healthicons:dollar' />
            </InputGroupText>

            <CleaveInput
              id='nu'
              options={{
                numeral: true,
                delimiter: ',',
                blocks: [3, 3, 3],
              }}
              placeholder='valor'
            />
          </InputGroup>

          <div className='relative'>
            <Flatpickr
              id='datePiker'
              // options={{ enableTime: true, dateFormat: 'Y-m-d H:i' }}
              options={{
                dateFormat: 'Y-m-d',
                locale: 'es',
                altFormat: 'F j, Y',
                altInput: false,
                // allowInput: true,
              }}
              value={startDate}
              onChange={
                (selectedDates: Date[]) => setStartDate(startDate)
                // console.log('fecha', selectedDates)
              }
              className='w-full border border-default-300 bg-background text-default-500  focus:outline-none h-10 rounded-md px-2 placeholder:text-default-500'
              placeholder='fecha'
            />
            <Icon
              icon='heroicons:calendar-days'
              className='w-5 h-5 absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 text-default-400 '
            />
          </div>
        </div>
      </Card>
    </>
  )
}
