import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { ListadoParqueo } from '../models/listado-parqueo';

@Component({
    selector: 'app-listado-vehiculos',
    templateUrl: './listado-vehiculos.component.html',
    styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit,OnChanges {

    @Input() recargarListado: string;

    listadoParqueos: ListadoParqueo[];

    constructor(private vehiculoService: VehiculoService) { }

    ngOnInit() {
        this.cargarListadoParqueos();
    }
    
    ngOnChanges(){
        this.cargarListadoParqueos();
    }

    cargarListadoParqueos()
    {
        this.vehiculoService.obtenerVehiculosParqueados().subscribe(
            data => {
                this.listadoParqueos = data;
                console.log(this.listadoParqueos);
            }
        );
    }
}