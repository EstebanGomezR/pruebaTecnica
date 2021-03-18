import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitucionesService } from 'src/app/services/instituciones.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {

  arrMunicipios: any[];
  cargando: boolean;
  constructor(private institucionesService: InstitucionesService,
    private router: Router
    ){
    this.arrMunicipios=[];
    this.cargando = true;
  }

  ngOnInit(): void {
    this.mostrarMunicipios();
    
  }


  async mostrarMunicipios(){
    const municipios = await this.institucionesService.getMunicipios();
    this.arrMunicipios = municipios["data"];
    this.cargando=false;

  }

  visualizarInstituciones(pMunicipioDane: number){
    this.router.navigate(['/instituciones', pMunicipioDane]);
  }

}
