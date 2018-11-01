import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { IngresarVehiculoComponent } from './ingresar-vehiculo/ingresar-vehiculo.component';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FormsModule }   from '@angular/forms';

// Add an icon to the library for convenient access in other components
library.add(faFlagCheckered);
library.add(faCar);
library.add(faMotorcycle);

@NgModule({
  declarations: [
    AppComponent,
    IngresarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
