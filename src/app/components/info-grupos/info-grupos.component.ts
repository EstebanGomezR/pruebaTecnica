import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitucionesService } from 'src/app/services/instituciones.service';

@Component({
  selector: 'app-info-grupos',
  templateUrl: './info-grupos.component.html',
  styleUrls: ['./info-grupos.component.css']
})
export class InfoGruposComponent implements OnInit {
  cargando: boolean;
  daneSede: string;
  arrGrupos: any[];
  arrInfoGrupos: any[];
  institucion: string;
  constructor(routerA: ActivatedRoute,
    private institucionesService: InstitucionesService,
    private location: Location,
    private router: Router) {
    this.daneSede= routerA.snapshot.paramMap.get('valor');
    this.arrInfoGrupos = [];
    this.institucion='';
    this.cargando = true;
   }

  ngOnInit(): void {
   
    this.consultarGrupos();
   
  }
  async consultarGrupos(){
    const grupos = await this.institucionesService.getInfoGrupos(this.daneSede);
    this.arrGrupos = grupos["data"];
    this.cargando = false;
    if(this.arrGrupos.length === 0){
      this.router.navigate(['/municipios']);
    }
    else{
    for (let grupo of this.arrGrupos){
      let idGrupo =  await this.institucionesService.getInfoCompletaGrupos(grupo.id);
      this.arrInfoGrupos.push(idGrupo['data'][0]);
    }
    this.institucion =  this.arrInfoGrupos[0].institución;
  }
    
  }
  volver(){
    this.location.back();
  }
}
