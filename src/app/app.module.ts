import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { InstitucionesComponent } from './components/instituciones/instituciones.component';
import { SedeComponent } from './components/sede/sede.component';
import { InfoGruposComponent } from './components/info-grupos/info-grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    MunicipiosComponent,
    InstitucionesComponent,
    SedeComponent,
    InfoGruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
