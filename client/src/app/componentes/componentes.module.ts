import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BtnBackComponent } from './btn-back/btn-back.component';


import {HeaderAdminComponent} from './header-admin/header-admin.component';


@NgModule({// aca simpre declaramos e exportamos los componentes
  declarations: [
   BtnBackComponent,
   HeaderAdminComponent,

   
  ],
  exports: [
    BtnBackComponent,
    HeaderAdminComponent,

  ],
  imports: [
    CommonModule,
    IonicModule
  ]// agrego el modulo para usar cosas de ionic
})
export class ComponentesModule { }
