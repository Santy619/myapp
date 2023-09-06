import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  private map!: GoogleMap;

  constructor(private platform: Platform, private ngZone: NgZone, private googleMaps: GoogleMaps) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    const mapOptions = {
      camera: {
        target: new LatLng(0, 0), // Coordenadas iniciales del mapa
        zoom: 14, // Zoom inicial
      },
    };

    this.map = this.googleMaps.create(this.mapElement.nativeElement, mapOptions);

    // Escucha el evento 'MAP_READY' para realizar acciones cuando el mapa está listo
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.ngZone.run(() => {
        // Puedes agregar marcadores, polígonos, rutas, etc., aquí
      });
    });
  }
}