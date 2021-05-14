import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Encuesta, User } from '../Interfaces/interfaces';

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




}
