import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.page.html',
  styleUrls: ['./logros.page.scss'],
})
export class LogrosPage implements OnInit {
  encuestas: any[] = [];
  constructor(private router : Router , private service: UsersService) { }
  id_encuesta: any;
  username: any;

  logros: any[] =[];
  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.getAllEncuestas();

  }


  getAllEncuestas() {

      this.service.getAllEncuestas().subscribe(
        res => { this.encuestas = res; }, err => console.log(err)
      )

 
  }

  getLogros(){

    if (this.id_encuesta != 0 && this.id_encuesta != undefined){
    this.service.getLogrosPorEncuesta(this.username, this.id_encuesta).subscribe(
      res =>{
        this.logros = res;
        console.log("logors" , res)
        if(this.logros.length == 0 ){
          Swal.fire({
            icon:"info",
            text:"no hay registros",
            timer:1000
          }
          )
        }
      }
    )
    }
  }


  closeSession(){
    this.router.navigate(['/']);
  }

}
