import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario={
    user: '',
    password: '',
  }
  constructor(private router :Router) { }

  ngOnInit() {
  }
  onSubmit(formulario: NgForm){
    console.log(formulario);// en controls estan los input con los nombre sque pusimos en el name en el html
    console.log(this.usuario);
  }

  goToSignUp(){
    this.router.navigate(['/sing-up']);
  }

}
