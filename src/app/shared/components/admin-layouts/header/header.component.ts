import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import Keycloak from 'keycloak-js';
 

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule,  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly keycloak = inject(Keycloak);
 
  constructor() {
 
  }
  logout() {
    this.keycloak.logout();
  }
}
