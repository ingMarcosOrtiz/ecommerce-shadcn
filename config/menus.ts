import {
  DashBoard,
  Graph,
  Cart,
  ClipBoard,
  Settings,
  ListFill,
  EntradaProducto,
  Entry,
  Exit,
  Compras,
  Money,
  Money3,
} from '@/components/svg'

export interface MenuItemProps {
  title: string
  icon: any
  href?: string
  child?: MenuItemProps[]
  megaMenu?: MenuItemProps[]
  multi_menu?: MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void
}

export const menusConfig = {
  mainNav: [
    {
      title: 'blanco',
      icon: DashBoard,
      href: '/blank',
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: 'blanco2',
        icon: DashBoard,
        href: '/blank',
      },
    ],
    classic: [
      {
        isHeader: true,
        title: 'menu',
      },
      {
        title: 'Compras',
        icon: Compras,
        href: '/dashboard',
        child: [
          {
            title: 'Nueva Factura',
            href: '/dashboard/enter-invoice',
            icon: Cart,
          },
          {
            title: 'Historial Facturas',
            href: '/dashboard/#',
            icon: Graph,
          },
          {
            title: 'Proveedores',
            href: '/dashboard/#',
            icon: Graph,
          },
          {
            title: 'Facturas x pagar',
            href: '/dashboard/#',
            icon: Graph,
          },
        ],
      },
      {
        title: 'Ventas',
        icon: Money,
        href: '/dashboard',
        child: [
          {
            title: 'Clientes',
            href: '/dashboard/#',
            icon: Graph,
          },
          {
            title: 'Registrar Venta',
            href: '/dashboard/invoice-sales',
            icon: Graph,
          },
          {
            title: 'Historial Venta',
            href: '/dashboard/invoice-sales',
            icon: Graph,
          },
          {
            title: 'Plan Separe',
            href: '#',
            icon: Cart,
          },
          {
            title: 'Credito',
            href: '#',
            icon: ClipBoard,
          },
        ],
      },
      {
        title: 'Inventario',
        icon: ListFill,
        href: '/dashboard',
        child: [
          {
            title: 'Administrar Inventario',
            href: '#',
            icon: Cart,
          },

          {
            title: 'Nuevo Producto',
            href: '/dashboard/products',
            icon: Graph,
          },
          {
            title: 'Categoria Productos',
            href: '/dashboard/#',
            icon: Graph,
          },
          {
            title: 'Gastos',
            href: '/dashboard/#',
            icon: Graph,
          },
        ],
      },
      {
        title: 'Ecommerce',
        icon: Cart,
        href: '/dashboard',
        child: [
          {
            title: 'Publicidad',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Promociones',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Slider',
            href: '/dashboard/ecommerce',
            icon: Cart,
          },
          {
            title: 'Calificaciones ',
            href: '/dashboard/project',
            icon: ClipBoard,
          },
          {
            title: 'Órdenes de Compra',
            href: '/dashboard/#',
            icon: ClipBoard,
          },
        ],
      },
      {
        title: 'Reportes',
        icon: Graph,
        href: '/dashboard',
        child: [
          {
            title: 'Ventas',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Compras',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Inventario',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Gastos',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Reporte Contable',
            href: '#',
            icon: Graph,
          },
        ],
      },
      {
        title: 'Configuración',
        icon: Settings,
        href: '/dashboard',
        child: [
          {
            title: 'Perfil de usuario',
            href: '/dashboard/#',
            icon: ClipBoard,
          },
          {
            title: 'Cuentas contables',
            href: '/dashboard/#',
            icon: ClipBoard,
          },
          {
            title: 'Ajuste de la aplicacion',
            href: '/dashboard/#',
            icon: ClipBoard,
          },
        ],
      },
    ],
  },
}

export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]
