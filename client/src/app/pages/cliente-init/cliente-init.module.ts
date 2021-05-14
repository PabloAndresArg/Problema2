import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteInitPageRoutingModule } from './cliente-init-routing.module';

import { ClienteInitPage } from './cliente-init.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteInitPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ClienteInitPage]
})
export class ClienteInitPageModule {}
