'use client'
import React from 'react'
import Card from '@/components/ui/card-snippet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const customersFetchData = [
  {
    id: 1,
    cedula: '123456789',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    address: 'Calle Principal 123',
    phone: '123-456-7890',
  },
  {
    id: 2,
    cedula: '987654321',
    name: 'María López',
    email: 'maria@example.com',
    address: 'Avenida Central 456',
    phone: '987-654-3210',
  },
  {
    id: 3,
    cedula: '567890123',
    name: 'Pedro Rodríguez',
    email: 'pedro@example.com',
    address: 'Plaza Central 789',
    phone: '567-890-1230',
  },
]

export default function CustomersPage() {
  return (
    <>
      <Card title='Agregar nuevo cliente'>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='documentNumber'>Cédula</Label>
              <Input
                size='lg'
                type='text'
                placeholder='Ingresar número de cédula'
                id='documentNumber'
              />
            </div>
            <div className='flex-col w-full'>
              <Label htmlFor='name'>Nombre</Label>
              <Input
                className='w-full'
                size='lg'
                type='text'
                placeholder='Nombre del cliente'
                id='name'
              />
            </div>

            <div className='flex-col w-full'>
              <Label htmlFor='email'>Correo</Label>
              <Input
                className='w-full'
                size='lg'
                type='email'
                placeholder='Correo del cliente'
                id='email'
              />
            </div>

            <div className='flex-col w-full'>
              <Label htmlFor='address'>Dirección</Label>
              <Input
                className='w-full'
                size='lg'
                type='text'
                placeholder='Dirección del cliente'
                id='address'
              />
            </div>

            <div className='flex-col w-full'>
              <Label htmlFor='phone'>Número de Celular</Label>
              <Input
                className='w-full'
                size='lg'
                type='text'
                placeholder='Número de celular del cliente'
                id='phone'
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
                    Cédula
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Nombre
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Correo
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Dirección
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Número de Celular
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Opciones
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customersFetchData.map((customer, index) => (
                  <TableRow key={customer.id}>
                    <TableCell className='text-right text-xs p-1'>
                      {index + 1}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {customer.cedula}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {customer.name}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {customer.email}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {customer.address}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {customer.phone}
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
