import { Premio } from './../models/premio';
// import { Premio } from '../models/premio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlAPI = "http://academico3.rj.senac.br/olimpiada/api/premio";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/Json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PremioService{

  constructor(private httpClient: HttpClient) { }

  obterTodos():Observable<Premio[]>{
    return this.httpClient.get<Premio[]>(urlAPI, httpOptions);
  }
  ver(idPremio: number): Observable<Premio>{
    return this.httpClient.get<Premio>(urlAPI+"/"+ idPremio, httpOptions);
  }

  criar(premio: Premio):Observable<Premio>{
    return this.httpClient.post<Premio>(urlAPI, premio, httpOptions)
  }

  editar(idPremio: number, premio: Premio):Observable<Premio>{
    return this.httpClient.put<Premio>(urlAPI+ "/"+ idPremio, premio, httpOptions);
  }

  apagar(idPremio: number): Observable<any>{
    return this.httpClient.delete(urlAPI+"/"+idPremio, httpOptions)
  }
}
