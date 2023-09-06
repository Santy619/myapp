import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConductorData } from '../../modules/ConductorData'; // Importa la interfaz ConductorData
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {
  conductorData: ConductorData = {} as ConductorData;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params['conductorData']) {
        this.conductorData = JSON.parse(params['conductorData']) as ConductorData;
        // Reemplaza 'YourTypeHere' con el tipo real de conductorData
      }
    });
  }

  irAPlanearViaje() {
    // Lógica para redirigir a la página de planear viaje
  }
  
  irAChat() {
    console.log('Navegando a la página de chat');
    this.router.navigate(['/chat']); // Navega a la página de chat
  }
}