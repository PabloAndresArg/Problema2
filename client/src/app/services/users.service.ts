import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { Encuesta, PosibleRespuesta, Pregunta, User } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
  }

  public getAllEncuestas(){
    return this.http.get<any[]>(`${this.url}/back/encuestas/all`);
  }

  public getAllPreguntasPorEncuesta(id){
    return this.http.get<any[]>(`${this.url}/back/preguntas/allPreguntasEncuesta/${id}`);
  }

  public getAllRespuestasPorPregunta(id){
    return this.http.get<any[]>(`${this.url}/back/preguntas/allRespuestaPorPregunta/${id}`);
  }

  public getAllRespuestasEncuesta(id){
    return this.http.get<any[]>(`${this.url}/back/preguntas/getAllRespuestasEncuesta/${id}`);
  }


  public GuardarRespuesta(username: any , cantidad_aciertos:any  , cantidad_fallos: any , id_pregunta: any ){ 

    return this.http.post(`${this.url}/back/ClienteRespuesta/save` ,{username: username ,cantidad_aciertos:cantidad_aciertos , cantidad_fallos: cantidad_fallos  ,id_pregunta : id_pregunta  } );
  }


 




}
