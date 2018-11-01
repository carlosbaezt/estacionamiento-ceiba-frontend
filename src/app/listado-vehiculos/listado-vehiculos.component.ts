import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { ListadoParqueo } from '../models/listado-parqueo';

@Component({
    selector: 'app-listado-vehiculos',
    templateUrl: './listado-vehiculos.component.html',
    styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {

    listadoParqueos: ListadoParqueo[];

    constructor(private vehiculoService: VehiculoService) { }

    ngOnInit() {
        this.vehiculoService.obtenerVehiculosParqueados().subscribe(
            data => {
                this.listadoParqueos = data;
                console.log(this.listadoParqueos);
            }
        );
    }
}