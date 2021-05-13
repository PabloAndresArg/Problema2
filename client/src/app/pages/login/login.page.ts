import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario={
    username: '',
    password: '',
  }
  constructor(private router :Router ) { }

  ngOnInit() {
  }
  onSubmit(formulario: NgForm){
    console.log(formulario);// en controls estan los input con los nombre sque pusimos en el name en el html
    console.log(this.usuario);

    if (this.usuario.password.toLocaleLowerCase() == 'admin' && this.usuario.username.toLocaleLowerCase() == 'admin'){
        this.alertMessage('ok' , 'Bienvenido Administrador' , 'success');
        this.router.navigate(['/tabs']);
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
