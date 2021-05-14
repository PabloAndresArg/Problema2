import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Encuesta, Pregunta, PreguntaActual } from 'src/app/Interfaces/interfaces';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { ModalrespuestasPage } from '../modalrespuestas/modalrespuestas.page';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  encuesta: Encuesta = { nombre: '' }

  encuestas: Encuesta[] = [];

  preguntaActual: PreguntaActual = { pregunta: '', tipo_pregunta: 0 }


  constructor(private s_admin: AdminService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.getAllEncuestas();
  }


  getAllEncuestas() {
    this.s_admin.getAllEncuestas().subscribe(
      res => { this.encuestas = res; }, err => console.log(err)
    )
  }

  onSubmitCrearEncuesta(formulario: NgForm) {
    console.log(formulario);// en controls estan los input con los nombre sque pusimos en el name en el html
    console.log(this.encuesta);
    this.s_admin.crearEncuesta(this.encuesta).subscribe(res => {
      console.log(res);
      this.alertMessage("ok", "encuesta creada", "success");
      this.getAllEncuestas();
    }, err => { console.log(err); this.alertMessage("error", "encuesta") })
  }


  alertMessage(Titulo, mensaje, icono = 'error') {
    if (icono == "error") {
      Swal.fire({
        title: Titulo,
        text: mensaje,
        icon: 'error',
        timer: 1500

      })
    } else {
      Swal.fire({
        title: Titulo,
        text: mensaje,
        icon: 'success',
        timer: 1500
      })
    }
  }




  async MOSTRAR_MODAL() {
    /*
      cualquier controller que llame al create ES UNA PROMESA
    
    */
    this.preguntaActual.Respuestas = [];

    console.log("ID ENCUESTA-->", this.preguntaActual.id_encuesta)
    const modal = this.modalCtrl.create(
      {
        component: ModalrespuestasPage,
        componentProps: { // esto se lo manda al hijo 
          preguntaActual: this.preguntaActual
        }
      }
    );

    (await modal).present();


    // OBTENIENDO LA RESPUESTA
    // const {data} = await (await modal).onDidDismiss();
    const { data } = await (await modal).onWillDismiss();// se dispara no mas cierre, ES MAS RAPIDO 
    console.log('ONDID_dismiss', data);
  }













}
