'use client'
import React, { useState } from 'react'
import Card from '@/components/ui/card-snippet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'

import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { es } from 'date-fns/locale/es'
import { CleaveInput } from '@/components/ui/cleave'
import { InputGroup, InputGroupText } from '@/components/ui/input-group'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// Datos ficticios para gastos
const expensesFetchData = [
  {
    id: 1,
    description: 'Compra de suministros de oficina',
    amount: 500,
    date: '2024-07-01',
  },
  {
    id: 2,
    description: 'Pago de servicios públicos',
    amount: 200,
    date: '2024-07-02',
  },
  {
    id: 3,
    description: 'Reparación de equipo',
    amount: 300,
    date: '2024-07-03',
  },
]

export default function ExpensesPage() {
  const [startDate, setStartDate] = useState<Date>(new Date())

  return (
    <>
      <Card title='Agregar gastos'>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='description'>Descripción del gasto</Label>
              <Input
                size='lg'
                type='text'
                placeholder='Ingresar descripción del gasto'
                id='description'
              />
            </div>
            <div className='flex-col w-full'>
              <Label htmlFor='amount'>Precio</Label>

              <InputGroup>
                <InputGroupText>
                  <Icon className='text-xl' icon='healthicons:dollar' />
                </InputGroupText>

                <CleaveInput
                  // value={item.unitPrice}

                  // onChange={(e) =>
                  //   handleInputChange(
                  //     index,
                  //     'unitPrice',
                  //     parseFloat(
                  //       e.target.value.replace(/,/g, '')
                  //     )
                  //   )
                  // }
                  id='precio'
                  options={{
                    numeral: true,
                    delimiter: ',',
                    blocks: [3, 3, 3],
                  }}
                  placeholder='Precio'
                />
              </InputGroup>
            </div>

            <div className='flex flex-col gap-1'>
              <Label htmlFor='startDate'>Fecha</Label>
              <DatePicker
                className='capitalize bg-background dark:border-700 px-3 file:border-0 file:bg-transparent file:text-sm file:font-medium read-only:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 border-default-300 text-default-500 focus:outline-none focus:border-primary disabled:bg-default-200 placeholder:text-accent-foreground/50 border rounded-lg h-10 text-sm read-only:leading-10 w-full cursor-pointer'
                selected={startDate}
                // dateFormat='MMMM d, yyyy h:mm aa'
                dateFormat='MMMM d, yyyy'
                locale={'es'}
                onChange={(date: Date | null) => {
                  if (date !== null) {
                    setStartDate(date)
                  }
                }}
              />
            </div>
          </div>
          <div className='flex-col w-full mt-5'>
            <Button
              color='default'
              // loading={false}
              className='w-full md:w-auto'
              type='button'>
              Guardar
            </Button>
          </div>
        </form>
        <div className='border border-default-300 rounded-md mt-6'>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='p-0 h-10'></TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Descripción del gasto
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Valor
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Fecha
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Opciones
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expensesFetchData.map((expense, index) => (
                  <TableRow key={expense.id}>
                    <TableCell className='text-right text-xs p-1'>
                      {index + 1}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {expense.description}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {expense.amount}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {expense.date}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 p-1'>
                      <div className='flex gap-3 items-center justify-end'>
                        <Button
                          color='success'
                          title='Editar'
                          size='icon'
                          className='h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 dark:hover:text-primary hover:text-primary-foreground dark:hover:border-primary border'>
                          <Icon
                            icon='heroicons:pencil-square'
                            className='w-5 h-5'
                          />
                        </Button>
                        <Button
                          color='destructive'
                          title='Eliminar'
                          size='icon'
                          className='h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 dark:hover:text-primary hover:text-primary-foreground dark:hover:border-primary border'>
                          <Icon icon='heroicons:trash' className='w-5 h-5' />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </>
  )
}
