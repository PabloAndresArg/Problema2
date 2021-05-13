import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BtnBackComponent } from './btn-back/btn-back.component';

import {RegistroComponent} from './registro/registro.component';
import {HeaderAdminComponent} from './header-admin/header-admin.component';


@NgModule({// aca simpre declaramos e exportamos los componentes
  declarations: [
   BtnBackComponent,
   HeaderAdminComponent,
   RegistroComponent
   
  ],
  exports: [
    BtnBackComponent,
    HeaderAdminComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]// agrego el modulo para usar cosas de ionic
})
export class ComponentesModule { }
