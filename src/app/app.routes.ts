import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './views/auth/auth.routes';

export const routes: Routes = [


    {
        path: '',
        loadChildren: () => import('./views/auth/auth.routes').then(m => m.AUTH_ROUTES)
        
    },

    {
        path: '',
        loadChildren: () => import('./shared/components/admin-layouts/admin-layout.routes').then(m => m.ADMIN_LAYOUT_ROUTES)

    },
    {
        path:'**',
        redirectTo:''
    }

];