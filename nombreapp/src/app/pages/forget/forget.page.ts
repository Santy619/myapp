import { Component } from '@angular/core';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage {
  email: string = ''; // Inicializa la propiedad
  
  constructor() {}

  onSubmit() {
    // Implementa la lógica para enviar el correo de restablecimiento aquí
  }
}
