import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  realmRoles: string[] = [];

  keycloak = inject(Keycloak);

  constructor() {}


  async ngOnInit() {
    try {
      this.isLoggedIn = this.keycloak.authenticated || false;

      if (this.isLoggedIn) {
        const token = this.keycloak.token? this.keycloak.token : '';
        const decodedToken = JSON.parse(atob(token!.split('.')[1]));
        this.realmRoles = decodedToken.realm_access?.roles || [];

        this.realmRoles = this.realmRoles.filter((role) => role.startsWith('ROLE_'));
//        localStorage.setItem('perfiles', JSON.stringify(this.realmRoles));

      }
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
    }
  }
}
