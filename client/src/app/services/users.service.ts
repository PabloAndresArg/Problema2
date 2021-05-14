import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Encuesta, Pregunta, User } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
  }

  public getAllEncuestas(){
    return this.http.get<Encuesta[]>(`${this.url}/back/encuestas/all`);
  }

  public getAllPreguntasPorEncuesta(id){
    return this.http.get<Pregunta[]>(`${this.url}/back/preguntas/allPreguntasEncuesta/${id}`);
  }

  public getAllRespuestasEncuesta(id){
    return this.http.get<any[]>(`${this.url}/back/preguntas/allRespuestaEncuesta/${id}`);
  }




}
