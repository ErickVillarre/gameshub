/*
1.En el archivo juego.interface.ts
2.En el archivo juegos-data.service.ts el cual es mostrado en filtros.componet.ts
3.Se configura en @angular/common/http
*/

/*
1.No tiene un App.module.ts porque usa componentes standalone 
2. Usar BehaviorSubjetc para hacer que no vuelva a cargar a pagina o volver a hacer una peticion al html  
*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosDataService } from '../../services/juegos-data.service';
import { Juego } from '../../interfaces/juego.interface';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})

export class EstadisticasComponent implements OnInit {
  juegos: Juego[] = [];
  totalJuegos: number = 0;
  juegosGratis: number = 0;
  juegosPago: number = 0;
  mejorJuego: Juego | null = null;
  promedioPrecio: number = 0;

  constructor(private juegosService: JuegosDataService) {}

  ngOnInit(): void {
    this.juegosService.obtenerJuegos().subscribe((data: Juego[]) => {
      this.juegos = data;
      this.totalJuegos = data.length;
      this.juegosGratis = data.filter(j => j.precio === 0).length;
      this.juegosPago = data.filter(j => j.precio > 0).length;
      this.mejorJuego = data.reduce((prev, curr) => (curr.rating > prev.rating ? curr : prev), data[0]);
      const precios = data.filter(j => j.precio > 0).map(j => j.precio);
      this.promedioPrecio = precios.reduce((acc, val) => acc + val, 0) / precios.length;
    });
  }
}