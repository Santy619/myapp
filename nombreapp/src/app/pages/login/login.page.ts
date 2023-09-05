import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Agrega aquí la lógica para verificar el usuario y la contraseña
    // Si los datos son correctos, redirige a la página de inicio
    this.router.navigate(['/home']);
  }

  continueAsGuest() {
    // Redirige al usuario como invitado a la página de inicio
    this.router.navigate(['/home']);
  }
}