import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages = [
    { title: 'Inicio', url: '/home' },
    { title: 'Iniciar Sesión', url: '/login' },
    { title: 'Nosotros', url: '/nosotros' },
    // Agregar más páginas aquí 
  ];

  constructor() {}
}
