import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalrespuestasPage } from './modalrespuestas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalrespuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalrespuestasPageRoutingModule {}
