import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
//import { Pregunta, PreguntaActual, PreguntaEstricto } from 'src/app/Interfaces/interfaces';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

  @Input() pregunta: any;

  constructor(private modalCtrl: ModalController, private service: UsersService) { }

  
  ngOnInit() {
    console.log(this.pregunta)
    alert(this.pregunta.id)
    this.service.getAllRespuestasPorPregunta(this.pregunta.id).subscribe(
     res=>{
       console.log(res);
     },err=>{console.log(err)}
   )

  }

  confirmaRespuestas(formulario: NgForm) {


  }

  salirConArgumentos() {
    // antes de salir puedo mandar a guardar todo

    // primero guardo la pregunta

    this.modalCtrl.dismiss({
      ok: 'TODO BIEN'
    });
  }
  alertMessage(Titulo, mensaje, icono = 'error') {
    if (icono == "error") {
      Swal.fire({
        title: Titulo,
        text: mensaje,
        icon: 'error',
        timer: 1500,
        showConfirmButton: false
      })
    } else {
      Swal.fire({
        title: Titulo,
        text: mensaje,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      })
    }


  }

}
