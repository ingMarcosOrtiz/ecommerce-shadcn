import EnterInvoicePageView from './page-view'
import { getDictionary } from '@/app/dictionaries'

interface DashboardProps {
  params: {
    lang: any
  }
}
const EnterInvoicePage = async ({ params: { lang } }: DashboardProps) => {
  const trans = await getDictionary(lang)

  return <EnterInvoicePageView trans={trans} />
}

export default EnterInvoicePage
