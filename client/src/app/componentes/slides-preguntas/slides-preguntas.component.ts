import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PreguntaActual } from 'src/app/Interfaces/interfaces';
import { ModalClientePage } from 'src/app/pages/modal-cliente/modal-cliente.page';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-slides-preguntas',
  templateUrl: './slides-preguntas.component.html',
  styleUrls: ['./slides-preguntas.component.scss'],
})
export class SlidesPreguntasComponent implements OnInit {
  @Input() preguntas: any[] = [];
  aciertos = 0;
  fallos= 0;

  constructor(private modalCtrl: ModalController , private service : UsersService) { }

  ngOnInit() {

    for (let i = 0; i < this.preguntas.length; i++) {
      this.preguntas[i].respondida = "false";
      this.preguntas[i].resultados = false;
      this.preguntas[i].respuestaDirecta = '';
      for (let j = 0; j < this.preguntas[i].Respuestas.length; j++) {
        this.preguntas[i].Respuestas[j].seleccionado = false;
        this.preguntas[i].Respuestas[j].color = "dark";
      }
    }
    console.log("ARRAY-SLIDEES: ", this.preguntas)
  }

  cambio(respuesta) {
    respuesta.seleccionado = !respuesta.seleccionado;
    console.log("cambio", respuesta)
  }



  async responder(i: any) {
    this.alertMessage("OK" , "calificando la pregunta" , "success");
    let respuestaCorrectaDirecta = 0; 
     let msg = "";
    for (let x = 0; x < this.preguntas[i].Respuestas.length; x++) {
      if (this.preguntas[i].tipo_pregunta == 0 && this.preguntas[i].Respuestas[x].seleccionado && this.preguntas[i].Respuestas[x].respuestaCorrecta == 1) {
        this.preguntas[i].Respuestas[x].color="success"
        this.aciertos++;
      } else if (this.preguntas[i].tipo_pregunta == 0 && this.preguntas[i].Respuestas[x].seleccionado) {
        this.preguntas[i].Respuestas[x].color="danger"
        this.fallos++;
      }else if (this.preguntas[i].tipo_pregunta == 0 && !(this.preguntas[i].Respuestas[x].seleccionado)  && this.preguntas[i].Respuestas[x].respuestaCorrecta == 1) {
        this.preguntas[i].Respuestas[x].color="warning"
        //this.fallos++;
      }else if (this.preguntas[i].tipo_pregunta == 1 && this.preguntas[i].Respuestas[x].respuestaCorrecta == 1  &&
        this.preguntas[i].respuestaDirecta == this.preguntas[i].Respuestas[x].respuesta ) {
        respuestaCorrectaDirecta = 1;
        break;
  
      }else if (this.preguntas[i].tipo_pregunta == 1 && this.preguntas[i].Respuestas[x].respuestaCorrecta == 1  &&
        this.preguntas[i].respuestaDirecta != this.preguntas[i].Respuestas[x].respuesta ) {
        respuestaCorrectaDirecta = 0;
        msg =  this.preguntas[i].Respuestas[x].respuesta ;
      }
    }

    if(this.preguntas[i].tipo_pregunta == 1){
      if(respuestaCorrectaDirecta == 0 ){
        this.alertMessage(":(" , "lo siento la respuesta correcta era : "+ msg );
        this.fallos++;
      }else{
        this.aciertos++;
        this.alertMessage("OK" , "Respuesta Correcta" , "success");
      }
    }
    // GUARDO LA RESPUESTA

    this.service.GuardarRespuesta(localStorage.getItem('username') , this.aciertos , this.fallos, this.preguntas[i].ID_PRE).subscribe(
      res=>{
        console.log("SAVE",res);
      
      }, err=>console.log(err)
    )
    this.aciertos = 0;
    this.fallos= 0;

    this.preguntas[i].resultados = "true";
  }

  quitar(i:any){
    this.preguntas[i].respondida = "true";
    // BUSCAR SI QUEDA ALGUNO CON RESPONDIDA EN FALSE SINO TERMINAR EL QUIZZ
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
