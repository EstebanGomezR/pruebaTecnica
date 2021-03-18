import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoGruposComponent } from './components/info-grupos/info-grupos.component';
import { InstitucionesComponent } from './components/instituciones/instituciones.component';
import { MunicipiosComponent } from './components/municipios/municipios.component';
import { SedeComponent } from './components/sede/sede.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'municipios'},
  {path: 'municipios', component: MunicipiosComponent},
  {path: 'instituciones/:valor', component: InstitucionesComponent},
  {path: 'sede/:valor', component: SedeComponent},
  {path: 'info/:valor', component: InfoGruposComponent},
  {path: '**', redirectTo: 'municipios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
