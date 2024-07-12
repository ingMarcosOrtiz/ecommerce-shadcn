'use client'
import React from 'react'
import Card from '@/components/ui/card-snippet'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import { Badge } from '@/components/ui/badge'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { InputGroup, InputGroupButton } from '@/components/ui/input-group'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const invoiceFetchData = [
  {
    id: 1,
    invoiceNumber: '8987254',
    supplier: 'colchones y muebles relax s.a.s',
    purchaseType: 'credito',
    paymentMethod: 'credito',
    date: 'Mmarzo 05, 2024',
    dueDate: 'septiembre 05, 2024',
    paymentStatus: 'pendiente',
  },
  {
    id: 2,
    invoiceNumber: '5489',
    supplier: 'edredona s.a.s',
    purchaseType: 'contado',
    paymentMethod: 'caja',
    date: 'junio 20, 2024',
    dueDate: 'junio 20, 2024',
    paymentStatus: 'pagado',
  },
  {
    id: 3,
    invoiceNumber: '14897',
    supplier: 'pino & pino',
    purchaseType: 'credito',
    paymentMethod: 'credito',
    date: 'enero 17, 2024',
    dueDate: 'enero 17, 2024',
    paymentStatus: 'pagado',
  },
]

export default function InvoiceHistoryPage() {
  return (
    <>
      <Card title='Historial Facturas'>
        <div className='grid grid-cols-1 md:grid-cols-4 mb-7 gap-3'>
          <div className='flex flex-col gap-1'>
            <Label htmlFor='bxnp'>Buscar por codigo</Label>
            <InputGroup>
              <Input
                id='bxnp'
                type='text'
                placeholder='Buscar por codigo factura'
              />
              <InputGroupButton className='cursor-pointer'>
                <Button size='sm' title='Buscar codigo'>
                  <Icon icon='heroicons:magnifying-glass' />
                </Button>
              </InputGroupButton>
            </InputGroup>
          </div>
          <div className='flex flex-col gap-1'>
            <Label htmlFor='bxpro'>Buscar por proveedor</Label>
            <InputGroup>
              <Input
                id='bxpro'
                type='text'
                placeholder='Buscar por proveedor'
              />
              <InputGroupButton className='cursor-pointer'>
                <Button size='sm' title='Buscar por proveedor'>
                  <Icon icon='heroicons:magnifying-glass' />
                </Button>
              </InputGroupButton>
            </InputGroup>
          </div>
          <div className='flex flex-col gap-1'>
            <Label htmlFor='formadepago'>Buscar por estado</Label>
            <Select>
              <SelectTrigger size='md'>
                <SelectValue placeholder='Estados de pagos' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='pendiente'>Pendiente</SelectItem>
                <SelectItem value='pagado'>Pagado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* START - TABLA HISTORIAL FACTURAS */}
        <div className='border border-default-300 rounded-md'>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='p-0 h-10'></TableHead>
                  <TableHead className='h-10 text-center border-l  border-default-300 text-default-600'>
                    Codigo
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                    Proveedor
                  </TableHead>
                  <TableHead className='h-10 text-center border-l border-default-300  text-default-600'>
                    Tipo de compra
                  </TableHead>

                  <TableHead className='h-10 text-center  text-default-600 border-l border-default-300'>
                    Medio de pago
                  </TableHead>
                  <TableHead className='h-10 text-center  text-default-600 border-l border-default-300'>
                    Fecha
                  </TableHead>
                  <TableHead className='h-10 text-center  text-default-600 border-l border-default-300'>
                    Fecha de vencimiento
                  </TableHead>
                  <TableHead className='h-10 text-center  text-default-600 border-l border-default-300'>
                    Estado
                  </TableHead>
                  <TableHead className='h-10 text-center  text-default-600 border-l border-default-300'>
                    Opciónes
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceFetchData.map((invoice, index) => (
                  <TableRow key={invoice.id}>
                    <TableCell className='text-right text-xs p-1'>
                      {index + 1}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {invoice.invoiceNumber}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {invoice.supplier}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {invoice.purchaseType}
                    </TableCell>

                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {invoice.paymentMethod}
                    </TableCell>
                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {invoice.date}
                    </TableCell>

                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      {invoice.dueDate}
                    </TableCell>

                    <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                      <Badge
                        className='capitalize whitespace-nowrap'
                        variant='soft'
                        color={
                          invoice.paymentStatus === 'pendiente'
                            ? 'warning'
                            : 'success'
                        }>
                        {invoice.paymentStatus}
                      </Badge>
                    </TableCell>

                    <TableCell className='text-xs border-l border-default-300 p-1'>
                      <div className='flex gap-3 items-center justify-end'>
                        {invoice.paymentStatus === 'pendiente' && (
                          <Button
                            color='warning'
                            title='Abonar'
                            size='icon'
                            className='h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 dark:hover:text-primary hover:text-primary-foreground dark:hover:border-primary border'>
                            <Icon icon='prime-dollar' className='w-5 h-5' />
                          </Button>
                        )}

                        <Button
                          title='Ver detalle'
                          size='icon'
                          className='h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 dark:hover:text-primary hover:text-primary-foreground dark:hover:border-primary border'>
                          <Icon icon='heroicons:eye' className='w-5 h-5' />
                        </Button>

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
                          className='h-9 w-9 rounded bg-default-100 dark:bg-default-200 text-default-500 dark:hover:text-primary  hover:text-primary-foreground dark:hover:border-primary border'>
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
        <Pagination className='mt-8'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Card>
    </>
  )
}
