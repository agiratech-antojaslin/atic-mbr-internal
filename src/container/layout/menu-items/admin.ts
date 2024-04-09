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
      icon: 'dashboard',
      activeItem: [`/dashboard`],
      breadcrumbs: false,
    },
    {
      id: 'aaa-cases',
      title: 'AAA Cases',
      type: 'item',
      url: `/aaa-cases`,
      icon: 'aaaCases',
      activeItem: [`/aaa-cases`],
      breadcrumbs: false,
    },
    {
      id: 'documents',
      title: 'Documents',
      type: 'item',
      url: `/documents`,
      icon: 'documents',
      activeItem: [`/documents`],
      breadcrumbs: false,
    },
    {
      id: 'calendar',
      title: 'Calendar',
      type: 'item',
      url: `/calendar`,
      icon: 'calendar',
      activeItem: [`calendar`],
      breadcrumbs: false,
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: `/reports`,
      icon: 'reports',
      activeItem: [`reports`],
      breadcrumbs: false,
    },
  ],
}

export default Admin
