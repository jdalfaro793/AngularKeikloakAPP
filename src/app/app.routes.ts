import { Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';
import { canActivateAuthRole } from './shared/guards/auth.guard';
import { LayoutComponent } from './shared/components/admin-layouts/layout/layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { RolComponent } from './views/rol/rol.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full', 
  },
  {
    path: '',
    component: LayoutComponent, 
    canActivate: [canActivateAuthRole], 
    data: {
      roles: ['ROLE_GESTOR', 'ROLE_ADMIN', 'ROLE_USER'], 
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
        canActivate: [canActivateAuthRole], 
        data: {
          roles: ['ROLE_ADMIN'],
        },
      },
      {
        path: 'rol',
        component: RolComponent,
        canActivate: [canActivateAuthRole], 
        data: {
          roles: ['ROLE_ADMIN'],
        },
      },
    ],
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent, // Página de acceso denegado
  },
  {
    path: '**',
    component: NotFoundComponent, // Página no encontrada
  },
];
