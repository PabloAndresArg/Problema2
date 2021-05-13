import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BtnBackComponent } from '../btn-back/btn-back.component';



@NgModule({// aca simpre declaramos e exportamos los componentes
  declarations: [
   BtnBackComponent
  ],
  exports: [
    BtnBackComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]// agrego el modulo para usar cosas de ionic
})
export class ComponentesModule { }
