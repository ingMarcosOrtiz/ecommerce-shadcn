import React from 'react'

import Card from '@/components/ui/card-snippet'

interface Props {
  trans: {
    EnterInvoicePageTranslate?: {
      [key: string]: string // Flexibilidad en las claves
    }
    [key: string]: any // Permite otras propiedades
  }
}

export default function EnterInvoicePageView({ trans }: Props) {
  return (
    <>
      <Card title={trans?.EnterInvoicePageTranslate?.title}>
        <h1>Factura {trans?.EnterInvoicePageTranslate?.title}</h1>
      </Card>
    </>
  )
}
