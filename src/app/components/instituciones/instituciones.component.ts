import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitucionesService } from 'src/app/services/instituciones.service';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.css']
})
export class InstitucionesComponent implements OnInit {

  daneMunicipio: string;
  arrInstituciones: any[];
  cargando: boolean;

  constructor(routerA: ActivatedRoute, 
    private institucionesService : InstitucionesService,
    private router: Router,
    private location: Location) {
    this.daneMunicipio= routerA.snapshot.paramMap.get('valor');
    this.cargando = true;
   }

  ngOnInit(): void {
    this.MostrarInstituciones();
  }

  async MostrarInstituciones(){
    const instituciones = await this.institucionesService.getInstituciones(this.daneMunicipio);
    this.arrInstituciones = instituciones["data"];
    this.cargando=false;
    if(this.arrInstituciones.length === 0){
      this.router.navigate(['/municipios']);
    }
  }

  visualizarSedes(pInstitucion: number){
    this.router.navigate(['/sede', pInstitucion]);

  }
  volver(){
    this.location.back();
  }

}
