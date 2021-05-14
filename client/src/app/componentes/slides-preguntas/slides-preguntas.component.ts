import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pregunta, PreguntaActual, Respuesta } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-slides-preguntas',
  templateUrl: './slides-preguntas.component.html',
  styleUrls: ['./slides-preguntas.component.scss'],
})
export class SlidesPreguntasComponent implements OnInit {
  @Input() preguntas: Pregunta[] =[];
  respuestas:Respuesta[] = [];
  slideOpts ={
    slidesPerView: 3.3 // para que muestre un poco del otro
    , 
    freeMode: true
  }
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: string){
/*
    const modal = this.modalCtrl.create(
      {
        component:DetalleComponent,
        componentProps:{ // esto se lo manda al hijo 

          id: id
        }
      }
  );

    (await modal).present();


  */
  }


}
