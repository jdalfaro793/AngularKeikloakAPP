import { inject, Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  keycloak = inject(Keycloak);

  constructor() {
  }

  logout(): void {
    this.keycloak.logout();
  }
}