import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitucionesService } from 'src/app/services/instituciones.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {
  daneInstitucion: string;
  arrSedes: any[];
  cargando: boolean;

  constructor(routerA: ActivatedRoute,
    private institucionesService: InstitucionesService,
    private router: Router,
    private location: Location) {
    this.daneInstitucion= routerA.snapshot.paramMap.get('valor');
    this.cargando = true;
   }

  ngOnInit(): void {
    console.log(this.daneInstitucion);
    this.mostrarSedes();
  }


  async mostrarSedes(){
    const sedes = await this.institucionesService.getSede(this.daneInstitucion);
    this.arrSedes = sedes["data"];
    this.cargando = false;
    if(this.arrSedes.length === 0){
      this.router.navigate(['/municipios']);
    }

  }
  visualizarGrupos(pSede){
    this.router.navigate(['/info', pSede]);
  }

  volver(){
    this.location.back();
  }
}
