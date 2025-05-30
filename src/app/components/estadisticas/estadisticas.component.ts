/*
1.En el archivo juego.interface.ts
2.En el archivo filtros.componet.ts
3.Se configura en @angular/common/http
*/

/*
1.No tiene un App.module.ts
2. Usar BehaviorSubjetc
*/

import { Component } from '@angular/core';
import { JuegosDataService } from '../../services/juegos-data.service';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

}
