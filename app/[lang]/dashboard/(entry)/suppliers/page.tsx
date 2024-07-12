'use client'
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
import { Badge } from '@/components/ui/badge'

// import { useTranslations } from 'next-intl'

const suppliersListFetchData = [
  {
    id: 1,
    nit: '123456789',
    supplierName: 'Colchones y Muebles Relax S.A.S.',
    email: 'supplier1@example.com',
    address: '123 Street, City',
    phone: '123-456-7890',
    website: 'www.colchonesymuebles.com',
  },
  {
    id: 2,
    nit: '987654321',
    supplierName: 'Edredona S.A.S.',
    email: 'supplier2@example.com',
    address: 'Main Ave, City',
    phone: '987-654-3210',
    website: 'www.edredona.com',
  },
  {
    id: 3,
    nit: '567890123',
    supplierName: 'Pino & Pino',
    email: 'supplier3@example.com',
    address: 'Central Plaza, City',
    phone: '567-890-1230',
    website: 'www.pinopino.com',
  },
]

export default function SuppliersPage() {
  // const t = useTranslations('EnterInvoicePageTranslate')

  return (
    <>
      <Card title='Agregar nuevo proveedor'>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='nit'>Nit</Label>
              <Input
                size='lg'
                type='text'
                placeholder='ingresar nit'
                id='nit'
              />
            </div>
            <div className='flex-col w-full'>
              <Label htmlFor='nprov'>Nombre proveedor</Label>
              <Input
                className='w-full'
                size='lg'
                type='text'
                placeholder='nombre proveedor'
                id='nprov'
              />
            </div>

            <div className='flex-col w-full'>
              <Label htmlFor='correo'>Correo</Label>
              <Input
                className='w-full'
                size='lg'
                type='email'
                placeholder='correo proveedor'
                id='correo'
              />
            </div>
            <div className='flex-col w-full'>
              <Label htmlFor='dir'>Dirección</Label>
              <Input
                className='w-full'
                size='lg'
                type='email'
                placeholder='direccion'
                id='dir'
              />
            </div>

            <div className='flex-col w-full'>
              <Label htmlFor='tel'>Telefono</Label>
              <Input
                className='w-full'
                size='lg'
                type='email'
                placeholder='telefono'
                id='tel'
              />
            </div>

            <div className='flex-col w-full'>
              <Label htmlFor='pweb'>Pagina web</Label>
              <Input
                className='w-full'
                size='lg'
                type='email'
                placeholder='pagina web'
                id='pweb'
              />
            </div>

            <div className='flex-col w-full'>
              <Button
                color='default'
                // loading={false}
                className='w-full md:w-auto'
                type='button'>
                {/* <Save className='mr-2' /> */}
                Guardar
              </Button>
            </div>
          </div>
        </form>

        {/* START - TABLA HISTORIAL FACTURAS */}
        <div className='border border-default-300 rounded-md mt-6'>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='p-0 h-10'></TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Nit
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Nombre proveedor
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Correo
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Dirección
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Telefono
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Pagina web
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Options
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliersListFetchData.map((supplier, index) => (
                  <TableRow key={supplier.id}>
                    <TableCell className='text-right text-xs p-1'>
                      {index + 1}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {supplier.nit}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {supplier.supplierName}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {supplier.email}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {supplier.address}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {supplier.phone}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {supplier.website}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 p-1'>
                      <div className='flex gap-3 items-center justify-end'>
                        <Button
                          color='success'
                          title='Edit'
                          size='icon'
                          className='h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 dark:hover:text-primary hover:text-primary-foreground dark:hover:border-primary border'>
                          <Icon
                            icon='heroicons:pencil-square'
                            className='w-5 h-5'
                          />
                        </Button>
                        <Button
                          color='destructive'
                          title='Delete'
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
        {/* END - TABLA HISTORIAL FACTURAS */}
      </Card>
    </>
  )
}
