import { Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';
import { canActivateAuthRole } from './shared/guards/auth.guard';
import { LayoutComponent } from './shared/components/admin-layouts/layout/layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/login/login.component';

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
      roles: ['GESTOR', 'ADMIN', 'USER'], 
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [canActivateAuthRole], 
        data: {
          roles: ['GESTOR'],
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
