import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {
  baseUrl: string = 'https://www.php.engenius.com.co/DatabaseIE.php';


  constructor(private httpClient: HttpClient) { }


  getMunicipios(): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8'
      })
    }
    const body = {
      'User': 'etraining',
      'Password': 'explorandoando2020%',
      'option': 'municipios'
    }
    return this.httpClient.post<any>(this.baseUrl,body, httpOptions).toPromise();
  }

  getInstituciones(pMunicipioDane): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8'
      })
    }
    const body = {
      'User': 'etraining',
      'Password': 'explorandoando2020%',
      'option': 'instituciones',
      'CodMun': pMunicipioDane
    }
    return this.httpClient.post<any>(this.baseUrl,body, httpOptions).toPromise();
  }

  getSede(pInstitucionDane): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8'
      })
    }
    const body = {
      'User': 'etraining',
      'Password': 'explorandoando2020%',
      'option': 'sedes',
      'CodInst': pInstitucionDane
    }
    return this.httpClient.post<any>(this.baseUrl,body, httpOptions).toPromise();
  }

  getInfoGrupos(pSedeDane): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8'
      })
    }
    const body = {
      'User': 'etraining',
      'Password': 'explorandoando2020%',
      'option': 'grupos',
      'CodSede': pSedeDane
    }
    return this.httpClient.post<any>(this.baseUrl,body, httpOptions).toPromise();
  }
  getInfoCompletaGrupos(pIdGrupo): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8'
      })
    }
    const body = {
      'User': 'etraining',
      'Password': 'explorandoando2020%',
      'option': 'infoGrupo',
      'IdGrupo': pIdGrupo
    }
    return this.httpClient.post<any>(this.baseUrl,body, httpOptions).toPromise();
  }

}
