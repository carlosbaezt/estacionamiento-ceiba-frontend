import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { VehiculoService } from '../vehiculo.service';
import {NgForm} from '@angular/forms';


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
  mensajeExitoso: boolean = false;
  tipoVehiculoMoto : number = 1;
  tipoVehiculoCarro : number = 2;
  recargar : number = 1;

  constructor(
    private vehiculoService: VehiculoService
  ) {
    
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    this.vehiculoService.ingresarVehiculo(this.vehiculoModel).subscribe(
      res => {
        this.titulo = "Exitoso";
        this.mensaje = "El Vehículo "+ this.vehiculoModel.placa +" ingresó al parqueadero exitosamente";
        this.mensajeExitoso = true;
        form.resetForm();
        this.recargarListadoParqueos();
        this.mostrarMensaje = true;      },
      err => {
        console.log(err);
        this.titulo = "Atención";
        if(err.status == 0 || err.status == 500)
        {
          this.mensaje = "Error de conexión, por favor contacte al administrador";
        }
        else{
          this.mensaje = err.text();
        }
        this.mensajeExitoso = false;
        this.mostrarMensaje = true;
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
