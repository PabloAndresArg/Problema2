import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionarioPageRoutingModule } from './cuestionario-routing.module';

import { CuestionarioPage } from './cuestionario.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionarioPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CuestionarioPage]
})
export class CuestionarioPageModule {}
