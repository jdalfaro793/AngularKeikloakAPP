import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MODULES } from './modules';

@Component({
  selector: 'app-sidebar',
  standalone: true, 
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  modules = MODULES;
  expandedModule: string | null = null;
  
  toggleModule(module: any) {
    if (module.path) {
      this.router.navigate([module.path]);
    } else {
      this.expandedModule = this.expandedModule === module.label ? null : module.label;
    }
  }


}
