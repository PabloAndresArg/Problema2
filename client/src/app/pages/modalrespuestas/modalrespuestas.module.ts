import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalrespuestasPageRoutingModule } from './modalrespuestas-routing.module';

import { ModalrespuestasPage } from './modalrespuestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalrespuestasPageRoutingModule
  ],
  declarations: [ModalrespuestasPage]
})
export class ModalrespuestasPageModule {}
