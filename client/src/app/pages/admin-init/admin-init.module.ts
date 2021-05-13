import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminInitPageRoutingModule } from './admin-init-routing.module';

import { AdminInitPage } from './admin-init.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminInitPageRoutingModule
  ],
  declarations: [AdminInitPage]
})
export class AdminInitPageModule {}
