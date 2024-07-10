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
import { toast } from 'sonner'

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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

registerLocale('es', es)

interface Props {
  trans: {
    EnterInvoicePageTranslate?: {
      [key: string]: string // Flexibilidad en las claves
    }
    [key: string]: any // Permite otras propiedades
  }
}

const productsArray = [
  {
    cod: '11',
    product: 'COLCHON CARIBBEAN PRIDE GENERICO GENERICO 100X190',
    categoria: 'Colchones',
  },
  {
    cod: '198245',
    product: 'COLCHON CARIBBEAN PRIDE GENERICO GENERICO 140X190',
    categoria: 'Colchones',
  },
  {
    cod: '12907',
    product: 'COLCHON RESORTADO GENERICO GENERICO 140X190',
    categoria: 'Colchones',
  },
  {
    cod: '13096',
    product: 'COLCHON RESORTADO GENERICO GENERICO 100X190',
    categoria: 'Colchones',
  },
]

interface ProductList {
  code: string
  name: string
  quantity?: number
  unitPrice?: number
  tax?: number
  taxValue?: number
  totalPrice?: number
  isEditing?: boolean
}

export default function EnterInvoicePageView({ trans }: Props) {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [startDate2, setStartDate2] = useState<Date>(new Date())
  const [productList, setProductList] = useState<ProductList[]>([])
  const [subtotal, setSubtotal] = useState<number>(0)
  const [iva, setIva] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    calculateTotals()
  }, [productList])

  const calculateTotals = () => {
    let newSubtotal = 0
    let newIva = 0

    productList.forEach((item) => {
      newSubtotal += item.totalPrice || 0
      newIva += item.taxValue || 0
    })

    setSubtotal(newSubtotal)
    setIva(newIva)
    setTotal(newSubtotal + newIva)
  }

  const handleEditItem = (index: number) => {
    const newProductList = [...productList]
    newProductList[index].isEditing = !newProductList[index].isEditing
    setProductList(newProductList)
  }

  const handleInputChange = (
    index: number,
    field: keyof ProductList,
    event: React.ChangeEvent<HTMLInputElement> | number
  ) => {
    const newProductList = [...productList]

    let value: number
    if (typeof event === 'number') {
      value = event
    } else {
      value = parseFloat(event.target.value)
    }

    newProductList[index] = {
      ...newProductList[index],
      [field]: value,
    }

    if (['quantity', 'unitPrice', 'tax'].includes(field)) {
      const quantity = newProductList[index].quantity || 0
      const unitPrice = newProductList[index].unitPrice || 0
      const tax = newProductList[index].tax || 0

      newProductList[index].totalPrice = quantity * unitPrice
      newProductList[index].taxValue = Math.ceil(
        unitPrice * (tax / 100) * quantity
      )
    }

    setProductList(newProductList)
  }

  const handleDeleteItem = (index: number) => {
    const newProductList = [...productList]
    newProductList.splice(index, 1)
    setProductList(newProductList)
  }

  const handleAddItem = (code: string, name: string) => {
    // values por default
    const newItem: ProductList = {
      code,
      name,
      quantity: 0,
      unitPrice: 0,
      tax: 0,
      taxValue: 0,
      totalPrice: 0,
    }

    // Verificar si el código ya existe
    if (productList.some((item) => item.code === newItem.code)) {
      toast.error('El código de producto ya está en uso.', {
        position: 'top-right',
      })

      return
    }

    // Agregar el nuevo producto
    setProductList([...productList, newItem])
  }

  const formatNumber = (number: number = 0): string => {
    return number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

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
                  </div>

                  <div className='flex flex-col gap-1'>
                    <Label htmlFor='costoenvio'>Subir Archivo factura</Label>
                    <Input
                      className='cursor-pointer'
                      size='lg'
                      type='file'
                      variant='flat'
                    />
                  </div>
                </div>

                {/* START - MODAL */}
                <section className='mt-9'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className='text-xs whitespace-nowrap'>
                        <Icon
                          icon='heroicons:magnifying-glass'
                          className='w-5 h-5 ltr:mr-2 rtl:ml-2'
                        />
                        Buscar Productos
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      // className='top-2 translate-y-0'
                      size='4xl'
                      overlayClass='backdrop-blur-3 bg-default-400/40'>
                      <DialogHeader>
                        <DialogTitle className='text-base text-center capitalize border-b-2 py-1 font-medium text-default-700 '>
                          BUSCAR PRODUCTOS
                        </DialogTitle>
                      </DialogHeader>

                      <section className='mt-4'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                          <div className='flex flex-col gap-1'>
                            <Label htmlFor='bcp'>Buscar por codigo</Label>
                            <InputGroup>
                              <Input
                                id='bcp'
                                type='text'
                                placeholder='Buscar por codigo producto'
                              />
                              <InputGroupButton className='cursor-pointer'>
                                <Button
                                  size='sm'
                                  title='Buscar producto'
                                  onClick={() => alert('Buscar producto')}>
                                  <Icon icon='heroicons:magnifying-glass' />
                                </Button>
                              </InputGroupButton>
                            </InputGroup>
                          </div>

                          <div className='flex flex-col gap-1'>
                            <Label htmlFor='bxnp'>Buscar por nombre</Label>

                            <InputGroup>
                              <Input
                                id='bxnp'
                                type='text'
                                placeholder='Buscar por nombre producto'
                              />
                              <InputGroupButton className='cursor-pointer'>
                                <Button
                                  size='sm'
                                  title='Buscar producto'
                                  onClick={() => alert('Buscar producto')}>
                                  <Icon icon='heroicons:magnifying-glass' />
                                </Button>
                              </InputGroupButton>
                            </InputGroup>
                          </div>
                        </div>
                      </section>

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
                                  Productos
                                </TableHead>
                                <TableHead className='h-10 text-center border-l border-default-300  text-default-600'>
                                  Categoria
                                </TableHead>

                                <TableHead className='h-10 text-center  text-default-600 border-l border-default-300'>
                                  Agregar
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {productsArray.map((product, index) => (
                                <TableRow key={product.cod}>
                                  <TableCell className='text-right text-xs p-1'>
                                    {index + 1}
                                  </TableCell>
                                  <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                                    {product.cod}
                                  </TableCell>
                                  <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                                    {product.product}
                                  </TableCell>
                                  <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                                    {product.categoria}
                                  </TableCell>

                                  <TableCell className='text-xs border-l border-default-300 p-1'>
                                    <div className='text-center'>
                                      <Button
                                        onClick={() =>
                                          handleAddItem(
                                            product.cod,
                                            product.product
                                          )
                                        }
                                        title='Agregar'
                                        size='icon'
                                        // variant='outline'
                                        className='h-6 w-6'
                                        color='success'>
                                        <Icon
                                          icon='heroicons:plus'
                                          className=' h-4 w-4  '
                                        />
                                      </Button>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>

                      <DialogFooter className='mt-8'>
                        <DialogClose asChild>
                          <Button type='submit' variant='outline'>
                            Cancelar
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </section>
                {/* END - MODAL */}

                <div className='border border-default-300 rounded-md mt-9'>
                  {/* START TABLA-PRODUCTO */}
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

                          <TableHead className='text-default-600 uppercas min-w-[100px]'>
                            Cant
                          </TableHead>

                          <TableHead className='text-default-600 uppercase whitespace-nowrap min-w-[150px] '>
                            Precio Unit.
                          </TableHead>

                          <TableHead className='text-default-600 uppercase min-w-[100px]'>
                            Iva %
                          </TableHead>

                          <TableHead className='text-default-600 uppercase whitespace-nowrap'>
                            Valor Iva
                          </TableHead>

                          <TableHead className='text-default-600 uppercase whitespace-nowrap'>
                            Total
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className='[&_tr:last-child]:border-1 '>
                        {productList.map((item, index) => (
                          <TableRow key={item.code}>
                            <TableCell className='max-w-[100px] text-[10px] overflow-hidden break-words'>
                              {item.code}
                            </TableCell>
                            <TableCell className='lowercase'>
                              {item.name}
                            </TableCell>
                            <TableCell>
                              {item.isEditing ? (
                                <Input
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleInputChange(index, 'quantity', e)
                                  }
                                  placeholder='0'
                                  min={0}
                                  type='number'
                                  className='w-[65px] text-default-900 appearance-none accent-transparent rounded font-medium'
                                />
                              ) : (
                                <div>{item.quantity}</div>
                              )}
                            </TableCell>
                            <TableCell>
                              {item.isEditing ? (
                                <CleaveInput
                                  value={item.unitPrice}
                                  className='text-start h-[35px] font-medium text-default-900 rounded w-[120px]'
                                  onChange={(e) =>
                                    handleInputChange(
                                      index,
                                      'unitPrice',
                                      parseFloat(
                                        e.target.value.replace(/,/g, '')
                                      )
                                    )
                                  }
                                  options={{
                                    numeral: true,
                                    numeralThousandsGroupStyle: 'thousand',
                                  }}
                                  placeholder='precio'
                                />
                              ) : (
                                <div>$ {formatNumber(item.unitPrice)}</div>
                              )}
                            </TableCell>
                            <TableCell>
                              {item.isEditing ? (
                                <Input
                                  value={item.tax}
                                  className='text-start w-[60px] font-medium text-default-900 rounded'
                                  onChange={(e) =>
                                    handleInputChange(index, 'tax', e)
                                  }
                                  min={0}
                                  type='number'
                                  placeholder='0'
                                />
                              ) : (
                                <div>{item.tax}%</div>
                              )}
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                              <span>$ {formatNumber(item.taxValue)}</span>
                            </TableCell>
                            <TableCell className='whitespace-nowrap text-right'>
                              <div className='flex items-center justify-center gap-2'>
                                <span>$ {formatNumber(item.totalPrice)}</span>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        onClick={() => handleEditItem(index)}
                                        size='icon'
                                        variant='outline'
                                        className=' h-6 w-6'
                                        color='success'>
                                        <Icon
                                          icon='heroicons:pencil'
                                          className='h-4 w-4'
                                        />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent color='success'>
                                      <p>Editar</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        onClick={() => handleDeleteItem(index)}
                                        variant='outline'
                                        color='destructive'
                                        className=' h-6 w-6'
                                        size='icon'>
                                        <Trash2 className='w-4 h-4 ' />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent color='destructive'>
                                      <p>Estás seguro de eliminar ?</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {/* END TABLA-PRODUCTO */}
                  <div className='flex flex-col justify-end sm:flex-row gap-4 py-5 px-6'>
                    {/* invoice info */}
                    <div className='flex-none flex flex-col sm:items-end gap-y-2'>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Sub Total:
                        </div>

                        <div className='text-sm text-right border bg-default-100  p-2 font-medium  text-default-700 rounded w-full sm:w-[148px]'>
                          {/* acá se debe mostrar el rusultado de la suma total de toda la columna "Total" */}
                          $ {formatNumber(subtotal)}
                        </div>
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Iva 19%
                        </div>
                        <div className='text-sm text-right  border bg-default-100  p-2 font-medium  text-default-700 rounded w-full sm:w-[148px]'>
                          {/* acá se debe mostrar el rusultado de la suma total de toda la columna "Valor Iva" */}
                          $ {formatNumber(iva)}
                        </div>
                      </div>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3'>
                        <div className='text-sm font-medium text-default-600'>
                          Total
                        </div>

                        <div className='text-sm text-right border bg-default-100  p-2 font-medium  text-default-700 rounded w-full sm:w-[148px]'>
                          {/* acá se debe mostrar el rusultado de la total, es decir del valor del subtotal mas iva */}
                          <span>$ {formatNumber(total)}</span>
                        </div>
                      </div>
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
          </div>
        </div>
      </div>
    </>
  )
}
