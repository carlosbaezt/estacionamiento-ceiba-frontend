import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css']
})
export class IngresarVehiculoComponent implements OnInit {

  vehiculoModel = new Vehiculo();
  constructor() {
    
  }

  ngOnInit() {
  }
}
