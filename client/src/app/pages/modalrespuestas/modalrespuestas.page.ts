import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
//import { Pregunta, PreguntaActual, Respuesta } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalrespuestas',
  templateUrl: './modalrespuestas.page.html',
  styleUrls: ['./modalrespuestas.page.scss'],
})
export class ModalrespuestasPage implements OnInit {
  @Input() preguntaActual: any;


  respuesta: any = { respuesta: "", respuestaCorrecta: 0 };

  isNewQuestion = true;
  id_pregunta = 0;

  constructor(private modalCtrl: ModalController, private s_admin: AdminService) { }

  ngOnInit() {
    console.log("entro: ", this.preguntaActual.tipo_pregunta);
  }

  agregarRespuesta(formulario: NgForm) {

    this.existePregunta();


    
    this.preguntaActual.Respuestas.push(this.respuesta);
  }

  existePregunta() {
    this.s_admin.existePregunta(
      this.preguntaActual.id_encuesta,
      this.preguntaActual.pregunta,
      this.preguntaActual.tipo_pregunta).subscribe(res => {
         if (res.length ==0 ){
          if (this.preguntaActual.Respuestas.length != 0) {
            let pre: any = { pregunta: this.preguntaActual.pregunta, tipo_pregunta: this.preguntaActual.tipo_pregunta, id_encuesta: this.preguntaActual.id_encuesta }
            this.s_admin.crearPregunta(pre).subscribe(
              res => {
                this.s_admin.getUltimaPreguntaCreada().subscribe(
                   res => {
                    this.id_pregunta = res[0].id;
                    console.log(res[0].id);
      
                      if (this.preguntaActual.tipo_pregunta == 1) {
                         this.s_admin.crearRespeusta({ id_pregunta: this.id_pregunta, respuesta: this.respuesta.respuesta, respuestaCorrecta: 1 }).subscribe(res => { console.log("respuesta ok") }, err => { console.log(err) })
                      } else {
                         this.s_admin.crearRespeusta({ id_pregunta: this.id_pregunta, respuesta: this.respuesta.respuesta, respuestaCorrecta: this.respuesta.respuestaCorrecta }).subscribe(res => { console.log("respuesta ok") }, err => { console.log(err) })
                      }
                      this.alertMessage("ok", "respuesta añadida", "success");
      
                  }, err => {
                    console.log("err en get ultima creada")
                  }
                )
              }, err => {
                console.log("error creando la pregunta")
              }
            )
            console.log("SAVE: ", this.preguntaActual);
          } else {
            this.alertMessage("Error", "no se creo ninguna respuesta ni pregunta");
          }
      
           return 
         }else{
          this.isNewQuestion = false;// asi lo hace una vez nada mas
          if (this.preguntaActual.tipo_pregunta == 1) {
            this.s_admin.crearRespeusta({ id_pregunta: this.id_pregunta, respuesta: this.respuesta.respuesta, respuestaCorrecta: 1 }).subscribe(res => { console.log("respuesta ok") }, err => { console.log(err) })
         } else {
            this.s_admin.crearRespeusta({ id_pregunta: this.id_pregunta, respuesta: this.respuesta.respuesta, respuestaCorrecta: this.respuesta.respuestaCorrecta }).subscribe(res => { console.log("respuesta ok") }, err => { console.log(err) })
         }
         this.alertMessage("ok", "respuesta añadida", "success");

         } 
   
      })
  }


  salirSinArgumentos() {
    this.modalCtrl.dismiss();
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
