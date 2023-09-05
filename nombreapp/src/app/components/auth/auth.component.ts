import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  onRegister(username: string, email: string, password: string) {
    this.authService.register(username, email, password);
    // Puedes redirigir al usuario a la página de inicio o mostrar un mensaje de éxito
  }

  onLogin(email: string, password: string) {
    const isAuthenticated = this.authService.login(email, password);
    if (isAuthenticated) {
      // Usuario autenticado, puedes redirigir o mostrar un mensaje de éxito
    } else {
      // No se pudo autenticar, muestra un mensaje de error
    }
  }
}
