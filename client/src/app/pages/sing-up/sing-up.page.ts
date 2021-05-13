import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from 'src/app/Interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  usuario:user ={
    nombre:""
    ,password:"",
    username:""
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formulario: NgForm){
    console.log(formulario);// en controls estan los input con los nombre sque pusimos en el name en el html
    console.log(this.usuario);

    if (this.usuario.password.toLocaleLowerCase() == 'admin' && this.usuario.username.toLocaleLowerCase() == 'admin'){
        this.alertMessage('ok' , 'Bienvenido Administrador' , 'success');
 
    }else{ // reviso en la base de datos
        this.alertMessage('error' , 'credenciales incorrectas')
    }
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
