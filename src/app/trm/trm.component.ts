import { Component, OnInit } from '@angular/core';
import { TrmService } from '../trm.service';


@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html',
  styleUrls: ['./trm.component.css']
})
export class TrmComponent implements OnInit {
  
  mensaje: String;
  peticionExitosa: boolean;

  constructor(
    private trmService: TrmService,
  ) { }

  ngOnInit() {
    this.consultarTrm();
  }

  consultarTrm()
    {
        this.trmService.consultarTrm().subscribe(
            res => {
              var response = res.json();
              this.mensaje = "$1,0 (USD) =  $" + response.trm + " (COP)";
              this.peticionExitosa = true;
            },
            err => 
            {
              this.mensaje = "Error al obtener el TRM, por favor contacte al administrador";
              this.peticionExitosa = false;
            }
        );
    }

}