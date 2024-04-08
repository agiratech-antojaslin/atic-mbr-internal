// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const Admin = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: `/dashboard`,
      icon: 'bills',
      activeItem: [`/dashboard`],
      breadcrumbs: false,
    },
    {
      id: 'aaa-cases',
      title: 'AAA Cases',
      type: 'item',
      url: `/aaa-cases`,
      icon: 'deniedBills',
      activeItem: [],
      breadcrumbs: false,
    },
    {
      id: 'documents',
      title: 'Documents',
      type: 'item',
      url: `/documents`,
      icon: 'acceptedBills',
      activeItem: [],
      breadcrumbs: false,
    },
    {
      id: 'calendar',
      title: 'Calendar',
      type: 'item',
      url: `/calendar`,
      icon: 'cptCalculatorIcon',
      activeItem: [],
      breadcrumbs: false,
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: `/reports`,
      icon: 'administrationIcon',
      activeItem: [],
      breadcrumbs: false,
    },
  ],
}

export default Admin
