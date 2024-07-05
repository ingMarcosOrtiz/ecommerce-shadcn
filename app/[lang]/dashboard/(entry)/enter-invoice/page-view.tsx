'use client'
import React, { useEffect, useState } from 'react'

import CardCustom from '@/components/ui/card-snippet'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icon } from '@iconify/react'
import { Input } from '@/components/ui/input'
import Flatpickr from 'react-flatpickr'
import { Label } from '@/components/ui/label'
import {
  CalendarDays,
  Euro,
  Plus,
  Trash2,
  Upload,
  CalendarIcon,
} from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Breadcrumbs, BreadcrumbItem } from '@/components/ui/breadcrumbs'
import { cn, formatDate } from '@/lib/utils'

import { Controller, useForm } from 'react-hook-form'
import { Calendar } from '@/components/ui/calendar'

// import { es } from 'date-fns/locale'
import { format } from 'date-fns'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { es } from 'date-fns/locale/es'
import BasicInputGroup from '@/components/ui/input2/basic-input-group'
import {
  InputGroup,
  InputGroupButton,
  InputGroupText,
} from '@/components/ui/input-group'
import { CleaveInput } from '@/components/ui/cleave'
registerLocale('es', es)

interface Props {
  trans: {
    EnterInvoicePageTranslate?: {
      [key: string]: string // Flexibilidad en las claves
    }
    [key: string]: any // Permite otras propiedades
  }
}

const schema = z.object({
  title: z.string().min(3, { message: 'Required' }),
})

export default function EnterInvoicePageView({ trans }: Props) {
  const [date, setDate] = useState<Date[]>([])
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [startDate2, setStartDate2] = useState<Date>(new Date())

  const {
    register,
    control,
    reset,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'all',
  })

  return (
    <>
      <div className='p-5 bg-card rounded-lg'>
        <div className='invoice-wrapper mt-6 '>
          <div className='grid grid-cols-12 gap-6'>
            <Card className='col-span-12  '>
              <CardHeader className='sm:flex-row sm:items-center gap-3'>
                <div className='flex-1 text-xl font-medium text-default-700 whitespace-nowrap'>
                  Factura de Proveedor
                </div>
                <div className='flex-none flex items-center gap-4'>
                  {/* <Button>
                    Save As PDF{' '}
                    <Icon
                      icon='heroicons:document-text'
                      className='w-5 h-5 ltr:ml-2 rtl:mr-2'
                    />
                  </Button> */}
                  <Button
                    title='Imprimir'
                    className='border-default-300 group'
                    size='icon'
                    variant='outline'>
                    <Icon
                      icon='heroicons:printer'
                      className='w-5 h-5 text-default-300 group-hover:text-default-50 dark:group-hover:text-primary-foreground'
                    />
                  </Button>
                  <Button
                    className='border-default-300 group'
                    size='icon'
                    variant='outline'>
                    <Icon
                      icon='heroicons:arrow-path'
                      className='w-5 h-5 text-default-300 group-hover:text-default-50 dark:group-hover:text-primary-foreground'
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='nit'>Nit</Label>

                    <InputGroup>
                      <Input size='lg' type='text' placeholder='Buscar Nit' />
                      <InputGroupButton className='cursor-pointer'>
                        <Button
                          title='Buscar proveedor'
                          onClick={() => alert('Buscar proveedor')}>
                          <Icon icon='heroicons:magnifying-glass' />
                        </Button>
                      </InputGroupButton>
                    </InputGroup>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='nproveedor'>Nombre Proveedor</Label>

                    <div className=' text-sm text-left border  bg-background font-medium text-primary p-2    rounded-lg border-default-300 w-full h-full '>
                      <span className='uppercase'>
                        COLCHONES Y MUEBLES RELAX S.A.S
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='fullName5'>Codigo Factura</Label>
                    <Input
                      className='w-full'
                      size='lg'
                      type='text'
                      placeholder='codigo'
                      id='fullName5'
                    />
                  </div>

                  {/* <div className='flex flex-col gap-1'>
                    <Label htmlFor='state'>Proveedor</Label>
                    <Select>
                      <SelectTrigger size='lg'>
                        <SelectValue placeholder='Selecionar Proveedor' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='pino'>Pino & Pino</SelectItem>
                        <SelectItem value='relax'>Relax</SelectItem>
                        <SelectItem value='edredona'>Edredona</SelectItem>
                        <SelectItem value='tauro'>Tauro</SelectItem>
                        <SelectItem value='dario'>Dario</SelectItem>
                        <SelectItem value='espumado'>Espumado</SelectItem>
                        <SelectItem value='home'>Home Center</SelectItem>
                        <SelectItem value='chiche'>La chiche</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='formadepago'>Tipo de compra</Label>
                    <Select>
                      <SelectTrigger size='lg'>
                        <SelectValue placeholder='Selecionar tipo de compra' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='contado'>Contado</SelectItem>
                        <SelectItem value='credito'>Credito</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='formadepago'>Medio de Pago</Label>
                    <Select>
                      <SelectTrigger size='lg'>
                        <SelectValue placeholder='Selecionar medio de pago' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='caja'>Caja</SelectItem>
                        <SelectItem value='bancos'>Bancos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='startDate'>Fecha de Factura</Label>
                    <DatePicker
                      className='capitalize bg-background dark:border-700 px-3 file:border-0 file:bg-transparent file:text-sm file:font-medium read-only:bg-background disabled:cursor-not-allowed disabled:opacity-50 transition duration-300 border-default-300 text-default-500 focus:outline-none focus:border-primary disabled:bg-default-200 placeholder:text-accent-foreground/50 border rounded-lg h-10 text-sm read-only:leading-10 w-full cursor-pointer'
                      selected={startDate2}
                      // dateFormat='MMMM d, yyyy h:mm aa'
                      dateFormat='MMMM d, yyyy'
                      locale={'es'}
                      onChange={(date: Date | null) => {
                        if (date !== null) {
                          setStartDate2(date)
                        }
                      }}
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    {/* <Label className='text-default-600' htmlFor='fullName5'>
                      Fecha de Vencimiento */}
                    {/* {date.length > 0 && (
                        // <p>Fecha seleccionada: {date[0].toDateString()}</p>
                        <p>
                          {format(date[0], "EEEE dd 'de' MMMM 'de' yyyy", {
                            locale: es,
                          })}
                        </p>
                        // <p>Fecha para guardar en bd:  {date[0].toISOString().split('T')[0]}</p>
                      )} */}
                    {/* </Label> */}

                    {/* ********* */}

                    {/* <Label htmlFor='startDate' className='text-default-600'>
                      Fecha de Vencimiento
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          className={cn(
                            'w-full justify-between text-left font-normal border-default-200 text-default-600',
                            !startDate && 'text-muted-foreground'
                          )}>
                          {startDate ? (
                            formatDate(startDate)
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='h-4 w-4 ' />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0'>
                        <Controller
                          name='startDate'
                          control={control}
                          render={({ field }) => (
                            <Calendar
                              mode='single'
                              selected={startDate}
                              onSelect={(date) => setStartDate(date as Date)}
                              initialFocus
                            />
                          )}
                        />
                      </PopoverContent>
                    </Popover> */}

                    {/* ****** */}
                    <Label htmlFor='startDate'>Fecha de Vencimiento</Label>
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
                    {/* <div className='relative'>
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
                        value={date}
                        onChange={
                          (selectedDates: Date[]) => setDate(selectedDates)
                          // console.log('fecha', selectedDates)
                        }
                        className='w-full border border-default-300 bg-background text-default-500  focus:outline-none h-10 rounded-md px-2 placeholder:text-default-500'
                        placeholder='fecha'
                      />
                      <Icon
                        icon='heroicons:calendar-days'
                        className='w-5 h-5 absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 text-default-400 '
                      />
                    </div> */}

                    {/* {date.length > 0 && (
                      <span className='text-default-600 text-[10px]'>
                        {format(date[0], "EEEE dd 'de' MMMM 'de' yyyy", {
                          locale: es,
                        })}
                      </span>
                    )} */}

                    {/* <div>
                      <Label
                        htmlFor='priority'
                        className='mb-1.5 text-default-600'>
                        Due Date
                      </Label>

                      <div className='relative'>
                        <Input placeholder='Select Date' />

                        <CalendarDays className='w-4 h-4 text-default-400 absolute top-1/2 right-2 -translate-y-1/2' />
                        <div
                          className={cn(
                            'absolute bottom-10 left-0 w-[300px] bg-background z-20 hidden',
                            {
                              block: openDate,
                            }
                          )}></div>
                      </div>
                    </div> */}
                  </div>
                  {/* <div className='flex flex-col gap-1'>
                    <Label htmlFor='estado'>Estado</Label>
                    <Select>
                      <SelectTrigger size='lg'>
                        <SelectValue placeholder='Selecionar Estado' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='crdito'>Aprobado</SelectItem>
                        <SelectItem value='devolucion'>Devolucion</SelectItem>
                        <SelectItem value='anulado'>Anulado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}

                  {/* <div className='flex flex-col gap-1'>
                    <Label htmlFor='costoenvio'>Costo Total de envio</Label>

                    <InputGroup>
                      <InputGroupText className='px-1'>
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
                  </div> */}

                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='costoenvio'>Subir Archivo factura</Label>
                    <Input
                      className='cursor-pointer'
                      size='lg'
                      type='file'
                      variant='flat'
                    />
                  </div>
                  {/* <div className='flex flex-col gap-1'>
                    <Label htmlFor='cProductos'>Cantidad Total Productos</Label>
                    <Input
                      className='w-full'
                      size='lg'
                      type='text'
                      placeholder='total de productos'
                      id='cProductos'
                    />
                  </div> */}
                </div>
                {/* <div className='mt-8 flex justify-between flex-wrap gap-4'>
                  <div className='w-full 2xl:max-w-[400px] space-y-2'>
                    <div className='text-base font-semibold text-default-800 pb-1'>
                      Billing From:
                    </div>
                    <Input type='text' placeholder='Company Name' />
                    <Input type='email' placeholder='Company Email' />
                    <Input type='number' placeholder='Company Phone No' />
                    <Textarea placeholder='Comapny Address' />
                  </div>
                  <div className='w-full 2xl:max-w-[400px] space-y-2'>
                    <div className='text-base font-semibold text-default-800 pb-1'>
                      Billing To:
                    </div>
                    <Input type='text' placeholder='Customer Name' />
                    <Input type='email' placeholder='Customer Email' />
                    <Input type='number' placeholder='Customer Phone No' />
                    <Textarea placeholder='Customer Address' />
                  </div>
                </div> */}
                <section className='mt-9'>
                  <Button className='text-xs whitespace-nowrap'>
                    <Icon
                      icon='heroicons:magnifying-glass'
                      className='w-5 h-5 ltr:mr-2 rtl:ml-2'
                    />
                    Buscar Productos
                  </Button>
                </section>
                <div className='border border-default-300 rounded-md mt-9'>
                  <div className='overflow-x-auto'>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className='text-default-600 uppercase'>
                            Codigo
                          </TableHead>
                          <TableHead className='text-default-600 uppercase'>
                            Productos
                          </TableHead>

                          <TableHead className='text-default-600 uppercase '>
                            Iva %
                          </TableHead>

                          <TableHead className='text-default-600 uppercase'>
                            Cant
                          </TableHead>

                          <TableHead className='text-default-600 uppercase whitespace-nowrap'>
                            Precio Unit.
                          </TableHead>

                          {/* <TableHead className='text-default-600 uppercase '>
                            Envio
                          </TableHead> */}

                          <TableHead className='text-default-600 uppercase whitespace-nowrap'>
                            Valor Iva
                          </TableHead>

                          <TableHead className='text-default-600 uppercase whitespace-nowrap'>
                            Total
                          </TableHead>

                          {/* <TableHead className='text-default-600 uppercase '></TableHead> */}
                        </TableRow>
                      </TableHeader>
                      <TableBody className='[&_tr:last-child]:border-1 '>
                        <TableRow>
                          <TableCell className='max-w-[100px] text-[10px] overflow-hidden break-words'>
                            1982459989
                          </TableCell>
                          <TableCell className='  lowercase'>
                            COLCHON CARIBBEAN PRIDE 100X190
                          </TableCell>
                          <TableCell>
                            <Input
                              className='text-start w-[50px] font-medium text-default-900 rounded '
                              type='text'
                              placeholder='0'
                            />
                          </TableCell>
                          <TableCell>
                            <Input
                              placeholder='0'
                              type='number'
                              className='w-[65px] text-default-900 appearance-none accent-transparent rounded font-medium'
                            />
                          </TableCell>
                          <TableCell>
                            {/* <Input
                              placeholder='0'
                              className='text-start font-medium  text-default-900 rounded w-[120px]'
                            /> */}
                            <CleaveInput
                              className='text-start h-[35px] font-medium  text-default-900 rounded w-[120px]'
                              id='nu'
                              options={{
                                numeral: true,
                                delimiter: ',',
                                blocks: [3, 3, 3],
                              }}
                              placeholder='precio'
                            />
                          </TableCell>
                          {/* <TableCell className='whitespace-nowrap'>
                            $ 2,625
                          </TableCell> */}
                          <TableCell className='whitespace-nowrap'>
                            $ 148.165
                          </TableCell>

                          <TableCell className='whitespace-nowrap text-right'>
                            <div className='flex items-center justify-center gap-2'>
                              $ 779,820
                              <Trash2 className='w-4 h-4 text-warning' />
                            </div>
                          </TableCell>

                          {/* <TableCell>
                            <Trash2 className='w-4 h-4 text-warning' />
                          </TableCell> */}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className='flex flex-col justify-end sm:flex-row gap-4 py-5 px-6'>
                    {/* add invoice */}
                    {/* <div className='flex-1'>
                      <Button className='text-xs whitespace-nowrap'>
                        {' '}
                        <Plus className='w-5 h-5 ltr:mr-2 rtl:ml-2' /> Add
                        Invoice Item{' '}
                      </Button>
                    </div> */}
                    {/* invoice info */}
                    <div className='flex-none flex flex-col sm:items-end gap-y-2'>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Sub Total:
                        </div>

                        <div className='text-sm text-right border bg-default-100  p-2 font-medium  text-default-700 rounded w-full sm:w-[148px]'>
                          $ 779.820
                        </div>
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Iva 19%
                        </div>
                        <div className='text-sm text-right  border bg-default-100  p-2 font-medium  text-default-700 rounded w-full sm:w-[148px]'>
                          $ 148.165
                        </div>
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Total
                        </div>

                        <div className='text-sm text-right border bg-default-100  p-2 font-medium  text-default-700 rounded w-full sm:w-[148px]'>
                          <span>$ 927.985</span>
                        </div>
                        {/* <Input
                          disabled
                          defaultValue='$ 927.985'
                          className='text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]'
                        /> */}
                      </div>
                      {/* <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Coupon Discount:
                        </div>
                        <div className='w-full sm:w-[148px] flex'>
                          <Input
                            className=' text-xs font-medium  text-default-900 appearance-none accent-transparent rounded ltr:rounded-r-none rtl:rounded-l-none rtl:border-l-0  ltr:border-r-0'
                            type='number'
                            defaultValue='34.36'
                          />
                          <Select>
                            <SelectTrigger className='w-14 rounded ltr:rounded-l-none rtl:rounded-r-none h-9 pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1'>
                              <SelectValue placeholder='$' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='$'>$</SelectItem>
                              <SelectItem value='eur'>
                                <Euro className='w-3 h-3' />
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Tax:
                        </div>
                        <div className='w-full sm:w-[148px] flex'>
                          <Input
                            className=' text-xs font-medium  text-default-900 appearance-none accent-transparent rounded ltr:rounded-r-none rtl:rounded-l-none rtl:border-l-0  ltr:border-r-0'
                            type='number'
                            defaultValue='0.82'
                          />
                          <Select>
                            <SelectTrigger className='w-14 rounded ltr:rounded-l-none rtl:rounded-r-none h-9 pr-1 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:mt-1'>
                              <SelectValue placeholder='%' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='%'>%</SelectItem>
                              <SelectItem value='flat'>$</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Shipping:
                        </div>
                        <Input
                          defaultValue='$14.12'
                          className='text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]'
                        />
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Due Till Date:
                        </div>
                        <Input
                          defaultValue='$0.00'
                          className='text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]'
                        />
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Total:
                        </div>
                        <Input
                          defaultValue='$1243.00'
                          className='text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]'
                        />
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Amount Paid:
                        </div>
                        <Input
                          defaultValue='$1000.00'
                          className='text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]'
                        />
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Balance Due:
                        </div>
                        <Input
                          defaultValue='$243.00'
                          className='text-xs font-medium  text-default-900 rounded w-full sm:w-[148px]'
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mt-6'>
                  <div>
                    <Label
                      htmlFor='note'
                      className='text-sm font-medium text-default-600 mb-1'>
                      Nota:
                    </Label>
                    <Textarea
                      id='note'
                      className='rounded h-10'
                      placeholder='agregar alguina nota...'
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor='terms'
                      className='text-sm font-medium text-default-600 mb-1'>
                      Términos y Condiciones:
                    </Label>
                    <Textarea
                      id='terms'
                      className='rounded h-10'
                      placeholder='agregar términos y condiciones...'
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className='flex-wrap justify-end gap-4'>
                <Button color='primary'>
                  <Icon
                    icon='heroicons:paper-airplane'
                    className='w-5 h-5 ltr:mr-2 rtl:ml-2 group-hover:text-default-900'
                  />
                  Guardar factura
                </Button>
              </CardFooter>
            </Card>
            {/* <div className='col-span-12 xl:col-span-4'>
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-3'>
                      <Checkbox
                        defaultChecked
                        id='bank'
                        className='border-default-300'>
                        {' '}
                        Bank Account
                      </Checkbox>
                      <Checkbox id='paypal' className='border-default-300'>
                        {' '}
                        Paypal
                      </Checkbox>
                      <Checkbox id='credit' className='border-default-300'>
                        {' '}
                        Credit/Debit Card
                      </Checkbox>
                      <Checkbox id='transfer' className='border-default-300'>
                        {' '}
                        UPI Transfer
                      </Checkbox>
                      <Checkbox id='cod' className='border-default-300'>
                        {' '}
                        Cash On Delivery (COD)
                      </Checkbox>
                    </div>
                    <div className='mt-6'>
                      <Label
                        htmlFor='name'
                        className='mb-2 text-xs font-medium text-default-600'>
                        Card Holder Name:
                      </Label>
                      <Input type='text' id='name' placeholder='Enter name' />
                    </div>
                    <div className='mt-3'>
                      <Label
                        htmlFor='cardNumber'
                        className='mb-2 text-xs font-medium text-default-600'>
                        Card Number:
                      </Label>
                      <Input
                        type='number'
                        id='cardNumber'
                        placeholder='Enter Card Number'
                      />
                    </div>
                    <Alert
                      color='warning'
                      variant='soft'
                      className='mt-6 border border-orange-300'>
                      <AlertDescription>
                        Please make sure to pay the invoice bill within 20 to 30
                        days before it expires.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
