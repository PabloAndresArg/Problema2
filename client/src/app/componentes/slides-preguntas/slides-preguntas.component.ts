import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  PreguntaActual} from 'src/app/Interfaces/interfaces';
import { ModalClientePage } from 'src/app/pages/modal-cliente/modal-cliente.page';

@Component({
  selector: 'app-slides-preguntas',
  templateUrl: './slides-preguntas.component.html',
  styleUrls: ['./slides-preguntas.component.scss'],
})
export class SlidesPreguntasComponent implements OnInit {
  @Input() preguntas: any[] = [];


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("ONNINIT" , this.preguntas)
  }



  async responder(i: number) {

    /*    const modal = this.modalCtrl.create(
          {
            component:ModalClientePage,
            componentProps:{ // esto se lo manda al hijo 
              pregunta: this.preguntas[i]
            }
          }
      );
    
        (await modal).present();*/
    
  }


}
