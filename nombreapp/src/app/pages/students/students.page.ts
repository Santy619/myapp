import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  constructor(private router: Router) { }

  irAChat() {
    console.log('Navegando a la página de chat');
    this.router.navigate(['/chat']); // Navega a la página de chat
  }
irPerfil() {
  // Agrega aquí la lógica para navegar a la página de perfil
}

irViajes() {
  // Agrega aquí la lógica para navegar a la página de viajes
}
  ngOnInit() {
  }

}
