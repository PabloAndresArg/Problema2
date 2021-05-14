import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

//import { Encuesta, Pregunta, Respuesta, User } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
  }

  public crearUsuario(usuario: any){
    return this.http.post(`${this.url}/back/admin/crearusuario` ,usuario);
  }


  public crearEncuesta(encuesta: any){
    return this.http.post(`${this.url}/back/admin/crearEncuesta` ,encuesta);
  }

  public crearPregunta(pre: any){
    return this.http.post(`${this.url}/back/admin/crearPregunta` ,pre);
  }

  public crearRespeusta(respuesta: any){
    return this.http.post(`${this.url}/back/admin/crearRespuesta` ,respuesta);
  }
 
  public existePregunta(id_encuesta: any , pregunta:any , tipo_pregunta:any){
    return this.http.post<any[]>(`${this.url}/back/existePregunta`,{id_encuesta: id_encuesta , pregunta: pregunta , tipo_pregunta: tipo_pregunta});
  }

 


  public login(username , password){
    return this.http.get<any[]>(`${this.url}/back/login/${username}/${password}`);
  }

  public getAllEncuestas(){    
    return this.http.get<any[]>(`${this.url}/back/encuestas/all`);
  }





  public getAllPreguntas(){
    return this.http.get<any[]>(`${this.url}/back/preguntas/all`);
  }

  public getUltimaPreguntaCreada(){
    return this.http.get<any[]>(`${this.url}/back/preguntas/ultimaPregunta`);
  }








  

  

}
