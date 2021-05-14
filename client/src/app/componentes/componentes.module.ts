import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BtnBackComponent } from './btn-back/btn-back.component';


import {HeaderAdminComponent} from './header-admin/header-admin.component';
import { SlidesPreguntasComponent } from './slides-preguntas/slides-preguntas.component';
import { FormsModule } from '@angular/forms';



@NgModule({// aca simpre declaramos e exportamos los componentes
  declarations: [
   BtnBackComponent,
   HeaderAdminComponent,
    SlidesPreguntasComponent
   
  ],
  exports: [
    BtnBackComponent,
    HeaderAdminComponent,
    SlidesPreguntasComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,

  ]// agrego el modulo para usar cosas de ionic
})
export class ComponentesModule { }
