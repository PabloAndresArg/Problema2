import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  usuario:User ={
    nombre:""
    ,password:"",
    username:""
  };
  constructor(private s_admin : AdminService , private router: Router) { }

  ngOnInit() {
    let username = localStorage.getItem('username');
    if (username.toLowerCase() != 'admin'){
      this.router.navigate(['/login']);
    }
  }
  onSubmit(formulario: NgForm){
    console.log(formulario);// en controls estan los input con los nombre sque pusimos en el name en el html
    console.log(this.usuario);

  this.s_admin.crearUsuario(this.usuario).subscribe( res =>{
    console.log(res);
    this.alertMessage("ok","usuario creado","success");
  }, err=>{ console.log(err); this.alertMessage("error","usuario repetido")})
  }


  alertMessage(Titulo , mensaje , icono ='error'){
    if (icono == "error"){
      Swal.fire({
        title: Titulo,
        text: mensaje,
        icon: 'error',
        timer: 1500

      })
    }else{
      Swal.fire({
        title: Titulo,
        text: mensaje,
        icon: 'success',
        timer: 1500
      })
    }

  
}
}
