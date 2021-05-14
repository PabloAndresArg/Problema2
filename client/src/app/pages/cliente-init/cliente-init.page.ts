import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Encuesta } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/services/admin.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cliente-init',
  templateUrl: './cliente-init.page.html',
  styleUrls: ['./cliente-init.page.scss'],
})
export class ClienteInitPage implements OnInit {

  constructor(private router: Router , private service: UsersService) { }
  encuestas : any[] = [];
  nombre: string;
  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');

    this.service.getAllEncuestas().subscribe(
      res=>{
        this.encuestas =res;
      }
    )

  }

  goToCuestionario(id , encuesta){
    this.router.navigate(['/cuestionario', id , encuesta]);
  }




}
