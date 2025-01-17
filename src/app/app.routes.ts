import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './views/auth/auth.routes';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ForbiddenComponent } from './views/forbidden/forbidden.component';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./shared/components/admin-layouts/admin-layout.routes').then(m => m.ADMIN_LAYOUT_ROUTES)
    },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: '**', component: NotFoundComponent }
];