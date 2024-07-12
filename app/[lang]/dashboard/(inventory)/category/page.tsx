'use client'
import React from 'react'
import Card from '@/components/ui/card-snippet'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const categoriesFetchData = [
  { id: 1, name: 'Camas' },
  { id: 2, name: 'Mesas' },
  { id: 3, name: 'Sillas' },
]

const subcategoriesFetchData = [
  { id: 1, category: 'Camas', name: 'Camas Individuales' },
  { id: 2, category: 'Mesas', name: 'Mesas de Comedor' },
  { id: 3, category: 'Sillas', name: 'Sillas de Oficina' },
]

export default function CategoryPage() {
  return (
    <>
      <Card title='Agregar Categoría y Subcategoría'>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            {/* Columna Izquierda: Categorías */}
            <div className='flex flex-col gap-2'>
              <Label htmlFor='categoryName'>Nombre de la Categoría</Label>
              <Input
                size='lg'
                type='text'
                placeholder='Ingresar nombre de la categoría'
                id='categoryName'
              />
              <Button
                color='default'
                className='w-full md:w-auto mt-2'
                type='button'>
                Guardar Categoría
              </Button>

              <div className='border border-default-300 rounded-md mt-6'>
                <div className='overflow-x-auto'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className='p-0 h-10'></TableHead>
                        <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                          Categoría
                        </TableHead>
                        <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                          Opciones
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {categoriesFetchData.map((category, index) => (
                        <TableRow key={category.id}>
                          <TableCell className='text-right text-xs p-1'>
                            {index + 1}
                          </TableCell>
                          <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                            {category.name}
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
                                <Icon
                                  icon='heroicons:trash'
                                  className='w-5 h-5'
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
            </div>

            {/* Columna Derecha: Subcategorías */}
            <div className='flex flex-col gap-2'>
              <Label htmlFor='categorySelect'>Seleccionar Categoría</Label>
              <Select>
                <SelectTrigger size='lg'>
                  <SelectValue placeholder='Seleccionar categoría' />
                </SelectTrigger>
                <SelectContent>
                  {categoriesFetchData.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Label htmlFor='subcategoryName' className='mt-2'>
                Nombre de la Subcategoría
              </Label>
              <Input
                size='lg'
                type='text'
                placeholder='Ingresar nombre de la subcategoría'
                id='subcategoryName'
              />

              <Button
                color='default'
                className='w-full md:w-auto mt-2'
                type='button'>
                Guardar Subcategoría
              </Button>

              <div className='border border-default-300 rounded-md mt-6'>
                <div className='overflow-x-auto'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className='p-0 h-10'></TableHead>
                        <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                          Categoría
                        </TableHead>
                        <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                          Subcategoría
                        </TableHead>
                        <TableHead className='h-10 text-center border-l border-default-300 text-default-600'>
                          Opciones
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subcategoriesFetchData.map((subcategory, index) => (
                        <TableRow key={subcategory.id}>
                          <TableCell className='text-right text-xs p-1'>
                            {index + 1}
                          </TableCell>
                          <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                            {subcategory.category}
                          </TableCell>
                          <TableCell className='text-xs border-l border-default-300 text-center p-1'>
                            {subcategory.name}
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
                                <Icon
                                  icon='heroicons:trash'
                                  className='w-5 h-5'
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
            </div>
          </div>
        </form>
      </Card>
    </>
  )
}
