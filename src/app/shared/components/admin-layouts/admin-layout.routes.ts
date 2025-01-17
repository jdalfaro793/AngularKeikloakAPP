import { Routes } from "@angular/router";
 import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from "../../../views/dashboard/dashboard.component";
 
export const ADMIN_LAYOUT_ROUTES: Routes = [
 {
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      }

      //TODAS LAS RUTAS QUE SEGUIRAN 
    ]
  },
];