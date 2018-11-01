import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import { Vehiculo } from './models/vehiculo';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(
    private http: Http                    
  ) { }

  ingresarVehiculo(vehiculo: Vehiculo) {
    return this.http.post(API_URL + "/vigilante/ingresarVehiculo" , vehiculo);
  }
}
