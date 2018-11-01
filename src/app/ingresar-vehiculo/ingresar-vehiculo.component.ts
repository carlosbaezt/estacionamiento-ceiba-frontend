import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css']
})
export class IngresarVehiculoComponent implements OnInit {

  vehiculoModel = new Vehiculo('abc123',"1",125);

  constructor() {
    this.vehiculoModel = new Vehiculo('abc123',"1",125);
  }

  ngOnInit() {
  }

}
