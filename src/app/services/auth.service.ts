import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    // Implementa la lógica para verificar si el usuario está autenticado
    return !!localStorage.getItem('token'); // Ejemplo simple
  }
}