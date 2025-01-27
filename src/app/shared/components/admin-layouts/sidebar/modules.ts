export const MODULES = [
    {
      path: 'dashboard',
      label: 'Dashboard',
    },
    {
      path: null,
      label: 'Administracion',
        child:[
        {
          path: '/usuario',
          label: 'Usuarios',
        },
        {
          path: '/rol',
          label: 'Roles',
        }
      ]
    }
  ];
  