import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = ''; // Inicializa estas propiedades
  email: string = '';
  password: string = '';

  constructor() {}

  onSubmit() {
    // Implementa la lógica para el registro de usuario aquí
  }
}