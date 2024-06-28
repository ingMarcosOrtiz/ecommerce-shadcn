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
        title: 'Entrada',
        icon: Entry,
        href: '/dashboard',
        child: [
          {
            title: 'Nuevo producto',
            href: '/dashboard/products',
            icon: Graph,
          },
          {
            title: 'Ingresar Factura',
            href: '/dashboard/enter-invoice',
            icon: Cart,
          },
        ],
      },
      {
        title: 'Salida',
        icon: Exit,
        href: '/dashboard',
        child: [
          {
            title: 'Facturar ventas',
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
            title: 'Productos',
            href: '/dashboard/#',
            icon: Graph,
          },
          {
            title: 'Bodega',
            href: '#',
            icon: Cart,
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
            title: 'Pedidos',
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
            title: 'Entradas',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Salidas',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Inventario',
            href: '/dashboard/ecommerce',
            icon: Cart,
          },
          {
            title: 'Bodega',
            href: '#',
            icon: Cart,
          },
        ],
      },
      {
        title: 'Configuración',
        icon: Settings,
        href: '/dashboard',
        child: [
          {
            title: 'Proveedores',
            href: '#',
            icon: Graph,
          },
          {
            title: 'Marcas',
            href: '/dashboard/#',
            icon: Cart,
          },
          {
            title: 'Catagorias  productos ',
            href: '/dashboard/#',
            icon: ClipBoard,
          },

          {
            title: 'Usuarios',
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
