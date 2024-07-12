'use client'
import Card from '@/components/ui/card-snippet'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ScanLine } from 'lucide-react'
// import { useTranslations } from 'next-intl'

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
      </Card>
    </>
  )
}
