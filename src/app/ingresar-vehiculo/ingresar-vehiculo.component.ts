import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../vehiculo.service';


@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css']
})

export class IngresarVehiculoComponent implements OnInit {

  @Output() header = new EventEmitter();

  vehiculoModel = new Vehiculo();
  titulo: String;
  mensaje: String;
  mostrarMensaje: boolean;
  mensajeExitoso: boolean;
  tipoVehiculoMoto : number = 1;
  tipoVehiculoCarro : number = 2;
  recargar : number = 1;

  constructor(
    private vehiculoService: VehiculoService
  ) {
    
  }

  ngOnInit() {
  }

  onSubmit()
  {
    this.mostrarMensaje = true;
    this.titulo = "Procesando Petición";

    this.vehiculoService.ingresarVehiculo(this.vehiculoModel).subscribe(
      res => {
        this.titulo = "Exitoso";
        this.mensaje = "El Vehículo "+ this.vehiculoModel.placa +" ingresó al parqueadero exitosamente";
        this.mensajeExitoso = true;
        this.vehiculoModel = new Vehiculo();
        this.recargarListadoParqueos();
      },
      err => {
        this.titulo = "Atención";
        this.mensaje = err.text();
        this.mensajeExitoso = false;
      }
    )
  }

  ocultarMensaje()
  {
    this.mostrarMensaje = false;
  }

  recargarListadoParqueos()
  {
    this.header.emit(this.recargar++);
  }
}
