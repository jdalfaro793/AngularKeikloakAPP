import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MODULES } from './modules';

@Component({
  selector: 'app-sidebar',
  standalone: true, 
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  modules = MODULES; // Importar la configuración de módulos

}
