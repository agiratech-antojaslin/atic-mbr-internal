// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const Examiner = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'bill',
      title: 'Bills',
      type: 'item',
      url: `/medical-bills`,
      icon: 'bills',
      activeItem: [
        `/medical-bills`,
        `/medical-bills/view-bill`,
        `/medical-bills/examine-bill`,
      ],
      breadcrumbs: false,
    },
    {
      id: 'denied-bills',
      title: 'Denied Bills',
      type: 'item',
      url: `/denied-bills`,
      icon: 'deniedBills',
      activeItem: [
        '/denied-bills',
        '/denied-bills/edit-doc',
        `/denied-bills/view-bill`,
      ],
      breadcrumbs: false,
    },
    {
      id: 'accepted-bills',
      title: 'Accepted Bills',
      type: 'item',
      url: `/accepted-bills`,
      icon: 'acceptedBills',
      activeItem: ['/accepted-bills', `/accepted-bills/view-bill`],
      breadcrumbs: false,
    },
    {
      id: 'cpt-lookup',
      title: 'CPT Lookup',
      type: 'item',
      url: `/cpt-lookup`,
      icon: 'cptCalculatorIcon',
      activeItem: [`/cpt-lookup`],
      breadcrumbs: false,
    },
    // {
    //   id: 'administration',
    //   title: 'Administration',
    //   type: 'item',
    //   url: `/administration/user-management`,
    //   icon: 'administrationIcon',
    //   activeItem: [`/administration`, `/administration/user-management`],
    //   children: [
    //     {
    //       id: 'user-management',
    //       title: 'User Management',
    //       type: 'item',
    //       url: `/user-management`,
    //       icon: 'cptCalculatorIcon',
    //       activeItem: [`/administration/user-management`],
    //       breadcrumbs: false,
    //     },
    //   ],
    //   breadcrumbs: false,
    // },
    // {
    //   id: 'user-management',
    //   title: 'User Management',
    //   type: 'item',
    //   url: `/administration/user-management`,
    //   icon: 'administrationIcon',
    //   activeItem: [`/administration/user-management`],
    //   breadcrumbs: false,
    // },
    // {
    //   id: 'more',
    //   title: 'More',
    //   type: 'item',
    //   icon: 'moreIcon',
    //   url: '',
    //   children: [
    //     {
    //       id: 'administration',
    //       title: 'Administration',
    //       type: 'item',
    //       url: `/administration`,
    //       icon: 'administrationIcon',
    //       activeItem: [`/administration`],
    //       children: [
    //         {
    //           id: 'user-management',
    //           title: 'User Management',
    //           type: 'item',
    //           url: `/user-management`,
    //           icon: 'cptCalculatorIcon',
    //           activeItem: [`/administration/user-management`],
    //           breadcrumbs: false,
    //         },
    //       ],
    //       breadcrumbs: false,
    //     },
    //   ],
    //   breadcrumbs: false,
    // },
  ],
}

export default Examiner
