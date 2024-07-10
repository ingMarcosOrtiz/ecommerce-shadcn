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

const productsArray = [
  {
    cod: '11',
    product: 'COLCHON CARIBBEAN PRIDE GENERICO GENERICO 100X190',
    categoria: 'Muebles Relax',
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

export default function InvoiceHistoryPage() {
  return (
    <>
      <Card title='Facturas'>
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
                          // onClick={() =>
                          //   handleAddItem(
                          //     product.cod,
                          //     product.product
                          //   )
                          // }
                          title='Agregar'
                          size='icon'
                          // variant='outline'
                          className='h-6 w-6'
                          color='success'>
                          <Icon icon='heroicons:plus' className=' h-4 w-4  ' />
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
