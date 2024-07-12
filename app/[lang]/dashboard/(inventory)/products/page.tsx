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

export default function Productpage() {
  // const t = useTranslations('EnterInvoicePageTranslate')

  return (
    <>
      <Card title='Agregar nuevo producto'>
        <form>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='col-span-2 flex flex-row items-end justify-center gap-2 '>
              <div className='flex-col w-full'>
                <Label htmlFor='fullName5'>Codigo</Label>
                <Input
                  className='w-full'
                  size='lg'
                  type='text'
                  placeholder='codigo producto'
                  id='fullName5'
                />
              </div>
              <Button type='button' size='icon' variant={'outline'}>
                <ScanLine className=' h-6 w-6 ' />
              </Button>
            </div>
            <div className='col-span-2 md:col-span-1  flex flex-col gap-2'>
              <Label htmlFor='cinterno'>Sku</Label>
              <Input
                size='lg'
                type='text'
                placeholder='codigo interno único'
                id='cinterno'
              />
            </div>
            <div className='col-span-2  flex flex-col gap-2'>
              <Label htmlFor='nameProd'>Nombre del producto</Label>
              <Input
                size='lg'
                type='text'
                placeholder='ingresa el nombre'
                id='nameProd'
              />
            </div>
            <div className='col-span-2 md:col-span-1  flex flex-col gap-2'>
              <Label htmlFor='generarCod'>Generar Codigo de barra</Label>
              <Button
                color='default'
                // loading={false}
                className='w-full md:w-auto'
                type='button'>
                {/* <Save className='mr-2' /> */}
                Generar
              </Button>
            </div>

            {/* <div className='col-span-2 md:col-span-1 flex flex-col gap-2'>
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
            <div className='col-span-2 md:col-span-1 flex flex-col gap-2'>
              <Label htmlFor='state'>Categoria</Label>
              <Select>
                <SelectTrigger size='lg'>
                  <SelectValue placeholder='Selecionar Categoria' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='alberta'>Camas</SelectItem>
                  <SelectItem value='british'>Closets Columbia</SelectItem>
                  <SelectItem value='manitoba'>Base Camas</SelectItem>
                  <SelectItem value='brunswick'>Edredones</SelectItem>
                  <SelectItem value='ontario'>Colchas</SelectItem>
                  <SelectItem value='ontarioss'>Sabanas</SelectItem>
                  <SelectItem value='colchones'>Colchones</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='col-span-2 md:col-span-1 flex flex-col gap-2'>
              <Label htmlFor='state'>Sub categoria</Label>
              <Select>
                <SelectTrigger size='lg'>
                  <SelectValue placeholder='Selecionar Sub Categoria' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='alberta'>
                    Sencillo 100cm X 190cm
                  </SelectItem>
                  <SelectItem value='british'>
                    Semidoble 120cm X 190cm
                  </SelectItem>
                  <SelectItem value='manitoba'>Doble 140cm X 190cm</SelectItem>
                  <SelectItem value='brunswick'>Queen 160cm X 190cm</SelectItem>
                  <SelectItem value='ontario'>King 200cm X 200cm</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* <div className='col-span-2'>
              <div className='flex items-center gap-1.5'>
                <Checkbox id='term3' size='md' color='default' />
                <Label
                  htmlFor='term3'
                  className='text-base text-muted-foreground font-normal'>
                  Agree to terms and conditions
                </Label>
              </div>
            </div> */}
            <div className='col-span-2'>
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
