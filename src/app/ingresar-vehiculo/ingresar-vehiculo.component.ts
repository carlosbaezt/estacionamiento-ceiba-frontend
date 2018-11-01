import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css']
})
export class IngresarVehiculoComponent implements OnInit {

  vehiculoModel = new Vehiculo();
  constructor(
    private vehiculoService: VehiculoService
  ) {
    
  }

  ngOnInit() {
  }

  onSubmit()
  {
    this.vehiculoService.ingresarVehiculo(this.vehiculoModel).subscribe(
      res => {
        console.log(res);
        this.vehiculoModel = new Vehiculo();
      },
      err => {
        console.log("Error occured");
      }
    )
  }
}
